import { ChangeEvent, ReactNode } from "react";
import { Wine } from "./wine.type";
import { UserType } from "./user.type";

export type NavigationLinkProfileType = {
  to: string;
}

export type RootTypeProps = {
  children: ReactNode
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
  'surname' |
  'region' |
  'brand' |
  'country' |
  'year' |
  'image';

export type validationConfigModificationKeyProps =
  'email' |
  'nameUser' |
  'surname';

export type validationConfigDataProps = {
  pattern: RegExp;
  validationError: string;
  emptyError: string;
};

export type ButtonSubmitFormProps = {
  extraClass?: string;
  text: string;
  disabled?: boolean;
}

export type ButtonCrossProps = {
  extraClass?: string;
  handleClick: () => void;
  light?: boolean;
  dark?: boolean;
}

export type ButtonLikeProps = {
  handleClick: () => void;
  isLiked?: boolean;
  extraClass?: string;
}

export type CrossIconProps = {
  dark?: boolean;
  light?: boolean;
}

export type CheckboxTypeProps = {
  checked: boolean;
  id: string;
  name: string;
  text: string;
  handleChangeCheckbox: (evt: ChangeEvent<HTMLInputElement>) => void;
}

export type ButtonTypeProps = {
  text: string;
  extraClass?: string;
  onClick?: () => void;
}

export type NotificationPopupTypeProps  = {
  isNotificationPopupOpen: boolean;
  setIsNotificationPopupOpen: (value: boolean) => void;
}

export type NotificationPopupImageTypeProps = {
  id: string;
  isNotificationSetImageOpen: boolean;
  setIsNotificationSetImageOpen: (value: boolean) => void;
}

export type BurgerMenuTypePops = {
  handleOpenDropdownMenu: () => void ;
  light?: boolean;
  extraClass?: string;
}

export type FilterTypeProps = {
  data: {
    id: string;
    text: string
  }[];
  name: string;
  isLibraryPage: boolean;
  isMyCollectionPage: boolean;
  handleChangeCheckbox: (evt: ChangeEvent<HTMLInputElement>) => void;
}

export type FooterForLaptopTypeProps = {
  data: {
    logo: ReactNode;
    href: string;
  }[]
}
export type FooterForMobileTypeProps = {
  data: {
    logo: ReactNode;
    href: string;
  }[]
}

export type CommentTypeProps = {
  comment: string;
  owner?: UserType;
}

export  type SignFormTypeProps = {
  register?: boolean;
};

export type WineCardListProps = {
  wines: Wine[];
  isLoading: boolean;
}

export type WineLibraryProps = {
  wines?: Wine[];
  isLoading: boolean;
}
