import styles from './wineForm.module.scss'
import grapes from '../../assets/images/image-grape.svg'
import barrel from '../../assets/images/image-barrel.svg'
import ButtonSubmitForm from '../ui/ButtonSubmitForm/ButtonSubmitForm';

function WineForm() {
  return ( 
    <section className={styles.wineForm}>
      <div className={styles.wineForm__wrapper}>
        <img className={`${styles.wineForm__img} ${styles.wineForm__img_type_grapes}`} src={grapes} alt="виноград" />
        <img className={`${styles.wineForm__img} ${styles.wineForm__img_type_barrel}`} src={barrel} alt="бочка" />
        <h2 className={styles.wineForm__title}>Добавить в библиотеку</h2>
        <p className={styles.wineForm__subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum.</p>
        <form name='wine-form' className={styles.wineForm__form}>
          <fieldset className={styles.wineForm__fieldest}>
            <input placeholder='Имя' type="text" className={styles.wineForm__input}/>
            <input placeholder='Телефон' type="text" className={styles.wineForm__input}/>
          </fieldset>
          <input className={`${styles.wineForm__input} ${styles.wineForm__input_size_b}`} placeholder='Ссылка' type="url" />
          {/* <button type='submit'>Добавить</button> */}
          <ButtonSubmitForm/>
        </form>
      </div>
    </section>
   );
}

export default WineForm;