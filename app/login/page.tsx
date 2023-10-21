import style from './page.module.scss';
import SignForm from '@/app/components/SignForm/SignForm';
import { montserrat } from '../fonts';
import HeaderTypeSecond from '../components/HeaderTypeSecond/HeaderTypeSecond';

function Login() {
  return (
    <>
      <HeaderTypeSecond/>
      <section className={`${style.login} ${montserrat.className}`}>
        <div className={style.login__wrapper}>
          <h2 className={style.login__title}>Ваш аккаунт</h2>
          <SignForm />
        </div>
      </section>
    </>
  );
}

export default Login;
