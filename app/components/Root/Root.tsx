'use client';
import { RootTypeProps } from "@/types/componentProps.types";
import styles from './Root.module.scss'
import { useAppDispatch, useAppSelector } from "@/app/hooks/redux";

function Root({children} : RootTypeProps) {
  const { isDropdownMenuOpen } = useAppSelector(state => state.wines );

  return (
    <body className={`${styles.root} ${isDropdownMenuOpen ? styles.root_noscroll : ''}`}>
      {children}
    </body>
  );
}

export default Root;
