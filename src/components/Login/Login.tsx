import { ChangeEvent, FormEvent, useState } from "react";
import Header from "../header/Header";
import InputAddWine from "../ui/InputForm/InputForm";
import style from "./Login.module.scss"
import { InputValuesType } from "../../types/allTypes.types";
import ButtonSubmitForm from "../ui/ButtonSubmitForm/ButtonSubmitForm";
import { Link } from "react-router-dom";
import SignForm from "../SignForm/SignForm";

function Login() {
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
  }

  return (
    <>
      <Header />
      <section className={style.login}>
        <div className={style.login__wrapper}>
          <h2 className={style.login__title}>Ваш аккаунт</h2>
          <SignForm/>
        </div>
      </section>
    </>
  );
}

export default Login;
