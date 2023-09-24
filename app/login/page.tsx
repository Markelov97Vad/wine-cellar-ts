import Header from '@/app/components/Header/Header';
import style from './page.module.scss';
import SignForm from '@/app/components/SignForm/SignForm';

function Login() {
  return (
    <>
      {/* <Header /> */}
      <section className={style.login}>
        <div className={style.login__wrapper}>
          <h2 className={style.login__title}>Ваш аккаунт</h2>
          <SignForm />
        </div>
      </section>
    </>
  );
}

export default Login;
