import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  userName: string;
  email: string;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string;
}

const initialState: UserState = {
  userName: '',
  email: '',
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});
