'use client';

import React from 'react'
import styles from "./About.module.scss"
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useScroll } from '@/app/contexts/scrollContext';


function About(props: {opacity: number}) {

  const {aboutRef} = useScroll()

  console.log(aboutRef)

  const {opacity} = props
  console.log(opacity)


  return (
    <div className={styles.About} ref={aboutRef}>
        <div className={styles.container}>
        <div className={styles.description}>
          <p className={`${styles.red} ${styles.title}`}>ABOUT ME</p>

          <h2>
            SCIENCE-DRIVEN <span className={styles.red}>PERFORMANCE</span>
          </h2>

          <p>Hi I’m Cat and I’m a personal trainer</p>

          <p>
            I combine academic expertise and practical experience to deliver personal training for
            all levels that’s personalised and goal driven. I hold an MSc in Applied Sports Science  with a focus on Strength & Conditioning, have experience working in the NBA, with professional boxers and running a PT business for over 10 years.

          </p>
          <p>
            My journey began as an athlete; from youth football and tennis to boxing and back to
            football. Now, I apply this lived experience, alongside current sports science, to support
            people across all levels of training, from elite athletes to people who have never
            stepped foot in a gym before. Whatever your level I aim to make training friendly, fun
            and science based. 
          </p>
          <p>
            I currently work in-house in a leading martial arts academy and offer 1-1 coaching,
            consultancy, and team training across a range of sports.’

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
                <span>All levels welcome</span>
              </li>
              <li>
                <BsFillCheckCircleFill />
                <span>Remote and in-person options available</span>
              </li>
            </div>
          </div>
        </div>

        {/* <img src="/assets/images/client-venus.jpg" className={styles.card}/> */}

        <div className={styles.card}>

          
                  <div className={styles.imgContainer}>
        <div className={styles.heroOverlay}></div>
       <img src="/assets/images/client-venus.jpg"/>
      </div>

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