import style from './WineCard.module.scss';
import { Wine } from '../../../../types/wine.type';
import Image from 'next/image';
import LikeIcon from '@/app/components/Icons/LikeIcon';
import Link from 'next/link';

type WineCardProps = {
  wineElem: Wine;
};

function WineCard({ wineElem }: WineCardProps) {
  const { country, brand, image, name, year, _id } = wineElem;

  return (
    <Link className={style.link} href={`/wine/${_id}/`}>
      <article className={style['wine-card']}>
        <span className={style['wine-card__country']}>{brand}</span>
        <button className={style['wine-card__button-like']}>
          <LikeIcon />
        </button>
        <img className={style['wine-card__image']} src={image!} />
        <h3 className={style['wine-card__title']}>{name}</h3>
        <span className={style['wine-card__year']}>{brand}</span>
        <span className={style['wine-card__year']}>{year}</span>
        <span className={style['wine-card__rating']}>4 звезды</span>
        <button className={style['wine-card__button-info']}>Ещё</button>
      </article>
    </Link>
  );
}

export default WineCard;
