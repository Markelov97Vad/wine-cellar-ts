'use client';
import style from './WineLibrary.module.scss';
import WineCardList from './WineCardList/WineCardList';
import { montserrat, playfairDisplay } from '@/app/fonts';
import { ColorData, SESSION_STORAGE_LIBRARY_CHECKBOX_COLOR, SESSION_STORAGE_LIBRARY_CHECKBOX_TYPE, SESSION_STORAGE_LIBRARY_SEARCH, SESSION_STORAGE_MYCOLLECTION_CHECKBOX_COLOR, SESSION_STORAGE_MYCOLLECTION_CHECKBOX_TYPE, SESSION_STORAGE_MYCOLLECTION_SEARCH, TypeData } from '@/utils/constans';
import { ChangeEvent, useEffect, useState } from 'react';
import { CheckboxsType } from '@/types/allTypes.types';
import useSearchWine from '@/app/hooks/useSearchWine';
import { Wine } from '@/types/wine.type';
import SearchIcon from '../Icons/SearchIcon';
import Filter from '../Filter/Filter';
import { useFormValid } from '@/app/hooks/useFormValid';
import useResultCache from '@/app/hooks/useResultCache';
import { usePathname } from 'next/navigation';
import { WineLibraryProps } from '@/types/componentProps.types';

function WineLibrary({wines, isLoading} : WineLibraryProps) {
  const [search, setSearch] = useState<string | undefined>('');
  const [types, setTypes] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const {inputValues, handleInputChange, resetFormValues} = useFormValid();
  const [checkboxValue, setCheckboxValue] = useState<CheckboxsType | null>(null);
  const { handleWineFilter } = useSearchWine();
  const { setResultCache, getResultCache } = useResultCache();
  const pathname = usePathname();
  const isLibraryPage = pathname === '/'
  const isMyCollectionPage = pathname === '/my-collection'

  const handleChangeCheckboxType = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value, id , checked} = evt.target;
    setCheckboxValue(() => ({
      ...checkboxValue,
      [id]: value
    }));
    if(checked) {
      setTypes(types => [...types, value]);
      if (isLibraryPage) {
        sessionStorage.setItem(SESSION_STORAGE_LIBRARY_CHECKBOX_TYPE, JSON.stringify([...types, value]))
      }
      if (isMyCollectionPage) {
        sessionStorage.setItem(SESSION_STORAGE_MYCOLLECTION_CHECKBOX_TYPE, JSON.stringify([...types, value]))
      }
    } else {
      setTypes(types => {
        return types.filter(type => type !== value)
      })
      if (isLibraryPage) {
        const current = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_LIBRARY_CHECKBOX_TYPE)!)
        sessionStorage.setItem(SESSION_STORAGE_LIBRARY_CHECKBOX_TYPE, JSON.stringify(current.filter((type: string) => type !== value)))
      }
      if (isMyCollectionPage) {
        const current = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_MYCOLLECTION_CHECKBOX_TYPE)!)
        sessionStorage.setItem(SESSION_STORAGE_MYCOLLECTION_CHECKBOX_TYPE, JSON.stringify(current.filter((type: string) => type !== value)))
      }
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
      if (isLibraryPage) {
        sessionStorage.setItem(SESSION_STORAGE_LIBRARY_CHECKBOX_COLOR, JSON.stringify([...colors, value]))
      }
      if (isMyCollectionPage) {
        sessionStorage.setItem(SESSION_STORAGE_MYCOLLECTION_CHECKBOX_COLOR, JSON.stringify([...colors, value]))
      }
    } else {
      setColors(types => {
        return types.filter(type => type !== value)
      })

      if (isLibraryPage) {
        const current = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_LIBRARY_CHECKBOX_COLOR)!)
        sessionStorage.setItem(SESSION_STORAGE_LIBRARY_CHECKBOX_COLOR, JSON.stringify(current.filter((type: string) => type !== value)))
      }
      if (isMyCollectionPage) {
        const current = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_MYCOLLECTION_CHECKBOX_COLOR)!)
        sessionStorage.setItem(SESSION_STORAGE_MYCOLLECTION_CHECKBOX_COLOR, JSON.stringify(current.filter((type: string) => type !== value)))
      }
    }
  };

  function handleCache() {
    if (isLibraryPage) {
      setResultCache(SESSION_STORAGE_LIBRARY_SEARCH,{ search: inputValues?.search});
    }
    if (isMyCollectionPage) {
      setResultCache(SESSION_STORAGE_MYCOLLECTION_SEARCH,{ search: inputValues?.search});
    }
  }

  useEffect(() => {
    if (isLibraryPage) {
      const cache = getResultCache(SESSION_STORAGE_LIBRARY_SEARCH);
      cache && resetFormValues({search: cache.search});
    }
    if (isMyCollectionPage) {
      const cache = getResultCache(SESSION_STORAGE_MYCOLLECTION_SEARCH);
      cache && resetFormValues({search: cache.search});
    }

  }, [getResultCache, resetFormValues])


  const renderWine = () => {
    return handleWineFilter(wines as Wine[], search!, types, colors);
  }

  const handleSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setSearch(inputValues?.search)
    handleCache();
  }

  useEffect(() => {
    if (pathname === '/') {
      setSearch(() => {
        const current = JSON.parse(sessionStorage?.getItem('librarySearchValue') as string)
          return current ? current.search : '';
        })
    }
    if (pathname === '/my-collection') {
      setSearch(() => {
        const current = JSON.parse(sessionStorage?.getItem('myCollSearchValue') as string)
          return current ? current.search : '';
        })
    }
  }, []);

  useEffect(() => {
    if (isLibraryPage) {
      setTypes(() => {
        const current = JSON.parse(sessionStorage?.getItem(SESSION_STORAGE_LIBRARY_CHECKBOX_TYPE)!)
        return current ? current : [];
      })
      setColors(() => {
        const current = JSON.parse(sessionStorage?.getItem(SESSION_STORAGE_LIBRARY_CHECKBOX_COLOR)!)
        return current ? current : [];
      })
    }
    if (isMyCollectionPage) {
      setTypes(() => {
        const current = JSON.parse(sessionStorage?.getItem(SESSION_STORAGE_MYCOLLECTION_CHECKBOX_TYPE)!)
        return current ? current : [];
      })
      setColors(() => {
        const current = JSON.parse(sessionStorage?.getItem(SESSION_STORAGE_MYCOLLECTION_CHECKBOX_COLOR)!)
        return current ? current : [];
      })
    }
  }, []);

  return (
    <section className={`${style['wine-library']} ${montserrat.className}`}>
      <h2 className={`${style['wine-library__title']} ${playfairDisplay.className}`}>{isLibraryPage ? 'Винотека' : ' Коллекция моих вин'}</h2>
      <form className={style['wine-library__wrapper']} onSubmit={handleSubmit}>
        <div className={style['wine-library__block']}></div>
        <div className={style['wine-library__filter-headers']}>
          <div className={style['wine-library__search']}>
            <input
              className={style['wine-library__search-input']}
              type="text"
              name="search"
              placeholder="Поиск по названию вина"
              value={inputValues?.search || ''}
              onChange={handleInputChange}
            />
            <button type="submit" className={style['wine-library__submit-button']}>
              <SearchIcon/>
            </button>
          </div>
        </div>
        <div className={style['wine-library__side-bar']}>
          <Filter isLibraryPage={isLibraryPage} isMyCollectionPage={isMyCollectionPage} data={TypeData} name='ТИП' handleChangeCheckbox={handleChangeCheckboxType}/>
          <Filter isLibraryPage={isLibraryPage} isMyCollectionPage={isMyCollectionPage} data={ColorData} name='ЦВЕТ' handleChangeCheckbox={handleChangeCheckboxColor}/>
        </div>
        <WineCardList wines={renderWine()} isLoading={isLoading}/>
      </form>
    </section>
  );
}

export default WineLibrary;
