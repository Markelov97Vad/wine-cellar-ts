import { ButtonCrossProps } from '@/types/componentProps.types';
import CrossIcon from '../../Icons/CrossIcon';
import styles from './ButtonCross.module.scss'

function ButtonCross({extraClass = '', handleClick} : ButtonCrossProps) {
  return (
    <button onClick={handleClick} className={`${styles['button-cross']} ${extraClass}`} type="button">
      <CrossIcon/>
    </button>
  );
}

export default ButtonCross;