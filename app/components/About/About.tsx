'use client';

import React from 'react';
import styles from "./About.module.scss";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useScroll } from '@/app/contexts/scrollContext';

function About() {
  const { aboutRef } = useScroll();

  return (
    <div className={styles.About} ref={aboutRef}>
      <div className={styles.container}>

        {/* LEFT — MAIN INFO */}
        <div className={styles.infoCard}>
          <h1>ABOUT ME</h1>
          <h2>SCIENCE-DRIVEN PERFORMANCE</h2>

          <p>Hi I’m Cat!</p>

          <p>
            I’m a strength and conditioning coach with an MSc in Applied Sports Science
            and over a decade of hands‑on coaching experience. I’ve worked in professional
            sport, including the NBA, but most of my work now focuses on helping everyday
            people get stronger, healthier, and more confident in their training.
          </p>

          <p>
            My approach is simple: use current sports science research, adapt it to real life,
            and make training enjoyable for all levels. Strength is for everyone, and I build
            programmes that support long‑term health, mobility, and performance.
          </p>

          <p>
            I split my time between a martial arts academy and a private studio, offering
            1‑1 coaching, consultancy, and S&C support across different training backgrounds.
          </p>
        </div>

        {/* RIGHT — EXPERIENCE LIST */}
        <div className={styles.experience}>
          <div><BsFillCheckCircleFill className={styles.tick} /><span>Master's degree in Sports Science</span></div>
          <div><BsFillCheckCircleFill className={styles.tick} /><span>NBA strength & conditioning experience</span></div>
          <div><BsFillCheckCircleFill className={styles.tick} /><span>Evidence-based, periodized programming</span></div>
          <div><BsFillCheckCircleFill className={styles.tick} /><span>10+ years coaching elite athletes</span></div>
          <div><BsFillCheckCircleFill className={styles.tick} /><span>All levels welcome</span></div>
          <div><BsFillCheckCircleFill className={styles.tick} /><span>Remote and in-person options available</span></div>
        </div>

      </div>
    </div>
  );
}

export default About;
