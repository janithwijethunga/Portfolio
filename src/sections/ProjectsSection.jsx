import { motion } from "framer-motion";
import Button from "../Components/ui/Button";
import Card from "../Components/ui/Card";
import Container from "../Components/ui/Container";
import SectionHeader from "../Components/ui/SectionHeader";
import { fadeUp, stagger } from "../utils/motion";
import { projects } from "../data/projects";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <Container className="space-y-12">
        <SectionHeader
          eyebrow="Projects"
          title="A collection of my featured projects"
          subtitle="Real work that highlights fullstack development and UI craftsmanship."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div key={project.name} variants={fadeUp} whileHover={{ y: -6 }}>
              <Card className="flex h-full flex-col gap-4">
                <div className="overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
                  <img src={project.image} alt={project.name} className="h-36 w-full object-cover" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{project.name}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                    {project.tech.map((item) => (
                      <span key={item} className="rounded-full border border-neutral-200 px-3 py-1 dark:border-neutral-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto">
                  <Button as="a" href={project.link} target="_blank" rel="noreferrer" variant="ghost">
                    View on GitHub -&gt;
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
