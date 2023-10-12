'use client';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';

import style from './SignForm.module.scss';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { loginUser, registerUser } from '../../store/user/userApi';
import { InputValuesType } from '../../../types/allTypes.types';
import ButtonSubmitForm from '../ui/ButtonSubmitForm/ButtonSubmitForm';
import InputForm from '../ui/InputForm/InputForm';
import { useRouter } from 'next/navigation';
import { error } from 'console';
import { useFormValid } from '@/app/hooks/useFormValid';

type SignFormType = {
  register?: boolean;
};

function SignForm({ register = false }: SignFormType) {
  // const [inputValues, setInputValues] = useState<InputValuesType | null>(null);
  const { inputValues, handleInputChange} = useFormValid();
  const dispatch = useAppDispatch();
  const { isLoggedIn, error } = useAppSelector( state => state.user);
  const { back } = useRouter();


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
        })
      );
      // if (error === null) {
      //       console.log('вход разрешен', isLoggedIn);
            
      //       back();
      //     }
    }
  };
  useEffect(() => {
    if (isLoggedIn) {
      back();
      console.log('isLoggetIn',isLoggedIn);
    }
    
  }, [isLoggedIn]);

  return (
    <form onSubmit={handleSubmit} className={style.form} noValidate>
      {register && (
        <InputForm
          location="sign"
          name="nameUser"
          type="text"
          placeholder="Имя"
          value={inputValues?.nameUser}
          handleChange={(evt: ChangeEvent<HTMLInputElement>) => handleInputChange(evt, { customValidation: true })}
          required={true}
        />
      )}
      <InputForm
        location="sign"
        name="email"
        type="email"
        placeholder="Email"
        value={inputValues?.email}
        handleChange={(evt: ChangeEvent<HTMLInputElement>) => handleInputChange(evt, { customValidation: true })}
        required={true}
      />
      <InputForm
        location="sign"
        name="password"
        type="password"
        placeholder="Пароль"
        value={inputValues?.password}
        handleChange={(evt: ChangeEvent<HTMLInputElement>) => handleInputChange(evt, { customValidation: true })}
        required={true}
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
