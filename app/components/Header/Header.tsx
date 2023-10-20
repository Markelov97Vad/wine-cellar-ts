'use client';
import style from './Header.module.scss';
import NavigationLinkProfile from '../ui/NavigationLinkProfile/NavigationLinkProfile';
import Navigation from '../Navigation/Navigation';
import { navItemsHeader } from '@/utils/constans';
import Logo from '../Logo/Logo';
import BurgerMenu from '../ui/BurgerMenu/BurgerMenu';
import { useState } from 'react';
import useResize from '@/app/hooks/useResize';
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import { toggleDropdown } from '@/app/store/wine/wineSlice';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

function Header() {
  const { isLaptop } = useResize();
  const dispatch = useAppDispatch();
  const { isDropdownMenuOpen } = useAppSelector(state => state.wines)

  const handleOpenDropdownMenu = () => {
    dispatch(toggleDropdown());
  };

  return (
    <header className={`${style.header} ${isDropdownMenuOpen ? style.header_active : ""}`}>
      {
        isDropdownMenuOpen ?
        <Logo dark /> :
      <Logo />
      }
      {isLaptop ? (
        <>
          <Navigation items={navItemsHeader} />
          <NavigationLinkProfile to="/account/favorites" />
        </>
      ) : (
        <>
          <BurgerMenu
            extraClass={style.header__burger}
            light
            handleOpenDropdownMenu={handleOpenDropdownMenu}
          />
          <DropdownMenu library/>
        </>
      )}
    </header>
  );
}

export default Header;
