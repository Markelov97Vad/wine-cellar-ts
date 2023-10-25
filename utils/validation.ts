import { validationConfigDataProps, validationConfigKeyProps, validationConfigModificationKeyProps } from "@/types/componentProps.types";

export const validationConfig: Record<validationConfigKeyProps, validationConfigDataProps> = {
  'nameUser': {
      pattern: /^([a-zA-Zа-яА-ЯёЁ-]{2,30})+[a-zA-Zа-яА-ЯёЁ -]*$/,
      validationError: 'Имя должно быть от 2 до 30 символов, может содержать пробел или дефис',
      emptyError: 'Заполните это поле',
  },
  'surname': {
    pattern: /^([a-zA-Zа-яА-ЯёЁ-]{2,30})*$/,
    validationError: 'Некорректные данные',
    emptyError: 'Заполните это поле',
  },
  'email': {
    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    validationError: 'Email введен некорректно',
    emptyError: 'Заполните это поле',
  },
  'password': {
    pattern: /^(?=.*?[a-z])(?=.*?[0-9]).{2,}$/,
    validationError: 'Пароль должен содержать хотя бы одну цифру и минимум 2 символа',
    emptyError: 'Заполните это поле',
  },
  'name': {
    pattern: /^([a-zA-Zа-яА-ЯёЁ -]{2,30})*$/,
    validationError: 'Некорректные данные',
    emptyError: 'Заполните это поле',
  },
  'region': {
    pattern: /^([a-zA-Zа-яА-ЯёЁ -]{2,30})*$/,
    validationError: 'Некорректные данные',
    emptyError: 'Заполните это поле',
  },
  'brand': {
    pattern: /^([a-zA-Zа-яА-ЯёЁ -]{2,30})*$/,
    validationError: 'Некорректные данные',
    emptyError: 'Заполните это поле',
  },
  'country' : {
    pattern: /^([a-zA-Zа-яА-ЯёЁ -]{2,30})*$/,
    validationError: 'Некорректные данные',
    emptyError: 'Заполните это поле',
  },
  'year' : {
    pattern: /^[0-9]*$/,
    validationError: 'Некорректные данные',
    emptyError: 'Заполните это поле',
  },
  'image': {
    // pattern: /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/,
    pattern: /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?.(jpeg|jpg|gif|png|webp)$/,
    validationError: 'Некорректный URL адресс, он должен оканчиваться на .jpeg | jpg | gif | png | webp',
    emptyError: 'Заполните это поле',
  },
}

export const validationConfigModification:Record<validationConfigModificationKeyProps, validationConfigDataProps> = {
  'nameUser': {
    pattern: /^([a-zA-Zа-яА-ЯёЁ-]{2,30})*$/,
    validationError: 'Некорректные данные',
    emptyError: 'Заполните это поле',
  },
  'surname': {
    pattern: /^([a-zA-Zа-яА-ЯёЁ-]{2,30})*$/,
    validationError: 'Некорректные данные',
    emptyError: 'Заполните это поле',
  },
  'email': {
    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    validationError: 'Email введен некорректно',
    emptyError: 'Заполните это поле',
},
}
