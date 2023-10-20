import Select from 'react-select';
import './InputSelect.scss';
import { InputSelectType } from '../../../../types/allTypes.types';

function InputSelect({
  value,
  onChange,
  onChangeMulti,
  options,
  placeholder,
  name,
  isMulti
}: InputSelectType) {
  return (
    <div className='input-select'>
      <span
        className={`input-select__span ${
          value?.length! > 0 ? 'input-select__span_active' : ''
        }`}
      >
        {placeholder}
      </span>
      <Select
        instanceId={'1'}
        onChange={isMulti ? onChangeMulti : onChange }
        classNamePrefix="custom-select"
        options={options}
        placeholder={placeholder}
        name={name}
        isMulti={isMulti}
      />
    </div>
  );
}

export default InputSelect;
