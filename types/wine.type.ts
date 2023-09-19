export type Wine = {
  name?: string;
  region?: string;
  grapeVariety?: string;
  country?: string;
  typeWine?: string;
  year?: string;
  image?: string;
  reiting?: number;
  comment?: string;
}

export type optionsWineType = {
  value: string;
  label: string;
  name?: string;
}