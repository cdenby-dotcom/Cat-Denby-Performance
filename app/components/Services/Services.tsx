'use client';

import React from 'react';
import styles from "./Services.module.scss";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { GiStrong } from "react-icons/gi"; // example icon
import { FaDumbbell } from "react-icons/fa"; // example icon

function Services() {
  return (
    <div className={styles.Services}>
      <div className={styles.container}>

        {/* HEADER */}
        <div className={styles.header}>
          <h1>SERVICES</h1>
          <h2>BUILT FOR PERFORMANCE</h2>
          <p>Science‑driven coaching tailored to your goals.</p>
        </div>

        {/* TWO CARDS */}
        <div className={styles.cards}>

          {/* PERSONAL TRAINING */}
          <div className={styles.card}>
            <div className={styles.cornerGradient}></div>

            <div className={styles.logo}>
              <FaDumbbell size={40} />
            </div>

            <h3>PERSONAL TRAINING</h3>

            <p>
              Friendly, personalised 1‑1 coaching focused on strength, confidence,
              movement quality and long‑term health.
            </p>

            <div className={styles.list}>
              <div><BsFillCheckCircleFill className={styles.tick} /><span>Strength & muscle gain</span></div>
              <div><BsFillCheckCircleFill className={styles.tick} /><span>Fat loss & toning</span></div>
              <div><BsFillCheckCircleFill className={styles.tick} /><span>Technique & movement coaching</span></div>
              <div><BsFillCheckCircleFill className={styles.tick} /><span>Beginner‑friendly</span></div>
            </div>

            <a className={styles.link}>Learn More →</a>
          </div>

          {/* STRENGTH & CONDITIONING */}
          <div className={styles.card}>
            <div className={styles.cornerGradient}></div>

            <div className={styles.logo}>
              <GiStrong size={40} />
            </div>

            <h3>STRENGTH & CONDITIONING</h3>

            <p>
              Evidence‑based programming for athletes across combat sports,
              endurance, and team sports. Build power, resilience and performance.
            </p>

            <div className={styles.list}>
              <div><BsFillCheckCircleFill className={styles.tick} /><span>Periodised strength plans</span></div>
              <div><BsFillCheckCircleFill className={styles.tick} /><span>Combat sports S&C</span></div>
              <div><BsFillCheckCircleFill className={styles.tick} /><span>Endurance athlete support</span></div>
              <div><BsFillCheckCircleFill className={styles.tick} /><span>Competition peaking</span></div>
            </div>

            <a className={styles.link}>Learn More →</a>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Services;
