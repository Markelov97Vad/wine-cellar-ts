import Link from 'next/link';
import styles from './DropdownMenu.module.scss'
import { routeData } from '@/utils/constans';
import { DropdownMenuTypeProps } from '@/types/componentProps.types';

function DropdownMenu({ isDropdownMenuOpen } : DropdownMenuTypeProps) {
  return (
    <div
        className={`${styles['gropdown-menu']} ${
          isDropdownMenuOpen
            ? styles['gropdown-menu_open']
            : ''
        }`}
      >
        <ul className={styles['gropdown-menu__list-wrapper']}>
          {routeData.map((el, i) => (
            <li key={i}>
              <Link className={styles['gropdown-menu__link']} href={el.route}>{el.text}</Link>
            </li>
          ))}
        </ul>
      </div>
  );
}

export default DropdownMenu;
