import { montserrat } from '@/app/fonts';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { routeData } from '@/utils/constans';
import VkIcon from '../Icons/VkIcon';
import TelegramIcon from '../Icons/TelegramIcon';
import GithubIcon from '../Icons/GitgubIcon';

const iconData = [
  { logo: <VkIcon />, href: 'https://vk.com/maarsello' },
  { logo: <TelegramIcon />, href: 'https://t.me/maarsello' },
  { logo: <GithubIcon/>, href: 'https://github.com/Markelov97Vad'}
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__wrapper} ${montserrat.className}`}>
        <ul className={styles['footer__tabs-wrapper']}>
          {routeData.map((route, i) => (
            <li key={i}>
              <Link href={route.route} className={`${styles.footer__tab} ${styles.footer__tab_type_text}`}>
                {route.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles['footer__tabs-wrapper']}>
          <Link
            href={'/'}
            className={`${styles.footer__tab} ${styles.footer__tab_type_bold} ${styles.footer__tab_type_text}`}
          >
            WINE CELLAR
          </Link>
          <ul
            className={`${styles.footer__tab} ${styles.footer__tab_type_bold} ${styles.footer__tab_type_icons}`}
          >
            {iconData.map((el, i) => (
              <li key={i}>
                <a href={el.href} target='_blank'>
                  {el.logo}
                </a>
              </li>
            ))}
          </ul>
          <span
            className={`${styles.footer__tab} ${styles.footer__tab_type_bold} ${styles.footer__tab_type_text}`}
          >
            &copy; Vadim Markelov
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
