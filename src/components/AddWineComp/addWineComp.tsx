import './AddWineComp.scss';
import grapes from '../../assets/images/image-grape.svg'
import barrel from '../../assets/images/image-barrel.svg'
import { addWineComponentType } from '../../types/componentProps.types';
import FormComponent from '../FormComponent/FormComponent';

function addWineComp({ handleAddWine } : addWineComponentType) {
  return ( 
    <section className='add-wine'>
      <div className='add-wine__wrapper'>
        <img className='add-wine__img-grapes' src={grapes} alt="виноград" />
        <img className='add-wine__img-barrel' src={barrel} alt="бочка" />
        <h2 className='add-wine__title'>Добавить в библиотеку</h2>
        <p className='add-wine__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi sit non sit sed fermentum.</p>
        <FormComponent handleSubmit={handleAddWine}/>
      </div>
    </section>
   );
}

export default addWineComp;