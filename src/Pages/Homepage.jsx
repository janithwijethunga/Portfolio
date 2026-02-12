import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroAboutScroll from "../sections/HeroSection";
import {
  ContactSection,
  EducationSection,
  InterestsSection,
  ProjectsSection,
  SkillsSection,
} from "../sections";

const Homepage = () => {
  const location = useLocation();

  // ✅ prevent browser from restoring old scroll position on refresh/back
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // ✅ scroll to top ASAP on first mount (before paint)
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  // ✅ hash navigation (keep this)
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, [location.hash]);

  return (
    <>
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
