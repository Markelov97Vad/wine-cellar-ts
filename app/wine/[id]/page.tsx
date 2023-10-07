'use client';
import Header from '@/app/components/Header/Header';
import style from './page.module.scss';
import Image from 'next/image';
import StarRating from '@/app/components/StarRating/StarRating';
import StarRaitingDisabled from '@/app/components/StarRaitingDisabled/StarRaitingDisabled';
import wineImg from '@/public/images/wine-img.webp';
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { useEffect } from 'react';
import { getCurrentWine } from '@/app/store/wine/wineApi';
import { montserrat, playfairDisplay } from '@/app/fonts';

// export function generateMetadata({ params }: { params: { id: string } }) {
//   // const { name } = useAppSelector((state) => state.wines.currentWine);
//   return {
//     title: 'LLLLL'
//   }
// }

function AboutWine({ params }: { params: { id: string } }) {
  const dispatch = useAppDispatch();
  const {
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
  } = useAppSelector((state) => state.wines.currentWine);

  useEffect(() => {
    dispatch(getCurrentWine(params.id));
  }, []);

  return (
    <>
      <main className={style.aboutWine}>
        <div className={style.aboutWine__imgContainer}>
          <img
            className={style.aboutWine__image}
            src={image!}
            alt="бутылка вина"
          />
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
