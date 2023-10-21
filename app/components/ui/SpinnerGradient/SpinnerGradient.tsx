import styles from './SpinnerGradient.module.scss';

function SpinnerGradient() {
  return (
    <div className={styles['spinner-gradient']}>
      <div className={styles['spinner-gradient__spinner-container']}>
        <div className={styles['spinner-gradient__circle-border']}>
          <div className={styles['spinner-gradient__circle-core']}></div>
        </div>
      </div>
    </div>
  );
}

export default SpinnerGradient;
