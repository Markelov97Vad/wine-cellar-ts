import { AnyAction, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addNewWine, getWines } from "./wineApi";
import { Wine } from "../../types/wine.type";

type WineState = {
  wines: Wine[],
  loading: boolean,
  error: string | null
}

const initialState: WineState = {
  wines: [],
  loading: false,
  error: null
}

const wineSlice = createSlice({
  name: 'wines',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // когда делаю запрос
      .addCase(getWines.pending, (state) => {
        state.loading = true;
        state.error = null
      })
      // если все хорошо
      .addCase(getWines.fulfilled, (state, action) => {
        state.wines = action.payload;
        state.loading = false;
      })
      .addCase(getWines.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string);
      })
      .addCase(addNewWine.pending, (state, action) => {
        state.loading = true;
        state.error = null
      })
      .addCase(addNewWine.fulfilled, (state, action) => {
        state.wines.push(action.payload);
      })
      .addCase(addNewWine.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string);
      })
      // перевод в статус ошибки
      // .addMatcher(isError, (state, action: PayloadAction<string>) => {
      //   console.log(action.payload);
      //   state.error = action.payload;
      //   state.loading = false;
      // });
  }
})

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

export default wineSlice.reducer;