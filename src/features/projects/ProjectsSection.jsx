import { motion } from "framer-motion";
import Badge from "../../Components/ui/Badge";
import Card from "../../Components/ui/Card";
import Container from "../../Components/ui/Container";
import SectionHeader from "../../Components/ui/SectionHeader";
import { fadeUp, stagger } from "../../utils/motion";

const projects = [
  {
    name: "Insight Dashboard",
    description: "A data-rich analytics suite with real-time metrics and collaborative filters.",
    tags: ["React", "D3", "Node"],
  },
  {
    name: "Commerce Studio",
    description: "Premium storefront experience designed for conversion and speedy checkout flows.",
    tags: ["Next.js", "Stripe", "Tailwind"],
  },
  {
    name: "Remote OS",
    description: "A productivity hub that centralizes tasks, calendars, and team rituals.",
    tags: ["Vite", "Framer Motion", "Firebase"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <Container className="space-y-12">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work and design explorations"
          subtitle="Showcasing projects that combine strong UX, modern UI, and maintainable code."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.name} variants={fadeUp} whileHover={{ y: -6 }}>
              <Card className="flex h-full flex-col gap-6">
                <div className="space-y-3">
                  <div className="h-36 rounded-2xl bg-gradient-to-br from-primary-100 via-white to-neutral-100 dark:from-primary-900/40 dark:via-neutral-900 dark:to-neutral-800" />
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{project.name}</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">{project.description}</p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
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
