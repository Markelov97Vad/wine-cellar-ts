'use client';
import { createSlice } from '@reduxjs/toolkit';
import { UserType } from '../../../types/user.type';
import { checkAuthUser, loginUser, logout, registerUser, setUserInfo } from './userApi';
import { UserState } from '@/types/slice.types';
import Cookies from 'universal-cookie';

const initialState: UserState = {
  currentUser: null,
  isLoggedIn: false,
  loading: false,
  error: null,
  isSuccessRegister: false,
};

// const cookies = new Cookies();

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleSuccess(state) {
      state.isSuccessRegister = !state.isSuccessRegister;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isSuccessRegister = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.loading = false;
        state.error = null;
        state.isSuccessRegister = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isSuccessRegister = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.currentUser = action.payload.newUser;
        state.loading = false;
        state.error = null;
        state.isLoggedIn = true;
        // cookies.set("jwt", action.payload.token, {
        //   // httpOnly: true,
        //   sameSite: 'none',
        //   // secure: true,
        //   maxAge: 3600000 * 24 * 7,
        // })
        // let cookieFake = cookies.get("jwt")
        // console.log('cookieFake', cookieFake);

      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;

      })
      .addCase(checkAuthUser.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.isSuccessRegister = false;
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
      .addCase(setUserInfo.pending,(state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(setUserInfo.fulfilled,(state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(setUserInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.currentUser = null;
        state.isLoggedIn = false;
        // cookies.remove("jwt")
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addDefaultCase((state) => state);
  },
});

export default userSlice.reducer;
export const { toggleSuccess } = userSlice.actions;
