import { useFormValid } from '@/app/hooks/useFormValid';
import ButtonCross from '../ui/ButtonCross/ButtonCross';
import InputForm from '../ui/InputForm/InputForm';
import styles from './NotificationPopupImage.module.scss'
import Button from '../ui/Button/Button';
import ButtonSubmitForm from '../ui/ButtonSubmitForm/ButtonSubmitForm';
import { montserrat } from '@/app/fonts';
import { ChangeEvent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { setWineInfo } from '@/app/store/wine/wineApi';
import { NotificationPopupImageTypeProps } from '@/types/componentProps.types';
import { useLazyFetchUserWinesQuery, useLazyFetchWinesQuery } from '@/app/store/wine-query/reducer';

function NotificationPopupImage({
    id,
    isNotificationSetImageOpen,
    setIsNotificationSetImageOpen
  } : NotificationPopupImageTypeProps) {

  const dispatch = useAppDispatch();
  const {isSuccessSetInfo} = useAppSelector(state => state.wines);
  const [getWines] = useLazyFetchWinesQuery();
  const [getUserWines] = useLazyFetchUserWinesQuery();
  const {inputValues, errorMessages, handleInputChange} = useFormValid();

  const handleClick = () => {
    setIsNotificationSetImageOpen(false);
  }

  const habdleSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(setWineInfo({
      _id: id,
      image: inputValues?.image
    }))
  }

  useEffect(() => {
    if (isSuccessSetInfo) {
      setIsNotificationSetImageOpen(false);
      getWines('');
      getUserWines('');
    }
  }, [isSuccessSetInfo])

  return (
    <div className={`${styles['notification-popup-image']} ${isNotificationSetImageOpen ? styles['notification-popup-image_open'] : ''}`}>
      <form onSubmit={habdleSubmit} className={`${styles['notification-popup-image__container']} ${montserrat.className}`}>
        <h4 className={styles['notification-popup-image__title']}>Хотите заменить изображение?</h4>
        <ButtonCross dark extraClass={styles['notification-popup-image__button-cross']} handleClick={handleClick}/>
        <InputForm
          name='image'
          type='url'
          placeholder='Ссылка на изображение'
          value={inputValues?.image}
          location='settings'
          handleChange={(evt: ChangeEvent<HTMLInputElement>) => handleInputChange(evt, {customValidation: true, modification: false})}
          error={errorMessages?.image}
          required={false}
        />
        <fieldset className={styles['notification-popup-image__fieldest']}>
          <Button onClick={handleClick} extraClass={`${montserrat.className}`} text='Отмена'/>
          <ButtonSubmitForm extraClass={`${montserrat.className}`} text='Заменить'/>
        </fieldset>
      </form>
    </div>
  );
}

export default NotificationPopupImage;
