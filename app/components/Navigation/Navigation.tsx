'use client';
import Link from 'next/link';
import style from './Navigation.module.scss';
import { usePathname } from 'next/navigation';
import { NavigationType } from '@/types/componentProps.types';
import { montserrat } from '@/app/fonts';


function Navigation({ items }: NavigationType) {
  const pathname = usePathname();

  return (
    <nav className={`${style.navigation} ${montserrat.className}`}>
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
    </nav>
  );
}

export default Navigation;
