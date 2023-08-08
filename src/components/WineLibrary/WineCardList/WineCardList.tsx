import WineCard from '../WineCard/WineCard';
import './WineCardList.scss';

function WineCardList() {
  return (
     <div className='wine-card-list'>
      <WineCard />
      <WineCard />
      <WineCard />
     </div>
  );
}

export default WineCardList;