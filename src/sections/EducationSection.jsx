import { motion } from "framer-motion";
import Card from "../Components/ui/Card";
import Container from "../Components/ui/Container";
import SectionHeader from "../Components/ui/SectionHeader";
import { fadeUp, stagger } from "../utils/motion";
import { education } from "../data/education";

const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <Container className="space-y-12">
        <SectionHeader
          eyebrow="Educations"
          title="Academic background"
          subtitle="Key milestones from my academic journey."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {education.map((item) => (
            <motion.div key={item.school} variants={fadeUp}>
              <Card className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      <img src={item.logo} alt={item.school} className="h-10 w-10 rounded-full object-contain" />
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{item.school}</h3>
                    </div>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">{item.program}</p>
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">{item.date}</span>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{item.detail}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default EducationSection;
