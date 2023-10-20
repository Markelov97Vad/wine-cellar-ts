import styles from './Icon.module.scss';

function ImgIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      className={styles.icon}
    >
      <path
        d="M13.9999 18.6667L9.33325 15.1667L2.33325 24.5H25.6666L20.9999 10.5L13.9999 18.6667Z"
        fill="#998431"
      />
      <path
        d="M11.6667 7C11.6667 8.93317 10.0999 10.5 8.16675 10.5C6.23358 10.5 4.66675 8.93317 4.66675 7C4.66675 5.06683 6.23358 3.5 8.16675 3.5C10.0999 3.5 11.6667 5.06683 11.6667 7Z"
        fill="black"
      />
    </svg>
  );
}

export default ImgIcon;
