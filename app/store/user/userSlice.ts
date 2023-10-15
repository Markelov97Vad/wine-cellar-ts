'use client';
import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { stat } from 'fs';
import { UserType } from '../../../types/user.type';
import { checkAuthUser, loginUser, registerUser, setUserInfo } from './userApi';
import { useRouter } from 'next/router';
import { UserState } from '@/types/slice.types';

const initialState: UserState = {
  currentUser: null,
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
        state.currentUser = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
        state.error = null;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;

      })
      .addCase(checkAuthUser.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkAuthUser.fulfilled, (state, action) => {
        state.currentUser = (action.payload as unknown as UserType);
        state.isLoggedIn = true;
        state.error = null;
        state.loading = false;
      })
      .addCase(checkAuthUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isLoggedIn = false
      })
      .addCase(setUserInfo.pending,(state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setUserInfo.fulfilled,(state, action) => {
        state.loading = false;
        console.log(action.payload);

        state.currentUser = action.payload;
      })
      .addCase(setUserInfo.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addDefaultCase((state) => state);
  },
});
// function isError(action: AnyAction) {
//   return action.type.endsWith('rejected');
// }

export default userSlice.reducer;
