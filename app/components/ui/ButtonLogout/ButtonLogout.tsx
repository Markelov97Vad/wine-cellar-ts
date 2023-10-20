import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import styles from './ButtonLogout.module.scss'
import { logout } from '@/app/store/user/userApi';
import { toggleDropdown } from '@/app/store/wine/wineSlice';

function ButtonLogout() {
  const dispatch = useAppDispatch();
  const {isDropdownMenuOpen} = useAppSelector(state => state.wines)
  const handleLogout = () => {
    dispatch(logout());
    if (isDropdownMenuOpen) {
      dispatch(toggleDropdown());
    }
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
