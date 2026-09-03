'use client';

import React from 'react'
import styles from "./Hero.module.scss"
import CustomButton from '../customButton/CustomButton';
import { useScroll } from '@/app/contexts/scrollContext';

function Hero() {
  const { homeRef, servicesRef, contactRef } = useScroll();

  // Remove scroll-to-top animation
  // Just ensure page loads normally
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollTo = (
    ref: React.RefObject<HTMLElement | null>
  ) => {
    if (!ref.current) return;

    const headerHeight =
      document.getElementById('Header')?.offsetHeight ?? 0;

    const elementTop =
      ref.current.getBoundingClientRect().top + window.scrollY;

    const scrollTo = elementTop - headerHeight;

    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.Hero} ref={homeRef}>
      <div className={styles.container}>

        <div className={styles.intro}>
          <h1>
            ELEVATE YOUR <span>PERFORMANCE</span>
          </h1>

          <p>
            Friendly science based inclusive personal training individually tailored to you and your goals.
          </p>

          <div className={styles.btns}>
            <CustomButton
              value="START TRAINING"
              backgroundColor="#f9710b;"
              border="none"
              onClick={() => scrollTo(contactRef)}
            />
            <CustomButton
              value="VIEW SERVICES"
              backgroundColor="transparent"
              color="black"
              border="1px solid #A6A6A6"
              onClick={() => scrollTo(servicesRef)}
            />
          </div>
        </div>

        <div className={styles.imgContainer}>
          <div className={styles.heroOverlay}></div>
          <img src="/assets/images/coaching-martin-2.JPG" />
        </div>

      </div>
    </div>
  );
}

export default Hero;
