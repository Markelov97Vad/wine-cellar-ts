import './Main.scss';
import Header from "../header/Header";
import Promo from "../promo/Promo";
import AddWineComponent from "../AddWineComponent/AddWineComponent";
import backgroundVideo from '../../assets/video/background-video.mp4'
import * as mainApi from '../../utils/mainApi'
import { Wine } from "../../types/wine.type";
import WineLibrary from '../WineLibrary/WineLibrary';
import { useEffect, useState } from 'react';

function Main() {
  const [ wines, setWines] = useState<Wine[]>([{
    name: '',
    region: '',
    grapeVariety: '',
    country: '',
    typeWine: '',
    year: '',
    image: '',
    reiting: 0,
    comment: ''
  }])

  const handleAddWine = (newWine: Wine) => {
    console.log(newWine);
    mainApi
      .createWine(newWine)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    mainApi.getAllWines()
      .then(AllWines => {
        console.log('Allwines',AllWines);
        if (AllWines === undefined) {
          setWines([
            {
              name: 'test',
              region: 'test',
              grapeVariety: 'test',
              country: 'test',
              typeWine: 'test',
              year: 'test',
              image: 'test',
              reiting: 0,
              comment: 'test'
            }
          ])
        } else {
          setWines(AllWines)
        }
      })
      .catch(err => {
        console.log(err)
      });
  }, [])

  return ( 
    <main>
      <video className='main__video' autoPlay playsInline preload='auto' data-video='0' loop muted>
        <source src={backgroundVideo} type="video/mp4"/>
      </video>
      <Header/>
      <Promo />
      <AddWineComponent handleAddWine={handleAddWine}/>
      <WineLibrary wine={wines}/>
    </main>
   );
}

export default Main;