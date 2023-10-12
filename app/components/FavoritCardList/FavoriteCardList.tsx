"use client";
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import styles from './FavoriteCardList.module.scss';
import { use, useEffect, useState } from 'react';
import { Wine } from '@/types/wine.type';
import { addFavorite } from '@/app/store/wine/wineSlice';
import { addNewWine, getWines } from '@/app/store/wine/wineApi';
import WineCard from '../WineLibrary/WineCard/WineCard';

function FavoriteCardList() {
  const dispatch = useAppDispatch();
  const { wines , loading, isSuccess } = useAppSelector(state => state.wines);
  const { user } = useAppSelector(state => state.user);
  const [favoriteWines, setFavoritesWines] = useState<Wine[]>([]);

  useEffect(() => {
     dispatch(getWines());
    
  }, []);

  useEffect(() => {
    // dispatch(getWines());
    setFavoritesWines(() =>  {
      return wines.filter(wine => {
        return wine.likes?.some( like => {
          return like._id === user?._id
        })
      })
    });
    
    
  }, [wines]);

  useEffect(() => {
    console.log(favoriteWines);
    console.log(wines);
    
  
  }, [wines]);

  return (
    <div className={styles['favorite-card-list']}>
      {
        favoriteWines.map(wine => (
          <WineCard key={wine._id} wineElem={wine}/>
        ))
      }
    </div>
  );
}

export default FavoriteCardList;