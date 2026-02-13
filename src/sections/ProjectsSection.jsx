import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

const AdvancedScroll = () => {
  const containerRef = useRef(null);
  const skyRef = useRef(null);
  const windowRef = useRef(null);
  const sidebarRef = useRef(null);
  const progressRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".card-item");

      // --- MASTER TIMELINE ---
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#main-wrapper",
          start: "top top",
          end: "+=600%",
          pin: true,
          scrub: 1.5, // Smoother scrub
          onUpdate: (self) => {
            const p = self.progress;
            const idx = Math.min(
              Math.floor(p * PROJECTS.length),
              PROJECTS.length - 1,
            );
            if (idx !== activeIndex) setActiveIndex(idx);

            // Sidebar Progress
            gsap.to(progressRef.current, {
              height: `${p * 100}%`,
              backgroundColor: PROJECTS[idx].color,
              duration: 0.3,
            });
          },
        },
      });

      // 1. CINEMATIC ZOOM
      tl.to(
        windowRef.current,
        {
          scale: 100,
          opacity: 1,
          duration: 4,
          ease: "expo.inOut",
        },
        0,
      );

      tl.to(
        skyRef.current,
        {
          scale: 1.5,
          filter: "blur(10px)",
          duration: 4,
        },
        0,
      );

      // 2. SIDEBAR ENTRANCE
      tl.fromTo(
        sidebarRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1 },
        2,
      );

      // 3. CARD STACKING & PARALLAX
      cards.forEach((card, i) => {
        const startTime = 2 + i * 2;

        tl.fromTo(
          card,
          { y: "130vh", rotateX: -20, z: -500 },
          {
            y: "0vh",
            rotateX: 0,
            z: 0,
            duration: 3,
            ease: "power3.out",
          },
          startTime,
        );

        // Internal Image Parallax
        tl.fromTo(
          card.querySelector("img"),
          { scale: 1.4, y: -50 },
          { scale: 1, y: 0, duration: 3 },
          startTime,
        );

        if (i > 0) {
          tl.to(
            cards[i - 1],
            {
              scale: 0.7,
              opacity: 0.1,
              y: "-20vh",
              filter: "blur(8px)",
              duration: 3,
            },
            startTime,
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <ReactLenis root>
      <div
        ref={containerRef}
        className="bg-black text-white selection:bg-white selection:text-black"
      >
        {/* DYNAMIC BACKGROUND GLOW */}
        <div className="fixed inset-0 pointer-events-none transition-colors duration-1000 z-0" />

        <div
          id="main-wrapper"
          className="relative h-screen w-full overflow-hidden"
        >
          {/* SIDEBAR */}
          <div
            ref={sidebarRef}
            className="absolute right-8 md:right-16 top-1/4 h-1/2 flex z-50"
          >
            <div className="relative w-[1px] h-full bg-white/10 mr-8">
              <div
                ref={progressRef}
                className="absolute top-0 w-full bg-white transition-all"
              />
            </div>
            <div className="flex flex-col justify-between py-2">
              {PROJECTS.map((p, i) => (
                <div
                  key={i}
                  className={`transition-all duration-500 ${i === activeIndex ? "translate-x-[-10px]" : "opacity-20 hover:opacity-50"}`}
                >
                  <p className="text-[10px] font-mono tracking-widest text-zinc-400">
                    PHASE {p.phase}
                  </p>
                  <p className="text-sm font-black uppercase italic tracking-tighter">
                    {p.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* BACKGROUND TEXT (Huge Outline) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <h2 className="text-[25vw] font-black uppercase italic text-transparent stroke-white/5 stroke-1 opacity-20 whitespace-nowrap leading-none">
              {PROJECTS[activeIndex].name}
            </h2>
          </div>

          {/* LAYER 1: SKY */}
          <div ref={skyRef} className="absolute inset-0 z-0 opacity-30">
            <img
              src="https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&q=80&w=2000"
              className="w-full h-full object-cover"
              alt="sky"
            />
          </div>

          {/* LAYER 2: CARDS */}
          <div
            className="absolute inset-0 z-10 flex items-center justify-center"
            style={{ perspective: "2000px" }}
          >
            <div className="relative w-full max-w-xl h-full flex items-center justify-center">
              {PROJECTS.map((project, i) => (
                <div
                  key={project.id}
                  className="card-item absolute w-full rounded-[2.5rem] will-change-transform"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    className="group relative flex flex-col gap-6 rounded-[2.5rem] border border-white/10 bg-zinc-900/40 backdrop-blur-3xl p-6 md:p-6 shadow-2xl overflow-hidden"
                  >
                    {/* Image Box */}
                    <div className="relative h-56 md:h-72 overflow-hidden rounded-[1.5rem] border border-white/5">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="h-full w-full object-cover transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <p
                          className="text-xs font-mono tracking-[0.3em] uppercase text-zinc-500"
                          style={{ color: project.color }}
                        >
                          {project.fullName}
                        </p>
                        <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">
                          {project.name}
                        </h3>
                      </div>

                      <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-[90%]">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 text-[9px] font-bold tracking-widest uppercase bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer / CTA */}
                    <div className="flex justify-between items-center border-t border-white/5">
                      <a
                        href={project.link}
                        className="group/btn flex items-center gap-3 text-sm font-bold uppercase tracking-widest"
                      >
                        Explore Project
                        <span className="p-2 px-3 rounded-full bg-white/5 group-hover/btn:bg-white group-hover/btn:text-black transition-all">
                          →
                        </span>
                      </a>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* LAYER 3: THE CINEMA WINDOW */}
          <div
            ref={windowRef}
            className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
          >
            <div className="w-[90%] h-[80%] border-[20px] md:border-[100px] border-black rounded-[60px] shadow-[0_0_0_2000px_rgba(0,0,0,1)] flex items-center justify-center">
              <h1 className="text-6xl md:text-[10vw] font-black italic uppercase tracking-tighter mix-blend-difference">
                My Projects<span className="text-zinc-500">.</span>
              </h1>
            </div>
          </div>
        </div>

        {/* CUSTOM FOOTER */}
        <section className="relative h-screen flex flex-col items-center justify-center bg-black">
          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <h2 className="text-zinc-500 font-mono text-sm tracking-[0.5em] mb-4">
            WANT TO COLLABORATE?
          </h2>
          <h3 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter hover:text-white transition-all duration-500 text-zinc-800">
            Get In Touch
          </h3>
        </section>
      </div>
    </ReactLenis>
  );
};

export default AdvancedScroll;
