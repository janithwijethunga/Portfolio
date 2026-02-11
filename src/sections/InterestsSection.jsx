import { motion } from "framer-motion";
import Container from "../Components/ui/Container";
import SectionHeader from "../Components/ui/SectionHeader";
import { fadeUp, stagger } from "../utils/motion";
import { interests } from "../data/interests";

const InterestsSection = () => {
  return (
    <section id="interests" className="py-20">
      <Container className="space-y-12">
        <SectionHeader
          eyebrow="Interests"
          title="Areas I love to build in"
          subtitle="Roles and topics that keep me inspired and curious."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {interests.map((item) => (
            <motion.div
              key={item.name}
              variants={fadeUp}
              className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white/70 px-5 py-4 text-sm font-semibold text-neutral-700 shadow-soft dark:border-neutral-800 dark:bg-neutral-900/70 dark:text-neutral-200"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white p-2 shadow-sm dark:bg-neutral-900">
                <img src={item.icon} alt={item.name} className="h-8 w-8 object-contain" />
              </span>
              {item.name}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default InterestsSection;
