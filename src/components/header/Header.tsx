import { NavLink } from "react-router-dom";

import styles from "./header.module.scss"
import NavigationLinkProfile from "../ui/NavigationLinkProfile/NavigationLinkProfile";
import logo from '../../assets/images/Group.svg'

function Header() {
  return ( 
    <header className={styles.header}>
      {/* <span className={styles.header__sapn}>ВП</span> */}
      <img className={styles.header__logo} src={logo} alt="" />
      <nav >
        <ul className={styles.header__list}>
          <li>
            <NavLink className={styles.header__link} to={'/'}>text</NavLink>
          </li>
          <li>
            <NavLink className={styles.header__link} to={'/'}>text</NavLink>
          </li>
          <li>
            <NavLink className={styles.header__link} to={'/'}>text</NavLink>
          </li>
        </ul>
      </nav>
      <NavigationLinkProfile to="/"/>
    </header>
   );
}

export default Header;