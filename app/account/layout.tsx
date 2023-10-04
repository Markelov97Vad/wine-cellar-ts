'use client';
import Link from 'next/link';
import { ReactNode } from 'react';
import style from './page.module.scss';
import { usePathname } from 'next/navigation';
import { navItemAccount } from '@/utils/constans';
import { montserrat } from '../fonts';

export default function AboutLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <section className={style.account}>
      <div className={style.account__wrapper}>
        <nav className={style.account__nav}>
          <ul className={`${style.account__list} ${montserrat.className}`}>
            {navItemAccount.map((item, id) => {
              const isActive = pathname === item.href;
              return (
                <li key={id}>
                  <Link
                    className={`${style.account__link} ${
                      isActive ? style.account__link_active : ''
                    }`}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {children}
      </div>
    </section>
  );
}
