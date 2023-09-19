import { configureStore } from "@reduxjs/toolkit";
import wineReducer from './wine/wineSlice';
import userReducer from './user/userSlice';

export const store = configureStore({
  reducer: {
    wines: wineReducer,
    user: userReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;