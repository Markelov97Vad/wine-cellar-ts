import { montserrat } from '@/app/fonts';
import styles from './FooterForMobile.module.scss'
import { FooterForMobileTypeProps } from "@/types/componentProps.types";
import { routeData } from '@/utils/constans';
import Link from "next/link";

function FooterForMobile({ data } : FooterForMobileTypeProps) {
  return (
    <div className={`${styles['footer-for-mobile']} ${montserrat.className}`}>
          <Link
              href={'/'}
              className={styles['footer-for-mobile__link']}
            >
              WINE CELLAR
            </Link>

              <ul className={styles['footer-for-mobile__routes']}>
                {routeData.map((route, i) => (
                  <li key={i}>
                    <Link
                      href={route.route}
                      className={styles['footer-for-mobile__link']}
                    >
                      {route.text}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul
            className={styles['footer-for-mobile__icons']}
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
            className={styles['footer-for-mobile__copy']}
          >
            &copy; Vadim Markelov
          </span>
        </div>
  );
}

export default FooterForMobile;
