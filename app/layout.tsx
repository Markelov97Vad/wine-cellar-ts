import './styles/_index.scss';
import 'normalize.css';
import type { Metadata } from 'next';
import { Providers } from '@/app/store/provider';
import Footer from './components/Footer/Footer';
import Root from './components/Root/Root';

export const metadata: Metadata = {
  title: 'Wine cellar',
  description: 'Generated by create next app',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

// корневое расположение, чтобы везде были html и body
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='html'>
      <Providers>
          <Root>
            {children}
            <Footer />
          </Root>
      </Providers>
    </html>
  );
}
