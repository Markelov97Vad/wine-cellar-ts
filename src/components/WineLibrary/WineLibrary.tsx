import WineCardList from './WineCardList/WineCardList';
import './WineLibrary.scss';

function WineLibrary() {
  return ( 
    <section className='wine-library'>
      <div className='wine-library__wrapper'>
        <div className='wine-library__block'></div>
        <div className='wine-library__filter-headers'>
          <div>filter</div>
          <div>volume</div>
        </div>
        <div className='wine-library__side-bar'>side-bar</div>
        <WineCardList/>
      </div>
    </section>
   );
}

export default WineLibrary;