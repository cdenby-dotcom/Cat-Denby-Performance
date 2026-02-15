import React from 'react'
import { useRef } from 'react';
import styles from "./Hero.module.scss"
import CustomButton from '../customButton/CustomButton';
import { useScroll } from '@/app/contexts/scrollContext';
import Image from "next/image";
import { PiMouseMiddleClickFill } from "react-icons/pi";
import { FaCircleArrowDown } from "react-icons/fa6";
import gsap from "gsap"
import { useGSAP } from '@gsap/react';

function Hero() {
  const { homeRef, aboutRef, servicesRef, clientsRef, contactRef } = useScroll();

  const imageRef = useRef<HTMLImageElement>(null)
  const introRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.fromTo(
      '.intro',
      {left: "-100%", autoAlpha: 0},
      {left: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out"
      }
    )

        gsap.fromTo(
      '.imgContainer',
      {right: "-100%", autoAlpha: 0},
      {right: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out"
      }
    )
  })

  //   useGSAP(() => {
  //   gsap.to(
  //     '.intro',
  //     {left: "0", opacity: "unset", duration: 0.5}
  //   )

  //   gsap.to(
  //     '.imgContainer',
  //     {left: "0", opacity: "unset", duration: 0.5}
  //   )
  // })

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
      console.log(headerHeight + " headerheight")
  
      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth',
      });
  
    };
  return (
    <div className={styles.Hero} ref={homeRef}>
      <div className={styles.container}>
      {/* <img src="/assets/images/coaching-martin-2.JPG" /> */}
      {/* <Image src="/assets/images/coaching-martin-3.JPG"
      alt='hero' 
      className={styles.img}
      width={'100%'}/> */}
      {/* <div className={styles.img} ></div> */}
      {/* <img src="/assets/images/catherine-hero.JPG" /> */}

      {/* <div className={styles.heroOverlay}></div> */}
      {/* <div class="gradient-overlay"></div> */}
      


      <div className={`${styles.intro} intro  `}>
        {/* <p className={styles.redPTag}>ELITE COACHING</p> */}

        <h1>
          ELEVATE YOUR <span>PERFORMANCE</span>
        </h1>

        <p>
          Friendly science based inclusive personal training individually tailored to you and your goals.
        </p>

        <div className={styles.btns}>
          <CustomButton value="START TRAINING" backgroundColor="#f9710b;" border="none" onClick={() => scrollTo(contactRef)} />
          <CustomButton value="VIEW SERVICES" backgroundColor="transparent" color="black" border="1px solid #A6A6A6" onClick={() => scrollTo(servicesRef)}/>
        </div>
      </div>

        <div className={`${styles.imgContainer} imgContainer`}>
        <div className={styles.heroOverlay}></div>
        <img src="/assets/images/coaching-martin-2.JPG" />
      </div>
      </div>

      {/* <div className={styles.hehe}>

        <div className={styles.experiences}>
          <div>
            <h3 className={styles.orange}>NBA</h3>
            <p>PROFESSIONAL EXPERIENCE</p>
          </div>

          <div>
            <h3 className={styles.orange}>10+</h3>
            <p>YEARS COACHING</p>
          </div>

          <div>
            <h3 className={styles.orange}>NBA</h3>
            <p>ATHLETES TRAINED</p>
          </div>

          <div>
            <h3 className={styles.orange}>NBA</h3>
            <p>PROFESSIONAL EXPERIENCE</p>
          </div>
                    
        </div>

      </div> */}

      {/* <FaCircleArrowDown className={styles.mouseSVG} onClick={() => scrollTo(aboutRef)}/> */}
    </div>
  );
}

export default Hero