import { montserrat, playfairDisplay } from '@/app/fonts';
import styles from './NotificationPopup.module.scss';
import imgGlass from '../../../public/images/image-glass.png'
import Image from 'next/image';
import ButtonCross from '../ui/ButtonCross/ButtonCross';
import { NotificationPopupTypeProps } from '@/types/componentProps.types';

function NotificationPopup({isNotificationPopupOpen, setIsNotificationPopupOpen } : NotificationPopupTypeProps) {
  const handleClick = () => {
    setIsNotificationPopupOpen(false)
  }

  return (
    <div className={`${styles['notification-popup']} ${isNotificationPopupOpen ? styles['notification-popup_opened'] : ''}`}>
      <div className={styles['notification-popup__wrapper']}>
        <ButtonCross light handleClick={handleClick} extraClass={styles['notification-popup__cross-button']}/>
        <h1 className={`${styles['notification-popup__title']} ${playfairDisplay.className}`}>Вино было успешно добавленно</h1>
        <p className={`${montserrat.className} ${styles['notification-popup__subtitle']}`}>Добавленное вино вы можете увидеть ниже в списке своих вин или в общей библиотеке.</p>
        <Image width={undefined} className={styles['notification-popup__img']} src={imgGlass} alt="glass" />
      </div>
    </div>
  );
}

export default NotificationPopup;
