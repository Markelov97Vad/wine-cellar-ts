import style from './InputForm.module.scss';
import { InputFormType } from '../../../../types/componentProps.types';
import EyeIcon from '../../Icons/EyeIcon';
import { useState } from 'react';

function InputForm({
  name,
  type,
  placeholder,
  min = undefined,
  max = undefined,
  margin = undefined,
  value,
  error,
  handleChange,
  location,
  required = false
}: InputFormType) {
  const [isTypePassword, setisTypePassword] = useState(false);
  const handleLicationTypeLabel = (value: string) => {
    switch (value) {
      case 'sign':
        return style['input-from__label_sign'];
      case 'add-wine':
        return style['input-from__label_add-wine'];
      case 'settings':
        return style['input-from__label_settings'];
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
      case 'settings':
        return style['input-from__input_settings'];
      default:
        return;
    }
  };

  const handleAutoComplite = (value: string) => {
    switch (value) {
      case 'nameUser':
        return 'given-name'
      case 'email':
        return 'email'
      case 'password':
        return 'current-password'
      case 'name':
        return 'organization'
      case 'image':
        return 'photo'
      case 'brand':
        return 'organization'
      case 'country':
        return 'country-name'
      case 'region':
        return 'country-name'
      default:
        return 'new-password'
    }
  }

  const handleInputToggle = () => {
    setisTypePassword(!isTypePassword)
  }

  return (
    <div
      className={`${style['input-from']} ${
        margin ? style['input-from_size_b'] : ''
      }`}
    >
      <label
        className={`${style['input-from__label']} ${handleLicationTypeLabel(
          location
        )} ${value?.length! > 0 ? style['input-from__label_active'] : ''}`}
        htmlFor={name}
      >
        {placeholder}
      </label>
      <input
        name={name}
        value={value || ''}
        onChange={handleChange}
        type={type === 'password' ? !isTypePassword ? type : 'text' : type}
        placeholder={placeholder}
        className={`${style['input-from__input']} ${handleLicationTypeInput(
          location,
        )}`}
        minLength={min}
        maxLength={max}
        required={required}
        autoComplete={handleAutoComplite(name)}
      />
      {
        name === 'password' &&
      <span onClick={handleInputToggle} className={style['input-from__span-eye']}><EyeIcon/></span>
      }
      <span className={style['input-from__error']}>
        {error}
      </span>
    </div>
  );
}

export default InputForm;
