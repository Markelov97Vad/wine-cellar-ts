import { NavLink } from "react-router-dom";
import './Header.scss';

import NavigationLinkProfile from "../ui/NavigationLinkProfile/NavigationLinkProfile";
import logo from '../../assets/images/logoWC.svg'

function Header() {
  return ( 
    <header className='header'>
      <img className='header__logo' src={logo} alt="" />
      <nav >
        <ul className='header__list'>
          <li>
            <NavLink className='header__link' to={'/'}>text</NavLink>
          </li>
          <li>
            <NavLink className='header__link' to={'/'}>text</NavLink>
          </li>
          <li>
            <NavLink className='header__link' to={'/'}>text</NavLink>
          </li>
        </ul>
      </nav>
      <NavigationLinkProfile to="/login"/>
    </header>
   );
}

export default Header;