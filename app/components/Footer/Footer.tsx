import React from 'react'
import styles from "./Footer.module.scss"
import { CiInstagram } from 'react-icons/ci'
import Link from 'next/link'
import { FaRegCopyright } from "react-icons/fa";
// import { useScroll } from '../../contexts/scrollContext';

function Footer() {

  // const { footerRef } = useScroll();

  return (
    <div className={styles.Footer}>
	<div className={styles.container}>
		<div className={styles.intro}>
		<Link href="" className={styles.logo}><span className={styles.red}>CATHERINE DERBY</span><span>PERFORMANCE</span></Link>
    </div>

    <nav>

        <ul>
            <li>About</li>
            <li>Service</li>
            <li>Credentials</li>
            <li>Contact</li>
        </ul>
    </nav>

    <CiInstagram />



</div>
      <div className={styles.copyright}><FaRegCopyright/><p>{new Date().getFullYear()} Catherine Derby Performance. All rights reserved.</p></div>
</div>

  )
}

export default Footer