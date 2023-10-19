'use client';
import Link from 'next/link';
import Logo from '../Logo/Logo';
import styles from './HeaderTypeSecond.module.scss';
import { montserrat, playfairDisplay } from '@/app/fonts';
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import DropIcon from '../Icons/DropIcon';
import { useEffect, useState } from 'react';
import { logout } from '@/app/store/user/userApi';
import { useRouter } from 'next/navigation';
import useResize from '@/app/hooks/useResize';
import BurgerMenu from '../ui/BurgerMenu/BurgerMenu';
import { routeData } from '@/utils/constans';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { toggleDropdown } from '@/app/store/wine/wineSlice';
import ButtonLogout from '../ui/ButtonLogout/ButtonLogout';

function HeaderTypeSecond() {
  const { currentUser, isLoggedIn } = useAppSelector((state) => state.user);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isLaptop, isMobile } = useResize();
  const dispatch = useAppDispatch();
  const { isDropdownMenuOpen } = useAppSelector(state => state.wines);
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
      className={`${styles['header-type-second']} ${isMobile && styles['header-type-second_type_fix']} ${montserrat.className}`}
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
        <BurgerMenu
          handleOpenDropdownMenu={handleOpenDropdownMenu}
        />
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
              <ButtonLogout/>
            </div>
          )}
        </div>
      )}
      <DropdownMenu/>
    </header>
  );
}

export default HeaderTypeSecond;
