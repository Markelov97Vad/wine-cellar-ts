import styles from './addWineComponent.module.scss'
import grapes from '../../assets/images/image-grape.svg'
import barrel from '../../assets/images/image-barrel.svg'
import ButtonSubmitForm from '../ui/ButtonSubmitForm/ButtonSubmitForm';
import StarReiting from '../StarRating/StarRating';
import FormComponent from '../FormComponent/form-component';

function addWineComponent() {
  return ( 
    <section className={styles.addWine}>
      <div className={styles.wrapper}>
        <img className={styles.imgGrapes} src={grapes} alt="виноград" />
        <img className={styles.imgBarrel} src={barrel} alt="бочка" />
        <h2 className={styles.title}>Добавить в библиотеку</h2>
        <p className={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum.</p>
        <FormComponent/>
      </div>
    </section>
   );
}

export default addWineComponent;