'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.scss';
import WineCard from '@/app/components/WineLibrary/WineCard/WineCard';
import { Wine } from '@/types/wine.type';
import { playfairDisplay } from '@/app/fonts';
import { useGetFavoriteWineQuery } from '@/app/store/wine-query/reducer';

function Favorites() {
  const { data } = useGetFavoriteWineQuery('');
  const [favoriteWines, setFavoritesWines] = useState<Wine[] | undefined>([]);

  useEffect(() => {
    setFavoritesWines(data);
  }, [data]);

  return (
    <>
      <div className={`${styles.favorites__info} ${playfairDisplay.className}`}>
        <h3 className={styles.favorites__title}>My favorites</h3>
        <p className={styles.favorites__subtitle}>
          Your list of your favourite wines or whiskies. Click on the heart
          symbol of a wine anywhere on the website to add a wine to this list
          and click again to remove it.
        </p>
      </div>

      <div className={styles['favorites__list-container']}>
        {favoriteWines?.map((wine: Wine) => (
          <WineCard key={wine._id} wineElem={wine} />
        ))}
      </div>
    </>
  );
}

export default Favorites;
