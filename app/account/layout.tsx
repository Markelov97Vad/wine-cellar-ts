import { ReactNode } from 'react';
import style from './page.module.scss';
import { Metadata } from 'next';
import NavigationTab from '../components/NavigationTab/NavigationTab';
import ProtectedRoute from '../hoc/ProtectedRoute';
import Header from '../components/Header/Header';
import HeaderTypeSecond from '../components/HeaderTypeSecond/HeaderTypeSecond';

export const metadata: Metadata = {
  title: 'Account',
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <ProtectedRoute>
      {/* <Header/> */}
      <HeaderTypeSecond/>
      <section className={style.account}>
        <div className={style.account__wrapper}>
          <NavigationTab/>
          {children}
        </div>
      </section>
    </ProtectedRoute>
  );
}
