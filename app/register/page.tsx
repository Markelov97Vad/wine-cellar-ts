import { FormEvent } from 'react';
import styles from './page.module.scss';
import Header from '@/app/components/Header/Header';
import SignForm from '@/app/components/SignForm/SignForm';
import { montserrat } from '../fonts';

function Register() {
  return (
    <>
      <section className={`${styles.register} ${montserrat.className}`}>
        <div className={styles.register__wrapper}>
          <h2 className={styles.register__title}>Регистрация</h2>
          <SignForm register={true} />
        </div>
      </section>
    </>
  );
}

export default Register;
