import styles from './buttonSubmitForm.module.scss'

function ButtonSubmitForm({ extraClass, text } : {extraClass?: string, text: string}) {
  return ( 
    <button className={`${styles.buttonSubmitForm} ${extraClass}`}>{text}</button>
   );
}

export default ButtonSubmitForm;