import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Container from "../Components/ui/Container";
import SectionHeader from "../Components/ui/SectionHeader";
import { interests } from "../data/interests";

gsap.registerPlugin(ScrollTrigger);

const InterestsSection = () => {
  const sectionRef = useRef(null);
  const cardsWrapRef = useRef(null);
  const particlesRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !cardsWrapRef.current || !particlesRef.current)
      return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(cardsWrapRef.current.children);
      const particles = gsap.utils.toArray(particlesRef.current.children);

      // Set 3D Context
      gsap.set(sectionRef.current, { perspective: 1500 });
      gsap.set(cardsWrapRef.current, { transformStyle: "preserve-3d" });

      // 🌌 1. BACKGROUND: Rotating Starfield
      const starData = particles.map((el) => {
        const angle = Math.random() * Math.PI * 2;
        const radius = gsap.utils.random(100, window.innerWidth * 0.9);
        const depth = gsap.utils.random(-800, 100);
        const speed = gsap.utils.random(0.3, 1.2);

        gsap.set(el, {
          left: "50%",
          top: "50%",
          xPercent: -50,
          yPercent: -50,
          opacity: gsap.utils.random(0.2, 0.8),
          willChange: "transform",
        });

        return { el, angle, radius, depth, speed };
      });

      const setStarX = particles.map((el) => gsap.quickSetter(el, "x", "px"));
      const setStarY = particles.map((el) => gsap.quickSetter(el, "y", "px"));
      const setStarZ = particles.map((el) => gsap.quickSetter(el, "z", "px"));

      const renderStars = (scrollProgress) => {
        starData.forEach((star, i) => {
          const currentAngle = star.angle + scrollProgress * 5 * star.speed;
          setStarX[i](Math.cos(currentAngle) * star.radius);
          setStarY[i](Math.sin(currentAngle) * star.radius);
          setStarZ[i](star.depth);
        });
      };

      // 💳 2. CARDS: Initial State
      cards.forEach((card, i) => {
        const cardAngle = (i / cards.length) * Math.PI * 2;
        const startDist = Math.max(window.innerWidth, window.innerHeight) * 0.8;

        gsap.set(card, {
          left: "50%",
          top: "50%",
          xPercent: -50,
          yPercent: -50,
          x: Math.cos(cardAngle) * startDist,
          y: Math.sin(cardAngle) * startDist,
          z: gsap.utils.random(-400, -100),
          rotationX: gsap.utils.random(-45, 45),
          rotationY: gsap.utils.random(-45, 45),
          rotationZ: gsap.utils.random(-30, 30),
          opacity: 0,
        });
      });

      // ⚙️ 3. SCROLLTRIGGER TIMELINE: Inbound Convergence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * 2.0}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            renderStars(self.progress);
          },
        },
      });

      const isMobile = window.innerWidth < 640;
      const cols = isMobile ? 2 : Math.min(4, cards.length);
      const cardWidth = isMobile ? 160 : 240;
      const cardHeight = isMobile ? 140 : 180;
      const gap = isMobile ? 16 : 28;

      cards.forEach((card, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const totalRows = Math.ceil(cards.length / cols);

        const targetX = (col - (cols - 1) / 2) * (cardWidth + gap);
        const targetY = (row - (totalRows - 1) / 2) * (cardHeight + gap);

        tl.to(
          card,
          {
            x: targetX,
            y: targetY,
            z: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            opacity: 1,
            scale: 1,
            duration: 80,
            ease: "power3.out",
          },
          0,
        );
      });

      tl.to({}, { duration: 1 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="interests"
      ref={sectionRef}
      className="relative overflow-hidden bg-neutral-950 text-white select-none"
    >
      {/* 🌌 Rotating Starfield Background */}
      <div
        ref={particlesRef}
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        {Array.from({ length: 200 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-gradient-to-tr from-white to-indigo-300"
            style={{
              width: `${Math.random() * 2.5 + 1}px`,
              height: `${Math.random() * 2.5 + 1}px`,
              boxShadow: Math.random() > 0.8 ? "0 0 6px #ffffff" : "none",
            }}
          />
        ))}
      </div>

      {/* Content Layout */}
      <div className="relative min-h-screen flex flex-col justify-between py-12 z-10">
        <Container className="w-full">
          <SectionHeader
            eyebrow="Interests"
            title="Areas I love to build in"
            subtitle="Roles and topics that keep me inspired and curious."
          />
        </Container>
        {/* 💳 Animation Stage Area */}
        <div className="w-full flex-grow flex items-center justify-center relative my-auto">
          <div ref={cardsWrapRef}>
            {interests.map((item) => (
              <div
                key={item.name}
                className="absolute w-1/3 sm:w-[240px] h-[140px] sm:h-[180px] origin-center will-change-transform group"
              >
                {/* Neon Outer Border Container */}
                <div className="relative w-full h-full rounded-2xl p-[1px] bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-950 group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-cyan-400 transition-all duration-500 shadow-2xl group-hover:shadow-[0_0_30px_rgba(99,102,241,0.25)]">
                  {/* Glass Inside Body */}
                  <div className="w-full h-full rounded-[15px] bg-neutral group-hover:bg-neutral-950/95 backdrop-blur-xl flex flex-col items-center justify-center gap-4 transition-all duration-300 overflow-hidden relative">
                    {/* Corner Minimal Dot Decor */}
                    <div className="absolute top-2.5 right-2.5 w-1 h-1 rounded-full bg-neutral-800 group-hover:bg-indigo-400 transition-colors duration-300" />

                    {/* Inner Ambient Glow on Hover */}
                    <div className="absolute -bottom-8 -right-8 w-20 h-20 rounded-full bg-indigo-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* 3D Floating Icon wrapper */}
                    <div className=" rounded-xl bg-neutral-950/60 border border-neutral-800/80 group-hover:border-neutral-700/60 group-hover:bg-neutral-900/60 shadow-inner group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 ease-out shrink-0">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="rounded-xl w-52 h-24 filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
                        loading="lazy"
                      />
                    </div>

                    {/* Text Element */}
                    <div className="text-center">
                      <h3 className="text-xs sm:text-sm font-semibold tracking-wide text-neutral-400 group-hover:text-white transition-colors duration-300 uppercase">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-4" />
      </div>
    </section>
  );
};

export default InterestsSection;
