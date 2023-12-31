import style from './WineCard.module.scss';
import { Wine } from '../../../../types/wine.type';
import Link from 'next/link';
import { useAppSelector } from '@/app/hooks/redux';
import { useEffect, useState } from 'react';
import StarRaitingDisabled from '../../StarRaitingDisabled/StarRaitingDisabled';
import ButtonLike from '../../ui/ButtonLike/ButtonLike';
import {
  useAddFavoriteWineMutation,
  useDeleteFavoriteWineMutation,
} from '@/app/store/wine-query/reducer';
import Button from '../../ui/Button/Button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type WineCardProps = {
  wineElem: Wine;
};

function WineCard({ wineElem }: WineCardProps) {
  const { rating, brand, image, name, year, _id, likes } = wineElem;
  const [addFavorite] = useAddFavoriteWineMutation();
  const [deleteFavorite] = useDeleteFavoriteWineMutation();
  const { isLoggedIn, currentUser } = useAppSelector((state) => state.user);
  const [isLiked, setIsLiked] = useState<boolean | undefined>(false);
  const { push } = useRouter()

  const handleClick = async () => {
    const token = localStorage.getItem('jwt');
    if (isLoggedIn) {
      if (!isLiked) {
        await addFavorite({id: _id!, token: token!}).unwrap(); // корректная работа пропсов (isError, isLoading..)
      } else {
        await deleteFavorite({id: _id!, token: token!}).unwrap();
      }
    } else {
      push('login');
    }
  };

  useEffect(() => {
    setIsLiked(likes?.some((user) => {
      return user === currentUser?._id
    }));
  }, [likes]);

  return (
    <article className={`${style['wine-card']}`}>
      <ButtonLike extraClass={style['wine-card__button-like']} handleClick={handleClick} isLiked={isLiked} />
      <Link className={style['wine-card__link']} href={`/wine/${_id}/`}>
        <div className={style['wine-card__container']}>
          <span className={style['wine-card__brand']}>{brand}</span>
          <Image loading='lazy' alt='Бутылка вина' width={800} height={800} className={style['wine-card__image']} src={image!} />
        </div>
        <h3 className={`${style['wine-card__title']}`}>{name}</h3>
        <span className={style['wine-card__year']}>{year}</span>
        <div className={style['wine-card__container']}>
          <StarRaitingDisabled rating={rating} />
          <Button
            extraClass={style['wine-card__button-info']}
            text="Подробнее"
          />
        </div>
      </Link>
    </article>
  );
}

export default WineCard;
