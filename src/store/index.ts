import { configureStore } from "@reduxjs/toolkit";
import wineReducer from './wine/wineSlice'

export const store = configureStore({
  reducer: {
    wines: wineReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;