import { ReactNode } from 'react';
import style from './page.module.scss';
import { Metadata } from 'next';
import NavigationTab from '../components/NavigationTab/NavigationTab';
import ProtectedRoute from '../hoc/ProtectedRoute';

export const metadata: Metadata = {
  title: 'Account',
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <ProtectedRoute>
      <section className={style.account}>
        <div className={style.account__wrapper}>
          <NavigationTab/>
          {children}
        </div>
      </section>
    </ProtectedRoute>
  );
}
