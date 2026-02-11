import { motion } from "framer-motion";
import Button from "../Components/ui/Button";
import Card from "../Components/ui/Card";
import Container from "../Components/ui/Container";
import SectionHeader from "../Components/ui/SectionHeader";
import { fadeUp, stagger } from "../utils/motion";
import { aboutContent } from "../data/about";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <Container className="space-y-12">
        <SectionHeader
          eyebrow="About Me"
          title={aboutContent.headline}
          subtitle="A focused full-stack builder with a passion for UI/UX and collaboration."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <motion.div variants={fadeUp} className="space-y-6 text-neutral-600 dark:text-neutral-300">
            <p className="text-base leading-relaxed">{aboutContent.body}</p>
            <Button as="a" href="#" variant="secondary">
              {aboutContent.cta}
            </Button>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Card className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Highlights</p>
              <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-300">
                <p>Currently: BSc (Hons) IT at SLIIT</p>
                <p>Focus: Fullstack Development + UI/UX</p>
                <p>Strength: Collaboration and problem solving</p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutSection;
