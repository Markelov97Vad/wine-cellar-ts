import { CheckboxTypeProps } from '@/types/componentProps.types';
import styles from './CheckboxType.module.scss';

function CheckboxType({ id, text, name, handleChangeCheckbox }: CheckboxTypeProps) {
  return (
    <div className={`${styles['checkbox-type']}`}>
      <input onChange={handleChangeCheckbox} type="checkbox" name="typeWine" id={id} value={text} />
      <label htmlFor={id}>{text}</label>
    </div>
  );
}

export default CheckboxType;
