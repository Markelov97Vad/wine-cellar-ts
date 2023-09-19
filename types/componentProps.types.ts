import { ChangeEvent } from "react";
import { Wine } from "./wine.type";

export type NavigationLinkProfileType = {
  to: string;
}

export type InputFormType = {
  name: string;
  type: string;
  placeholder: string;
  location: string;
  min?: number;
  max?: number;
  margin?: boolean;
  value?: string;
  handleChange: (event : ChangeEvent<HTMLInputElement>) => void;
}

export type addWineComponentType = {
  handleAddWine: (newWine: Wine) => void
}

export type FormComponentType = {
  handleSubmit: (newWine: Wine) => void
}