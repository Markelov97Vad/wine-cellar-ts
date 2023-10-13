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
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { getWines } from '@/app/store/wine/wineApi';

type SearchType = {
  search?: string
}

function WineLibrary() {
  const [search, setSearch] = useState<string | null>(null);
  const [types, setTypes] = useState<string[]>([])
  const [searchInputValue, setSearchInputValue] = useState<string>('');
  // const [checkboxValue, setCheckboxValue] = useState<CheckboxsType | null>(null);
  const [checkboxValue, setCheckboxValue] = useState<CheckboxsType | null>(null);
  const debounce = useDebounce(searchInputValue, 1000);
  const { handleWineFilter } = useSearchWine();
  const dispatch = useAppDispatch();
  const { wines } = useAppSelector((state) => state.wines);
  // const [inputValues, setInputValues] = useState({});

  // const handleInputValue

  const handleSearch = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name ,value } = evt.target;

    // console.log(debounce);

    setSearchInputValue(value)
    // const handler = setTimeout(() => {
    //   setSearch(() => ({
    //     ...search,
    //     [name]: value
    //   }));
    // }, 1000)
    // return () => clearTimeout(handler)

  };

  const handleChangeCheckbox = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value, id , checked} = evt.target;
    console.log(checked);
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


    console.log(value);
    // setCheckboxValue(checkboxValue => [...checkboxValue, value])
  };

  useEffect(() => {
    // setTypes(types => [...types, checkboxValue?.dry])
    console.log(types);

  }, [types]);

  // useEffect(() => {
  //   console.log(debounce);
  // }, [debounce]);

  // useEffect(() => {
  //   console.log(search);
  //   console.log(checkboxValue);

  //   console.log('debounce',debounce);

  // }, [search, checkboxValue, debounce]);

  useEffect(() => {
    setSearch(debounce)
    // console.log(search);

  }, [debounce]);

  // useEffect(() => {
  //   setTypes(types => [...types, ])
  // }, []);
  // useEffect(() => {

  //   console.log(wines);

  // }, [wines]);

  useEffect(() => {
    dispatch(getWines());
  }, [dispatch]);

  // useEffect(() => {
  //   console.log(search);

  // }, [search]);

  const renderWine = () => {
    return handleWineFilter(wines, search!, types);
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
          </div>
          <button type="submit"></button>
          {/* <div>filter</div>
          <div>volume</div> */}
        </div>
        <div className={style['wine-library__side-bar']}>
          <div className={style['wine-library__type-block']}>
            <span className={style['wine-library__type-name']}>ТИП</span>
            <div className={style['wine-library__type-wrapper']}>
              {TypeData.map((type, i) => {
                const { id, text } = type;
                return (
                  <CheckboxType key={i} id={id} text={text} name="typeWine" handleChangeCheckbox={handleChangeCheckbox}/>
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
                  <CheckboxType key={i} id={id} text={text} name="colorWine"  handleChangeCheckbox={handleChangeCheckbox}/>
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
