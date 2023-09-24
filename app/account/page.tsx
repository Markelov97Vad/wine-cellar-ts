"use client"
import Link from 'next/link';
import style from './page.module.scss';
import { usePathname } from 'next/navigation';

function Account() {
  const pathname = usePathname();
  const navItem = [
    {
      label: 'Мои данные',
      href: '/account/settings',
    },
    {
      label: 'Избранное',
      href: '/account/favorites',
    },
  ];

  return (
    <section className={style.account}>
      <nav className={style.account__nav}>
        <ul>
          {navItem.map((item, id) => (
            <li className={style.account__list} key={id}>
              <Link className={style.account__link} href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div></div>
    </section>
  );
}

export default Account;
