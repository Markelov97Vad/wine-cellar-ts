"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import style from './Promo.module.scss';


const Promo = () => {
  const titleRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current, { opacity: 0}, { opacity: 1, duration: 8, delay: 2})
    gsap.fromTo(spanRef.current, { opacity: 0}, { opacity: 1, duration: 8, delay: 2.5})
  },[])

  gsap.to(titleRef, { scale: 77})

  return (
    <section className={style.promo}>
      <h1 ref={titleRef} className={style.promo__title}>WINE CELLAR</h1>
      <span ref={spanRef} className={style['promo__span-line']}></span>
    </section>
  );
}

export default Promo;
