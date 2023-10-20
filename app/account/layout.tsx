import { ReactNode } from 'react';
import { Metadata } from 'next';
import style from './page.module.scss';
import NavigationTab from '../components/NavigationTab/NavigationTab';
import ProtectedRoute from '../hoc/ProtectedRoute';
import HeaderTypeSecond from '../components/HeaderTypeSecond/HeaderTypeSecond';

export const metadata: Metadata = {
  title: 'Account',
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <ProtectedRoute>
      <HeaderTypeSecond/>
      <main>
        <section className={style.account}>
          <div className={style.account__wrapper}>
            <NavigationTab/>
            {children}
          </div>
        </section>
      </main>
    </ProtectedRoute>
  );
}
