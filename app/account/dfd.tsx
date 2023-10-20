// RSC component
import Link from 'next/link';
import style from './page.module.scss';
import { usePathname } from 'next/navigation';
import { navItemAccount } from '@/utils/constans';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Account'
}

function Account() {
  return (
    <section className={style.account}>
     asasasasa
    </section>
  );
}

export default Account;
