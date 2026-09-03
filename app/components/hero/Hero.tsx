'use client';

import React from 'react';
import styles from "./Hero.module.scss";
import CustomButton from '../customButton/CustomButton';
import { useScroll } from '@/app/contexts/scrollContext';

function Hero() {
  const { contactRef } = useScroll();

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    if (!ref.current) return;

    const headerHeight =
      document.getElementById('Header')?.offsetHeight ?? 0;

    const elementTop =
      ref.current.getBoundingClientRect().top + window.scrollY;

    const scrollTo = elementTop - headerHeight;

    window.scrollTo({
      top: scrollTo,
      behavior: 'auto',
    });
  };

  return (
    <div className={styles.Hero}>
      <div className={styles.container}>

        <div className={styles.intro}>
          <h1>Cat Denby MSc</h1>
          <h2>PERSONAL TRAINING</h2>

          <p>
            Science based inclusive personal training individually tailored to you and your goals.
          </p>

          <div className={styles.btns}>
            <CustomButton
              value="START TRAINING"
              backgroundColor="#f9710b"
              border="none"
              onClick={() => scrollTo(contactRef)}
            />
          </div>
        </div>

        <div className={styles.imgContainer}>
          <div className={styles.heroOverlay}></div>
          <img
            src="/assets/images/coaching-martin-2.JPG"
            alt="Personal training"
          />
        </div>

      </div>
    </div>
  );
}

export default Hero;
