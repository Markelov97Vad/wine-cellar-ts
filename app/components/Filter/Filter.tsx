import { FilterTypeProps } from "@/types/componentProps.types";
import styles from './Filter.module.scss'
import CheckboxType from "../ui/CheckboxType/CheckboxType";
import DropIcon from "../Icons/DropIcon";
import { useEffect, useState } from "react";
import useResize from "@/app/hooks/useResize";
import { SESSION_STORAGE_LIBRARY_CHECKBOX_COLOR, SESSION_STORAGE_LIBRARY_CHECKBOX_TYPE, SESSION_STORAGE_MYCOLLECTION_CHECKBOX_COLOR, SESSION_STORAGE_MYCOLLECTION_CHECKBOX_TYPE } from "@/utils/constans";

function Filter({ data, name, handleChangeCheckbox, isLibraryPage, isMyCollectionPage} : FilterTypeProps) {
  const { isLaptop } = useResize();
  const [isOpen, setIsOpen] = useState(false);
  const [checkboxColorValue, setCheckboxColorValue] = useState([]);
  const [checkboxTypeValue, setCheckboxTypeValue] = useState([]);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (isLaptop) {
      setIsOpen(true);
    }

  },[isLaptop])

  useEffect(() => {
    if (isLibraryPage) {
      const currentType = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_LIBRARY_CHECKBOX_TYPE)!)
      const currentColor = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_LIBRARY_CHECKBOX_COLOR)!)
      if (name === 'ТИП' && currentType) {
        setCheckboxTypeValue(() => currentType)
      }
      if (name === 'ЦВЕТ' && currentColor) {
        setCheckboxColorValue(() => currentColor)

      }
    }
    if (isMyCollectionPage) {
      const currentType = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_MYCOLLECTION_CHECKBOX_TYPE)!)
      const currentColor = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_MYCOLLECTION_CHECKBOX_COLOR)!)
      if (name === 'ТИП' && currentType) {
        setCheckboxTypeValue(() => currentType)
      }
      if (name === 'ЦВЕТ' && currentColor) {
        setCheckboxColorValue(() => currentColor)
      }
    }
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
              return checkboxTypeValue?.some(type => {
                return type === text;
              })
            }
            if(name === 'ЦВЕТ') {
              return checkboxColorValue?.some(color => {
                return color === text;
              })
            }
            return false
          }

          return (
            <CheckboxType checked={handleChacked()} key={i} id={id} text={text} name="typeWine" handleChangeCheckbox={handleChangeCheckbox}/>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
