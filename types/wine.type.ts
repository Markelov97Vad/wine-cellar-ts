import { UserType } from "./user.type";

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
  brand?: string
  rating?: number;
  comment?: string;
  owner?: UserType
  likes?: UserType[]
}

export type optionsWineType = {
  value: string;
  label: string;
  name?: string;
}