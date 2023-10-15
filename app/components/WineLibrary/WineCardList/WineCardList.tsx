'use client';
import { useEffect } from 'react';
import WineCard from '../WineCard/WineCard';
import style from './WineCardList.module.scss';
import { Wine } from '@/types/wine.type';
import { useFetchUserWinesQuery } from '@/app/store/wine-query/reducer';

function WineCardList({wines} : {wines : Wine[]}) {
  const { isLoading , data, isError, error } = useFetchUserWinesQuery('', {
    // refetchOnFocus: true
  });

  return (
    <div className={style['wine-card-list']}>
      {wines?.map((wineElem, id) => (
        <WineCard key={id} wineElem={wineElem} />
      ))}
    </div>
  );
}

export default WineCardList;
