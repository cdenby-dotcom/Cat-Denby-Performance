'use client';

import React from 'react'
import styles from "./About.module.scss"
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useScroll } from '@/app/contexts/scrollContext';

function About() {

  const {aboutRef} = useScroll()

  console.log(aboutRef)


  return (
    <div className={styles.About} ref={aboutRef}>
        <div className={styles.container}>
        <div className={styles.description}>
          <p className={`${styles.red} ${styles.title}`}>ABOUT</p>

          <h2>
            SCIENCE-DRIVEN <span className={styles.red}>PERFORMANCE</span>
          </h2>

          <p>
            I'm a strength & conditioning coach with a Master's in Sports Science.
            My journey has taken me from NBA training facilities to professional
            boxing camps and elite football clubs.
          </p>
          <p>
            I work exclusively with athletes who have competitive goals — whether
            you're stepping into the ring, toeing the start line, or competing at
            the highest levels of your sport.
          </p>
          <p>
            This isn't about "getting fit." It's about leveraging sports science
            to unlock performance gains you didn't know were possible.
          </p>

          <div className={styles.experience}>
            <div>
              <li>
                <BsFillCheckCircleFill />
                <span>Master's degree in Sports Science</span>
              </li>
              <li>
                <BsFillCheckCircleFill />
                <span>NBA strength & conditioning experience</span>
              </li>
              <li>
                <BsFillCheckCircleFill />
                <span>Evidence-based, periodized programming</span>
              </li>
            </div>
            <div>
              <li>
                <BsFillCheckCircleFill />
                <span>10+ years coaching elite athletes</span>
              </li>
              <li>
                <BsFillCheckCircleFill />
                <span>Professional boxing and football clubs</span>
              </li>
              <li>
                <BsFillCheckCircleFill />
                <span>Remote and in-person options available</span>
              </li>
            </div>
          </div>
        </div>

        <div className={styles.card}>

          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>

          <div className={styles.cardTitle}>
            <h3>
              S&C 
            </h3>
            <p>COACHING</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About