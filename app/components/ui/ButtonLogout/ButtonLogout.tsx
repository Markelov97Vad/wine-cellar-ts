import { useAppDispatch } from '@/app/hooks/redux';
import styles from './ButtonLogout.module.scss'
import { logout } from '@/app/store/user/userApi';

function ButtonLogout() {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  }
  
  return (
    <button
      type="button"
      className={styles['button-logout']}
      onClick={handleLogout}
    >
      Выйти
    </button>
  );
}

export default ButtonLogout;
