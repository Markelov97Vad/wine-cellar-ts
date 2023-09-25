'use client';
import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { stat } from 'fs';
import { UserType } from '../../../types/user.type';
import { checkAuthUser, loginUser, registerUser } from './userApi';

type UserState = {
  user: UserType | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
};

const initialState: UserState = {
  user: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(checkAuthUser.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkAuthUser.fulfilled, (state, action) => {
        state.user = (action.payload as unknown as UserType);
        state.isLoggedIn = true;
        state.error = null;
        state.loading = false;
      })
      .addCase(checkAuthUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addDefaultCase((state) => state);
  },
});
// function isError(action: AnyAction) {
//   return action.type.endsWith('rejected');
// }

export default userSlice.reducer;
