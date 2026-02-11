import { motion } from "framer-motion";
import Button from "../Components/ui/Button";
import Container from "../Components/ui/Container";
import { fadeUp, stagger } from "../utils/motion";
import { heroContent } from "../data/hero";
import heroImage from "../Assets/My1.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-primary-200/40 blur-3xl dark:bg-primary-500/20" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-neutral-200/50 blur-3xl dark:bg-neutral-800/50" />
      </div>

      <Container className="relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        >
          <motion.div variants={fadeUp} className="space-y-6">
            <p className="text-sm font-medium text-primary-500">{heroContent.greeting}</p>
            <h1 className="text-4xl font-semibold text-neutral-900 dark:text-neutral-100 md:text-5xl lg:text-display-1">
              {heroContent.name}
            </h1>
            <p className="text-base text-neutral-600 dark:text-neutral-300 md:text-body-lg">
              {heroContent.subtitle}
            </p>
            <p className="text-base text-neutral-600 dark:text-neutral-300 md:text-body-lg">
              {heroContent.bio}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button as="a" href="#contact" variant="primary">
                Contact Me
              </Button>
              <Button as="a" href="#projects" variant="secondary">
                View My Work
              </Button>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="relative">
            <div className="rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-soft backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/70">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
                  <img src={heroImage} alt="Janith Wijethunga" className="h-48 w-full object-cover" />
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Premium UI</p>
                <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                  Crafting calm, minimal interfaces
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  Focused on clarity, clean spacing, and experiences that feel confident across devices.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "UX strategy",
                    "UI systems",
                    "Fullstack builds",
                    "Motion polish",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroSection;
