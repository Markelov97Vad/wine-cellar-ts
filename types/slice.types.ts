import { UserType } from "./user.type";
import { Wine } from "./wine.type";

export type WineState = {
  wines: Wine[];
  currentWine: Wine;
  isLoadingCurrentWine: boolean;
  isLoadingSetInfo: boolean;
  isSuccessCurrentWine: boolean;
  isSuccessSetInfo: boolean;
  isDropdownMenuOpen: boolean;
  error: string | null;
};

export type UserState = {
  currentUser: UserType | null;
  isLoggedIn: boolean;
  loading: boolean;
  error?: string | null;
  isSuccessRegister: boolean;
};

export type currentUserWineState = {
  wines: Wine[];
  loading: boolean;
  error: string | null;
}
