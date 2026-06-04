import React, { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis } from "lenis/react";
import { motion } from "framer-motion";
import { PROJECTS } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

const AdvancedScroll = () => {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useLayoutEffect(() => {
    const panels = gsap.utils.toArray(".project-panel");
    const totalPanels = panels.length;

    const ctx = gsap.context(() => {
      // 🛠️ HORIZONTAL RAIL SLIDE TIMELINE
      // මුළු Section එකම පින් වෙලා, Panels ටික දකුණේ සිට වමට තිරස් අතට ගලාගෙන යනවා.
      const pinTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${window.innerWidth * (totalPanels - 0.2)}`,
          pin: true,
          scrub: 1.2,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            const idx = Math.min(
              Math.floor(p * totalPanels),
              totalPanels - 1
            );
            if (idx !== activeIndex) setActiveIndex(idx);
          },
        },
      });

      // Panels වමට Slide කරවන ප්‍රධාන Animation එක
      pinTimeline.to(panels, {
        xPercent: -100 * (totalPanels - 1),
        ease: "none",
      });

      // 🌌 INNER TEXT & PANEL PARALLAX ACCENTS
      panels.forEach((panel, i) => {
        // පසුබිමේ තියෙන Huge text එක තවත් වේගයෙන් slide කරවන parallax effect එක
        gsap.fromTo(
          panel.querySelector(".bg-parallax-text"),
          { xPercent: 30 },
          {
            xPercent: -30,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: pinTimeline,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          }
        );

        // Card එක ඇතුලේ තියෙන Image එක උඩට/පහලට shift කරවන එක
        gsap.fromTo(
          panel.querySelector(".card-image-layer"),
          { scale: 1.2, yPercent: -10 },
          {
            scale: 1,
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              containerAnimation: pinTimeline,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <ReactLenis root>
      <div
        ref={containerRef}
        className="bg-neutral-950 text-white selection:bg-indigo-500 selection:text-white"
      >
        {/* MASTER SCROLL TIMELINE ARENA */}
        <div ref={triggerRef} className="relative h-screen w-full overflow-hidden">
          
          {/* TOP MODERN HUD NAVBAR (User-Friendly Info) */}
          <div className="absolute top-16 left-8 md:left-16 right-8 md:right-16 flex justify-between items-center z-50 pointer-events-none">
            <h1 className="text-sm font-black uppercase tracking-[0.4em] text-neutral-400">
              My Projects <span className="text-indigo-500">({PROJECTS.length})</span>
            </h1>
          </div>

          {/* HORIZONTAL PANELS TRACK STAGE */}
          <div className="flex h-full w-max will-change-transform">
            {PROJECTS.map((project, i) => (
              <div
                key={project.id}
                className="project-panel relative w-screen h-screen flex items-center justify-center bg-neutral-950 px-6 md:px-16 overflow-hidden"
              >
                {/* 1. HUGE BACKDROP PARALLAX TEXT */}
                <div className="absolute inset-x-0 bottom-1/4 flex items-center justify-center pointer-events-none z-0">
                  <h2 className="bg-parallax-text text-[30vw] font-black uppercase italic text-transparent stroke-neutral-800/10 stroke-2 whitespace-nowrap leading-none select-none">
                    {project.name}
                  </h2>
                </div>

                {/* 2. SPLIT INTERACTIVE CANVAS PANEL */}
                <div className="relative w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center z-10 pt-12">
                  
                  {/* Left Side: Immersive Portal Media Frame */}
                  <div className="lg:col-span-7 w-full h-[280px] sm:h-[450px] rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-neutral-800/40 group relative">
                    <div className="card-image-layer absolute inset-0 w-full h-full will-change-transform">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.05] group-hover:scale-105 transition-transform duration-1000 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />
                    </div>
                  </div>

                  {/* Right Side: Structured Specifications UI */}
                  <div className="lg:col-span-5 space-y-6 text-left">
                    <div className="space-y-2">
                      <p 
                        className="text-xs font-mono tracking-[0.3em] uppercase font-bold"
                        style={{ color: project.color || "#6366f1" }}
                      >
                        {project.fullName || "Core Production"}
                      </p>
                      <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none text-white">
                        {project.name}
                      </h3>
                    </div>

                    <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed max-w-xl">
                      {project.description}
                    </p>

                    {/* Tech Badges Row */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 text-[9px] font-bold tracking-widest uppercase bg-neutral-900 border border-neutral-800/80 rounded-full text-neutral-300 hover:border-neutral-700 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Interactive Action Link Frame */}
                    <div className="pt-4 border-t border-neutral-900">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-4 group/btn text-sm font-black uppercase tracking-widest text-neutral-200 hover:text-white"
                      >
                        Explore Project
                        <span className="p-3 rounded-full bg-neutral-900 border border-neutral-800 group-hover/btn:bg-white group-hover/btn:text-neutral-950 group-hover/btn:border-white transition-all duration-300 transform group-hover/btn:translate-x-1">
                          →
                        </span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </ReactLenis>
  );
};

export default AdvancedScroll;