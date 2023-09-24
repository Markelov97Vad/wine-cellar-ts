'use client';
import Link from 'next/link';
import style from './Navigation.module.scss';
import { usePathname } from 'next/navigation';
import { NavigationType } from '@/types/componentProps.types';

function Navigation({ items }: NavigationType) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className={style.navigation}>
      {items.map((item, id) => {
        const isActive = pathname === item.href;
        return (
          <ul key={id} className={style.navigation__list}>
          <li>
            <Link className={`${style.navigation__link} ${isActive ? style.navigation__link_active : ''}`} href={item.href}>
              {item.label}
            </Link>
          </li>
        </ul>
        )
      })}
      {/* <ul className={style.navigation__list}>
        <li>
          <Link className={style.navigation__link} href={'/add-wine'}>
            Добавить вино
          </Link>
        </li>
        <li>
          <Link className={style.navigation__link} href={'/'}>
            text
          </Link>
        </li>
        <li>
          <Link className={style.navigation__link} href={'/'}>
            text
          </Link>
        </li>
      </ul> */}
    </nav>
  );
}

export default Navigation;
