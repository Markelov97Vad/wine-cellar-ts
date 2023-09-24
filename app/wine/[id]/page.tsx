'use client';
import Header from '@/app/components/Header/Header';
import style from './AboutWine.module.scss';
import Image from 'next/image';
import StarRating from '@/app/components/StarRating/StarRating';
import StarRaitingDisabled from '@/app/components/StarRaitingDisabled/StarRaitingDisabled';
import wineImg from '@/public/images/wine-img.webp';
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { useEffect } from 'react';
import { getCurrentWine } from '@/app/store/wine/wineApi';

function AboutWine({ params }: { params: { id: string } }) {
  console.log('ID', params);
  const dispatch = useAppDispatch();
  const {
    name,
    colorWine,
    country,
    region,
    grapeVariety,
    typeWine,
    year,
    comment,
    image,
    rating,
  } = useAppSelector((state) => state.wines.currentWine);

  useEffect(() => {
    dispatch(getCurrentWine(params.id));
  }, []);

  return (
    <>
      {/* <Header /> */}
      <main className={style.aboutWine}>
        <div className={style.aboutWine__imgContainer}>
          <img
            className={style.aboutWine__image}
            src={image!}
            alt="бутылка вина"
          />
        </div>

        <div className={style['aboutWine__info-wrapper']}>
          <h1 className={style.aboutWine__title}>{name}</h1>
          <p className={style.aboutWine__subtitle}>AUDEANT</p>
          <StarRaitingDisabled rating={rating} />
          <div className={style.details}>
            <div className={style.details__wrapper}>
              <span className={style.details__about}>ТИП</span>
              <span className={style.details__value}>{colorWine}</span>
            </div>
            <div className={style.details__wrapper}>
              <span className={style.details__about}>БРЭНД</span>
              <span className={style.details__value}>{colorWine}</span>
            </div>
            <div className={style.details__wrapper}>
              <span className={style.details__about}>ГОД</span>
              <span className={style.details__value}>{year}</span>
            </div>
            <div className={style.details__wrapper}>
              <span className={style.details__about}>СТРАНА</span>
              <span className={style.details__value}>{country}</span>
            </div>
            <div className={style.details__wrapper}>
              <span className={style.details__about}>ВИНОГРАД</span>
              <span className={style.details__value}>{grapeVariety}</span>
            </div>
          </div>

          <p className={style['aboutWine__reviwe-title']}>Отзывы</p>
          <span className={style['aboutWine__review-owner']}>
            ROBERT PARKER (99)
          </span>
          <p className={style.aboutWine__rewiew}>{comment}</p>
        </div>
      </main>
    </>
  );
}

export default AboutWine;
