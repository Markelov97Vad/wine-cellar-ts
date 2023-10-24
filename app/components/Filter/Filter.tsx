import { FilterTypeProps } from "@/types/componentProps.types";
import styles from './Filter.module.scss'
import CheckboxType from "../ui/CheckboxType/CheckboxType";
import DropIcon from "../Icons/DropIcon";
import { useEffect, useState } from "react";
import useResize from "@/app/hooks/useResize";

function Filter({ data, name, handleChangeCheckbox} : FilterTypeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { isLaptop } = useResize();
  const [colorCheckbox, setColorCheckbox] = useState([]);
  const [typeCkeckbox, settypeCkeckbox] = useState([]);

  const [datadata, setdatadata] = useState<string[]>([]);
  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (isLaptop) {
      setIsOpen(true);
    }

  },[isLaptop])

  useEffect(() => {
    const currentType = JSON.parse(sessionStorage.getItem('checkboxValueType')!)
    const currentColor = JSON.parse(sessionStorage.getItem('checkboxValueColor')!)
    if (name === 'ТИП' && currentType) {
      settypeCkeckbox(() => currentType)
    }
    if (name === 'ЦВЕТ' && currentColor) {
      setColorCheckbox(() => currentColor)

    }
    // if (colorCheckbox || typeCkeckbox) {
    //   setdatadata(() => {
    //     // return JSON.parse(sessionStorage.getItem('checkboxValue')!)
    //     return current
    //   })
    // }
    else {
      return
    }
  }, [handleChangeCheckbox]);
  return (
    <div className={styles.filter}>
      <div onClick={handleToggleOpen} className={styles.filter__drop}>
        <span className={styles.filter__name}>{name}</span>
        <DropIcon/>
      </div>
      <div className={`${styles.filter__wrapper} ${isOpen ? styles.filter__wrapper_open : ''}`}>
        {data.map((type, i) => {
          const { id, text } = type;
          function handleChacked () {
            if(name === 'ТИП') {
              return typeCkeckbox?.some(type => {
                // console.log('type',type, 'text',text);

                return type === text;
              })
            }
            if(name === 'ЦВЕТ') {
              return colorCheckbox?.some(color => {
                // console.log('color',color, 'text',text);

                return color === text;
              })
            }
            return false
            // return datadata?.some(type => {
            //   // console.log('type',type, 'text',text);

            //   return type === text
            // })
          }

          return (
            <CheckboxType checked={handleChacked()} key={i} id={id} text={text} name="typeWine" handleChangeCheckbox={handleChangeCheckbox}/>
            // <CheckboxType checked={false} key={i} id={id} text={text} name="typeWine" handleChangeCheckbox={handleChangeCheckbox}/>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
