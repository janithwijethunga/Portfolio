import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../Components/ui/Container";
import SectionHeader from "../Components/ui/SectionHeader";
import Button from "../Components/ui/Button";
import { fadeUp, stagger } from "../utils/motion";
import { aboutContent } from "../data/about";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = ({ aboutImageRef }) => {
  useEffect(() => {
    if (!aboutImageRef?.current) return;

    // Refresh ScrollTrigger in case content changed
    ScrollTrigger.refresh();
  }, [aboutImageRef]);
  return (
    <section id="about" className="py-20">
      <Container className="space-y-4">
        <SectionHeader
          title={aboutContent.headline}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]"
        >
              
          {/* LEFT — text */}
          <motion.div variants={fadeUp} className="space-y-6">
            <div className="space-y-5 text-neutral-600 dark:text-neutral-300">
              <p className="text-base leading-relaxed">
                I am an undergraduate student pursuing a BSc (Hons) in Information
                Technology at the Sri Lanka Institute of Information Technology.
              </p>

              <p className="text-base leading-relaxed">
                Passionate about Fullstack Development and UX/UI Design, I enjoy
                working in collaborative environments, learning new technologies,
                and delivering high-quality results.
              </p>

              <p className="text-base leading-relaxed">
                Driven by challenges, I aim to grow personally and professionally
                while contributing positively to any team or organization I join.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {["Full-Stack", "UI/UX", "React", "Node.js"].map((tag) => (
                <span
                key={tag}
                className="rounded-full border border-neutral-200 bg-white/70 px-4 py-2 text-xs font-semibold text-neutral-700 shadow-soft backdrop-blur
                dark:border-neutral-800 dark:bg-neutral-900/70 dark:text-neutral-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <Button as="a" href="#contact" variant="secondary">
                Download CV
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutSection;
