import Image from "next/image";
import Link from "next/link";
import styles from './Logo.module.scss'
import logo from '@/public/images/logoWC.svg';
import logoDark from '@/public/images/logoWC-dark.svg'

function Logo({ dark } : { dark?: boolean}) {
  return (
    <Link href='/'>
      <Image className={styles.logo} src={dark ? logoDark : logo} alt="Логотип" />
    </Link>
  );
}

export default Logo;
