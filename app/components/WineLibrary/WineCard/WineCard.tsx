import style from './WineCard.module.scss';
import { Wine } from '../../../../types/wine.type';
import Image from 'next/image';
import LikeIcon from '@/app/components/Icons/LikeIcon';
import Link from 'next/link';

type WineCardProps = {
  wineElem: Wine;
};

function WineCard({ wineElem }: WineCardProps) {
  const { country, image, name, year, _id } = wineElem;
  console.log(_id);
  

  return (
    <article className={style['wine-card']}>
      <Link href={`/wine/${_id}`}>
        <span className={style['wine-card__country']}>{country}</span>
        <button className={style['wine-card__button-like']}>
          <LikeIcon />
        </button>
        <img className={style['wine-card__image']} src={image!} />
        {/* <Image className={style['wine-card__image']} width={100} height={100} src={image!} /> */}
        <h3 className={style['wine-card__title']}>{name}</h3>
        <span className={style['wine-card__year']}>{year}</span>
        <span className={style['wine-card__rating']}>4 звезды</span>
        <button className={style['wine-card__button-info']}>Ещё</button>
      </Link>
    </article>
  );
}

export default WineCard;
