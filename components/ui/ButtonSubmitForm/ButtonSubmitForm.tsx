import styles from './buttonSubmitForm.module.scss'

function ButtonSubmitForm({ extraClass, text } : {extraClass?: string, text: string}) {
  return ( 
    <button className={`${styles['button-submit-form']} ${extraClass}`}>{text}</button>
   );
}

export default ButtonSubmitForm;