import { ButtonSubmitFormProps } from '@/types/componentProps.types';
import styles from './ButtonSubmitForm.module.scss'

function ButtonSubmitForm({ extraClass, disabled = false, text} : ButtonSubmitFormProps) {
  return ( 
    <button className={`${styles['button-submit-form']}  ${extraClass} ${disabled ? styles['button-submit-form_disabled'] : ''}`} disabled={disabled}>{text}</button>
   );
}

export default ButtonSubmitForm;