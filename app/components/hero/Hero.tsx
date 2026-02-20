import React from 'react'
import styles from "./Hero.module.scss"
import CustomButton from '../customButton/CustomButton';
import { useScroll } from '@/app/contexts/scrollContext';

import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import { useEffect } from "react";

function Hero() {
  const { homeRef, servicesRef, contactRef } = useScroll();

  useEffect(() => {
  const id = requestAnimationFrame(() => {
    window.scrollTo(0, 0);
  });
  return () => cancelAnimationFrame(id);
}, []);

  useGSAP(() => {
    gsap.fromTo(
      '.intro',
      {autoAlpha: 0},
      {left: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out"
      }
    )

        gsap.fromTo(
      '.imgContainer',
      {autoAlpha: 0},
      {right: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out"
      }
    )
  })

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
      <div className={styles.container}>

      <div className={`${styles.intro} intro  `}>
        {/* <p className={styles.redPTag}>ELITE COACHING</p> */}

        <h1>
          ELEVATE YOUR <span>PERFORMANCE</span>
        </h1>

        <p>
          Friendly science based inclusive personal training individually tailored to you and your goals.
        </p>

        <div className={styles.btns}>
          <CustomButton value="START TRAINING" backgroundColor="#f9710b;" border="none" onClick={() => scrollTo(contactRef)} />
          <CustomButton value="VIEW SERVICES" backgroundColor="transparent" color="black" border="1px solid #A6A6A6" onClick={() => scrollTo(servicesRef)}/>
        </div>
      </div>

        <div className={`${styles.imgContainer} imgContainer`}>
        <div className={styles.heroOverlay}></div>
        <img src="/assets/images/coaching-martin-2.JPG" />
      </div>
      </div>
    </div>
  );
}

export default Hero