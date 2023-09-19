import style from './NavigationLinkProfile.module.scss';
import icon from '../../../public/images/cart.svg';
import Link from 'next/link';
import Image from 'next/image';

function NavigationLinkProfile({ to }: {to: string}) {
  return ( 
    <Link href={to} className={style.navigationLinkProfile}>
      <Image className={style.navigationLinkProfile__img} src={icon} alt='Иконка профиля'/>
      Аккаунт
    </Link>
   );
}

export default NavigationLinkProfile;