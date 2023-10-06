import { montserrat, playfairDisplay } from '@/app/fonts';
import styles from './NotificationPopup.module.scss';
import imgGlass from '../../../public/images/image-glass.png'
import Image from 'next/image';
import ButtonCross from '../ui/ButtonCross/ButtonCross';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@/app/hooks/redux';

function NotificationPopup() {
  const { isSuccess } = useAppSelector(state => state.wines);
  const [isNotificationPopupOpen, setIsNotificationPopupOpen] = useState(false);
  
  const handleClick = () => {
    setIsNotificationPopupOpen(false)
  }

  useEffect(() => {
    if (isSuccess) {
      setIsNotificationPopupOpen(true);
    }
  }, [isSuccess]);

  return (
    <div className={`${styles['notification-popup']} ${isNotificationPopupOpen ? styles['notification-popup_opened'] : ''}`}>
      <div className={styles['notification-popup__wrapper']}>
        <ButtonCross handleClick={handleClick} extraClass={styles['notification-popup__cross-button']}/>
        <h1 className={`${styles['notification-popup__title']} ${playfairDisplay.className}`}>Вино было успешно добавленно</h1>
        <p className={`${montserrat.className} ${styles['notification-popup__subtitle']}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing.</p>
        <Image width={undefined} className={styles['notification-popup__img']} src={imgGlass} alt="glass" />
      </div>
    </div>
  );
}

export default NotificationPopup;