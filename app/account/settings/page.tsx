'use client';
import InputForm from '@/app/components/ui/InputForm/InputForm';
import style from './page.module.scss';
import { useFormValid } from '@/app/hooks/useFormValid';
import ButtonSubmitForm from '@/app/components/ui/ButtonSubmitForm/ButtonSubmitForm';
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { ChangeEvent, useEffect, useState } from 'react';
import { setUserInfo } from '@/app/store/user/userApi';
import { montserrat } from '@/app/fonts';

function Settings() {
  const {
    inputValues,
    handleInputChange,
    resetFormValues,
    errorMessages,
    formIsValid,
  } = useFormValid();
  const { currentUser, error, loading } = useAppSelector((state) => state.user);
  const [isNotificationOpen, setisNotificationOpen] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    resetFormValues({
      nameUser: currentUser?.nameUser,
      email: currentUser?.email,
      surname: currentUser?.surname,
    });
  }, [currentUser]);

  const isDataMatch = () => {
    if (
      currentUser?.nameUser === inputValues?.nameUser &&
      currentUser?.email === inputValues?.email &&
      currentUser?.surname === inputValues?.surname
    ) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (error) {
      setisNotificationOpen(true);
    }
  }, [error]);

  useEffect(() => {
    setisNotificationOpen(false);
  }, []);

  const handleSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const userData = {
      nameUser:
        inputValues?.nameUser === ''
          ? currentUser?.nameUser
          : inputValues?.nameUser,
      surname: inputValues?.surname,
      email:
        inputValues?.email === '' ? currentUser?.email : inputValues?.email,
    };
    const token = localStorage.getItem('jwt')!;
    dispatch(
      setUserInfo({
        userData,
        token,
      })
    );
  };

  return (
    <div className={`${style.settings} ${montserrat.className}`}>
      <form className={style.settings__form} onSubmit={handleSubmit}>
        <fieldset className={style.settings__fieldest}>
          <InputForm
            name="nameUser"
            type="text"
            placeholder="Имя"
            location="settings"
            value={inputValues?.nameUser}
            handleChange={(evt: ChangeEvent<HTMLInputElement>) =>
              handleInputChange(evt, {
                customValidation: true,
                modification: true,
              })
            }
            error={errorMessages?.nameUser}
            required={false}
          />
          <InputForm
            name="surname"
            type="text"
            placeholder="Фамилия"
            location="settings"
            value={inputValues?.surname}
            handleChange={(evt: ChangeEvent<HTMLInputElement>) =>
              handleInputChange(evt, {
                customValidation: true,
                modification: true,
              })
            }
            error={errorMessages?.surname}
            required={false}
          />
        </fieldset>
        <InputForm
          name="email"
          type="text"
          placeholder="Email"
          location="settings"
          value={inputValues?.email}
          handleChange={(evt: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(evt, {
              customValidation: true,
              modification: true,
            })
          }
          error={errorMessages?.email}
          margin={true}
          required={false}
        />
        <fieldset className={style['settings__submit-wrapper']}>
          {isNotificationOpen && (
            <span className={style['settings__notification-message']}>
              Пользователь с таким email уже существует.
            </span>
          )}
          <ButtonSubmitForm
            text={loading ? 'Сохранение..' : 'Сохранить'}
            extraClass={style['settings__button-form']}
            disabled={isDataMatch() || !formIsValid}
          />
        </fieldset>
      </form>
    </div>
  );
}

export default Settings;
