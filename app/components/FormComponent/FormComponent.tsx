'use client';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import style from './FormComponent.module.scss';

import StarReiting from '../StarRating/StarRating';
import { optionsGrapeVariety } from '../../../utils/grapeVariety';
import { optionsColorWine, optionsTypeWine } from '../../../utils/optionsWine';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addNewWine } from '../../store/wine/wineApi';
import InputSelect from '../ui/InputSelect/InputSelect';
import InputForm from '../ui/InputForm/InputForm';
import ButtonSubmitForm from '../ui/ButtonSubmitForm/ButtonSubmitForm';
import { useFormValid } from '@/app/hooks/useFormValid';
import { montserrat } from '@/app/fonts';
import NotificationPopup from '../NotificationPopup/NotificationPopup';

function FormComponent() {
  const { 
    inputValues,
    errorMessages,
    handleInputChange,
    handleChangeSelector,
    handleReiting,
    formIsValid
  } =
    useFormValid();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector(state => state.wines);
  const isSubmitBattonDisabled = formIsValid &&
  (inputValues?.typeWine !== undefined) &&
  (inputValues?.colorWine !== undefined) &&
  (inputValues?.grapeVariety !== undefined)

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(addNewWine(inputValues!));
  };

  // useEffect(() => {
  //   console.log(errorMessages.name);
  //   console.log(inputValues?.name);
  //   console.log('formisvalid',formIsValid);
  //   console.log(isSubmitBattonDisabled);
    
    
  // }, [inputValues, errorMessages]);

  return (
    <>
    <form
      onSubmit={onSubmit}
      name="form-component"
      className={`${style.form} ${montserrat.className}`}
      autoComplete="off"
      noValidate
    >
      <fieldset className={style.form__fieldest}>
        <div className={style.form__column}>
          <InputForm
            location="add-wine"
            name="name"
            placeholder="Название"
            type="text"
            value={inputValues?.name}
            error={errorMessages?.name}
            handleChange={(evt: ChangeEvent<HTMLInputElement>) => handleInputChange(evt, { customValidation: true })}
            min={2}
            max={30}
            required={true}
          />
          <InputForm
            location="add-wine"
            name="brand"
            placeholder="Брэнд"
            type="text"
            value={inputValues?.brand}
            error={errorMessages?.brand}
            handleChange={(evt: ChangeEvent<HTMLInputElement>) => handleInputChange(evt, { customValidation: true })}
            required={true}
          />
          <InputForm
            location="add-wine"
            name="country"
            placeholder="Страна"
            type="text"
            value={inputValues?.country}
            error={errorMessages.country}
            handleChange={(evt: ChangeEvent<HTMLInputElement>) => handleInputChange(evt, { customValidation: true })}
            required={true}
          />
          <InputForm
            location="add-wine"
            name="year"
            placeholder="Год"
            type="number"
            min={1900}
            max={new Date().getFullYear()}
            value={inputValues?.year}
            error={errorMessages?.year}
            handleChange={(evt: ChangeEvent<HTMLInputElement>) => handleInputChange(evt, { customValidation: true })}
            required={true}
          />
        </div>
        <div className={style.form__column}>
          <InputForm
            location="add-wine"
            name="region"
            placeholder="Регион"
            type="text"
            value={inputValues?.region}
            error={errorMessages.region}
            handleChange={(evt: ChangeEvent<HTMLInputElement>) => handleInputChange(evt, { customValidation: true })}
            min={2}
            max={30}
            required={true}
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
        placeholder="Ссылка на изображение"
        type="url"
        margin={true}
        value={inputValues?.image}
        error={errorMessages?.image}
        handleChange={(evt: ChangeEvent<HTMLInputElement>) => handleInputChange(evt, { customValidation: true })}
        required={true}
      />
      <textarea
        className={`${style.form__textarea} ${montserrat.className}`}
        name="comment"
        id="textarea"
        value={inputValues?.comment}
        onChange={handleInputChange}
        placeholder="Комментарии к напитку"
      ></textarea>
      <div className={style['form__rating-wrapper']}>
        <span className={style['form__span-rating']}>Рейтинг</span>
        <StarReiting handleReiting={handleReiting} />
      </div>
      {
        error && 
        <span className={style['form__error-message']}>
          Что то пошло не так..
        </span>
      }
      <ButtonSubmitForm
        extraClass={style['form__button-form']}
        disabled={!isSubmitBattonDisabled}
        text={loading ? 'Добавление..' : 'Добавить'}
      />
    </form>
    <NotificationPopup/>
    </>
  );
}

export default FormComponent;
