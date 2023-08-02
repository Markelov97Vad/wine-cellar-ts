import styles from './starRating.module.scss';
import starOff from '../../assets/images/star-off.svg'
import starOn from '../../assets/images/star-on.svg'
import { useEffect, useState } from 'react';

type StarRatingType = {
  handleReiting: (reiting: number) => void
}

function StarRating({ handleReiting } : StarRatingType ) {

  const [rating, setRating ] = useState<number>(0)
  const [hover, setHover ] = useState<number>(0)
  // const handleRating = () => {
  //   setRating(ra)
  // }
  useEffect(() => {
    console.log(rating);
    handleReiting(rating)
    // gsap.fromTo()
  }, [rating])
  

  return (
    <div>
      { [...Array(5)].map((star, i) => {
        const ratingVal = i + 1;
        return (
          <label key={i} className={styles.starRating__label}>
            <input 
              className={styles.starRating__input}
              onClick={() => setRating(ratingVal)}
              value={ratingVal}
              type="radio"
              name="rating"
            />
            <img 
              className={styles.starRating__img} 
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