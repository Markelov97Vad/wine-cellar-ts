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
import ImgIcon from '@/app/components/Icons/ImgIcon';
import NotificationPopupImage from '@/app/components/NotificationPopupImage/NotificationPopupImage';
import useResize from '@/app/hooks/useResize';
import Comment from '@/app/components/Comment/Comment';

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
  const [isNotificationDeleteOpen, setIsNotificationDeleteOpen] =
    useState(false);
  const [isNotificationSetImageOpen, setIsNotificationSetImageOpen] =
    useState(false);
  const { isLaptop } = useResize();
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
  const isOwner = owner?._id === currentUser?._id;

  useEffect(() => {
    dispatch(getCurrentWine(params.id));
  }, [isSuccessAdd, isSuccessDel]);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    dispatch(checkAuthUser(token!));
  }, []);

  useEffect(() => {
    setIsLiked(likes?.some((user) => user._id === user._id));
  }, [likes]);

  const handleClick = async () => {
    const token = localStorage.getItem('jwt');
    if (isLoggedIn) {
      if (!isLiked) {
        await addFavorite({id: _id!, token: token!}).unwrap(); // корректная работа пропсов (isError, isLoading..)
      } else {
        await deleteFavorite({id: _id!, token: token!}).unwrap();
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
    const token = localStorage.getItem('jwt');
    deleteWine({id: _id!, token: token!});
  };

  const handleOpenNotification = () => {
    setIsNotificationDeleteOpen(!isNotificationDeleteOpen);
  };

  const handleOpenNotificationSetImage = () => {
    setIsNotificationSetImageOpen(!isNotificationSetImageOpen);
  };

  const wineData = [
    { text: colorWine, type: 'ЦВЕТ' },
    { text: brand, type: 'БРЭНД' },
    { text: typeWine, type: 'ТИП' },
    { text: year, type: 'ГОД' },
    { text: country, type: 'СТРАНА' },
    { text: region, type: 'РЕГИОН' },
  ];

  return (
    <>
      <HeaderTypeSecond />
      <main className={style.aboutWine}>
        {isLaptop ? (
          <article className={style.aboutWine__wrapper}>
            <button onClick={back} className={style['aboutWine__button-back']}>
              <CrossIcon dark />
            </button>
            <div className={style.aboutWine__imgContainer}>
              <img
                className={style.aboutWine__image}
                src={image!}
                alt="бутылка вина"
              />
              <ButtonLike
                extraClass={style['aboutWine__button-like']}
                handleClick={handleClick}
                isLiked={isLiked}
              />
              {isOwner && (
                <button
                  onClick={handleOpenNotificationSetImage}
                  className={style['aboutWine__button-confirm']}
                  type="button"
                >
                  <ImgIcon />
                </button>
              )}
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
                {wineData.map((data, i) => (
                  <div key={i} className={style.details__wrapper}>
                    <span
                      className={`${style.details__about} ${montserrat.className}`}
                    >
                      {data.type}
                    </span>
                    <span
                      className={`${style.details__value} ${playfairDisplay.className}`}
                    >
                      {data.text}
                    </span>
                  </div>
                ))}
                <div className={style.details__wrapper}>
                  <span
                    className={`${style.details__about} ${montserrat.className}`}
                  >
                    ВИНОГРАД
                  </span>
                  <div className={style['details__value-container']}>
                    {grapeVariety?.map((el, i) => (
                      <span
                        key={i}
                        className={`${style.details__value} ${playfairDisplay.className}`}
                      >
                        {el}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {comment !== undefined &&
                <Comment owner={owner} comment={comment}/>
              }
              {isOwner && !isNotificationDeleteOpen && (
                <Button
                  onClick={handleOpenNotification}
                  extraClass={`${montserrat.className} ${style['details__button-delete']}`}
                  text={'Удалить вино'}
                />
              )}
              {isNotificationDeleteOpen && (
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
            </div>
          </article>
        ) : (
          <article className={style.aboutWine}>
            <button onClick={back} className={style['aboutWine__button-back']}>
              <CrossIcon dark />
            </button>
            <h1
              className={`${style.aboutWine__title} ${playfairDisplay.className}`}
            >
              {name}
            </h1>
            <p className={style.aboutWine__subtitle}>
              {brand?.toLocaleUpperCase()}
            </p>
            <StarRaitingDisabled rating={rating} />

            <div className={style.aboutWine__imgContainer}>
              <img
                className={style.aboutWine__image}
                src={image!}
                alt="бутылка вина"
              />
              <ButtonLike
                extraClass={style['aboutWine__button-like']}
                handleClick={handleClick}
                isLiked={isLiked}
              />
              {isOwner && (
                <button
                  onClick={handleOpenNotificationSetImage}
                  className={style['aboutWine__button-confirm']}
                  type="button"
                >
                  <ImgIcon />
                </button>
              )}
            </div>

            <div className={style.details}>
              {wineData.map((data, i) => (
                <div key={i} className={style.details__wrapper}>
                  <span
                    className={`${style.details__about} ${montserrat.className}`}
                  >
                    {data.type}
                  </span>
                  <span
                    className={`${style.details__value} ${playfairDisplay.className}`}
                  >
                    {data.text}
                  </span>
                </div>
              ))}
              <div className={style.details__wrapper}>
                <span
                  className={`${style.details__about} ${montserrat.className}`}
                >
                  ВИНОГРАД
                </span>
                <div className={style['details__value-container']}>
                  {grapeVariety?.map((el, i) => (
                    <span
                      key={i}
                      className={`${style.details__value} ${playfairDisplay.className}`}
                    >
                      {` ${el}`}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {comment !== undefined &&
            <Comment owner={owner} comment={comment} />
            }

            {isOwner && !isNotificationDeleteOpen && (
              <Button
                onClick={handleOpenNotification}
                extraClass={`${montserrat.className} ${style['details__button-delete']}`}
                text={'Удалить вино'}
              />
            )}
            {isNotificationDeleteOpen && (
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
          </article>
        )}
        <NotificationPopupImage
          id={_id as string}
          isNotificationSetImageOpen={isNotificationSetImageOpen}
          setIsNotificationSetImageOpen={setIsNotificationSetImageOpen}
        />
      </main>
    </>
  );
}

export default AboutWine;
