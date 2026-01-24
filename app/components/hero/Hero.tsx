import React from 'react'
import styles from "./Hero.module.scss"
import CustomButton from '../customButton/CustomButton';
import { useScroll } from '@/app/contexts/scrollContext';

function Hero() {
  const { homeRef, aboutRef, servicesRef, clientsRef, contactRef } = useScroll();

      const scrollTo = (
      ref: React.RefObject<HTMLElement | null>
    ) => {
      if (!ref.current) return;
  
      // Get THIS header's height
      const headerHeight =
        document.getElementById('Header')?.offsetHeight ?? 0;
  
      // Get section position relative to page
      const elementTop =
        ref.current.getBoundingClientRect().top + window.scrollY;
  
      // Subtract header height
      const scrollTo = elementTop - headerHeight;
      console.log(headerHeight + " headerheight")
  
      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth',
      });
  
    };
  return (
    <div className={styles.Hero} ref={homeRef}>
      <img src="/assets/images/coaching-martin-2.JPG" />

      <div className={styles.heroOverlay}></div>
      {/* <div class="gradient-overlay"></div> */}


      <div className={styles.intro}>
        <p className={styles.redPTag}>ELITE COACHING</p>

        <h1>
          ELEVATE YOUR ATHLETIC <span>PERFORMANCE</span>
        </h1>

        <p>
          Friendly science based inclusive personal training individually tailored to you and your goals
        </p>

        <div className={styles.btns}>
          <CustomButton value="START TRAINING" backgroundColor="#f9710b;" border="none" onClick={() => scrollTo(contactRef)} />
          <CustomButton value="VIEW SERVICES" backgroundColor="transparent" color="black" border="1px solid #A6A6A6" onClick={() => scrollTo(servicesRef)}/>
        </div>
      </div>
    </div>
  );
}

export default Hero