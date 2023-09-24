'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';

import style from './SignForm.module.scss';

import { useAppDispatch } from '../../hooks/redux';
import { loginUser, registerUser } from '../../store/user/userApi';
import { InputValuesType } from '../../../types/allTypes.types';
import ButtonSubmitForm from '../ui/ButtonSubmitForm/ButtonSubmitForm';
import InputForm from '../ui/InputForm/InputForm';

type SignFormType = {
  register?: boolean;
};

function SignForm({ register = false }: SignFormType) {
  const [inputValues, setInputValues] = useState<InputValuesType | null>(null);
  const dispatch = useAppDispatch();

  const handleStoreValue = (name: string, value: string | number) => {
    setInputValues((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    handleStoreValue(name, value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (register) {
      dispatch(
        registerUser({
          nameUser: inputValues?.nameUser,
          email: inputValues?.email,
          password: inputValues?.password,
        }),
      );
    } else {
      dispatch(
        loginUser({
          email: inputValues?.email,
          password: inputValues?.password,
        }),
      );
    }
  };
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      {register && (
        <InputForm
          location="sign"
          name="nameUser"
          type="text"
          placeholder="Имя"
          value={inputValues?.nameUser}
          handleChange={handleChange}
        />
      )}
      <InputForm
        location="sign"
        name="email"
        type="email"
        placeholder="Email"
        value={inputValues?.email}
        handleChange={handleChange}
      />
      <InputForm
        location="sign"
        name="password"
        type="password"
        placeholder="Пароль"
        value={inputValues?.password}
        handleChange={handleChange}
      />
      <ButtonSubmitForm
        extraClass={style.form__button}
        text={`${register ? 'Зарегистрироваться' : 'Войти'}`}
      />
      {register ? (
        <span className={style.form__span}>
          Уже есть профиль?{' '}
          <Link className={style.form__link} href="/login">
            Войти
          </Link>
        </span>
      ) : (
        <span className={style.form__span}>
          Новый пользователь?{' '}
          <Link className={style.form__link} href="/register">
            Регистрация
          </Link>
        </span>
      )}
    </form>
  );
}

export default SignForm;
