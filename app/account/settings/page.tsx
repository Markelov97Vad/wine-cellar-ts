'use client';
import InputForm from '@/app/components/ui/InputForm/InputForm';
import style from './page.module.scss';
import { useFormValid } from '@/app/hooks/useFormValid';
import ButtonSubmitForm from '@/app/components/ui/ButtonSubmitForm/ButtonSubmitForm';

function Settings() {
  const { inputValues, handleChange } = useFormValid();
  return (
    <div className={style.settings}>
      <form className={style.settings__form}>
        <fieldset className={style.settings__fieldest}>
          <InputForm
            name="name"
            type="text"
            placeholder="Имя"
            location="settings"
            value={inputValues?.name}
            handleChange={handleChange}
          />
          <InputForm
            name="surname"
            type="text"
            placeholder="Фамилия"
            location="settings"
            value={inputValues?.surname}
            handleChange={handleChange}
          />
        </fieldset>
        <InputForm
          name="email"
          type="email"
          placeholder="Email"
          location="settings"
          value={inputValues?.email}
          handleChange={handleChange}
          margin={true}
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
