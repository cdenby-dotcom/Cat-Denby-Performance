import React from 'react'
import styles from "./ContactSection.module.scss"
import {CiMail, CiPhone, CiLocationOn, CiClock2,CiInstagram } from "react-icons/ci";
import { useScroll } from '@/app/contexts/scrollContext';

function ContactSection() {

     const {contactRef} = useScroll()

    const contactDetails = [
        {svg: <CiMail /> , method: "Email" , contactDetail: "@catherinedenbypersonaltraining.com"},
        {svg: <CiPhone/>, method: "Phone / Whatsapp", contactDetail: "(+44) 07415772785"},
        {svg: <CiLocationOn/>, method: "Training Location", contactDetail: "KO Combat Academy", address: "188 Bancroft Road, London, E1 4ET"},
        {svg: <CiClock2  />, method: "Available Hours" , contactDetail:"Monday - Saturday: 7am - 1pm" },
        {svg: <CiInstagram/>, method: "Instagram", contactDetail: "@Catd3nby"},
    ]
  return (
    <div className={styles.ContactSection} ref={contactRef}>


        <div className={styles.container}>

                        <div className={styles.card}>
            {/* <div className={styles.card__gradient}>
            </div> */}

            {/* <div className={styles.circle1}></div>
            <div className={styles.circle2}></div> */}

        </div>

        <div className={styles.subContainer}>
                <div className={styles.intro}>
                    <p className={styles.red}>READY TO LEVEL UP?</p>

                    <h2>LET'S BUILD YOUR <span className={styles.red}>WINNING EDGE</span></h2>

                    <p>Whether you're preparing for competition or pushing to the next level, let's create a program built on sports science and tailored to your goals.</p>

                    <ul>
                        <li>Personalized programming based on your sport
        </li>
                        <li>Evidence-based training methods
        </li>
                        <li>Regular check-ins and program adjustments
        </li>
                    </ul>
                </div>

                <div className={styles.contact}>
                    <h3>GET IN TOUCH</h3>

                    {contactDetails.map((i, n) => 
                        <div className={styles.details} key={n}>
                            {i.svg}
                            
                            <div>
                                <p>{i.method}</p>
                                <p className={styles.white}>{i.contactDetail}</p>
                                {i.address ? <p>{i.address}</p> : false}
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    </div>
  )
}

export default ContactSection