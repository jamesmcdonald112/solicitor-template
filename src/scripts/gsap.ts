/*
  GSAP SETUP
  This file registers GSAP plugins and exports a configured instance.
  Import this in any component that uses GSAP animations.

  ALWAYS guard animations with the reduced motion check:
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  SCROLL TRIGGER: Import and register here when needed.
  DO NOT import GSAP directly in components — always import from this file.
*/

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
