import React from 'react';
import styles from "./ContactSection.module.scss";
import { CiMail, CiPhone, CiLocationOn, CiClock2, CiInstagram } from "react-icons/ci";
import { useScroll } from '@/app/contexts/scrollContext';

function ContactSection() {

  const { contactRef } = useScroll();

  const contactDetails = [
    {
      svg: <CiMail />,
      label: "Email",
      href: "mailto:hello@catherinedenbypersonaltraining.com",
      value: "hello@catherinedenbypersonaltraining.com"
    },
    {
      svg: <CiPhone />,
      label: "Phone / WhatsApp",
      href: "tel:+447415772785",
      value: "(+44) 07415772785"
    },
    {
      svg: <CiLocationOn />,
      label: "KO Combat Academy",
      href: "https://www.google.com/maps/place/ko+combat+academy",
      value: "188 Bancroft Road, London, E1 4ET",
      external: true
    },
    {
      svg: <CiLocationOn />,
      label: "N1 Gym",
      href: "https://www.google.com/maps/place/N1+gym+-+personal+training",
      value: "35a Cobble Ln, Islington, N1 1SF",
      external: true
    },
    {
      svg: <CiClock2 />,
      label: "KO Combat Academy Hours",
      value: "Mon–Fri: 8am–12pm"
    },
    {
      svg: <CiClock2 />,
      label: "N1 Gym Hours",
      value: "Mon–Thu: 4–8pm, Fri: 2:30–6:30pm"
    },
    {
      svg: <CiInstagram />,
      label: "Instagram",
      href: "https://www.instagram.com/catd3nby/",
      value: "@Catd3nby",
      external: true
    }
  ];

  return (
    <div className={styles.ContactSection} ref={contactRef}>

      {/* WHAT I OFFER */}
      <div className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.orange}>WHAT I OFFER</p>
          <h2>Coaching & Consultancy</h2>
          <p className={styles.subtext}>
            Clear, simple formats designed to help you move better, feel stronger, and perform at your best.
          </p>
        </div>

        <div className={styles.textBlock}>
          <h3>Coaching</h3>
          <p>
            55‑minute sessions delivered in‑person or online. Each session blends mobility, strength,
            conditioning and technical work — tailored to your goals and training history.
            Sessions take place at KO Combat Academy (Bethnal Green) or N1 Gym (Highbury), London.
          </p>
        </div>

        <div className={styles.textBlock}>
          <h3>Consultancy</h3>
          <p>
            For individuals, teams and organisations. I provide warm‑up protocols, weekly structures,
            periodisation plans, movement screening, program design and recovery strategies — all built
            around your sport, schedule and performance needs.
          </p>
        </div>

        {/* CONTACT */}
        <div className={styles.contactIntro}>
          <p className={styles.orange}>GET IN TOUCH</p>
          <h2>Contact</h2>
        </div>

        <div className={styles.contactList}>
          {contactDetails.map((item, index) => (
            <div key={index} className={styles.contactItem}>
              {item.svg}
              <div>
                <p className={styles.label}>{item.label}</p>

                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : ""}
                    rel={item.external ? "noopener noreferrer" : ""}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p>{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ContactSection;
