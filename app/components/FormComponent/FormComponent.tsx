'use client';
import { ChangeEvent, FormEvent, useEffect, useState} from 'react';

import style from './FormComponent.module.scss';

import StarReiting from '../StarRating/StarRating';
import { optionsGrapeVariety } from '../../../utils/grapeVariety';
import { optionsColorWine, optionsTypeWine } from '../../../utils/optionsWine';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
// import { addNewWine } from '../../store/wine/wineApi';
import InputSelect from '../ui/InputSelect/InputSelect';
import InputForm from '../ui/InputForm/InputForm';
import ButtonSubmitForm from '../ui/ButtonSubmitForm/ButtonSubmitForm';
import { useFormValid } from '@/app/hooks/useFormValid';
import { montserrat } from '@/app/fonts';
import NotificationPopup from '../NotificationPopup/NotificationPopup';
import { useAddNewWineMutation } from '@/app/store/wine-query/reducer';

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
  // const dispatch = useAppDispatch();
  const { isLoadingAddWine, error } = useAppSelector(state => state.wines);
  const [addNewWine, { isLoading , isError, isSuccess }] = useAddNewWineMutation();
  const [isNotificationPopupOpen, setIsNotificationPopupOpen] = useState(false);
  const isSubmitBattonDisabled = formIsValid &&
  (inputValues?.typeWine !== undefined) &&
  (inputValues?.colorWine !== undefined) &&
  (inputValues?.grapeVariety !== undefined)

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    addNewWine(inputValues!)

    // dispatch(addNewWine(inputValues!));
  };

  // useEffect(() => {

  // }, [isLoadingAddWine]);

  // useEffect(() => {
  //   console.log(errorMessages.name);
  //   console.log(inputValues?.name);
  //   console.log('formisvalid',formIsValid);
  //   console.log(isSubmitBattonDisabled);


  // }, [inputValues, errorMessages]);

  useEffect(() => {
    if (isSuccess) {
      setIsNotificationPopupOpen(true);
    }
  }, [isSuccess]);

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
            handleChange={(evt: ChangeEvent<HTMLInputElement>) => handleInputChange(evt, { customValidation: true, modification: false })}
            min={2}
            max={70}
            required={true}
          />
          <InputForm
            location="add-wine"
            name="brand"
            placeholder="Брэнд"
            type="text"
            value={inputValues?.brand}
            error={errorMessages?.brand}
            min={2}
            max={70}
            handleChange={(evt: ChangeEvent<HTMLInputElement>) => handleInputChange(evt, { customValidation: true, modification: false })}
            required={true}
          />
          <InputForm
            location="add-wine"
            name="country"
            placeholder="Страна"
            type="text"
            value={inputValues?.country}
            error={errorMessages.country}
            min={2}
            max={70}
            handleChange={(evt: ChangeEvent<HTMLInputElement>) => handleInputChange(evt, { customValidation: true, modification: false })}
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
            handleChange={(evt: ChangeEvent<HTMLInputElement>) => handleInputChange(evt, { customValidation: true, modification: false })}
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
            handleChange={(evt: ChangeEvent<HTMLInputElement>) => handleInputChange(evt, { customValidation: true, modification: false })}
            min={2}
            max={70}
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
        handleChange={(evt: ChangeEvent<HTMLInputElement>) => handleInputChange(evt, { customValidation: true , modification: false})}
        required={false}
      />
      <textarea
        className={`${style.form__textarea} ${montserrat.className}`}
        name="comment"
        id="textarea"
        value={inputValues?.comment}
        onChange={handleInputChange}
        placeholder="Комментарии к напитку"
        maxLength={1000}
      ></textarea>
      <div className={style['form__rating-wrapper']}>
        <span className={style['form__span-rating']}>Рейтинг</span>
        <StarReiting handleReiting={handleReiting} />
      </div>
      {
        isError &&
        <span className={style['form__error-message']}>
          Что то пошло не так..
        </span>
      }
      <ButtonSubmitForm
        extraClass={style['form__button-form']}
        disabled={!isSubmitBattonDisabled}
        text={isLoading ? 'Добавление..' : 'Добавить'}
      />
    </form>
    <NotificationPopup isNotificationPopupOpen={isNotificationPopupOpen} setIsNotificationPopupOpen={setIsNotificationPopupOpen}/>
    </>
  );
}

export default FormComponent;
