import { InputAddWineType } from "../../../types/componentProps.types";
import styles from './input-add-wine.module.scss'

function InputAddWine({name, type, placeholder, min = undefined, max = undefined, margin = undefined , value, handleChange} : InputAddWineType) {
  return ( 
    <input name={name} value={value || ''} onChange={handleChange} type={type} placeholder={placeholder} className={`${styles.inputAddWine} ${ margin ? styles.inputAddWine__margin : null}`} min={min} max={max}/>
   );
}

export default InputAddWine;