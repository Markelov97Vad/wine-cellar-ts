'use client';
import { AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getCurrentWine, setWineInfo } from './wineApi';
import { WineState } from '@/types/slice.types';
import { Wine } from '@/types/wine.type';

const initialState: WineState = {
  wines: [],
  currentWine: {},
  isLoadingCurrentWine: false,
  isLoadingSetInfo: false,
  isSuccessCurrentWine: false,
  isSuccessSetInfo: false,
  isDropdownMenuOpen: false,
  error: null,
};

const wineSlice = createSlice({
  name: 'wines',
  initialState,
  reducers: {
    toggleDropdown(state) {
      state.isDropdownMenuOpen = !state.isDropdownMenuOpen;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentWine.pending, (state, action) => {
        state.isLoadingCurrentWine = true;
        state.error = null;
        state.isSuccessCurrentWine = false;
      })
      .addCase(getCurrentWine.fulfilled, (state, action) => {
        state.isSuccessCurrentWine = true;
        state.currentWine = action.payload;
      })
      .addCase(getCurrentWine.rejected, (state, action) => {
        state.isLoadingCurrentWine = false;
        state.error = action.payload as string;
        state.isSuccessCurrentWine = false;
      })
      .addCase(setWineInfo.pending, (state) => {
        state.isSuccessSetInfo = false,
        state.isLoadingSetInfo = true;
        state.error = null;
      })
      .addCase(setWineInfo.fulfilled, (state) => {
        state.isLoadingSetInfo = false;
        state.isSuccessSetInfo = true;
      })
      .addCase(setWineInfo.rejected, (state, action) => {
        state.isLoadingSetInfo = false;
        state.error = action.payload as string;
        state.isSuccessSetInfo = false;
      })
      .addDefaultCase((state) => state);
  },
});

export default wineSlice.reducer;
export const { toggleDropdown } = wineSlice.actions;
