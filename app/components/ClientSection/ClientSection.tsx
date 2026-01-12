import React from 'react'
import styles from "./ClientSection.module.scss"
import { useScroll } from '@/app/contexts/scrollContext';

function ClientSection() {

  const {clientsRef} = useScroll()
  

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
      image: "/assets/images/client-venus.jpg",
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
      image: "/assets/images/coaching-martin-1.jpg",
      description: "Building strength, one rep at a time",
    },
    {
      image: "/assets/images/coaching-mo.jpg",
      description: "Hands-on technique correction",
    },
    {
      image: "/assets/images/coaching-martin-2.JPG",
      description: "The moments that make it all worth it",
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
        <h2>IN THE TRENCHES</h2>
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