import style from './Header.module.scss';
import logo from '@/public/images/logoWC.svg';
import Link from 'next/link';
import Image from 'next/image';
import NavigationLinkProfile from '../ui/NavigationLinkProfile/NavigationLinkProfile';
import Navigation from '../Navigation/Navigation';
import { navItemsHeader } from '@/utils/constans';

function Header() {

  return ( 
    <header className={style.header}>
      <Link href='/'>
        <Image className={style.header__logo} src={logo} alt="Логотип" />
      </Link>
      <Navigation items={navItemsHeader}/>
      <NavigationLinkProfile to="/account/favorites"/>
    </header>
   );
}

export default Header;