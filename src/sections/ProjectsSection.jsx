import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../Components/ui/Button";
import Container from "../Components/ui/Container";
import SectionHeader from "../Components/ui/SectionHeader";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

const ProjectsCircularSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const counterRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      const totalCards = cards.length;
      
      const isMobile = window.innerWidth < 768;
      const radius = isMobile ? 600 : 3000; 
      const arcAngle = Math.PI * 0.5; 
      const centerAngle = Math.PI * 1.5; 

      const positionCards = (progress) => {
        const scrollOffset = progress * (totalCards - 1);

        cards.forEach((card, i) => {
          if (!card) return;
          const relativeIndex = i - scrollOffset;
          const angle = centerAngle + (relativeIndex * (arcAngle / 3));

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius + radius; 
          const rotation = (angle * 180) / Math.PI + 90;

          gsap.set(card, {
            x: x,
            y: y,
            rotation: rotation,
            opacity: 1 - Math.abs(relativeIndex) * 0.4, 
            scale: 1 - Math.abs(relativeIndex) * 0.15,
            zIndex: Math.round(100 - Math.abs(relativeIndex) * 10),
            pointerEvents: Math.abs(relativeIndex) < 0.5 ? "auto" : "none",
          });
        });
      };

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${totalCards * 500}vh`, 
        pin: true,
        scrub: 1,
        
        onUpdate: (self) => {
          positionCards(self.progress);
          const itemHeight = 150;
          gsap.to(counterRef.current, {
            y: -self.progress * (totalCards - 1) * itemHeight,
            duration: 0.4,
            overwrite: true
          });
        }
      });

      positionCards(0);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden text-white py-20">
      <Container className="relative z-20 pointer-events-none">
        <SectionHeader
          eyebrow="Projects"
          title="A collection of my featured projects"
        />
      </Container>
      {/* Main Container for the Arc */}
      <div className="absolute inset-0  flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full flex items-center justify-center">
          {projects.map((project, i) => (
            <div
              key={project.name}
              ref={(el) => (cardsRef.current[i] = el)}
              className="absolute w-[320px] md:w-[520px] mt-20 lg:w-96 pointer-events-auto will-change-transform"
            >
              <motion.div 
                whileHover={{ y: -6 }}
                className="flex h-full flex-col gap-4 rounded-3xl border border-neutral-800 bg-neutral-900 shadow-2xl p-4 transition-colors"
              >
                {/* Image Container */}
                <div className="overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-64 w-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="space-y-2 text-left">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                    {project.name}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-neutral-200 px-3 py-1 dark:border-neutral-700 bg-neutral-100/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Section */}
                <div className="mt-auto text-left">
                  <Button
                    as="a"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    variant="ghost"
                  >
                    View on GitHub -&gt;
                  </Button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsCircularSection;