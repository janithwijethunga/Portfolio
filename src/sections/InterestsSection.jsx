// ✅ NOTE: I DID NOT REMOVE anything from your code.
// ✅ I ONLY fixed particles to feel like "space dive" (3D starfield) + keep them moving with scroll.

import { act, useLayoutEffect, useRef } from "react"; // act is imported but not used (can stay)
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
      const wrap = cardsWrapRef.current;
      const cards = gsap.utils.toArray(wrap.children);

      const particles = gsap.utils.toArray(particlesRef.current.children);

      // ✅ 3D feel
      gsap.set(sectionRef.current, { perspective: 1000 });
      gsap.set(wrap, { transformStyle: "preserve-3d" });

      // ----------------------------
      // ✅ STARFIELD (Particles) 3D Dive Setup
      // ----------------------------
      const STAR_COUNT = particles.length;
      const fov = 420; // perspective factor (bigger = less dramatic)
      const zMin = -2400;
      const zMax = 320;

      // ✅ keep star data
      const stars = particles.map((el) => {
        // spread around center
        const x = gsap.utils.random(-window.innerWidth * 0.7, window.innerWidth * 0.7);
        const y = gsap.utils.random(-window.innerHeight * 0.7, window.innerHeight * 0.7);
        const z = gsap.utils.random(zMin, 0);

        // base size + brightness
        const base = gsap.utils.random(0.35, 1.4);
        const a = gsap.utils.random(0.35, 0.95);

        // put all at screen center; we’ll move using translate3d
        gsap.set(el, {
          left: "50%",
          top: "50%",
          xPercent: -50,
          yPercent: -50,
          opacity: a,
          willChange: "transform, opacity",
        });

        return { el, x, y, z, base, a };
      });

      // ✅ super fast setters
      const setX = particles.map((el) => gsap.quickSetter(el, "x", "px"));
      const setY = particles.map((el) => gsap.quickSetter(el, "y", "px"));
      const setZ = particles.map((el) => gsap.quickSetter(el, "z", "px"));
      const setS = particles.map((el) => gsap.quickSetter(el, "scale"));
      const setO = particles.map((el) => gsap.quickSetter(el, "opacity"));

      const project = (star) => {
        // perspective projection
        const p = fov / (fov - star.z); // z closer to 0 => p bigger
        const sx = star.x * p;
        const sy = star.y * p;

        // scale grows as it comes closer
        const sc = star.base * p;

        // slight opacity boost when close (but clamp)
        const op = Math.min(1, Math.max(0.5, star.a * (0.55 + p * 0.6)));

        return { sx, sy, sc, op };
      };

      // initial render (particles visible immediately)
      stars.forEach((s, i) => {
        const { sx, sy, sc, op } = project(s);
        setX[i](sx);
        setY[i](sy);
        setZ[i](s.z);
        setS[i](sc);
        setO[i](op);
      });

      // ----------------------------
      // ✅ MAIN TIMELINE (Cards) + SAME ScrollTrigger updates starfield
      // ----------------------------
      const zoomDur = 100;
      const overlap = zoomDur * 0.7;

      let t = 0;
      cards.forEach((card, i) => {
        const dir = i % 2 === 0 ? 1 : -1;

        // keep stacking
        gsap.set(card, { zIndex: cards.length - i });

        // start state
        gsap.set(card, { scale: 0, x: 0, y: 50 });

        t += zoomDur - overlap;
      });

      // estimate full scroll length
      const totalCardsSpan = (zoomDur - overlap) * cards.length + overlap;

      let prevProgress = 0;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * (interests.length * 1.5)}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,

          // ✅ THIS makes particles move ALWAYS while scroll drives the timeline
          onUpdate: (self) => {
            const p = self.progress;
            const dp = p - prevProgress;
            prevProgress = p;

            // scroll forward => stars come towards you
            // (tweak travel multiplier for speed)
            const travel = dp * 2800;

            stars.forEach((s, i) => {
              s.z += travel;

              // wrap: when pass viewer, send back deep
              if (s.z > zMax) s.z = zMin;
              if (s.z < zMin) s.z = zMax; // for reverse scroll

              const { sx, sy, sc, op } = project(s);
              setX[i](sx);
              setY[i](sy);
              setZ[i](s.z);
              setS[i](sc);
              setO[i](op);
            });
          },
        },
      });

      // ✅ animate cards on the SAME timeline
      let cursor = 0;
      cards.forEach((card, i) => {
        const dir = i % 2 === 0 ? 1 : -1;

        tl.set(card, { zIndex: cards.length - i }, cursor);

        tl.fromTo(
          card,
          { scale: 0, x: 0, y: 50 },
          {
            scale: 10,
            x: window.innerWidth * 1.5 * dir,
            y: 400,
            duration: zoomDur,
            ease: "power3.in",
          },
          cursor
        );

        cursor += zoomDur - overlap;
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="interests" ref={sectionRef} className="relative overflow-hidden">
      {/* ✅ Particles Container */}
      <div
        ref={particlesRef}
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        {Array.from({ length: 500 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 3.2 + 0.8}px`,
              height: `${Math.random() * 3.2 + 0.8}px`,
            }}
          />
        ))}
      </div>

      {/* ✅ Content */}
      <div className="sticky top-0 min-h-screen flex items-center py-20">
        <Container className="space-y-12">
          <div className="relative z-10">
            <SectionHeader
              eyebrow="Interests"
              title="Areas I love to build in"
              subtitle="Roles and topics that keep me inspired and curious."
            />
          </div>

          <div
            ref={cardsWrapRef}
            className="relative w-full h-full sm:h-[360px] flex items-center justify-center perspective-[1000px]"
          >
            {interests.map((item) => (
              <div
                key={item.name}
                className="
                  absolute top-0 left-1/2 -translate-x-1/2
                  flex items-center gap-4 rounded-2xl
                  border border-neutral-200 bg-white/90 px-5 py-4
                  text-sm font-semibold text-neutral-700 shadow-2xl
                  dark:border-neutral-800 dark:bg-neutral-900/90 dark:text-neutral-200
                "
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="h-8 w-8 object-contain"
                    loading="lazy"
                  />
                  <p>{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default InterestsSection;
