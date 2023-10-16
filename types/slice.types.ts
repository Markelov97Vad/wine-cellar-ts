import { SerializedError } from "@reduxjs/toolkit";
import { UserType } from "./user.type";
import { Wine } from "./wine.type";

export type WineState = {
  wines: Wine[];
  currentWine: Wine;
  isLoadingCurrentWine: boolean,
  isLoadingAddWine: boolean,
  isSuccess: boolean;
  error: string | null;
};

export type UserState = {
  currentUser: UserType | null;
  isLoggedIn: boolean;
  loading: boolean;
  error?: string | null;
};

export type currentUserWineState = {
  wines: Wine[];
  loading: boolean;
  error: string | null;
}
