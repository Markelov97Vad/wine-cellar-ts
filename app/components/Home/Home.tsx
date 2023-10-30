'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import WineLibrary from '../WineLibrary/WineLibrary';
import gif from '@/public/images/background-video.gif'
import style from './Home.module.scss';
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { checkAuthUser } from '@/app/store/user/userApi';
import { useFetchWinesQuery } from '@/app/store/wine-query/reducer';

function Home() {
  const dispatch = useAppDispatch();
  const { data , isLoading } = useFetchWinesQuery('', {
    refetchOnMountOrArgChange: true
  })
  const { isLoggedIn } = useAppSelector(state => state.user);

  useEffect(() => {
    const token = localStorage.getItem('jwt')
    dispatch(checkAuthUser(token!));
  },[isLoggedIn])

  return (
    <>
      <main>
        <div className={style.root__wrapper}>
        <Header />
          <Image
            fetchPriority='high'
            priority={true}
            src={gif}
            alt="Бокал вина"
            className={style.root__video}
          />
          <Promo />
        </div>
        <WineLibrary wines={data} isLoading={isLoading}/>
      </main>
    </>
  );
}

export default Home;
