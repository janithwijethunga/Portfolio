import { motion } from "framer-motion";
import Badge from "../../Components/ui/Badge";
import Card from "../../Components/ui/Card";
import Container from "../../Components/ui/Container";
import SectionHeader from "../../Components/ui/SectionHeader";
import { fadeUp, stagger } from "../../utils/motion";

const skills = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Framer Motion",
  "Figma",
  "Vite",
  "GitHub Actions",
  "REST APIs",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <Container className="space-y-12">
        <SectionHeader
          eyebrow="Expertise"
          title="Tools and technologies I use daily"
          subtitle="A reliable stack with a focus on modern, performance-first frontend delivery."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2"
        >
          <motion.div variants={fadeUp}>
            <Card className="space-y-4">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Core stack</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Focused on building polished, accessible, and scalable interfaces.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.slice(0, 6).map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Card className="space-y-4">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Product toolkit</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Tools for prototyping, animation, automation, and shipping quickly.
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.slice(6).map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default SkillsSection;
