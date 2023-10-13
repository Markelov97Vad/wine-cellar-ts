import style from './Header.module.scss';
import NavigationLinkProfile from '../ui/NavigationLinkProfile/NavigationLinkProfile';
import Navigation from '../Navigation/Navigation';
import { navItemsHeader } from '@/utils/constans';
import Logo from '../Logo/Logo';

function Header() {

  return (
    <header className={style.header}>
      <Logo/>
      <Navigation items={navItemsHeader}/>
      <NavigationLinkProfile to="/account/favorites"/>
    </header>
   );
}

export default Header;
