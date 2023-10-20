import { ErrorMessageType, InputValuesType, OptionType } from "@/types/allTypes.types";
import { validationConfigKeyProps, validationConfigModificationKeyProps } from "@/types/componentProps.types";
import { OptionsWineType } from "@/types/wine.type";
import { validationConfig, validationConfigModification } from "@/utils/validation";
import { ChangeEvent, useCallback, useLayoutEffect, useRef, useState } from "react";
import { SingleValueProps } from "react-select";
import { MultiValue, OnChangeValue, SingleValue } from "react-select";

export function useFormValid () {
  const [inputValues, setInputValues] = useState<InputValuesType | null>(null);
  const [errorMessages, setErrorMessages] = useState<ErrorMessageType>({});
  const [formIsValid, setFormIsValid] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleStoreValue = (name: string, value: string | number) => {
    setInputValues((current) => ({
      ...current,
      [name]: value,
    }));
  };

  // рейтинг вина
  const handleReiting = (rating: number) => {
    const name = 'rating';
    handleStoreValue(name, rating);
  };

  // react-select
  const handleChangeSelector = (selectedOption: OptionsWineType) => {
    setInputValues((current) => ({
      ...current,
      [selectedOption?.name!]: selectedOption?.value ,
    }));
    console.log(selectedOption);
  };

  const handleChangeSelectorMulti = (selectedOption:  OnChangeValue<OptionsWineType[], boolean>) => {
    setInputValues((current) => ({
      ...current,
      // [selectedOption![0].name!]: selectedOption?.value ,
      grapeVariety: (selectedOption as OptionsWineType[])?.map((el) => el.value)
    }));
    console.log(selectedOption);
  };

  const handleInputChange = (evt: ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >, config = { customValidation: false, modification: false }) => {
    const { name, value, validationMessage } = evt.target;
    handleStoreValue(name, value);
    handleSaveFormRef(evt);

    if (config.customValidation && !config.modification) {
      handleCustomValidation(name as unknown as validationConfigKeyProps, value)

    } else if (config.customValidation && config.modification) {
      handleCustomValidationModification(name as unknown as validationConfigModificationKeyProps, value)
    } else {
      handleDefaultValidation(name, validationMessage);
    }
  }

  const handleErrorMessage = (name: string, message: string) => {
    setErrorMessages(current => ({
      ...current,
      [name]: message
    }))
  }

  const resetFormValues = useCallback((newValues = {}, newError = {}, newIsValid = false) => {
    setInputValues(newValues);
    setErrorMessages(newError);
    setFormIsValid(newIsValid);
  }, [setInputValues, setErrorMessages, setFormIsValid]);


  function handleDefaultValidation(name: string, validationMessage: string) {
    const isValid = formRef.current?.checkValidity();
    handleErrorMessage(name, validationMessage)
    // оператор утверждения, что значение не равно null
    setFormIsValid(isValid!);
  }

  const handleCustomValidation = (name: validationConfigKeyProps, value: string) => {
    const { pattern, validationError, emptyError } = validationConfig[name];

    if (name === 'image') {
      value.length === 0 ? value = 'https://p0.pxfuel.com/preview/569/587/724/bottle-wine-red-drink.jpg' : value
    }
    const match = pattern.test(value);
    const message = !value ? emptyError : match ? '' : validationError;
    handleErrorMessage(name, message);
    if (name === 'year') {
      return Number(value) < 1900 || Number(value) > new Date().getFullYear() ? handleErrorMessage(name, validationError) : null
    }
  }

  const handleCustomValidationModification = (name: validationConfigModificationKeyProps, value: string,) => {
    const { pattern, validationError, emptyError } = validationConfigModification[name];
    const match = pattern.test(value);
    const message = !value ? "" : match ? '' : validationError;
    handleErrorMessage(name, message);
  }

  function handleSaveFormRef(evt: ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >,) {
    // оператор логического нулевого присваивани, присваивает значение, только если x является нулевым
    formRef.current ??= evt.target.closest('form');

  }

  useLayoutEffect(() => {
    const isValid = formRef.current?.checkValidity();
    const isError = Object.keys(errorMessages).some(name => errorMessages[name]);

    setFormIsValid(() => Boolean(isValid) && !isError);
  }, [inputValues, errorMessages])

  return {
    inputValues,
    errorMessages,
    handleChangeSelector,
    handleChangeSelectorMulti,
    handleInputChange,
    handleReiting,
    resetFormValues,
    formIsValid
  }
}
