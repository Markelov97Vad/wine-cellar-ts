import Select from "react-select";
import './InputSelect.scss'
import { OptionType } from '../../../types/allTypes.types';
import { optionsWineType } from '../../../types/wine.type';

type InputSelectType = {
  value?: string;
  onChange:(selectedOption: OptionType | null) => void ;
  options: optionsWineType[];
  placeholder: string;
  name: string;
  classNamePrefix: string;
}

function InputSelect({value, onChange, options, placeholder, name, classNamePrefix} : InputSelectType) {
  console.log(value);
  
  return (
    <div className='input-select'>
      <span className={`input-select__span ${value?.length! > 0 ? 'input-select__span_active' : ''}`}>{placeholder}</span>
      <Select
        onChange={onChange}
        classNamePrefix={classNamePrefix}
        options={options}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
}

export default InputSelect;