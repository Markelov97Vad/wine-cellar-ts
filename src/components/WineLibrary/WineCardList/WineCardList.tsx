import { Wine } from '../../../types/wine.type';
import WineCard from '../WineCard/WineCard';
import './WineCardList.scss';

type WineCardListProps = {
  wine: Wine[]
}

function WineCardList({ wine } : WineCardListProps) {
  return (
     <div className='wine-card-list'>
      { 
        wine.map(( wineElem, id) => (
          <WineCard key={id} wineElem={wineElem}/>
        ))
      }
      {/* <WineCard />
      <WineCard />
      <WineCard /> */}
     </div>
  );
}

export default WineCardList;