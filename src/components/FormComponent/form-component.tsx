import ButtonSubmitForm from '../ui/ButtonSubmitForm/ButtonSubmitForm';
import StarReiting from '../StarRating/StarRating';
import styles from './form-component.module.scss'
import InputAddWine from '../ui/input-add-wine/input-add-wine';
import { ChangeEvent, useEffect, useState } from 'react';

export type InputValuesType = {
  name?: string;
  region?: string;
  grapeVariety?: string;
  country?: string;
  typeWine?: string;
  year?: string;
  url?: string;
  textarea?: string;
}

function FormComponent() {
  const [inputValues, setInputValues] = useState<InputValuesType | null>(null);
  const handleStoreValue = (name: string, value: string | number) => {
    setInputValues(current => ({
      ...current,
      [name]: value,
    }))
  }

  const handleChange = (event : ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    handleStoreValue(name, value)
  }

  const handleReiting = (reiting: number) => {
    const name = 'raiting'
    handleStoreValue(name, reiting)
  }

  useEffect(() => {
    console.log(inputValues);
  })

  return ( 
      <form name='form-component' className={styles.form} autoComplete='off'>
          <fieldset className={styles.fieldest}>
            <div className={styles.column}>
              <InputAddWine name='name' placeholder='Название' type='text' value={inputValues?.name} handleChange={handleChange}/>
              <InputAddWine name='region' placeholder='Регион' type='text' value={inputValues?.region} handleChange={handleChange}/>
              <InputAddWine name='grapeVariety' placeholder='Сорт винограда' type='text' value={inputValues?.grapeVariety} handleChange={handleChange}/>
            </div>
            <div className={styles.column}>
              <select className={styles.selected}  name="typeWine" value={inputValues?.typeWine} onChange={handleChange} id="type-wine">
                <option value="dry">Сухое</option>
                <option value="semi-dry">Полусухое</option>
                <option value="semi-sweet">Полусладкое</option>
                <option value="sweet">Сладкое</option>
                <option value="dessert">Десертное</option>
              </select>
              <InputAddWine name='country' placeholder='Страна' type='text' value={inputValues?.country} handleChange={handleChange}/>
              <InputAddWine name='year' placeholder='Год' type='number' min={1900} max={new Date().getFullYear()} value={inputValues?.year} handleChange={handleChange}/>
            </div>
          </fieldset>
          <InputAddWine name='url' placeholder='Ссылка' type="url" margin={true} value={inputValues?.url} handleChange={handleChange}/>
          <textarea className={styles.textarea} name="textarea" id="textarea" value={inputValues?.textarea} onChange={handleChange} placeholder='Комментарии к напитку'></textarea>
          <div className={styles.ratingWrapper}>
            <span className={styles.spanRating}>Рейтинг</span>
            <StarReiting handleReiting={handleReiting}/>
          </div>

          <ButtonSubmitForm/>
        </form>
  );
}

export default FormComponent;