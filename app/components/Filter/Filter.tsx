import { FilterTypeProps } from "@/types/componentProps.types";
import styles from './Filter.module.scss'
import CheckboxType from "../ui/CheckboxType/CheckboxType";
import DropIcon from "../Icons/DropIcon";
import { useEffect, useState } from "react";
import useResize from "@/app/hooks/useResize";

function Filter({data, name, handleChangeCheckbox} : FilterTypeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { isLaptop } = useResize();

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (isLaptop) {
      setIsOpen(true);
    }

  },[isLaptop])
  return (
    <div className={styles.filter}>
      <div onClick={handleToggleOpen} className={styles.filter__drop}>

        <span className={styles.filter__name}>{name}</span>
        <DropIcon/>
      </div>
      <div className={`${styles.filter__wrapper} ${isOpen ? styles.filter__wrapper_open : ''}`}>
        {data.map((type, i) => {
          const { id, text } = type;
          return (
            <CheckboxType key={i} id={id} text={text} name="typeWine" handleChangeCheckbox={handleChangeCheckbox}/>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
