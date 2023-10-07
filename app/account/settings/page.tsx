'use client';
import InputForm from '@/app/components/ui/InputForm/InputForm';
import style from './page.module.scss';
import { useFormValid } from '@/app/hooks/useFormValid';
import ButtonSubmitForm from '@/app/components/ui/ButtonSubmitForm/ButtonSubmitForm';

function Settings() {
  const { inputValues, handleInputChange } = useFormValid();
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
