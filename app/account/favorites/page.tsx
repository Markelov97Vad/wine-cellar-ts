"use client"
import { useEffect, useState } from "react";
import styles from './page.module.scss'
import WineCard from "@/app/components/WineLibrary/WineCard/WineCard";
import { useAppDispatch, useAppSelector } from "@/app/hooks/redux";
import { useGetFavoriteWineQuery, useLazyGetFavoriteWineQuery } from "@/app/store/currentUserWine/reducer";
import { Wine } from "@/types/wine.type";
import { playfairDisplay } from "@/app/fonts";

// export const metadata: Metadata = {
//   title: 'Favorite'
// }

function Favorites() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.user);
  const { data } = useGetFavoriteWineQuery('', {
    // refetchOnFocus: true
    // refetchOnMountOrArgChange: true
  });
  const [favoriteWines, setFavoritesWines] = useState<Wine[]>([]);

  useEffect(() => {
    setFavoritesWines(data)
  }, [data])

  return (
    // <section className={styles.favorites}>
    <>
      <div className={`${styles.favorites__info} ${playfairDisplay.className}`}>
        <h3 className={styles.favorites__title}>My favorites</h3>
        <p className={styles.favorites__subtitle}>Your list of your favourite wines or whiskies. Click on the heart symbol of a wine anywhere on the website to add a wine to this list and click again to remove it.</p>
      </div>

      <div className={styles["favorites__list-container"]}>
        {
          favoriteWines?.map((wine: Wine)=> (
            <WineCard key={wine._id} wineElem={wine}/>
          ))
        }
        {
          favoriteWines?.map((wine: Wine)=> (
            <WineCard key={wine._id} wineElem={wine}/>
          ))
        }
      </div>
    </>
    // </section>
  );
}

export default Favorites;
