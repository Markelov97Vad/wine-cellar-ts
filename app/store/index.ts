"use client";
import { configureStore } from "@reduxjs/toolkit";
import wineReducer from './wine/wineSlice';
import userReducer from './user/userSlice';
import { getCurrentUserWines } from "./currentUserWine/reducer";

export const store = configureStore({
  reducer: {
    wines: wineReducer,
    user: userReducer,
    [getCurrentUserWines.reducerPath]: getCurrentUserWines.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(getCurrentUserWines.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;