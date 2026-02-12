import { motion } from "framer-motion";
import Button from "../Components/ui/Button";
import Container from "../Components/ui/Container";
import { fadeUp, stagger } from "../utils/motion";
import { heroContent } from "../data/hero";
import heroImage from "../Assets/Me.png";


// replace with your images
import uiShot1 from "../Assets/mobile.png";
import uiShot2 from "../Assets/webdev.png";
import uiShot3 from "../Assets/frontenddev.png";

const floaty = {
  initial: { y: 0 },
  animate: (i = 0) => ({
    y: [0, -10, 0, 8, 0],
    transition: { duration: 6 + i, repeat: Infinity, ease: "easeInOut" },
  }),
};

const HeroSection = () => {
  const rightCards = [
    {
      title: "UI/UX Designer",
      img: uiShot1,
      top: "-top-10",
      left: "left-6",
      z: "z-20",
    },
    { title: "Web Developer", img: uiShot2, top: "top-32", left: "right-0", z: "z-10" },
    {
      title: "Frontend Developer",
      img: uiShot3,
      top: "-bottom-16",
      left: "left-10",
      z: "z-0",
    },
  ];

  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32">
      {/* ✅ your existing background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-primary-200/40 blur-3xl dark:bg-primary-500/20" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-neutral-200/50 blur-3xl dark:bg-neutral-800/50" />

        {/* subtle ring behind the center image (theme friendly) */}
        <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/30 dark:bg-neutral-900/20" />
      </div>

      <Container className="relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr_1fr]"
        >
          {/* LEFT (same typography as your theme) */}
          <motion.div variants={fadeUp} className="space-y-6">
            <p className="text-sm font-medium text-primary-500">
              {heroContent.greeting}
            </p>

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

          {/* CENTER (big person image like reference, but theme-safe) */}
          <motion.div
            variants={fadeUp}
            className="relative mx-auto flex w-full max-w-[440px] justify-center"
          >
            <div className="relative">
              <div className="absolute top-32 inset-0 translate-y-6 rounded-full bg-black/40 blur-2xl dark:bg-white/10" />
              <img
                src={heroImage}
                alt={heroContent.name}
                className="relative w-full select-none object-cover"
                draggable={false}
              />
            </div>
          </motion.div>

          {/* RIGHT (floating cards using your card theme) */}
          <motion.div
            variants={fadeUp}
            className="relative hidden h-[420px] lg:block"
          >
            {rightCards.map((card, i) => (
              <motion.div
                key={card.title}
                className={`absolute ${card.top} ${card.left} ${card.z} w-44`}
                variants={floaty}
                initial="initial"
                animate="animate"
                custom={i}
              >
                
                <div className="rounded-3xl border border-neutral-200 bg-white/70 p-4 shadow-soft backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/70">
                  <div className="overflow-hidden rounded-2xl dark:bg-neutral-800">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="h-36  w-full  object-contain"
                    />
                  </div>

                  <div className="mt-3 flex items-center justify-center">
                    <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-700 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
                      {card.title}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
                  
         
        </motion.div>
      </Container>
    </section>
  );
};

export default HeroSection;
