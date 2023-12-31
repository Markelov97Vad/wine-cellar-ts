import styles from './page.module.scss';
import SignForm from '@/app/components/SignForm/SignForm';
import { montserrat } from '../fonts';
import HeaderTypeSecond from '../components/HeaderTypeSecond/HeaderTypeSecond';

function Register() {
  return (
    <>
      <HeaderTypeSecond/>
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
