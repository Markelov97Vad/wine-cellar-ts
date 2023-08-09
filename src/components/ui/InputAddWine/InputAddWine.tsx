import './InputAddWine.scss'
import { InputAddWineType } from "../../../types/componentProps.types";

function InputAddWine({name, type, placeholder, min = undefined, max = undefined, margin = undefined , value, handleChange} : InputAddWineType) {
  return ( 
    <input name={name} value={value || ''} onChange={handleChange} type={type} placeholder={placeholder} className={`input-add-wine ${ margin ? 'input-add-wine_size_b' : ''}`} min={min} max={max}/>
   );
}

export default InputAddWine;