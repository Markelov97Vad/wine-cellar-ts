import { montserrat } from '@/app/fonts';
import styles from './Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__wrapper} ${montserrat.className}`}>

        <div className={styles['footer__tabs-wrapper']}>
          <span className={styles.footer__tab}>Библиотека</span>
          <span className={styles.footer__tab}>Моя коллекция</span>
          <span className={styles.footer__tab}>Избранное</span>
          <span className={styles.footer__tab}>Мои данные</span>
        </div>
        <div className={styles['footer__tabs-wrapper']}>
          <span className={`${styles.footer__tab} ${styles.footer__tab_type_bold}`}>WINE CELLAR</span>
          <span className={`${styles.footer__tab} ${styles.footer__tab_type_bold}`}>icons</span>
          <span className={`${styles.footer__tab} ${styles.footer__tab_type_bold}`}>&copy; Вадим Маркелов</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
