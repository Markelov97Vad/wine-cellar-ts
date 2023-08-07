import './Main.scss';
import Header from "../header/Header";
import Promo from "../promo/Promo";
import AddWineComponent from "../AddWineComponent/AddWineComponent";
import backgroundVideo from '../../assets/video/background-video.mp4'
import * as mainApi from '../../utils/mainApi'
import { Wine } from "../../types/wine.type";
import WineLibrary from '../WineLibrary/WineLibrary';

function Main() {

  const handleAddWine = (newWine: Wine) => {
    console.log(newWine);
    mainApi
      .createWine(newWine)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return ( 
    <main>
      <video className='main__video' autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4"/>
      </video>
      <Header/>
      <Promo />
      <AddWineComponent handleAddWine={handleAddWine}/>
      <WineLibrary/>
    </main>
   );
}

export default Main;