'use client';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import style from './FormComponent.module.scss';

import StarReiting from '../StarRating/StarRating';
import { optionsGrapeVariety } from '../../../utils/grapeVariety';
import { optionsColorWine, optionsTypeWine } from '../../../utils/optionsWine';
import { InputValuesType, OptionType } from '../../../types/allTypes.types';
import { useAppDispatch } from '../../hooks/redux';
import { addNewWine } from '../../store/wine/wineApi';
import InputSelect from '../ui/InputSelect/InputSelect';
import InputForm from '../ui/InputForm/InputForm';
import ButtonSubmitForm from '../ui/ButtonSubmitForm/ButtonSubmitForm';
import { useFormValid } from '@/app/hooks/useFormValid';

function FormComponent() {
  // const [inputValues, setInputValues] = useState<InputValuesType | null>(null);
  const { inputValues, handleChange, handleChangeSelector, handleReiting } =
    useFormValid();
  const dispatch = useAppDispatch();

  // const handleStoreValue = (name: string, value: string | number) => {
  //   setInputValues((current) => ({
  //     ...current,
  //     [name]: value,
  //   }));
  // };

  // const handleChange = (
  //   event: ChangeEvent<
  //     HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  //   >,
  // ) => {
  //   const { name, value } = event.target;

  //   handleStoreValue(name, value);
  // };

  // const handleReiting = (rating: number) => {
  //   const name = 'rating';
  //   handleStoreValue(name, rating);
  // };

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(addNewWine(inputValues!));
  };

  useEffect(() => {
    console.log(inputValues);
  }, [inputValues]);

  return (
    <form
      onSubmit={onSubmit}
      name="form-component"
      className={style.form}
      autoComplete="off"
    >
      <fieldset className={style.form__fieldest}>
        <div className={style.form__column}>
          <InputForm
            location="add-wine"
            name="name"
            placeholder="Название"
            type="text"
            value={inputValues?.name}
            handleChange={handleChange}
          />
          <InputForm
            location="add-wine"
            name="brand"
            placeholder="Брэнд"
            type="text"
            value={inputValues?.brand}
            handleChange={handleChange}
          />
          <InputForm
            location="add-wine"
            name="country"
            placeholder="Страна"
            type="text"
            value={inputValues?.country}
            handleChange={handleChange}
          />
          <InputForm
            location="add-wine"
            name="year"
            placeholder="Год"
            type="number"
            min={1900}
            max={new Date().getFullYear()}
            value={inputValues?.year}
            handleChange={handleChange}
          />
        </div>
        <div className={style.form__column}>
          <InputForm
            location="add-wine"
            name="region"
            placeholder="Регион"
            type="text"
            value={inputValues?.region}
            handleChange={handleChange}
          />
          <InputSelect
            value={inputValues?.typeWine}
            onChange={handleChangeSelector}
            classNamePrefix="custom-select"
            options={optionsTypeWine}
            placeholder="Тип вина"
            name="typeWine"
          />
          <InputSelect
            value={inputValues?.colorWine}
            onChange={handleChangeSelector}
            classNamePrefix="custom-select"
            options={optionsColorWine}
            placeholder="Цвет вина"
            name="colorWine"
          />
          <InputSelect
            value={inputValues?.grapeVariety}
            onChange={handleChangeSelector}
            classNamePrefix="custom-select"
            options={optionsGrapeVariety}
            placeholder="Сорт винограда"
            name="colorWine"
          />
        </div>
      </fieldset>
      <InputForm
        location="add-wine"
        name="image"
        placeholder="Ссылка"
        type="url"
        margin={true}
        value={inputValues?.image}
        handleChange={handleChange}
      />
      <textarea
        className={style.form__textarea}
        name="comment"
        id="textarea"
        value={inputValues?.comment}
        onChange={handleChange}
        placeholder="Комментарии к напитку"
      ></textarea>
      <div className={style['form__rating-wrapper']}>
        <span className={style['form__span-rating']}>Рейтинг</span>
        <StarReiting handleReiting={handleReiting} />
      </div>
      <ButtonSubmitForm
        extraClass={style['form__button-form']}
        text="Добавить"
      />
    </form>
  );
}

export default FormComponent;
