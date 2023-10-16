import style from './WineCard.module.scss';
import { Wine } from '../../../../types/wine.type';
import Link from 'next/link';
import { montserrat } from '@/app/fonts';
import { useAppSelector } from '@/app/hooks/redux';
import { useEffect, useState } from 'react';
import StarRaitingDisabled from '../../StarRaitingDisabled/StarRaitingDisabled';
import ButtonLike from '../../ui/ButtonLike/ButtonLike';
import { useAddFavoriteWineMutation, useDeleteFavoriteWineMutation } from '@/app/store/wine-query/reducer';
import Button from '../../ui/Button/Button';

type WineCardProps = {
  wineElem: Wine;
};

function WineCard({ wineElem }: WineCardProps) {
  const { rating, brand, image, name, year, _id, likes } = wineElem;
  const [addFavorite, { isSuccess: isSuccessAdd }] =
    useAddFavoriteWineMutation();
  const [deleteFavorite, { isSuccess: isSuccessDel }] =
    useDeleteFavoriteWineMutation();
  const { isLoggedIn } = useAppSelector((state) => state.user);
  const [isLiked, setIsLiked] = useState<boolean | undefined>(false);

  const handleClick = async () => {
    if (isLoggedIn) {
      if (!isLiked) {
        await addFavorite(_id!).unwrap(); // корректная работа пропсов (isError, isLoading..)
      } else {
        await deleteFavorite(_id!).unwrap();
      }
    }
  };

  useEffect(() => {
    setIsLiked(likes?.some((user) => user._id === user._id));
  }, [likes]);

  return (
    <article className={`${style['wine-card']} ${montserrat.className}`}>
      <ButtonLike handleClick={handleClick} isLiked={isLiked} />
      <Link className={style['wine-card__link']} href={`/wine/${_id}/`}>
        <div className={style['wine-card__container']}>
          <span className={style['wine-card__brand']}>{brand}</span>
          <img className={style['wine-card__image']} src={image!} />
        </div>
        <h3 className={`${style['wine-card__title']}`}>{name}</h3>
        <span className={style['wine-card__year']}>{year}</span>
        <div className={style['wine-card__container']}>
          <StarRaitingDisabled rating={rating} />
          <Button extraClass={style['wine-card__button-info']} text='Подробнее'/>
          {/* // <button className={style['wine-card__button-info']}>Подробнее</button> */}
        </div>
      </Link>
    </article>
  );
}

export default WineCard;
