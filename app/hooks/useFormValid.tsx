import { InputValuesType, OptionType } from "@/types/allTypes.types";
import { ChangeEvent, useState } from "react";

export function useFormValid () {
  const [inputValues, setInputValues] = useState<InputValuesType | null>(null);

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
  const handleChangeSelector = (selectedOption: OptionType | null) => {
    setInputValues((current) => ({
      ...current,
      [selectedOption?.name!]: selectedOption?.value,
    }));
  };

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;
    handleStoreValue(name, value);
  };

  return {
    inputValues,
    handleChangeSelector,
    handleChange,
    handleReiting
  }
}