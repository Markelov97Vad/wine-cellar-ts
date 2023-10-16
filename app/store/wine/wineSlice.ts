'use client';
import { AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { addNewWine, getCurrentWine, getWines } from './wineApi';
import { WineState } from '@/types/slice.types';
import { Wine } from '@/types/wine.type';

const initialState: WineState = {
  wines: [],
  currentWine: {},
  isLoadingCurrentWine: false,
  isLoadingAddWine: false,
  isSuccess: false,
  error: null,
};

const wineSlice = createSlice({
  name: 'wines',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      // // когда делаю запрос
      // .addCase(getWines.pending, (state) => {
      //   state.isSuccess = false;
      //   state.loading = true;
      //   state.error = null;
      // })
      // // если все хорошо
      // .addCase(getWines.fulfilled, (state, action) => {
      //   state.wines = action.payload;
      //   state.loading = false;
      // })
      // // если ошибка
      // .addCase(getWines.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.payload as string;
      // })
      .addCase(addNewWine.pending, (state, action) => {
        state.isLoadingAddWine = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(addNewWine.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoadingAddWine = false;
        state.wines.push(action.payload);
      })
      .addCase(addNewWine.rejected, (state, action) => {
        state.isLoadingAddWine = false;
        state.error = action.payload as string;
      })
      .addCase(getCurrentWine.pending, (state, action) => {
        state.isLoadingCurrentWine = true;
        state.error = null;
      })
      .addCase(getCurrentWine.fulfilled, (state, action) => {
        state.currentWine = action.payload;
      })
      .addCase(getCurrentWine.rejected, (state, action) => {
        state.isLoadingCurrentWine = false;
        state.error = action.payload as string;
      })
      .addDefaultCase((state) => state);
  },
});

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

export default wineSlice.reducer;
// export const {addFavorite, deleteFavorite} = wineSlice.actions;
