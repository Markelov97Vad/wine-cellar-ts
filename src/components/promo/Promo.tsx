import styles from './promo.module.scss';
import backgroundVideo from '../../assets/video/background-video.mp4'


function Promo() {
  return ( 
    <section className={styles.promo}>
      {/* <div>
        <span>----</span>
        <span className={styles.promo__spanText}>Добро пожаловать в</span>
      </div> */}
      <h1 className={styles.promo__title}>WINE CELLAR</h1>
      <span className={styles.promo__spanLine}></span>
      {/* <video className={styles.promo__backgroundVideo} autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4"/>
      </video> */}
    </section>
  );
}

export default Promo;