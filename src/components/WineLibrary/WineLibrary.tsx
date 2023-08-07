import WineCard from './WineCard/WineCard';
import './WineLibrary.scss';

function WineLibrary() {
  return ( 
    <section className='wine-library'>
      <div>
        <WineCard/>
      </div>
    </section>
   );
}

export default WineLibrary;