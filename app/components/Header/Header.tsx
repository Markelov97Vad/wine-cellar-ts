import style from './Header.module.scss';
import logo from '@/public/images/logoWC.svg';
import Link from 'next/link';
import Image from 'next/image';
import NavigationLinkProfile from '../ui/NavigationLinkProfile/NavigationLinkProfile';
import Navigation from '../Navigation/Navigation';

function Header() {


  const navItems = [
    {
      label: 'Главная',
      href: '/'
    },
    {
      label: 'Библиотека',
      href: '/library'
    },
    {
      label: 'Мои вина',
      href: '/my-wines'
    }

  ]

  return ( 
    <header className={style.header}>
      <Link href='/'>
        <Image className={style.header__logo} src={logo} alt="Логотип" />
      </Link>
      <Navigation items={navItems}/>
      <NavigationLinkProfile to="/login"/>
    </header>
   );
}

export default Header;