'use client';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';

import style from './SignForm.module.scss';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { loginUser, registerUser } from '../../store/user/userApi';
import ButtonSubmitForm from '../ui/ButtonSubmitForm/ButtonSubmitForm';
import InputForm from '../ui/InputForm/InputForm';
import { useRouter } from 'next/navigation';
import { useFormValid } from '@/app/hooks/useFormValid';
import { SignFormTypeProps } from '@/types/componentProps.types';
import { toggleSuccess } from '@/app/store/user/userSlice';

function SignForm({ register = false }: SignFormTypeProps) {
  const { inputValues, handleInputChange, errorMessages, formIsValid } =
    useFormValid();
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { isLoggedIn, error, loading, isSuccessRegister } = useAppSelector(
    (state) => state.user
  );
  const { back, push } = useRouter();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (register) {
      dispatch(
        registerUser({
          nameUser: inputValues?.nameUser,
          email: inputValues?.email,
          password: inputValues?.password,
        })
      );
    } else {
      dispatch(
        loginUser({
          email: inputValues?.email,
          password: inputValues?.password,
        })
      );
    }
    setIsInfoOpen(true);
  };

  useEffect(() => {
    if (isLoggedIn) {

      back();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isSuccessRegister) {
      push('login');
      dispatch(toggleSuccess());
    }
  }, [isSuccessRegister]);

  const renderErorrText = (error: string | null | undefined) => {
    switch (error) {
      case 'Error: Status 409':
        return 'Пользователь с таким email уже существует';
      case 'Error: Status 401':
        return 'Неправильный email или пароль';
      default:
        return 'Произошла ошибка';
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.form} noValidate>
      {register && (
        <InputForm
          location="sign"
          name="nameUser"
          type="text"
          placeholder="Имя"
          value={inputValues?.nameUser}
          handleChange={(evt: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(evt, {
              customValidation: true,
              modification: false,
            })
          }
          error={errorMessages.nameUser}
          max={30}
          required={true}
        />
      )}
      <InputForm
        location="sign"
        name="email"
        type="email"
        placeholder="Email"
        value={inputValues?.email}
        handleChange={(evt: ChangeEvent<HTMLInputElement>) =>
          handleInputChange(evt, {
            customValidation: true,
            modification: false,
          })
        }
        error={errorMessages.email}
        required={true}
      />
      <InputForm
        location="sign"
        name="password"
        type="password"
        placeholder="Пароль"
        value={inputValues?.password}
        handleChange={(evt: ChangeEvent<HTMLInputElement>) =>
          handleInputChange(evt, {
            customValidation: true,
            modification: false,
          })
        }
        error={errorMessages.password}
        required={true}
      />
      <div className={style['form__info-wrapper']}>
        {isInfoOpen && error && (
          <span className={style['form__span-error-email']}>
            {renderErorrText(error)}
          </span>
        )}
        <ButtonSubmitForm
          extraClass={style.form__button}
          disabled={!formIsValid}
          text={`${
            register
              ? loading
                ? 'Регистрация..'
                : 'Зарегистрироваться'
              : loading
              ? 'Вход..'
              : 'Войти'
          }`}
        />
      </div>
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
