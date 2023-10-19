import Link from 'next/link';
import styles from './DropdownMenu.module.scss';
import { routeData } from '@/utils/constans';
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { usePathname } from 'next/navigation';
import { toggleDropdown } from '@/app/store/wine/wineSlice';
import ButtonLogout from '../ui/ButtonLogout/ButtonLogout';
import { montserrat } from '@/app/fonts';

function DropdownMenu({ library }: { library?: boolean }) {
  const { isDropdownMenuOpen } = useAppSelector((state) => state.wines);
  const { isLoggedIn } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch()
  const pathname = usePathname();

  const handleClick = () => {
    dispatch(toggleDropdown());
  }
  return (
    <div
      className={`${styles['gropdown-menu']} ${montserrat.className} ${
        isDropdownMenuOpen ? styles['gropdown-menu_open'] : ''
      } ${library ? styles['gropdown-menu_location_library'] : ''}
        `}
    >
      <ul className={styles['gropdown-menu__list-wrapper']}>
        {routeData.map((el, i) => {
          const isActive = el.route === pathname
          return (
            <li key={i}>
              <Link onClick={handleClick} className={`${styles['gropdown-menu__link']} ${styles['gropdown-menu__link_type_route']} ${isActive ? styles['gropdown-menu__link_active'] : ""}`} href={el.route}>
                {el.text}
              </Link>
            </li>
          );
        })}
        {
          isLoggedIn ?
          <ButtonLogout/> :
          <Link onClick={handleClick} className={`${styles['gropdown-menu__link']} ${styles['gropdown-menu__link_type_auth']}`} href={'/login'}>Войти</Link>
        }
      </ul>
    </div>
  );
}

export default DropdownMenu;
