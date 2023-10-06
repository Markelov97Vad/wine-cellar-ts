import style from './WineCard.module.scss';
import { Wine } from '../../../../types/wine.type';
import Image from 'next/image';
import LikeIcon from '@/app/components/Icons/LikeIcon';
import Link from 'next/link';
import { montserrat, playfairDisplay } from '@/app/fonts';

type WineCardProps = {
  wineElem: Wine;
};

function WineCard({ wineElem }: WineCardProps) {
  const { country, brand, image, name, year, _id } = wineElem;

  return (
    <article className={`${style['wine-card']} ${montserrat.className}`}>
        <button className={style['wine-card__button-like']}>
          <LikeIcon />
        </button>
        <Link className={style['wine-card__link']} href={`/wine/${_id}/`}>
        <div className={style['wine-card__container']}>
          <span className={style['wine-card__brand']}>{brand}</span>
          <img className={style['wine-card__image']} src={image!} />
        </div>
        <h3 className={`${style['wine-card__title']}`}>{name}</h3>
        {/* <span className={style['wine-card__year']}>{brand}</span> */}
        <span className={style['wine-card__year']}>{year}</span>
        {/* <span className={style['wine-card__rating']}>4 звезды</span> */}
        <button className={style['wine-card__button-info']}>Подробнее</button>
        </Link>
      </article>
  );
}

export default WineCard;
