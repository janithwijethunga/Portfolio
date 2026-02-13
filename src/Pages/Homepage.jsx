import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroAboutScroll from "../sections/HeroSection";

import Lenis from "lenis"; // ✅ add this

import ScrollProgressBar from "../Components/ui/ScrollProgressBar"; // ✅ add this

import {
  ContactSection,
  EducationSection,
  InterestsSection,
  ProjectsSection,
  SkillsSection,
} from "../sections";
// import CoordOverlay from "../Components/ui/CoordOverlay";

const Homepage = () => {
  const location = useLocation();

  // ✅ Lenis smooth scroll (ONLY added)
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.08, // tweak 0.06-0.12
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [location.hash]);

  return (
    <>
      {/* <CoordOverlay/> */}
      <ScrollProgressBar side="left" orbitRadius={18} turns={10} />
      {/* ✅ green vertical scrollbar */}
      <HeroAboutScroll />
      <SkillsSection />
      <InterestsSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default Homepage;
