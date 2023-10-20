'use client';
import Link from 'next/link';
import Logo from '../Logo/Logo';
import styles from './HeaderTypeSecond.module.scss';
import { montserrat, playfairDisplay } from '@/app/fonts';
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import DropIcon from '../Icons/DropIcon';
import { useState } from 'react';
import useResize from '@/app/hooks/useResize';
import BurgerMenu from '../ui/BurgerMenu/BurgerMenu';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { toggleDropdown } from '@/app/store/wine/wineSlice';
import ButtonLogout from '../ui/ButtonLogout/ButtonLogout';

function HeaderTypeSecond() {
  const { currentUser, isLoggedIn } = useAppSelector((state) => state.user);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isLaptop, isMobile } = useResize();
  const dispatch = useAppDispatch();

  const handleOpenDropdownMenu = () => {
    dispatch(toggleDropdown());
  };

  const handleOpenDropdown = () => {
    setIsDropdownOpen(true);
  };
  const handleCloseDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header
      className={`${styles['header-type-second']} ${montserrat.className}`}
      onMouseLeave={handleCloseDropdown}
    >
      {isLaptop ? (
        <Logo dark />
      ) : (
        <Link
          href={'/'}
          className={`${styles['header-type-second__logo']} ${playfairDisplay.className}`}
        >
          WINE CELLAR
        </Link>
      )}

      {!isLaptop && (
        <BurgerMenu extraClass={styles['header-type-second__burger']} handleOpenDropdownMenu={handleOpenDropdownMenu} />
      )}

      {isLaptop && (
        <div
          className={`${styles['header-type-second__wrapper']} ${montserrat.className}`}
        >
          <Link href={'/'} className={styles['header-type-second__link']}>
            Библиотека
          </Link>
          <Link
            href={'/my-collection'}
            className={styles['header-type-second__link']}
          >
            Моя коллекция
          </Link>
        </div>
      )}
      {isLaptop && (
        <div className={styles['header-type-second__user-info']}>
          {isLoggedIn ? (
            <>
              <Link
                className={styles['header-type-second__link-user']}
                href={'/account/favorites'}
                onMouseEnter={handleOpenDropdown}
              >
                {currentUser?.nameUser?.toUpperCase()}{' '}
                {currentUser?.surname?.toUpperCase()}
                <DropIcon />
              </Link>
            </>
          ) : (
            <Link
              className={styles['header-type-second__link-user']}
              href={'/login'}
            >
              ВОЙТИ
            </Link>
          )}
          {isDropdownOpen && (
            <div
              onMouseLeave={handleCloseDropdown}
              className={styles['header-type-second__dropdown']}
            >
              <Link className={styles['header-type-second__link-user']} href={'/account/favorites'}>Избранное</Link>
              <Link className={styles['header-type-second__link-user']} href={'/account/settings'}>Мои данные</Link>
              <ButtonLogout />
            </div>
          )}
        </div>
      )}
      <DropdownMenu />
    </header>
  );
}

export default HeaderTypeSecond;
