'use client'
import styles from './NavigationLinkProfile.module.scss';
import icon from '../../../../public/images/cart.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { montserrat } from '@/app/fonts';

function NavigationLinkProfile({ to }: {to: string}) {
  const { push } = useRouter();

  return (
    <button onClick={() => push(to)} className={`${styles.navigationLinkProfile} ${montserrat.className}`}>
      <Image className={styles.navigationLinkProfile__img} src={icon} alt='Иконка профиля'/>
      Аккаунт
    </button>
   );
}

export default NavigationLinkProfile;
