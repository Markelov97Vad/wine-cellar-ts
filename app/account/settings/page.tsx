'use client';
import InputForm from '@/app/components/ui/InputForm/InputForm';
import style from './page.module.scss';
import { useFormValid } from '@/app/hooks/useFormValid';
import ButtonSubmitForm from '@/app/components/ui/ButtonSubmitForm/ButtonSubmitForm';
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { getWines } from '@/app/store/wine/wineApi';
import { Metadata } from 'next';
import { useEffect } from 'react';
import { InputValuesType } from '@/types/allTypes.types';
import { checkAuthUser } from '@/app/store/user/userApi';
import { montserrat } from '@/app/fonts';

// export const metadata: Metadata = {
//   title: 'Settings'
// }

function Settings() {
  const { inputValues, handleInputChange, resetFormValues } = useFormValid();
  const { user } = useAppSelector(state => state.user)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthUser());
  }, []);

  useEffect(() => {
    resetFormValues({
      nameUser: user?.nameUser,
      email: user?.email
    });
  }, [user]);
  return (
    <div className={`${style.settings}  ${montserrat.className}`}>
      <form className={style.settings__form}>
        <fieldset className={style.settings__fieldest}>
          <InputForm
            name="nameUser"
            type="text"
            placeholder="Имя"
            location="settings"
            value={inputValues?.nameUser}
            handleChange={handleInputChange}
            required={false}
          />
          <InputForm
            name="surname"
            type="text"
            placeholder="Фамилия"
            location="settings"
            value={inputValues?.surname}
            handleChange={handleInputChange}
            required={false}
          />
        </fieldset>
        <InputForm
          name="email"
          type="email"
          placeholder="Email"
          location="settings"
          value={inputValues?.email}
          handleChange={handleInputChange}
          margin={true}
          required={false}
        />

        <ButtonSubmitForm
          text="Сохранить"
          extraClass={style['settings__button-form']}
        />
      </form>
    </div>
  );
}

export default Settings;
