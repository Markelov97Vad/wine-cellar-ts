import './Promo.scss';
import gsap from 'gsap'
import { useEffect, useRef } from 'react';


const Promo = () => {
  const titleRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current, { opacity: 0}, { opacity: 1, duration: 8, delay: 2})
    gsap.fromTo(spanRef.current, { opacity: 0}, { opacity: 1, duration: 8, delay: 2.5})
  },[])
  
  gsap.to(titleRef, { scale: 77})
  
  return ( 
    <section className='promo'>
      <h1 ref={titleRef} className='promo__title'>WINE CELLAR</h1>
      <span ref={spanRef} className='promo__span-line'></span>
    </section>
  );
}

export default Promo;