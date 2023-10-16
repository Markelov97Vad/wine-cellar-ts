import { ButtonTypeProps } from "@/types/componentProps.types";
import styles from './Button.module.scss'

function Button({text, extraClass, onClick} : ButtonTypeProps) {
  return (
    <button onClick={onClick} className={`${styles.button} ${extraClass}`} type="button">{text}</button>
  );
}

export default Button;
