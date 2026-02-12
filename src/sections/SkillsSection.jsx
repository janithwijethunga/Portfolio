import ScrollGridGallery from "../Components/ScrollGridGallery";
import { skills } from "../data/skills";

const SkillsSection = () => {
  // Use skill icons for the grid gallery (14 images needed + 1 center)
  // Layer 1: 6 images (outer edges)
  // Layer 2: 6 images (inner columns)  
  // Layer 3: 2 images (center top/bottom)
  // Center: 1 hero image
  
  const gridImages = [...skills, ...skills.slice(0, 2)].map((skill) => ({
    src: skill.icon,
    alt: skill.name,
    name: skill.name,
  }));

  return (
    <section id="skills">
      <ScrollGridGallery
        images={gridImages}
      />
    </section>
  );
};

export default SkillsSection;