import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { InputValuesType } from "../../types/allTypes.types";
import ButtonSubmitForm from "../ui/ButtonSubmitForm/ButtonSubmitForm";
import InputForm from "../ui/InputForm/InputForm";
import style from './SignForm.module.scss'

type SignFormType = {
  // onSubmit: (evt: FormEvent<HTMLFormElement>) => void;
  register?: boolean;
}

function SignForm({ register = false } : SignFormType) {
  const [inputValues, setInputValues] = useState<InputValuesType | null>(null);
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
    console.log(inputValues);
  }


  return (
    <form onSubmit={handleSubmit} className={style.form}>
      {register && <InputForm
          location="sign"
          name="nameUser"
          type="text"
          placeholder="Имя"
          value={inputValues?.nameUser}
          handleChange={handleChange}
      />}
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
      <ButtonSubmitForm extraClass={style.form__button} text={`${register ? 'Зарегистрироваться' : 'Войти'}`}/>
      <span className={style.form__span}>Новый пользователь? <Link className={style.form__link} to='/register'>Регистрация</Link></span>
    </form>
  );
}

export default SignForm;