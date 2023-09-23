"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';

import style from './StarRating.module.scss';

import starOff from '@/public/images/star-off.svg';
import starOn from '@/public/images/star-on.svg';

type StarRatingType = {
  handleReiting: (rating: number) => void
}

function StarRating({ handleReiting } : StarRatingType ) {

  const [rating, setRating ] = useState<number>(0)
  const [hover, setHover ] = useState<number>(0)

  useEffect(() => {
    console.log(rating);
    handleReiting(rating)
  }, [rating])
  

  return (
    <div>
      { [...Array(5)].map((star, i) => {
        const ratingVal = i + 1;
        return (
          <label key={i}>
            <input 
              className={style['star-rating__input']}
              onClick={() => setRating(ratingVal)}
              value={ratingVal}
              type="radio"
              name="rating"
            />
            <Image
              className={style['star-rating__img']}
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