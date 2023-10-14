import { Metadata } from 'next';
import { ReactNode } from 'react';
import AddWineComp from '../components/AddWineComp/AddWineComp';
import Header from '../components/Header/Header';
import ProtectedRoute from '../hoc/ProtectedRoute';

export const metadata: Metadata = {
  title: 'Library',
  description: 'Add new wine in library',
};

export default function MyCollectionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ProtectedRoute>
      <Header />
      <main>
        <AddWineComp />
        {children}
      </main>
    </ProtectedRoute>
  );
}
