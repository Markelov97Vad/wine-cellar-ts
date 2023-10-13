export type InputValuesType = {
  name?: string;
  surname?: string
  colorWine?: string;
  grapeVariety?: string;
  country?: string;
  typeWine?: string;
  year?: string;
  image?: string;
  comment?: string;
  nameUser?: string;
  email?: string;
  password?: string;
  brand?: string;
  region?: string;
}

export type ErrorMessageType = {
  [index: string]: string;
}

export type OptionType = {
  value: string;
  label: string;
  name?: string
}

export type CheckboxsType = {
  dry?: string;
  semisweet?: string;
  semidry?: string;
  sweet?: string;
  dessert?: string;
  red?: string;
  white?: string;
  rose?: string;
  sparkling?: string;
}
