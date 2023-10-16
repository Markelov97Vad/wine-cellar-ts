'use client';
import style from './page.module.scss';
import StarRaitingDisabled from '@/app/components/StarRaitingDisabled/StarRaitingDisabled';
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { useEffect, useState } from 'react';
import { getCurrentWine } from '@/app/store/wine/wineApi';
import { montserrat, playfairDisplay } from '@/app/fonts';
import HeaderTypeSecond from '@/app/components/HeaderTypeSecond/HeaderTypeSecond';
import ButtonLike from '@/app/components/ui/ButtonLike/ButtonLike';
import { checkAuthUser } from '@/app/store/user/userApi';
import { useRouter } from 'next/navigation';
import CrossIcon from '@/app/components/Icons/CrossIcon';
import {
  useAddFavoriteWineMutation,
  useDeleteFavoriteWineMutation,
  useDeleteWineMutation,
} from '@/app/store/wine-query/reducer';
import Button from '@/app/components/ui/Button/Button';

function AboutWine({ params }: { params: { id: string } }) {
  const dispatch = useAppDispatch();
  const { isLoggedIn, currentUser } = useAppSelector((state) => state.user);
  const [addFavorite, { isSuccess: isSuccessAdd }] =
    useAddFavoriteWineMutation();
  const [deleteFavorite, { isSuccess: isSuccessDel }] =
    useDeleteFavoriteWineMutation();
  const [deleteWine, { isSuccess: isSuccessDelWine }] = useDeleteWineMutation();
  const { back, push } = useRouter();
  const [isLiked, setIsLiked] = useState<boolean | undefined>(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const {
    _id,
    name,
    colorWine,
    country,
    region,
    brand,
    grapeVariety,
    typeWine,
    year,
    comment,
    image,
    rating,
    likes,
    owner,
  } = useAppSelector((state) => state.wines.currentWine);

  useEffect(() => {
    dispatch(getCurrentWine(params.id));
  }, [isSuccessAdd, isSuccessDel]);

  useEffect(() => {
    dispatch(checkAuthUser());
  }, []);

  useEffect(() => {
    setIsLiked(likes?.some((user) => user._id === user._id));
  }, [likes]);

  const handleClick = async () => {
    if (isLoggedIn) {
      if (!isLiked) {
        await addFavorite(_id!).unwrap(); // корректная работа пропсов (isError, isLoading..)
      } else {
        await deleteFavorite(_id!).unwrap();
      }
    } else {
      push('/login');
    }
  };

  useEffect(() => {
    if (isSuccessDelWine) {
      back();
    }
  }, [isSuccessDelWine]);

  const handleDeleteWine = () => {
    deleteWine(_id as string);
  };

  const handleOpenNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    <>
      <HeaderTypeSecond />
      <main className={style.aboutWine}>
        <button onClick={back} className={style['aboutWine__button-back']}>
          <CrossIcon dark />
        </button>
        <div className={style.aboutWine__imgContainer}>
          <img
            className={style.aboutWine__image}
            src={image!}
            alt="бутылка вина"
          />
          <ButtonLike handleClick={handleClick} isLiked={isLiked} />
        </div>

        <div className={style['aboutWine__info-wrapper']}>
          <h1
            className={`${style.aboutWine__title} ${playfairDisplay.className}`}
          >
            {name}
          </h1>
          <p className={style.aboutWine__subtitle}>
            {brand?.toLocaleUpperCase()}
          </p>
          <StarRaitingDisabled rating={rating} />
          <div className={style.details}>
            <div className={style.details__wrapper}>
              <span
                className={`${style.details__about} ${montserrat.className}`}
              >
                ЦВЕТ
              </span>
              <span
                className={`${style.details__value} ${playfairDisplay.className}`}
              >
                {colorWine}
              </span>
            </div>
            <div className={style.details__wrapper}>
              <span
                className={`${style.details__about} ${montserrat.className}`}
              >
                БРЭНД
              </span>
              <span
                className={`${style.details__value} ${playfairDisplay.className}`}
              >
                {brand}
              </span>
            </div>
            <div className={style.details__wrapper}>
              <span
                className={`${style.details__about} ${montserrat.className}`}
              >
                ТИП
              </span>
              <span
                className={`${style.details__value} ${playfairDisplay.className}`}
              >
                {typeWine}
              </span>
            </div>
            <div className={style.details__wrapper}>
              <span
                className={`${style.details__about} ${montserrat.className}`}
              >
                ГОД
              </span>
              <span
                className={`${style.details__value} ${playfairDisplay.className}`}
              >
                {year}
              </span>
            </div>
            <div className={style.details__wrapper}>
              <span
                className={`${style.details__about} ${montserrat.className}`}
              >
                СТРАНА
              </span>
              <span
                className={`${style.details__value} ${playfairDisplay.className}`}
              >
                {country}
              </span>
            </div>
            <div className={style.details__wrapper}>
              <span
                className={`${style.details__about} ${montserrat.className}`}
              >
                РЕГИОН
              </span>
              <span
                className={`${style.details__value} ${playfairDisplay.className}`}
              >
                {region}
              </span>
            </div>
            <div className={style.details__wrapper}>
              <span
                className={`${style.details__about} ${montserrat.className}`}
              >
                ВИНОГРАД
              </span>
              <span
                className={`${style.details__value} ${playfairDisplay.className}`}
              >
                {grapeVariety}
              </span>
            </div>
          </div>
          {comment !== undefined && (
            <>
              <p
                className={`${style['aboutWine__reviwe-title']} ${playfairDisplay.className}`}
              >
                Отзыв
              </p>
              <span
                className={`${style['aboutWine__review-owner']} ${montserrat.className}`}
              >
                {owner?.nameUser?.toUpperCase()} {owner?.surname?.toUpperCase()}
              </span>
              <p
                className={`${style.aboutWine__rewiew} ${playfairDisplay.className}`}
              >
                {comment}
              </p>
              {owner?._id === currentUser?._id && !isNotificationOpen && (
                <Button
                  onClick={handleOpenNotification}
                  extraClass={`${montserrat.className} ${style['details__button-delete']}`}
                  text={'Удалить вино'}
                />
              )}
              {isNotificationOpen && (
                <>
                  <span
                    className={`${style.details__span} ${montserrat.className}`}
                  >
                    Вы точно хотите удалить это вино?
                  </span>
                  <div className={style.details__notification}>
                    <Button
                      onClick={handleOpenNotification}
                      extraClass={`${montserrat.className} ${style['details__button-delete']}`}
                      text={'Отмена'}
                    />
                    <Button
                      onClick={handleDeleteWine}
                      extraClass={`${montserrat.className} ${style['details__button-delete']}`}
                      text={'Подтвердить'}
                    />
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default AboutWine;
