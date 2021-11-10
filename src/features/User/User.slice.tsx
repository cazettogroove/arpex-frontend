import { Auth } from 'aws-amplify';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface LoginParameters {
  username: string;
  password: string;
}

export const login = createAsyncThunk(
  'users/login',
  async (data: LoginParameters) => {
    const { username, password } = data;
    try {
      const user = await Auth.signIn(username, password);
      console.log(user);
      try {
        const session = await Auth.currentSession();
        const accessToken = session.getAccessToken().decodePayload();
        const idToken = session.getIdToken().decodePayload();
        const refreshToken = session.getRefreshToken().getToken();
        return { accessToken, idToken, refreshToken };
      } catch (error) {
        return { errorMessage: JSON.stringify(error) };
      }
    } catch (error) {
      return { errorMessage: JSON.stringify(error) };
    }
  }
);

export interface UserState {
  username: string;
  email: string;
  isFetching: boolean;
  success: boolean;
  failed: boolean;
  errorMessage: string;
}

const initialState: UserState = {
  username: '',
  email: '',
  isFetching: false,
  success: false,
  failed: false,
  errorMessage: '',
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
    builder.addCase(login.fulfilled, (state, action) => {
      if (action.payload.accessToken && action.payload.idToken) {
        const username = action.payload.accessToken.username;
        const email = action.payload.idToken.email;
        state.success = true;
        state.username = username;
        state.email = email;
      } else {
        state.failed = true;
        state.errorMessage = action.payload.errorMessage;
      }
    });
  },
});
