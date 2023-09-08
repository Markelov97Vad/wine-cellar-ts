import { useEffect } from 'react';
import WineCard from '../WineCard/WineCard';
import './WineCardList.scss';
import { getWines } from '../../../store/wine/wineApi';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';


function WineCardList() {
  const dispatch = useAppDispatch()
  const { wines }= useAppSelector(state => state.wines)

  useEffect(() => {
    dispatch(getWines());
    // console.log(1);
    
  }, [dispatch]);

  return (
     <div className='wine-card-list'>
      { 
        wines.map(( wineElem, id) => (
          <WineCard key={id} wineElem={wineElem}/>
        ))
      }
     </div>
  );
}

export default WineCardList;