'use client';
import { useEffect } from 'react';
import WineLibrary from '../components/WineLibrary/WineLibrary';
import style from './page.module.scss';
import { useFetchUserWinesQuery } from '../store/currentUserWine/reducer';

function MyWines() {
  const { isLoading } = useFetchUserWinesQuery('');
  useEffect(() => {
    console.log('is loading my-wine',isLoading);
    
  }, []);
  return (
    <>
      <main className={style['my-wine']}>
        <WineLibrary/>
      </main>
    </>
  );
}

export default MyWines;