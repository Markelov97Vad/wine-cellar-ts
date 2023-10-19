import { useState } from 'react';
import styles from './BurgerMenu.module.scss'
import { BurgerMenuTypePops } from '@/types/componentProps.types';
import { useAppSelector } from '@/app/hooks/redux';

function BurgerMenu({ handleOpenDropdownMenu, light } : BurgerMenuTypePops) {
  const { isDropdownMenuOpen } = useAppSelector(state => state.wines)

  return (
    <div onClick={handleOpenDropdownMenu} className={`${styles['burger-menu']} ${isDropdownMenuOpen ? styles['burger-menu_open'] : ''}`}>
      <span className={`${styles['burger-menu__span']} ${styles['burger-menu__span_top']} ${(light && !isDropdownMenuOpen) ? styles['burger-menu__span_type_light'] : ''}`}></span>
      <span className={`${styles['burger-menu__span']} ${styles['burger-menu__span_center']} ${(light && !isDropdownMenuOpen) ? styles['burger-menu__span_type_light'] : ''}`}></span>
      <span className={`${styles['burger-menu__span']} ${styles['burger-menu__span_bottom']} ${(light && !isDropdownMenuOpen) ? styles['burger-menu__span_type_light'] : ''}`}></span>
    </div>
  );
}

export default BurgerMenu;
