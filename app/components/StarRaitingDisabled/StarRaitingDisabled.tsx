import Image from 'next/image';
import style from './StarRaitingDisabled.module.scss';
import starOff from '@/public/images/star-off.svg';
import starOn from '@/public/images/star-on.svg';

function StarRaitingDisabled({ rating = 5 }: { rating?: number }) {
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingVal = i + 1;
        return (
          <Image
            key={i}
            className={style['star-rating__img']}
            src={ratingVal > rating ? starOff : starOn}
            alt="звезда"
          />
        );
      })}
    </div>
  );
}

export default StarRaitingDisabled;
