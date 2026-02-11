import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  AboutSection,
  ContactSection,
  EducationSection,
  HeroSection,
  InterestsSection,
  ProjectsSection,
  SkillsSection,
} from "../sections";
import { fadeIn } from "../utils/motion";

const Homepage = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  return (
    <motion.div variants={fadeIn} initial="hidden" animate="visible">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <InterestsSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </motion.div>
  );
};

export default Homepage
