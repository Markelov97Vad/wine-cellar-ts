import { useEffect, useState } from 'react';
import WineCard from '../components/WineLibrary/WineCard/WineCard';
import styles from './page.module.scss'
import { Wine } from '@/types/wine.type';
import { useGetFavoriteWineQuery } from '../store/wine-query/reducer';

function Account() {
  const { data } = useGetFavoriteWineQuery('');
  const [favoriteWines, setFavoritesWines] = useState<Wine[] | undefined>([]);

  useEffect(() => {
    setFavoritesWines(data);
  }, [data]);
  return (
    <main className={styles.account}>
        <div >
        {favoriteWines?.map((wine: Wine) => (
          <WineCard key={wine._id} wineElem={wine} />
        ))}
      </div>
    </main>
  );
}

export default Account;
