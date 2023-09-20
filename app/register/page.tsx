import { FormEvent } from 'react';
import style from "./page.module.scss";
import Header from '@/components/Header/Header';
import SignForm from '@/components/SignForm/SignForm';



function Register() {

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