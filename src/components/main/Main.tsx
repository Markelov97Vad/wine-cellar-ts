import './Main.scss';
import Header from "../header/Header";
import Promo from "../promo/Promo";
import AddWineComponent from "../AddWineComp/addWineComp";
import backgroundVideo from '../../assets/video/background-video.mp4'
import WineLibrary from '../WineLibrary/WineLibrary';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useEffect } from 'react';
import { getWines } from '../../store/wine/wineApi';

function Main() {

  // const dispatch = useAppDispatch()
  // const { wines }= useAppSelector(state => state.wines)

  // useEffect(() => {
  //   dispatch(getWines());
  //   console.log(1);
    
  // }, [dispatch]);

  return ( 
    <main>
      <video className='main__video' autoPlay playsInline preload='auto' data-video='0' loop muted>
        <source src={backgroundVideo} type="video/mp4"/>
      </video>
      <Header/>
      <Promo />
      <AddWineComponent/>
      <WineLibrary />
    </main>
   );
}

export default Main;