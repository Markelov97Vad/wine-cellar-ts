"use client";
import { configureStore } from "@reduxjs/toolkit";
import wineReducer from './wine/wineSlice';
import userReducer from './user/userSlice';
import { WinesQuery } from "./wine-query/reducer";
// import { getCurrentUserWines } from "./currentUserWine/reducer";

export const store = configureStore({
  reducer: {
    wines: wineReducer,
    user: userReducer,
    [WinesQuery.reducerPath]: WinesQuery.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(WinesQuery.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
