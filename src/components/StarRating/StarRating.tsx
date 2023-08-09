import './StarRating.scss'
import { useEffect, useState } from 'react';

import starOff from '../../assets/images/star-off.svg'
import starOn from '../../assets/images/star-on.svg'

type StarRatingType = {
  handleReiting: (reiting: number) => void
}

function StarRating({ handleReiting } : StarRatingType ) {

  const [rating, setRating ] = useState<number>(0)
  const [hover, setHover ] = useState<number>(0)

  useEffect(() => {
    console.log(rating);
    handleReiting(rating)
  }, [rating])
  

  return (
    <div className='star-rating'>
      { [...Array(5)].map((star, i) => {
        const ratingVal = i + 1;
        return (
          <label key={i} className='star-rating__label'>
            <input 
              className='star-rating__input'
              onClick={() => setRating(ratingVal)}
              value={ratingVal}
              type="radio"
              name="rating"
            />
            <img 
              className='star-rating__img'
              src={ratingVal > ( hover || rating ) ? starOff : starOn} 
              alt="звезда"
              onMouseEnter={() => setHover(ratingVal)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        )
      })
      }
    </div>
  );
}

export default StarRating;