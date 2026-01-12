import React from 'react'
import styles from "./Services.module.scss"
import { RxLightningBolt, RxTimer, RxArrowRight } from "react-icons/rx";
import { useScroll } from '@/app/contexts/scrollContext';

function Services() {

  const {servicesRef, contactRef} = useScroll()

  const offeredServices = [{
    logo: <RxLightningBolt className={styles.logo} />,
    sports: ["Boxing", "MMA", "Wrestling"],
    title: "COMBAT SPORTS",
    description:"Periodized strength programs designed for fighters. Optimize power output, conditioning, and weight management while peaking for competition."
  }, {
    logo: <RxTimer className={styles.logo}/>,
    sports: ["Runners", "Triathletes", "Cyclists"],
    title: "ENDURANCE ATHLETES",
    description:"Evidence-based training combining aerobic development with targeted strength work. Improve economy, reduce injury risk, and hit your race goals."
  }]

      const scrollTo = (
      ref: React.RefObject<HTMLElement | null>
    ) => {
      if (!ref.current) return;
  
      // Get THIS header's height
      const headerHeight =
        document.getElementById('Header')?.offsetHeight ?? 0;
  
      // Get section position relative to page
      const elementTop =
        ref.current.getBoundingClientRect().top + window.scrollY;
  
      // Subtract header height
      const scrollTo = elementTop - headerHeight;
  
      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth',
      });
    };
  return (
    <div className={styles.Services} ref={servicesRef}>

      <div className={styles.intro}>
        <p className={styles.red}>SERVICES</p>
        <h2>BUILT FOR <span className={styles.red}>ATHLETES</span></h2>
        <p>Not general fitness. Not weight loss programs. Performance coaching grounded in sports science for athletes with competitive goals.</p>
      </div>

      <div className={styles.container}>

        {offeredServices.map((i, n) => <div key={n} className={styles.service}>

          {i.logo}

          <div className={styles.sports}>
            {i.sports.map((s, n) => n === 1 ? <React.Fragment key={n}><span className={styles.circles}></span>{s}<span className={styles.circles}></span></React.Fragment> : s)}
          </div>

          <h3>{i.title}</h3>

          <p>{i.description}</p>


          <button onClick={() => scrollTo(contactRef)} >Learn More <RxArrowRight /></button>

        </div>)}
      </div>
    </div>
  )
}

export default Services