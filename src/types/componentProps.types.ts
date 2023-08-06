import { ChangeEvent } from "react";
import { Wine } from "./wine.type";

export type NavigationLinkProfileType = {
  to: string;
}

export type InputAddWineType = {
  name: string;
  type: string;
  placeholder: string;
  min?: undefined | number;
  max?: undefined | number;
  margin?: undefined | boolean;
  value: string | undefined;
  handleChange: (event : ChangeEvent<HTMLInputElement>) => void;
}

export type addWineComponentType = {
  handleAddWine: (newWine: Wine) => void
}

export type FormComponentType = {
  handleSubmit: (newWine: Wine) => void
}