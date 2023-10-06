import { ChangeEvent, MouseEventHandler } from "react";
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
  error?: string
  required: boolean
  handleChange: (event : ChangeEvent<HTMLInputElement>) => void;
}

export type addWineComponentType = {
  handleAddWine: (newWine: Wine) => void
}

export type FormComponentType = {
  handleSubmit: (newWine: Wine) => void
}

type ItemsType = {
  label: string;
  href: string;
}

export type NavigationType = {
  items: ItemsType[]
};

export type validationConfigKeyProps = 'name' |
  'email' |
  'password' |
  'nameUser' |
  'region' |
  'brand' |
  'country' |
  'year' |
  'image';

export type validationConfigDataProps = {
  pattern: RegExp;
  validationError: string;
  emptyError: string;
};

export type ButtonSubmitFormProps = {
  extraClass?: string;
  text: string;
  disabled?: boolean
}

export type ButtonCrossProps = {
  extraClass?: string;
  handleClick: () => void;
}