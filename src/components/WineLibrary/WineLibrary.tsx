import { Wine } from '../../types/wine.type';
import WineCardList from './WineCardList/WineCardList';
import './WineLibrary.scss';

type WineLibraryProps = {
  wine: Wine[]
}

function WineLibrary({ wine }: WineLibraryProps) {
  return ( 
    <section className='wine-library'>
      <div className='wine-library__wrapper'>
        <div className='wine-library__block'></div>
        <div className='wine-library__filter-headers'>
          <div>filter</div>
          <div>volume</div>
        </div>
        <div className='wine-library__side-bar'>side-bar</div>
        <WineCardList wine={wine}/>
      </div>
    </section>
   );
}

export default WineLibrary;