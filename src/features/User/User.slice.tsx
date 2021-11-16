import { Auth } from 'aws-amplify';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

const NEW_PASSWORD_REQUIRED = 'NEW_PASSWORD_REQUIRED';

interface LoginParameters {
  username: string;
  password: string;
}

interface ChangePasswordParameters {
  oldPassword: string;
  newPassword: string;
}

export const signIn = createAsyncThunk(
  'user/login',
  async (data: LoginParameters) => {
    const { username, password } = data;
    try {
      const user = await Auth.signIn(username, password);
      console.log('user', user);
      if (user.challengeName === NEW_PASSWORD_REQUIRED) {
        return { changePasswordRequired: true };
      } else {
        try {
          const session = await Auth.currentSession();
          const accessToken = session.getAccessToken().decodePayload();
          const idToken = session.getIdToken().decodePayload();
          const refreshToken = session.getRefreshToken().getToken();
          return { accessToken, idToken, refreshToken };
        } catch (error) {
          console.log(error);
          return { errorMessage: JSON.stringify(error) };
        }
      }
    } catch (error) {
      console.log(error);
      return { errorMessage: JSON.stringify(error) };
    }
  }
);

export const retrieveUser = createAsyncThunk('user/retrieve', async () => {
  try {
    const session = await Auth.currentSession();
    const accessToken = session.getAccessToken().decodePayload();
    const idToken = session.getIdToken().decodePayload();
    const refreshToken = session.getRefreshToken().getToken();
    return { accessToken, idToken, refreshToken };
  } catch (error) {
    return { errorMessage: JSON.stringify(error) };
  }
});

export const signOut = createAsyncThunk('user/signout', async () => {
  try {
    const result = await Auth.signOut();
    return result;
  } catch (error) {
    return { errorMessage: JSON.stringify(error) };
  }
});

export const changePassword = createAsyncThunk(
  'user/changePassword',
  async (data: ChangePasswordParameters) => {
    const { oldPassword, newPassword } = data;
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log('user', user);
      try {
        const changedPasswordResult = await Auth.changePassword(
          user,
          oldPassword,
          newPassword
        );

        console.log(changedPasswordResult);
      } catch (error) {
        console.log(error);
        return { errorMessage: JSON.stringify(error) };
      }
    } catch (error) {
      console.log(error);
      return { errorMessage: JSON.stringify(error) };
    }

    try {
      Auth.currentAuthenticatedUser()
        .then((user) => {
          Auth.changePassword(user, oldPassword, newPassword);
        })
        .then((result) => console.log(result))
        .catch((error) => console.log(error));

      return { status: true };
    } catch (error) {
      console.log(error);
      return { errorMessage: JSON.stringify(error) };
    }
  }
);

export interface UserState {
  username: string | null;
  email: string | null;
  isFetching: boolean;
  success: boolean;
  failed: boolean;
  errorMessage: string;
  changePasswordRequired?: boolean;
}

const initialState: UserState = {
  username: null,
  email: null,
  isFetching: false,
  success: false,
  failed: false,
  errorMessage: '',
  changePasswordRequired: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state: UserState) => {
      state.isFetching = true;
    },
    loginComplete: (state: UserState, action: PayloadAction) => {
      state.isFetching = false;
      console.log(action);
    },
    loginFail: (state: UserState, action: PayloadAction) => {
      state.isFetching = false;
      console.log(action);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      if (action.payload.accessToken && action.payload.idToken) {
        const username = action.payload.accessToken.username;
        const email = action.payload.idToken.email;
        state.success = true;
        state.username = username;
        state.email = email;
      } else {
        state.failed = true;
        state.errorMessage = action.payload.errorMessage || '';
        state.changePasswordRequired = action.payload.changePasswordRequired;
      }
    });
    builder.addCase(retrieveUser.fulfilled, (state, action) => {
      if (action.payload.accessToken && action.payload.idToken) {
        const username = action.payload.accessToken.username;
        const email = action.payload.idToken.email;
        state.success = true;
        state.username = username;
        state.email = email;
      } else {
        state.failed = true;
        state.errorMessage = action.payload.errorMessage || '';
      }
    });
    builder.addCase(signOut.fulfilled, (state, action) => {
      console.log('action', action);

      state.success = true;
      state.username = null;
      state.email = null;
    });
  },
});
