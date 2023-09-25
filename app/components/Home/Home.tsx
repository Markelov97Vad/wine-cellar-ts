'use client';
import Image from 'next/image';
import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import WineLibrary from '../WineLibrary/WineLibrary';
import AddWineComp from '@/app/components/AddWineComp/AddWineComp';
import glass from '@/public/images/wine-glass.jpeg';
import style from './Home.module.scss';
import { useEffect } from 'react';
import { useAppDispatch } from '@/app/hooks/redux';
import { checkAuthUser } from '@/app/store/user/userApi';

function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthUser());
  },[])
  return (
    <>
      {/* <Header /> */}
      <main>
        {/* <video  className={style.root__video} autoPlay playsInline preload='auto' data-video='0' loop muted>
          <source src={require('@/public/video/background-video.mp4')} type="video/mp4"/>
        </video> */}
        <Image
          priority
          src={glass}
          alt="Бокал вина"
          className={style.root__video}
        />
        <Promo />
        {/* <AddWineComp /> */}
        <WineLibrary />
      </main>
    </>
  );
}

export default Home;
