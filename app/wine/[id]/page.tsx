'use client';
import Header from '@/app/components/Header/Header';
import style from './page.module.scss';
import Image from 'next/image';
import StarRating from '@/app/components/StarRating/StarRating';
import StarRaitingDisabled from '@/app/components/StarRaitingDisabled/StarRaitingDisabled';
import wineImg from '@/public/images/wine-img.webp';
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { useEffect, useState } from 'react';
import { getCurrentWine, getWines } from '@/app/store/wine/wineApi';
import { montserrat, playfairDisplay } from '@/app/fonts';
import HeaderTypeSecond from '@/app/components/HeaderTypeSecond/HeaderTypeSecond';
import ButtonLike from '@/app/components/ui/ButtonLike/ButtonLike';
import { useAddFavoriteWineMutation, useDeleteFavoriteWineMutation } from '@/app/store/currentUserWine/reducer';
import { checkAuthUser } from '@/app/store/user/userApi';
import { useRouter } from 'next/navigation';
import CrossIcon from '@/app/components/Icons/CrossIcon';

function AboutWine({ params }: { params: { id: string } }) {
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAppSelector((state) => state.user);
  const [addFavorite, { isSuccess: isSuccessAdd }] =
    useAddFavoriteWineMutation();
  const [deleteFavorite, { isSuccess: isSuccessDel }] =
    useDeleteFavoriteWineMutation();
  const { back, push } = useRouter()
  const [isLiked, setIsLiked] = useState<boolean | undefined>(false);
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
    likes
  } = useAppSelector((state) => state.wines.currentWine);

  useEffect(() => {
    dispatch(getCurrentWine(params.id));
  }, [isSuccessAdd, isSuccessDel]);

  useEffect(() => {
    dispatch(checkAuthUser())
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
      push('/login')
    }
  };

  return (
    <>
      <HeaderTypeSecond/>
      <main className={style.aboutWine}>
        <button onClick={back} className={style['aboutWine__button-back']}>
          <CrossIcon dark/>
        </button>
        <div className={style.aboutWine__imgContainer}>
          <img
            className={style.aboutWine__image}
            src={image!}
            alt="бутылка вина"
          />
          <ButtonLike handleClick={handleClick} isLiked={isLiked}/>
        </div>

        <div className={style['aboutWine__info-wrapper']}>
          <h1 className={`${style.aboutWine__title} ${playfairDisplay.className}`}>{name}</h1>
          <p className={style.aboutWine__subtitle}>{brand?.toLocaleUpperCase()}</p>
          <StarRaitingDisabled rating={rating} />
          <div className={style.details}>
            <div className={style.details__wrapper}>
              <span className={`${style.details__about} ${montserrat.className}`}>ТИП</span>
              <span className={`${style.details__value} ${playfairDisplay.className}`}>{colorWine}</span>
            </div>
            <div className={style.details__wrapper}>
              <span className={`${style.details__about} ${montserrat.className}`}>БРЭНД</span>
              <span className={`${style.details__value} ${playfairDisplay.className}`}>{brand}</span>
            </div>
            <div className={style.details__wrapper}>
              <span className={`${style.details__about} ${montserrat.className}`}>ГОД</span>
              <span className={`${style.details__value} ${playfairDisplay.className}`}>{year}</span>
            </div>
            <div className={style.details__wrapper}>
              <span className={`${style.details__about} ${montserrat.className}`}>СТРАНА</span>
              <span className={`${style.details__value} ${playfairDisplay.className}`}>{country}</span>
            </div>
            <div className={style.details__wrapper}>
              <span className={`${style.details__about} ${montserrat.className}`}>РЕГИОН</span>
              <span className={`${style.details__value} ${playfairDisplay.className}`}>{region}</span>
            </div>
            <div className={style.details__wrapper}>
              <span className={`${style.details__about} ${montserrat.className}`}>ВИНОГРАД</span>
              <span className={`${style.details__value} ${playfairDisplay.className}`}>	Bordeaux Blend, Cabernet Franc,</span>
            </div>
          </div>

          <p className={`${style['aboutWine__reviwe-title']} ${playfairDisplay.className}`}>Отзывы</p>
          <span className={`${style['aboutWine__review-owner']} ${montserrat.className}`}>
            ROBERT PARKER (99)
          </span>
          <p className={`${style.aboutWine__rewiew} ${playfairDisplay.className}`}>{comment}</p>
        </div>
      </main>
    </>
  );
}

export default AboutWine;
