import { motion } from "framer-motion";
import Button from "../../Components/ui/Button";
import Container from "../../Components/ui/Container";
import { fadeUp, stagger } from "../../utils/motion";
import SocialLinks from "../../Components/common/SocialLinks";

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
            <p className="text-xs uppercase tracking-[0.3em] text-primary-500">
              Full-stack developerjjjjjjjjjjjjj
            </p>
            <h1 className="text-4xl font-semibold text-neutral-900 dark:text-neutral-100 md:text-5xl lg:text-display-1">
              Designing calm, high-performing experiences for modern products.
            </h1>
            <p className="text-base text-neutral-600 dark:text-neutral-300 md:text-body-lg">
              I craft thoughtful interfaces and scalable frontends, pairing clean engineering with a product-first mindset.
              Currently focused on React, Tailwind, and smooth digital storytelling.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button as="a" href="#projects" variant="primary">
                View projects
              </Button>
              <Button as="a" href="#contact" variant="secondary">
                Start a project
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500 dark:text-neutral-400">
              <span>Based in Sri Lanka</span>
              <span>Open for freelance</span>
              <span>Remote-friendly</span>
            </div>
            <SocialLinks className="pt-2" />
          </motion.div>

          <motion.div variants={fadeUp} className="relative">
            <div className="rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-soft backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/70">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Highlighted work</p>
                  <h3 className="mt-2 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                    Clean, conversion-ready interfaces
                  </h3>
                </div>
                <div className="rounded-2xl bg-primary-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">
                  2026
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm dark:border-neutral-800 dark:bg-neutral-900">
                  <span className="text-neutral-700 dark:text-neutral-200">Product dashboards</span>
                  <span className="text-neutral-400">12+</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm dark:border-neutral-800 dark:bg-neutral-900">
                  <span className="text-neutral-700 dark:text-neutral-200">Web launches</span>
                  <span className="text-neutral-400">25+</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm dark:border-neutral-800 dark:bg-neutral-900">
                  <span className="text-neutral-700 dark:text-neutral-200">Design systems</span>
                  <span className="text-neutral-400">6</span>
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
