import { ButtonLikeProps } from '@/types/componentProps.types';
import Dislike from '../../Icons/Dislike';
import LikeIcon from '../../Icons/LikeIcon';
import styles from './ButtonLike.module.scss';

function ButtonLike({ handleClick, isLiked, extraClass}: ButtonLikeProps) {
  return (
    <button onClick={handleClick} className={`${styles['button-like']} ${extraClass}`}>
      {!isLiked ? <LikeIcon /> : <Dislike />}
    </button>
  );
}

export default ButtonLike;
