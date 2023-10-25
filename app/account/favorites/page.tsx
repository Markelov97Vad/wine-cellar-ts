'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import WineCard from '@/app/components/WineLibrary/WineCard/WineCard';
import { Wine } from '@/types/wine.type';
import { montserrat, playfairDisplay } from '@/app/fonts';
import { useGetFavoriteWineQuery, useLazyGetFavoriteWineQuery } from '@/app/store/wine-query/reducer';

function Favorites() {
  const [getFavoriteWine, { data }] = useLazyGetFavoriteWineQuery({
    refetchOnReconnect: true
  });

  useEffect(() => {
    const token = localStorage.getItem('jwt')
    getFavoriteWine(token!);
  }, []);

  return (
    <>
      <div className={`${styles.favorites__info} ${playfairDisplay.className}`}>
        <h3 className={styles.favorites__title}>Избранное</h3>
        <p className={styles.favorites__subtitle}>
          Здесь вы можете хранить понравившиеся вам вина. Нажмите на символ в
          виде сердца в любом месте веб-сайта, чтобы добавить вино в этот
          список, и нажмите еще раз, чтобы удалить его.
        </p>
      </div>

      <div className={`${styles['favorites__list-container']} ${montserrat.className}`}>
        {data?.map((wine: Wine) => (
          <WineCard key={wine._id} wineElem={wine} />
        ))}
      </div>
    </>
  );
}

export default Favorites;
