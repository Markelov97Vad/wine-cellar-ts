import styles from './Icon.module.scss';
function DropIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={styles.icon}
    >
      <g clipPath="url(#clip0_149_107)">
        <path d="M4 12L12 20L20 12H4Z" fill="#998431" />
      </g>
      <defs>
        <clipPath id="clip0_149_107">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default DropIcon;
