import { FormEvent } from 'react';
import style from './page.module.scss';
import Header from '@/app/components/Header/Header';
import SignForm from '@/app/components/SignForm/SignForm';
import { montserrat } from '../fonts';

function Register() {
  return (
    <>
      <section className={`${style.register} ${montserrat.className}`}>
        <div className={style.register__wrapper}>
          <h2 className={style.register__title}>Регистрация</h2>
          <SignForm register={true} />
        </div>
      </section>
    </>
  );
}

export default Register;
