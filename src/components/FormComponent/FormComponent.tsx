import "./FormComponent.scss";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Select from "react-select";

import ButtonSubmitForm from "../ui/ButtonSubmitForm/ButtonSubmitForm";
import StarReiting from "../StarRating/StarRating";
import InputAddWine from "../ui/InputForm/InputForm";
import { optionsGrapeVariety } from "../../utils/grapeVariety";
import { optionsColorWine, optionsTypeWine } from "../../utils/optionsWine";
import { InputValuesType, OptionType } from "../../types/allTypes.types";
import { useAppDispatch } from "../../hooks/redux";
import { addNewWine } from "../../store/wine/wineApi";
import InputSelect from "../ui/InputSelect/InputSelect";
import InputForm from "../ui/InputForm/InputForm";

function FormComponent() {
  const [inputValues, setInputValues] = useState<InputValuesType | null>(null);
  const dispatch = useAppDispatch();

  const handleStoreValue = (name: string, value: string | number) => {
    setInputValues((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    handleStoreValue(name, value);
  };

  const handleReiting = (reiting: number) => {
    const name = "raiting";
    handleStoreValue(name, reiting);
  };

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(addNewWine(inputValues!));
  };

  const handleChangeSelector = (selectedOption: OptionType | null) => {
    // const { label: name, value } = selectedOption;

    setInputValues((current) => ({
      ...current,
      [selectedOption?.name!]: selectedOption?.value,
    }));
    console.log(selectedOption?.label);
    
  };

  useEffect(() => {
    console.log(inputValues?.typeWine);
  }, [inputValues]);

  return (
    <form
      onSubmit={onSubmit}
      name="form-component"
      className="form"
      autoComplete="off"
    >
      <fieldset className="form__fieldest">
        <div className="form__column">
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
        <div className="form__column">
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
          {/* <Select
            onChange={handleChangeSelector}
            classNamePrefix="custom-select"
            options={optionsTypeWine}
            placeholder="Тип вина.."
            name="typeWine"
          /> */}
          {/* <Select
            onChange={handleChangeSelector}
            classNamePrefix="custom-select"
            options={optionsColorWine}
            placeholder="Цвет вина.."
            name="colorWine"
            id="colorWine"
          />
          <Select
            onChange={handleChangeSelector}
            classNamePrefix="custom-select"
            options={optionsGrapeVariety}
            placeholder="Сорт винограда.."
            required
            name="colorWine"
            id="colorWine"
          /> */}
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
        className="form__textarea"
        name="comment"
        id="textarea"
        value={inputValues?.comment}
        onChange={handleChange}
        placeholder="Комментарии к напитку"
      ></textarea>
      <div className="form__ratingWrapper">
        <span className="form__spanRating">Рейтинг</span>
        <StarReiting handleReiting={handleReiting} />
      </div>
      <ButtonSubmitForm text="Добавить"/>
    </form>
  );
}

export default FormComponent;
