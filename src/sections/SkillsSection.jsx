import { motion } from "framer-motion";
import Container from "../Components/ui/Container";
import SectionHeader from "../Components/ui/SectionHeader";
import { fadeUp, stagger } from "../utils/motion";
import { skills } from "../data/skills";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <Container className="space-y-12">
        <SectionHeader
          eyebrow="My Skills"
          title="Tools I work with"
          subtitle="A balanced toolkit across frontend, backend, and UI design."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={fadeUp}
              className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white/70 px-4 py-4 shadow-soft dark:border-neutral-800 dark:bg-neutral-900/70"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white p-2 shadow-sm dark:bg-neutral-900">
                <img src={skill.icon} alt={skill.name} className="h-8 w-8 object-contain" />
              </span>
              <div>
                <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{skill.name}</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">Professional</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default SkillsSection;
