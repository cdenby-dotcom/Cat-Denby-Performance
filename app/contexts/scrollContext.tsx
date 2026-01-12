'use client';

import { createContext, useContext, RefObject } from 'react';

/*
  This type describes the Sticky Notes (refs) we'll share:
  - aboutRef: ref pointing to your About section
  - clientsRef: ref pointing to your ClientSection
  - contactRef: ref pointing to your ContactSection
*/
type ScrollContextType = {
  homeRef: RefObject<HTMLDivElement | null>;
  aboutRef: RefObject<HTMLDivElement | null>;
  servicesRef: RefObject<HTMLDivElement | null>;
  clientsRef: RefObject<HTMLDivElement | null>;
  contactRef: RefObject<HTMLDivElement | null>;
};

/*
  Create the Context "backpack".
  We set it to null by default so using it without a provider errors.
*/
const ScrollContext = createContext<ScrollContextType | null>(null);

/*
  Custom hook for consuming the scroll context.
  This is what components will call to *read* the refs.
*/
export function useScroll() {
  const context = useContext(ScrollContext);

  if (!context) {
    throw new Error(
      'useScroll must be used inside <ScrollProvider>'
    );
  }

  return context;
}

export { ScrollContext };
