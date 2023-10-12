import { CrossIconProps } from "@/types/componentProps.types";

function CrossIcon({ dark , light} : CrossIconProps) {
  const type = [
    dark ? '#282828' : '',
    light ? '#fff' : ''
  ]

  const color = type.find((c ) => c !== '')
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        d="M1.35352 0.646484L21.3535 20.6465"
        stroke={color}
        strokeLinecap="round"
      />
      <path
        d="M0.646484 20.6465L20.6465 0.646485"
        stroke={color}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default CrossIcon;
