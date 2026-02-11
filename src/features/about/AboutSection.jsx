import { motion } from "framer-motion";
import Card from "../../Components/ui/Card";
import Container from "../../Components/ui/Container";
import SectionHeader from "../../Components/ui/SectionHeader";
import { fadeUp, stagger } from "../../utils/motion";

const timeline = [
  {
    title: "Full Stack Developer",
    place: "Company Name",
    period: "2023 - Present",
    description: "Building scalable web platforms with React, Node.js, and cloud-first tooling.",
  },
  {
    title: "Frontend Developer",
    place: "Previous Company",
    period: "2022 - 2023",
    description: "Focused on accessible UI systems and modular component libraries.",
  },
  {
    title: "BSc in Computer Science",
    place: "University Name",
    period: "2018 - 2022",
    description: "Graduated with a focus on software engineering and product design.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <Container className="space-y-12">
        <SectionHeader
          eyebrow="About"
          title="Designing with intent, building with clarity"
          subtitle="I specialize in clean user interfaces, thoughtful motion, and reliable engineering. My work blends design empathy with performance-first code."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <motion.div variants={fadeUp} className="space-y-6 text-neutral-600 dark:text-neutral-300">
            <p className="text-base leading-relaxed">
              I build digital experiences that feel calm, premium, and purposeful. My workflow blends product strategy, UI design,
              and engineering so every interaction feels polished and usable.
            </p>
            <p className="text-base leading-relaxed">
              Whether I am crafting a landing page or a complex dashboard, I focus on clean spacing, strong visual hierarchy, and
              accessible component systems. Collaboration and continuous learning are at the core of how I work.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Design systems & UI kits",
                "Motion-first interfaces",
                "Frontend architecture",
                "API-driven products",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-neutral-200 bg-white/70 px-4 py-3 text-sm font-medium text-neutral-700 shadow-soft dark:border-neutral-800 dark:bg-neutral-900/70 dark:text-neutral-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-4">
            {timeline.map((item) => (
              <Card key={item.title} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{item.title}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">{item.period}</span>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.place}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{item.description}</p>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutSection;
