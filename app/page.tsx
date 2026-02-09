'use client';
import Image from "next/image";
import Hero from "./components/hero/Hero";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import ClientSection from "./components/ClientSection/ClientSection";
import ContactSection from "./components/ContactPage/ContactSection";
import Footer from "./components/Footer/Footer";
import { ScrollContext } from "./contexts/scrollContext";
import { useEffect, useRef, useState } from "react";
import { FaRegCopyright } from "react-icons/fa";
import Services from "./components/Services/Services";

export default function Home() {

  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const clientsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const [opacites, setOpacities] = useState([0,0,0,0])

  useEffect(() => {

  }, [])
  
  return (
    <ScrollContext.Provider value={{ homeRef, aboutRef, servicesRef, clientsRef, contactRef }}>
    <div className="page">
            <div className="aboutOverlay"></div>

      <header className="Header" id="Header">
        <Nav header={true}/>
        <div className="borderBottonDiv"></div>
        </header>
        
       
      <Hero />
       <About opacity={opacites[0]} />
       <Services />

      <ClientSection />
      <ContactSection />
      <footer className="Footer"><Nav header={false} /></footer>
      {/* <Footer /> */}
    </div>
    </ScrollContext.Provider>
  );
}
