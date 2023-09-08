import './FormComponent.scss';
import { ChangeEvent, FormEvent, useState } from 'react';
import Select from 'react-select';

import ButtonSubmitForm from '../ui/ButtonSubmitForm/ButtonSubmitForm';
import StarReiting from '../StarRating/StarRating';
import InputAddWine from '../ui/InputAddWine/InputAddWine';
import { optionsGrapeVariety } from '../../utils/grapeVariety';
import { optionsColorWine, optionsTypeWine } from '../../utils/optionsWine';
import { InputValuesType } from '../../types/allTypes.types';
import { useAppDispatch } from '../../hooks/redux';
import { addNewWine } from '../../store/wine/wineApi';


function FormComponent() {
  const [inputValues, setInputValues] = useState<InputValuesType | null >(null);
  const dispatch = useAppDispatch()

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

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    dispatch(addNewWine(inputValues!))
  }

  const handleChangeSelector = (newValue : any) => {
    const { name, value } = newValue
    
    setInputValues(current => ({
      ...current,
      [name]: value,
    }))
  }

  return ( 
      <form onSubmit={onSubmit} name='form-component' className='form' autoComplete='off'>
          <fieldset className='form__fieldest'>
            <div className='form__column'>
              <InputAddWine name='name' placeholder='Название' type='text' value={inputValues?.name} handleChange={handleChange}/>
              <InputAddWine name='country' placeholder='Страна' type='text' value={inputValues?.country} handleChange={handleChange}/>
              <InputAddWine name='year' placeholder='Год' type='number' min={1900} max={new Date().getFullYear()} value={inputValues?.year} handleChange={handleChange}/>
            </div>
            <div className='form__column'>
              <Select 
                onChange={handleChangeSelector} 
                classNamePrefix='custom-select'
                options={optionsTypeWine}
                placeholder='Тип вина..'
                name='typeWine'
              />
              <Select
                onChange={handleChangeSelector} 
                classNamePrefix='custom-select'
                options={optionsColorWine}
                placeholder='Цвет вина..'
                name='colorWine'
                id='colorWine'
              />
              <Select
                onChange={handleChangeSelector} 
                classNamePrefix='custom-select'
                options={optionsGrapeVariety}
                placeholder='Сорт винограда..'
                required
                name='colorWine'
                id='colorWine'
              />
            </div>
          </fieldset>
          <InputAddWine name='image' placeholder='Ссылка' type="url" margin={true} value={inputValues?.image} handleChange={handleChange}/>
          <textarea className='form__textarea' name="comment" id="textarea" value={inputValues?.comment} onChange={handleChange} placeholder='Комментарии к напитку'></textarea>
          <div className='form__ratingWrapper'>
            <span className='form__spanRating'>Рейтинг</span>
            <StarReiting handleReiting={handleReiting}/>
          </div>
          <ButtonSubmitForm/>
        </form>
  );
}

export default FormComponent;