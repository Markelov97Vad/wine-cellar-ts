'use client';
import style from './Header.module.scss';
import NavigationLinkProfile from '../ui/NavigationLinkProfile/NavigationLinkProfile';
import Navigation from '../Navigation/Navigation';
import { navItemsHeader } from '@/utils/constans';
import Logo from '../Logo/Logo';
import BurgerMenu from '../ui/BurgerMenu/BurgerMenu';
import { useState } from 'react';
import useResize from '@/app/hooks/useResize';

function Header() {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const { isLaptop } = useResize();

  const handleOpenDropdownMenu = () => {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  };

  return (
    <header className={style.header}>
      <Logo />
      {isLaptop ? (
        <>
          <Navigation items={navItemsHeader} />
          <NavigationLinkProfile to="/account/favorites" />
        </>
      ) : (
        <BurgerMenu
          light
          handleOpenDropdownMenu={handleOpenDropdownMenu}
          isDropdownMenuOpen={isDropdownMenuOpen}
        />
      )}
    </header>
  );
}

export default Header;
