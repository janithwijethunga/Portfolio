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

// ✅ add your about image here
import aboutImage from "../Assets/Me.png"; // change path

const AboutSection = ({ aboutImageRef }) => {
  useEffect(() => {
    if (!aboutImageRef?.current) return;

    // Refresh ScrollTrigger in case content changed
    ScrollTrigger.refresh();
  }, [aboutImageRef]);
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

          {/* RIGHT — image card */}
          <motion.div variants={fadeUp} className="relative about-image-wrapper opacity-0" >
            {/* glow blobs (theme-safe) */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-200/40 blur-3xl dark:bg-primary-500/20" />
            <div className="pointer-events-none absolute -bottom-10 left-10 h-40 w-40 rounded-full bg-neutral-200/50 blur-3xl dark:bg-neutral-800/40" />

            <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white/70 shadow-soft backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/70">
              {/* image */}
              <div className="relative h-[420px] w-full">
                <img
                  src={aboutImage}
                  alt="About"
                  className="h-full w-full object-cover"
                />

                {/* soft dark gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent dark:from-black/60" />

                {/* bottom info row */}
                <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-3">
                  <div className="rounded-2xl border border-white/20 bg-white/15 px-4 py-3 backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/80">
                      Highlights
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      BSc (Hons) IT — SLIIT
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["Clean UI", "Teamwork", "Problem Solver"].map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-white/20 bg-white/15 px-3 py-2 text-xs font-semibold text-white backdrop-blur"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* small footer (theme) */}
              <div className="grid gap-3 p-5 sm:grid-cols-3">
                {[
                  { k: "Focus", v: "Full-Stack + UI/UX" },
                  { k: "Location", v: "Sri Lanka" },
                  { k: "Goal", v: "Grow & contribute" },
                ].map((item) => (
                  <div
                    key={item.k}
                    className="rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-700
                               dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                      {item.k}
                    </p>
                    <p className="mt-1 font-semibold">{item.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutSection;
