import { UserType } from "./user.type";
import { Wine } from "./wine.type";

export type WineState = {
  wines: Wine[];
  currentWine: Wine;
  loading: boolean;
  isSuccess: boolean;
  error: string | null;
};

export type UserState = {
  user: UserType | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
};

export type currentUserWineState = {
  wines: Wine[];
  loading: boolean;
  error: string | null;
}
