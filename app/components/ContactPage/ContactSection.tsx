import React from 'react'
import styles from "./ContactSection.module.scss"
import {CiMail, CiPhone, CiLocationOn, CiClock2,CiInstagram, CiMemoPad, CiMapPin  } from "react-icons/ci";
import { useScroll } from '@/app/contexts/scrollContext';
import { GrLocationPin } from "react-icons/gr";
import { FaMapPin } from "react-icons/fa";
function ContactSection() {

     const {contactRef} = useScroll()

 const contactDetails = [
    {
        svg: <CiMail />,
        method: "Email",
        href: "mailto:hello@catherinedenbypersonaltraining.com",
        contactDetail: "hello@catherinedenbypersonaltraining.com"
    },

    {
        svg: <CiPhone />,
        method: "Phone / Whatsapp",
        href: "tel:+447415772785",
        contactDetail: "(+44) 07415772785"
    },

    // KO Combat Academy
    {
        svg: <CiLocationOn />,
        method: "Training Location",
        href: "https://www.google.com/maps/place/ko+combat+academy/data=!4m2!3m1!1s0x48761d8b58a2a535:0x7e331ff9b1f562a2?sa=X&ved=1t:242&ictx=111",
        externalLink: true,
        contactDetail: "KO Combat Academy",
        address: "188 Bancroft Road, London, E1 4ET"
    },

    // N1 Gym (new)
    {
        svg: <CiLocationOn />,
        method: "Training Location",
        href: "https://www.google.com/maps/place/N1+gym+-+personal+training/@51.543311,-0.1048704,17z/data=!3m1!4b1!4m6!3m5!1s0x48761b30ae7fb067:0x76f19a62bd396c39!8m2!3d51.543311!4d-0.1048704!16s%2Fg%2F11l28y6c_k?entry=ttu",
        externalLink: true,
        contactDetail: "N1 Gym",
        address: "35a Cobble Ln, Islington, N1 1SF"
    },

    // Updated hours
    {
        svg: <CiClock2 />,
        method: "Available Hours",
        contactDetail:
            "KO Combat Academy: Mon 9–1, Tue 9–1, Wed 7–11, Thu 8–12, Fri 7–1 | N1 Gym: Mon–Thu 4–8, Fri 2:30–6:30"
    },

    {
        svg: <CiInstagram />,
        method: "Instagram",
        href: "https://www.instagram.com/catd3nby/",
        externalLink: true,
        contactDetail: "@Catd3nby"
    }
];

  return (
    <div className={styles.ContactSection} ref={contactRef}>


        <div className={styles.container}>

                        <div className={styles.card}>

        </div>

        <div className={styles.intro}>
                                <p className={styles.orange}>READY TO LEVEL UP?</p>

                    {/* <h2>LET'S BUILD YOUR <span className={styles.red}>WINNING EDGE</span></h2> */}
                    <h2>WHAT I <span className={styles.orange}>OFFER</span></h2>
        </div>

        <div className={styles.subContainer}>
                <div className={styles.offers}>

                    <div className={styles.offer} style={{paddingLeft: "20px", paddingRight: "20px"}}>
                        <div className={styles.cornerGradient}></div>
                        <div className={styles.title}>
                            <p className={styles.logo}>1:1</p>
                            <div>
                                <h3>COACHING</h3>
                                <p className={styles.orange}>In-person & online</p>
                            </div>
                        </div>

                        <p>55-minute session including mobility, strength, and conditioning work.</p>

                        <p>Sessions are designed to be challenging, but also fun. They are tailored to you and your goals.</p>

                        <a className={styles.pLocationPinSVG} href="https://www.google.com/maps/place/ko+combat+academy/data=!4m2!3m1!1s0x48761d8b58a2a535:0x7e331ff9b1f562a2?sa=X&ved=1t:242&ictx=111" target="_blank" rel="noopener noreferrer"><FaMapPin  className={styles.locationPinSVG} /> KO gym, Bethnal Green, London</a>
                    </div>

                                        <div className={styles.offer}>
                                            <div className={styles.cornerGradient}></div>
                        <div className={styles.title}>
                            <CiMemoPad  className={styles.logo}/>
                            <div>
                                <h3>CONSULTANCY</h3>
                                <p className={styles.orange}>In-person & online</p>
                            </div>
                        </div>

                        <p className={styles.secondTitleP}>For teams and individuals:</p>

                        <ul>
                            <li>Warm-up protocols</li>
                            <li>Weekly structures & periodisation</li>
                            <li>Movement screening & testing</li>
                            <li>Program design</li>
                            <li>Recovery strategies</li>
                        </ul>
                    </div>

                    {/* <p>Whether you're preparing for competition or pushing to the next level, let's create a program built on sports science and tailored to your goals.</p>

                    <ul>
                        <li>55-minute session including mobility, strength, and conditioning work, designed to be challenging, but also fun. They are tailored to you and your
goals.

        </li>
                        <li>Consultancy &#40;In-person and online&#41;
        </li>
                        <li>Regular check-ins and program adjustments
        </li>
                    </ul> */}
                </div>

                <div className={styles.contact}>
                    {/* <h3>GET IN TOUCH</h3> */}

                    {contactDetails.map((i, n) => 
                        <div className={styles.details} key={n}>
                            {i.svg}
                            
                            {/* <div> */}
                                <p>{i.method}</p>

                                <a className={styles.white} href={i.href} target={i.externalLink ? "_blank" : ""} rel={i.externalLink ? "noopener noreferrer" : ""}>{i.contactDetail}</a>

                                {i.address ? <p>{i.address}</p> : false}
                            {/* </div> */}
                        </div>
                    )}
                </div>

            </div>
        </div>
    </div>
  )
}

export default ContactSection
