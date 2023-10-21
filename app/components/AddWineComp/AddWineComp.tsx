import style from './AddWineComp.module.scss';
import grapes from '@/public/images/image-grape.svg'
import barrel from '@/public/images/image-barrel.svg'
import Image from 'next/image';
import FormComponent from '../FormComponent/FormComponent';
import { playfairDisplay } from '@/app/fonts';

function addWineComp() {
  return (
    <section className={style['add-wine']}>
      <div className={style['add-wine__wrapper']}>
        <Image className={style['add-wine__img-grapes']} src={grapes} alt="виноград" />
        <Image className={style['add-wine__img-barrel']} src={barrel} alt="бочка" />
        <h2 className={`${style['add-wine__title']} ${playfairDisplay.className}`}>Добавить в библиотеку</h2>
        <p className={`${style['add-wine__subtitle']} ${playfairDisplay.className}`}>Здесь вы можете добавить свое вино в библиотеку, указав подробную информацию о нем. Также дополнительно можете добавить изображение вина, оценить его вкусовые качества и прокомментировать.</p>
        <FormComponent />
      </div>
    </section>
   );
}

export default addWineComp;
