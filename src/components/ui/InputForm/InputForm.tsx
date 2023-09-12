import './InputForm.scss'
import { InputFormType } from "../../../types/componentProps.types";

function InputForm({name, type, placeholder, min = undefined, max = undefined, margin = undefined , value, handleChange, location} : InputFormType) {
  return (
    <div className={`input-from ${ margin ? 'input-from_size_b' : ''}`}>
      <label className={`input-from__label input-from__label_${location} ${value?.length! > 0 ? 'input-from__label_active' : ''}`} htmlFor={name}>{placeholder}</label>
      <input name={name} value={value || ''} onChange={handleChange} type={type} placeholder={placeholder} className={`input-from__input input-from__input_${location}`} min={min} max={max}/>
    </div>
   );
}

export default InputForm;