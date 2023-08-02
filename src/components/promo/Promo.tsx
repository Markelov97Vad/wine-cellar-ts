import styles from './promo.module.scss';
import backgroundVideo from '../../assets/video/background-video.mp4'
import gsap from 'gsap'
import { ReactNode, Ref, forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import { any } from 'prop-types';

// type PromoType = {
//   // props: ReactNode;
//   ref: {
//     titleRef: HTMLHeadingElement;
//     spanRef: HTMLParagraphElement;
//   }
// }

// const Promo = forwardRef(function (props, ref) {
const Promo = () => {
  const titleRef = useRef(null);
  const spanRef = useRef(null);

  const animationOn = ({ currentTarget } : any) => {
    gsap.to(currentTarget, { opacity: 0 , duration: 4})
  }
  const animationOff = ({ currentTarget } : any) => {
    gsap.to(currentTarget, { opacity: 1 , duration: 4})
  }

  useEffect(() => {
    gsap.fromTo(titleRef.current, { opacity: 0}, { opacity: 1, duration: 8, delay: 2})
    gsap.fromTo(spanRef.current, { opacity: 0}, { opacity: 1, duration: 8, delay: 2.5})
  },[])
  
  gsap.to(titleRef, { scale: 77})
  return ( 
    <section  className={styles.promo}>
      {/* <h1 onMouseEnter={animationOn} onMouseLeave={animationOff} ref={titleRef} className={styles.promo__title}>WINE CELLAR</h1> */}
      <h1 ref={titleRef} className={styles.promo__title}>WINE CELLAR</h1>
      <span ref={spanRef} className={styles.promo__spanLine}></span>
      {/* <video className={styles.promo__backgroundVideo} autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4"/>
      </video> */}
    </section>
  );
}

export default Promo;