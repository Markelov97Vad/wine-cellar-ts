export type Wine = {
  _id?: string;
  name?: string;
  region?: string;
  grapeVariety?: string;
  colorWine?: string
  country?: string;
  typeWine?: string;
  year?: string;
  image?: string;
  rating?: number;
  comment?: string;
}

export type optionsWineType = {
  value: string;
  label: string;
  name?: string;
}