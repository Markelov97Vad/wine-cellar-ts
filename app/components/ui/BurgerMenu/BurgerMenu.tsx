import { useState } from 'react';
import styles from './BurgerMenu.module.scss'
import { BurgerMenuTypePops } from '@/types/componentProps.types';

function BurgerMenu({handleOpenDropdownMenu, isDropdownMenuOpen, light} : BurgerMenuTypePops) {
  return (
    <div onClick={handleOpenDropdownMenu} className={`${styles['burger-menu']} ${isDropdownMenuOpen ? styles['burger-menu_open'] : ''}`}>
      <span className={`${styles['burger-menu__span']} ${light && styles['burger-menu__span_type_light']}`}></span>
    </div>
  );
}

export default BurgerMenu;
