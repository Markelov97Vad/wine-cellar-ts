import { ChangeEvent } from "react";

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