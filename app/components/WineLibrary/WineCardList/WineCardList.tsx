'use client';
import { useEffect } from 'react';
import WineCard from '../WineCard/WineCard';
import style from './WineCardList.module.scss';
import { getWines } from '../../../store/wine/wineApi';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { useFetchUserWinesQuery } from '@/app/store/currentUserWine/reducer';

function WineCardList() {
  const dispatch = useAppDispatch();
  const { wines } = useAppSelector((state) => state.wines);
  const { isLoading , data, isError, error } = useFetchUserWinesQuery('', {
    // refetchOnFocus: true
  });

  useEffect(() => {
    dispatch(getWines());
  }, [dispatch]);

  return (
    <div className={style['wine-card-list']}>
      {wines.map((wineElem, id) => (
        <WineCard key={id} wineElem={wineElem} />
      ))}
    </div>
  );
}

export default WineCardList;
