'use client';
import Link from 'next/link';
import Logo from '../Logo/Logo';
import styles from './HeaderTypeSecond.module.scss';
import { montserrat } from '@/app/fonts';
import { useAppDispatch, useAppSelector } from '@/app/hooks/redux';
import DropIcon from '../Icons/DropIcon';
import { useState } from 'react';
import { logout } from '@/app/store/user/userApi';
import { useRouter } from 'next/navigation';

function HeaderTypeSecond() {
  const { currentUser, isLoggedIn } = useAppSelector((state) => state.user);
  const [isDropdpwnOpen, setisDropdpwnOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { push } = useRouter();

  const handleOpenDropdown = () => {
    setisDropdpwnOpen(true);
  };
  const handleCloseDropdown = () => {
    setisDropdpwnOpen(false);
  };

  const handlelogout = () => {
    dispatch(logout());
  };

  return (
    <header
      className={`${styles['header-type-second']} ${montserrat.className}`}
      onMouseLeave={handleCloseDropdown}
    >
      <Logo dark />
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
        {isDropdpwnOpen && (
          <div
            onMouseLeave={handleCloseDropdown}
            className={styles['header-type-second__dropdown']}
          >
            <button
              type="button"
              className={styles['header-type-second__dropdown-button']}
              onClick={handlelogout}
            >
              Выйти
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default HeaderTypeSecond;
