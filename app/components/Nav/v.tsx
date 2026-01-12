import React, { useEffect, useState } from 'react'
import styles from "./Nav.module.scss"
import CustomButton from '../customButton/CustomButton'
import Link from 'next/link';
import { useScroll } from '@/app/contexts/scrollContext';
import { FaRegCopyright } from "react-icons/fa";

function Nav(props) {

  const { homeRef, aboutRef, clientsRef, contactRef } = useScroll();
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

    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth',
    });

    setShowMenu(false)
  };

  const toggleMenu = () => {

    setShowMenu(!showMenu);

  }

  const ww = 0

  useEffect(() => {
    // Guard for SSR safety (redundant in client components, but explicit)

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

  // useEffect(() => {
    // if (width && width > 768){
    //   setShowMenu(false)
    // }
  // }, [width])



  useEffect(() => {

    //header useEffect e.g Header === true
    // console.log(showMenu)
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


  // if (width){

  //   return width > 768 ? "flex" : showMenu ? "flex" : "none"
  // }

  // else {
  //   return ""
  // }


  return (
    // <header className={styles.Header} id="Header">
      // {/* <CustomButton value="CDP" /> */}
      // {/* <Link href=""><img src="/assets/images/logo3.png" /></Link> */}
      
      <nav className={styles.Nav}>
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
        <ul style={{display: width ? width > 768 ? "flex" : showMenu ? "flex" : "none" : "", height: showMenu ? "100vh" : "", position: header && showMenu ? "absolute" : "initial"}}>
          <li>
            <button onClick={() => scrollTo(aboutRef)}>About</button>
          </li>
          <li>
            <button onClick={() => scrollTo(clientsRef)}>Services</button>
          </li>
          <li>
            <button onClick={() => scrollTo(clientsRef)}>Credentials</button>
          </li>
          <li className={styles.contactBtn}>
            <button  onClick={() => scrollTo(contactRef)}>Contact</button>
          </li>
        </ul>

        {header ? false :<div className={styles.copyright}><FaRegCopyright/><p>{new Date().getFullYear()} Catherine Derby Performance. All rights reserved.</p>
        </div>}
        
      </nav>
    // </header>
  );
}

export default Nav;