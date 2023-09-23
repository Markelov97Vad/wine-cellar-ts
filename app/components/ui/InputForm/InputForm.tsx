import style from './InputForm.module.scss';
import { InputFormType } from '../../../../types/componentProps.types';

function InputForm({
  name,
  type,
  placeholder,
  min = undefined,
  max = undefined,
  margin = undefined,
  value,
  handleChange,
  location,
}: InputFormType) {
  const handleLicationTypeLabel = (value: string) => {
    switch (value) {
      case 'sign':
        return style['input-from__label_sign'];
      case 'add-wine':
        return style['input-from__label_add-wine'];
      default:
        return;
    }
  };
  const handleLicationTypeInput = (value: string) => {
    switch (value) {
      case 'sign':
        return style['input-from__input_sign'];
      case 'add-wine':
        return style['input-from__input_add-wine'];
      default:
        return;
    }
  };

  return (
    <div
      className={`${style['input-from']} ${
        margin ? style['input-from_size_b'] : ''
      }`}
    >
      <label
        className={`${style['input-from__label']} ${handleLicationTypeLabel(
          location,
        )} ${value?.length! > 0 ? style['input-from__label_active'] : ''}`}
        htmlFor={name}
      >
        {placeholder}
      </label>
      <input
        name={name}
        value={value || ''}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        className={`${style['input-from__input']} ${handleLicationTypeInput(
          location,
        )}`}
        min={min}
        max={max}
      />
    </div>
  );
}

export default InputForm;
