import style from './Header.module.scss';
import logo from '@/public/images/logoWC.svg';
import Link from 'next/link';
import Image from 'next/image';
import NavigationLinkProfile from '../ui/NavigationLinkProfile/NavigationLinkProfile';

function Header() {
  return ( 
    <header className={style.header}>
      <Link href='/'>
        <Image className={style.header__logo} src={logo} alt="Логотип" />
      </Link>
      <nav>
        <ul className={style.header__list}>
          <li>
            <Link className={style.header__link} href={'/'}>text</Link>
          </li>
          <li>
            <Link className={style.header__link} href={'/'}>text</Link>
          </li> 
          <li>
            <Link className={style.header__link} href={'/'}>text</Link>
          </li>
        </ul>
      </nav>
      <NavigationLinkProfile to="/login"/>
    </header>
   );
}

export default Header;