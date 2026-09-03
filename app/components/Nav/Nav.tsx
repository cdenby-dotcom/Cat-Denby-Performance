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

    const headerHeight =
      document.getElementById('Header')?.offsetHeight ?? 0;

    const elementTop =
      ref.current.getBoundingClientRect().top + window.scrollY;

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

  useEffect(() => {
    if (header){
      if (typeof window === "undefined") return;

      const handleResize = () => {
        setWidth(window.innerWidth);

        if (window.innerWidth > 768){
          setShowMenu(false)
        }
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (header){
      const a = width && width > 768 ? "flex" : width && width < 768 && showMenu ? "flex": width && width < 768 && !showMenu ? "none" : ""

      if (showMenu){
        document.body.classList.add("noScroll")
      } else {
        document.body.classList.remove("noScroll")
      }

      return () => document.body.classList.remove("no-scroll");
    }
  }, [showMenu, width])

  return (
    <nav className={header ? styles.Nav : `${styles.Nav} ${styles.FooterNav}`} >
      <div className={styles.menuContainer} style={{justifyContent: header ? "space-between" : "center"}}>

        {/* LOGO REMOVED — CLEAN + MINIMAL */}
        <button className={styles.logo} onClick={() => scrollTo(homeRef)}></button>

        {header ? (
          <div
            className={showMenu ? `${styles.menu} ${styles.open}` : styles.menu}
            onClick={toggleMenu}
          >
            <div className={styles.burger}></div>
          </div>
        ) : false}
      </div>

      {header ? (
        <ul className={styles.headerUL} style={{display: width ? width > 768 ? "flex" : showMenu ? "flex" : "none" : ""}}>
          <li><button onClick={() => scrollTo(aboutRef)}>About</button></li>
          <li><button onClick={() => scrollTo(servicesRef)}>Services</button></li>
          <li><button onClick={() => scrollTo(clientsRef)}>Clients</button></li>
          <li><button className={styles.contactBtn} onClick={() => scrollTo(contactRef)}>Contact</button></li>
        </ul>
      ) : (
        <ul className={styles.footerUL}>
          <li><button onClick={() => scrollTo(aboutRef)}>About</button></li>
          <li><button onClick={() => scrollTo(servicesRef)}>Services</button></li>
          <li><button onClick={() => scrollTo(clientsRef)}>Clients</button></li>
          <li><button className={styles.contactBtn} onClick={() => scrollTo(contactRef)}>Contact</button></li>
        </ul>
      )}

      {header ? false : (
        <p className={styles.copyright}>
          <FaRegCopyright/> {new Date().getFullYear()} Catherine Denby Performance. All rights reserved.
        </p>
      )}
    </nav>
  );
}

export default Nav;
