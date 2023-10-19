import { montserrat } from '@/app/fonts';
import styles from './FooterForLaptop.module.scss';
import { routeData } from '@/utils/constans';
import Link from 'next/link';
import { FooterForLaptopTypeProps } from '@/types/componentProps.types';

function FooterForLaptop({ data } : FooterForLaptopTypeProps) {
  return (
    <div className={`${styles['footer-for-laptop']} ${montserrat.className}`}>
        <ul className={styles['footer-for-laptop__tabs-wrapper']}>
          {routeData.map((route, i) => (
            <li key={i}>
              <Link
                href={route.route}
                className={`${styles['footer-for-laptop__tab']} ${styles['footer-for-laptop__tab_type_text']}`}
              >
                {route.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles['footer-for-laptop__tabs-wrapper']}>
          <Link
            href={'/'}
            className={`${styles['footer-for-laptop__tab']} ${styles['footer-for-laptop__tab_type_bold']} ${styles['footer-for-laptop__tab_type_text']}`}
          >
            WINE CELLAR
          </Link>
          <ul
            className={`${styles['footer-for-laptop__tab']} ${styles['footer-for-laptop__tab_type_bold']} ${styles['footer-for-laptop__tab_type_icons']}`}
          >
            {data.map((el, i) => (
              <li key={i}>
                <a href={el.href} target="_blank">
                  {el.logo}
                </a>
              </li>
            ))}
          </ul>
          <span
            className={`${styles['footer-for-laptop__tab']} ${styles['footer-for-laptop__tab_type_bold']} ${styles['footer-for-laptop__tab_type_text']}`}
          >
            &copy; Vadim Markelov
          </span>
        </div>
      </div>
  );
}

export default FooterForLaptop;
