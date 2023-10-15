'use client';
import style from './WineLibrary.module.scss';
import WineCardList from './WineCardList/WineCardList';
import { montserrat } from '@/app/fonts';
import CheckboxType from '../ui/CheckboxType/CheckboxType';
import { ColorData, TypeData } from '@/utils/constans';
import { useDebounce } from '@/app/hooks/useDebounce';
import { ChangeEvent, useEffect, useState } from 'react';
import { CheckboxsType } from '@/types/allTypes.types';
import useSearchWine from '@/app/hooks/useSearchWine';
import { Wine } from '@/types/wine.type';
import SearchIcon from '../Icons/SearchIcon';

function WineLibrary({wines} : {wines?: Wine[]}) {
  const [search, setSearch] = useState<string | null>(null);
  const [types, setTypes] = useState<string[]>([])
  const [colors, setColors] = useState<string[]>([])
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  const [checkboxValue, setCheckboxValue] = useState<CheckboxsType | null>(null);
  const debounce = useDebounce(searchInputValue, 1000);
  const { handleWineFilter } = useSearchWine();

  const handleSearch = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setSearchInputValue(value)
  };

  const handleChangeCheckboxType = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value, id , checked} = evt.target;
    setCheckboxValue(() => ({
      ...checkboxValue,
      [id]: value
    }));
    if(checked) {
      setTypes(types => [...types, value])
    } else {
      setTypes(types => {
        return types.filter(type => type !== value)
      })
    }
  };

  const handleChangeCheckboxColor = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value, id , checked} = evt.target;
    setCheckboxValue(() => ({
      ...checkboxValue,
      [id]: value
    }));
    if(checked) {
      setColors(types => [...types, value])
    } else {
      setColors(types => {
        return types.filter(type => type !== value)
      })
    }
  };

  useEffect(() => {
    setSearch(debounce)

  }, [debounce]);


  const renderWine = () => {
    return handleWineFilter(wines as Wine[], search!, types, colors);
  }

  const handleSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
  }

  return (
    <section className={`${style['wine-library']} ${montserrat.className}`}>
      <form className={style['wine-library__wrapper']} onSubmit={handleSubmit}>
        <div className={style['wine-library__block']}></div>
        <div className={style['wine-library__filter-headers']}>
          <div className={style['wine-library__search']}>
            <input
              className={style['wine-library__search-input']}
              type="text"
              name="search"
              placeholder="Поиск по названию вина"
              value={searchInputValue!}
              onChange={handleSearch}
            />
            <button type="submit" className={style['wine-library__submit-button']}>
              <SearchIcon/>
            </button>
          </div>
        </div>
        <div className={style['wine-library__side-bar']}>
          <div className={style['wine-library__type-block']}>
            <span className={style['wine-library__type-name']}>ТИП</span>
            <div className={style['wine-library__type-wrapper']}>
              {TypeData.map((type, i) => {
                const { id, text } = type;
                return (
                  <CheckboxType key={i} id={id} text={text} name="typeWine" handleChangeCheckbox={handleChangeCheckboxType}/>
                );
              })}
            </div>
          </div>
          <div className={style['wine-library__type-block']}>
            <span className={style['wine-library__type-name']}>ЦВЕТ</span>
            <div className={style['wine-library__type-wrapper']}>
              {ColorData.map((type, i) => {
                const { id, text } = type;
                return (
                  <CheckboxType key={i} id={id} text={text} name="colorWine"  handleChangeCheckbox={handleChangeCheckboxColor}/>
                );
              })}
            </div>
          </div>
        </div>
        <WineCardList wines={renderWine()}/>
      </form>
    </section>
  );
}

export default WineLibrary;
