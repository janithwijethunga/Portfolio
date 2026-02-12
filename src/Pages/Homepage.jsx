import { useEffect } from "react";
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
