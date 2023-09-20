'use client'
import style from './NavigationLinkProfile.module.scss';
import icon from '../../../public/images/cart.svg';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function NavigationLinkProfile({ to }: {to: string}) {
  const { push } = useRouter();

  return ( 
    <button onClick={() => push('/login')} className={style.navigationLinkProfile}>
      <Image className={style.navigationLinkProfile__img} src={icon} alt='Иконка профиля'/>
      Аккаунт
    </button>
   );
}

export default NavigationLinkProfile;