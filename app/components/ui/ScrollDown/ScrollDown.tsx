import styles from './ScrollDown.module.scss';

function ScrollDown() {
  return (
    <div className={styles.container}>
      <div className={styles.container__chevron}></div>
      <div className={styles.container__chevron}></div>
      <div className={styles.container__chevron}></div>
    </div>
  );
}

export default ScrollDown;
