"use client";
import { montserrat } from "@/app/fonts";
import { usePathname } from "next/navigation";
import styles from './NavigationTab.module.scss'
import Link from "next/link";
import { navItemAccount } from "@/utils/constans";

function NavigationTab() {
  const pathname = usePathname();
  return (
    <nav className={styles["navigation-tab"]}>
          <ul className={`${styles["navigation-tab__list"]} ${montserrat.className}`}>
            {navItemAccount.map((item, id) => {
              const isActive = pathname === item.href;
              return (
                <li key={id}>
                  <Link
                    className={`${styles["navigation-tab__link"]} ${
                      isActive ? styles["navigation-tab__link_active"] : ''
                    }`}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
  );
}

export default NavigationTab;