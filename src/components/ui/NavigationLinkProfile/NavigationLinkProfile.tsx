import { NavLink } from "react-router-dom";
import { NavigationLinkProfileType } from "../../../types/componentProps.types";
import styles from './NavigationLinkProfile.module.scss'
import icon from '../../../assets/images/cart.svg'

function NavigationLinkProfile({ to }: NavigationLinkProfileType) {
  return ( 
    <NavLink to={to} className={styles.navigationLinkProfile}><img className={styles.navigationLinkProfile__img} src={icon} alt="icon profile" />Аккаунт</NavLink>
   );
}

export default NavigationLinkProfile;