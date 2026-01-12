import React, { useEffect, useState } from 'react'
import styles from "./Nav.module.scss"
import CustomButton from '../customButton/CustomButton'
import { useScroll } from '@/app/contexts/scrollContext';
import { FaRegCopyright } from "react-icons/fa";

function Nav(props: {header: boolean}) {

  const { homeRef, aboutRef, servicesRef, clientsRef, contactRef } = useScroll();
  const [width, setWidth] = useState<number | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const header = props.header

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

    setShowMenu(false)
  };

  const toggleMenu = () => {

    setShowMenu(!showMenu);

  }

  useEffect(() => {

    if (header){
      if (typeof window === "undefined") return;

      const handleResize = () => {
        setWidth(window.innerWidth);
          console.log(showMenu, typeof showMenu);
          
            if (window.innerWidth > 768){
              setShowMenu(false)
            }
      };

      // Set initial value
      handleResize();

      // Listen for resize
      window.addEventListener("resize", handleResize);

      

      // Cleanup
      return () => {
        window.removeEventListener("resize", handleResize);
      };
  }

  }, []);



  useEffect(() => {
    if (header){

        const a =  width && width > 768 ? "flex" : width && width < 768 && showMenu ? "flex": width && width < 768 && !showMenu ? "none" : ""



        console.log(a)
        if (showMenu){
          document.body.classList.add("noScroll")
          
        }

        else{
          document.body.classList.remove("noScroll")
        }

        return () => document.body.classList.remove("no-scroll");
    }
  }, [showMenu, width])




  return (

      <nav className={header ? styles.Nav : `${styles.Nav} ${styles.FooterNav}`} >
        <div className={styles.menuContainer} style={{justifyContent: header ? "space-between" : "center"}}>

           <button className={styles.logo} onClick={() => scrollTo(homeRef)}><span className={styles.red}>CATHERINE DERBY</span><span>PERFORMANCE</span></button>

          {header ? <div
            className={showMenu ? `${styles.menu} ${styles.open}` : styles.menu}
            onClick={toggleMenu}
          >
            <div className={styles.burger}></div>
          </div> : false}
        </div>
        
            {/* width && width > 768 ? "flex" : width && width < 768 && showMenu ? "flex": width && width < 768 && !showMenu ? "none" : "" */}
        {header ? <ul className={styles.headerUL} style={{display: width ? width > 768 ? "flex" : showMenu ? "flex" : "none" : ""}}>
          <li>
            <button onClick={() => scrollTo(aboutRef)}>About</button>
          </li>
          <li>
            <button onClick={() => scrollTo(servicesRef)}>Services</button>
          </li>
          <li>
            <button onClick={() => scrollTo(clientsRef)}>Clients</button>
          </li>
          <li>
            <button  className={styles.contactBtn} onClick={() => scrollTo(contactRef)}>Contact</button>
          </li>
        </ul> :         <ul className={styles.footerUL} style={{}}>
          <li>
            <button onClick={() => scrollTo(aboutRef)}>About</button>
          </li>
          <li>
            <button onClick={() => scrollTo(servicesRef)}>Services</button>
          </li>
          <li>
            <button onClick={() => scrollTo(clientsRef)}>Clients</button>
          </li>
          <li>
            <button className={styles.contactBtn}  onClick={() => scrollTo(contactRef)}>Contact</button>
          </li>
        </ul>}

        {header ? false : <p className={styles.copyright}><FaRegCopyright/> {new Date().getFullYear()} Catherine Derby Performance. All rights reserved.</p>}
        
      </nav>
    // </header>
  );
}

export default Nav;