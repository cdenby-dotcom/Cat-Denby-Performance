import React from 'react'
import styles from "./ClientSection.module.scss"
import { useScroll } from '@/app/contexts/scrollContext';
import { IoIosStar } from "react-icons/io";

function ClientSection() {

  const {clientsRef} = useScroll()

  const testimonials = [{
    name: "Patrick",
    initial: "P",
    occupation: "MMA Fighter",
    testimony: "“The strength gains have completely changed my fight performance.”"
  },{
    name: "Alice",
    initial: "A",
    occupation: "Lawyer",
    testimony: "“I feel like I’m using my body properly for the first time in years.”"
  },{
    name: "Kat",
    initial: "K",
    occupation: "Dancer",
    testimony: "“She understands how to challenge me in a way that supports my disability, not limits it.”"
  },{
    name: "Andrea",
    initial: "A",
    occupation: "Business Consultant",
    testimony: "“Since training with Cat, my migraines and back pain have stopped. I move better, feel stronger, and know how to manage my posture.”"
  },{
    name: "T",
    initial: "T",
    occupation: "Engineer",
    testimony: "“She collaborates with physios and listens to how my body feels each session — that’s rare in a coach.”"
  },]
  

  const clients1 = [
    {
      image: "/assets/images/client-monique.jpeg",
      name: "Monique",
      sport: "Muay Thai",
      description:
        "Championship victory after 12 weeks of intensive fight camp preparation",
    },
    {
      image: "/assets/images/client-paddy.jpg",
      name: "Paddy",
      sport: "Mixed Martial Arts",
      description: "Elite cage training and competition-ready conditioning",
    },
    {
      image: "/assets/images/client-donna.jpg",
      name: "Venus",
      sport: "Strength & Conditioning",
      description: "Functional strength training for peak athletic performance",
    },
    {
      image: "/assets/images/client-andrea.JPG",
      name: "Andrea",
      sport: "Endurance Running",
      description:
        "Half marathon finisher — proving it's never too late to chase your goals",
    },
  ];


  const clients2 = [
    {
      image: "/assets/images/coaching-monique.JPG",
      description: "The moments that make it all worth it",
    },
    {
      image: "/assets/images/coaching-martin-1.jpg",
      description: "Building strength, one rep at a time",
    },
    {
      image: "/assets/images/coaching-mo.jpg",
      description: "Hands-on technique correction",
    },
    {
      image: "/assets/images/coaching-catherine.PNG",
      description: "Focused on the goal"
    }
  ];

  return (
    <div className={styles.ClientSection} ref={clientsRef}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.red}>SUCCESS STORIES</p>

          <h2>ATHLETES I WORK WITH</h2>

          <p>
            From competitive fighters to dedicated athetes <span></span> real
            results from real training
          </p>
        </div>

        <div className={styles.testimonials}>
          {testimonials.map((i, n) => (
            <div key={n} className={styles.clientTestimony}>
              <div className={styles.stars}>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar /></div>
              <p className={`${styles.white} ${styles.testimony}`}>{i.testimony}</p>
              
              <div className={styles.clientDetail}>
                <span className={styles.ClientInitial}>{i.initial}</span>
                <div>
                  <p className={styles.white}>{i.name}</p>
                  <p>{i.occupation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.clients}>
          {clients1.map((i, n) => (
            <div key={n} className={styles.client}>
              <div className={styles.gradientOverlay}></div>
              <div className={styles.description}>
                <p className={styles.title}>{i.sport}</p>
                <h3>{i.name}</h3>
                <p>{i.description}</p>
              </div>

              <img src={i.image} />
            </div>
          ))}
        </div>


        <div className={styles.intro}>
        <h2>IN THE <span className={styles.red}>TRENCHES</span></h2>
        </div>

        {/* <div className={styles.clients2}>
          {clients2.map((i) => (
            <div className={styles.client}>
              <div className={styles.gradientOverlay}></div>
              <img src={i.image} />
              <div className={styles.description}>
                <p>{i.description}</p>
              </div>
            </div>
          ))}
        </div> */}

                <div className={styles.clients}>
          {clients2.map((i, n) => (
            <div key={n} className={styles.client}>
              <div className={styles.gradientOverlay}></div>
              <img src={i.image} />
              <div className={styles.description}>
                <p>{i.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClientSection