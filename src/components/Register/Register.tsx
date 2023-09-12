import { FormEvent } from 'react';
import Header from '../header/Header';
import SignForm from '../SignForm/SignForm';
import ButtonSubmitForm from '../ui/ButtonSubmitForm/ButtonSubmitForm';
import InputForm from '../ui/InputForm/InputForm';
import style from "./Register.module.scss";



function Register() {
  // const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
  //   evt.preventDefault();
  //   console.log('click');
  // }

  return (
    <>
      <Header/>
      <section className={style.register}>
        <div className={style.register__wrapper}>
          <h2 className={style.register__title}>Rегистрация</h2>
          <SignForm register={true}/>
        </div>
      </section>
    </>
  );
}

export default Register;