import Link from 'next/link';
import Logo from '../Logo/Logo';
import styles from './HeaderTypeSecond.module.scss'
import { montserrat } from '@/app/fonts';

function HeaderTypeSecond() {
  return (
    <header className={styles['header-type-second']}>
      <Logo dark/>
      <div className={`${styles['header-type-second__wrapper']} ${montserrat.className}`}>
        <Link href={'/'} className={styles['header-type-second__link']}>Библиотека</Link>
        <Link href={'/my-collection'} className={styles['header-type-second__link']}>Моя коллекция</Link>
      </div>
    </header>
  );
}

export default HeaderTypeSecond;
