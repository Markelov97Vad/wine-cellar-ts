import { CheckboxTypeProps } from '@/types/componentProps.types';
import styles from './CheckboxType.module.scss';

function CheckboxType({checked, id, text, name, handleChangeCheckbox }: CheckboxTypeProps) {
  return (
    <div className={`${styles['checkbox-type']}`}>
      <input checked={checked} onChange={handleChangeCheckbox} type="checkbox" name="typeWine" id={id} value={text} />
      <label htmlFor={id}>{text}</label>
    </div>
  );
}

export default CheckboxType;
