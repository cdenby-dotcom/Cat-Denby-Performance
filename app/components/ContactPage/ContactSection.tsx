import React from 'react';
import styles from "./ContactSection.module.scss";
import { CiMail, CiPhone, CiLocationOn, CiClock2, CiInstagram } from "react-icons/ci";
import { useScroll } from '@/app/contexts/scrollContext';

function ContactSection() {

  const { contactRef } = useScroll();

  return (
    <div className={styles.ContactSection} ref={contactRef}>
      <div className={styles.container}>

        {/* BOX 1 — WHAT I OFFER */}
        <div className={styles.offerBox}>
          <p className={styles.orange}>WHAT I OFFER</p>
          <h2 className={styles.centeredTitle}>COACHING & CONSULTANCY</h2>

          <div className={styles.section}>
            <p>
              55‑minute sessions delivered in‑person or online. Each session blends mobility, strength,
              conditioning and technical work, all tailored to your goals and training history. Sessions take place at KO Combat Academy (Bethnal Green) or N1 Gym (Highbury), London.
            </p>
          </div>

          <div className={styles.section}>
            <p>
              For individuals, teams and organisations. I provide warm‑up protocols, weekly structures,
              periodisation plans, movement screening, program design and recovery strategies — all built
              around your sport, schedule and performance needs.
            </p>
          </div>
        </div>

        {/* BOX 2 — CONTACT (original layout restored) */}
        <div className={styles.contactBox}>
          <p className={styles.orange}>CONTACT</p>
          <h2 className={styles.centeredTitle}>GET IN TOUCH</h2>

          <div className={styles.contactList}>

            <div className={styles.item}>
              <CiMail />
              <div>
                <p>Email</p>
                <a href="mailto:hello@catherinedenbypersonaltraining.com">
                  hello@catherinedenbypersonaltraining.com
                </a>
              </div>
            </div>

            <div className={styles.item}>
              <CiPhone />
              <div>
                <p>Phone / WhatsApp</p>
                <a href="tel:+447415772785">(+44) 07415772785</a>
              </div>
            </div>

            <div className={styles.item}>
              <CiInstagram />
              <div>
                <p>Instagram</p>
                <a href="https://www.instagram.com/catd3nby/" target="_blank" rel="noopener noreferrer">
                  @Catd3nby
                </a>
              </div>
            </div>

            <div className={styles.item}>
              <CiLocationOn />
              <div>
                <p>KO Combat Academy</p>
                <p>188 Bancroft Road, London, E1 4ET</p>
              </div>
            </div>

            <div className={styles.item}>
              <CiLocationOn />
              <div>
                <p>N1 Gym</p>
                <p>35a Cobble Ln, Islington, N1 1SF</p>
              </div>
            </div>

            <div className={styles.item}>
              <CiClock2 />
              <div>
                <p>KO Hours</p>
                <p>Mon–Fri: 8am–12pm</p>
              </div>
            </div>

            <div className={styles.item}>
              <CiClock2 />
              <div>
                <p>N1 Hours</p>
                <p>Mon–Thu: 4–8pm, Fri: 2:30–6:30pm</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default ContactSection;
