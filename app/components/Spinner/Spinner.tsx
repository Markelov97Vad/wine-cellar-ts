import styles from './Spinner.module.scss';

function Spinner() {
  return (
    <div className={styles.spinner}>
      <div className={styles['spinner__pulse-container']}>
        <div className={`${styles['spinner__pulse-bubble']} ${styles['spinner__pulse-bubble_type_1']}`}></div>
        <div className={`${styles['spinner__pulse-bubble']} ${styles['spinner__pulse-bubble_type_2']}`}></div>
        <div className={`${styles['spinner__pulse-bubble']} ${styles['spinner__pulse-bubble_type_3']}`}></div>
      </div>
    </div>
  );
}

export default Spinner;

