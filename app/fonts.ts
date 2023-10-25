import { Playfair_Display } from 'next/font/google';
import { Montserrat } from 'next/font/google';

export const playfairDisplay = Playfair_Display({
  subsets: ['cyrillic','latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  preload: true,
  display: 'swap',
})
export const montserrat = Montserrat({
  subsets: ['cyrillic','latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  preload: true,
  display: 'swap',
})
