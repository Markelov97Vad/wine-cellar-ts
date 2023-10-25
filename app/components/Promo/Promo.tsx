"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import style from './Promo.module.scss';
import ScrollDown from '../ui/ScrollDown/ScrollDown';
import { playfairDisplay } from '@/app/fonts';

const Promo = () => {
  const titleRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current, { opacity: 0}, { opacity: 1, duration: 8, delay: 2})
    gsap.fromTo(spanRef.current, { opacity: 0}, { opacity: 1, duration: 8, delay: 2.5})
  },[])

  return (
    <section className={style.promo}>
      <h1 ref={titleRef} className={`${style.promo__title} ${playfairDisplay.className}`}>WINE CELLAR</h1>
      <span ref={spanRef} className={style['promo__span-line']}></span>
      <ScrollDown/>
    </section>
  );
}

export default Promo;
