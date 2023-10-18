import styles from './Icon.module.scss';

function Dislike() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="23"
      viewBox="0 0 28 23"
      fill="none"
      className={styles.icon}
    >
      <path
        d="M13.6617 3.29128L14.0138 3.61474L14.3527 3.27747C15.8336 1.80364 17.7502 0.5 20.3636 0.5C24.5346 0.5 27.5 3.65942 27.5 7.6C27.5 9.52414 26.5747 11.1517 25.1214 12.4886L14 22.138L2.87313 12.4839L2.86295 12.475L2.85232 12.4668C1.32314 11.2781 0.5 9.55477 0.5 7.6C0.5 3.65942 3.46539 0.5 7.63636 0.5C10.2411 0.5 12.1573 1.90921 13.6617 3.29128Z"
        fill="#998431"
        stroke="#998431"
      />
    </svg>
  );
}

export default Dislike;
