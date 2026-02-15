import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../Components/ui/Container";
import Button from "../Components/ui/Button";
import { heroContent } from "../data/hero";
import AboutSection from "./AboutSection";


gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "UI/UX Designer",
    img: "https://res.cloudinary.com/dksfpirc6/image/upload/v1771135548/mobile_vdrqpm.webp",
    top: "-top-10",
    left: "left-6",
    z: "z-20",
  },
  {
    title: "Web Developer",
    img: "https://res.cloudinary.com/dksfpirc6/image/upload/v1771135533/webdev_prqyhr.webp",
    top: "top-32",
    left: "right-0",
    z: "z-10",
  },
  {
    title: "Frontend Developer",
    img: "https://res.cloudinary.com/dksfpirc6/image/upload/v1771135543/frontenddev_fivxld.webp",
    top: "-bottom-16",
    left: "left-10",
    z: "z-0",
  },
];

export default function HeroAboutScroll() {
  const sectionRef = useRef(null);
  const heroTextRef = useRef(null);
  const aboutTextRef = useRef(null);
  const imageWrapRef = useRef(null);
  const cardsWrapRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const heroText = heroTextRef.current;
    const aboutText = aboutTextRef.current;
    const imageWrap = imageWrapRef.current;
    const cardsWrap = cardsWrapRef.current;
    ScrollTrigger.refresh(true);

    if (!section || !heroText || !aboutText || !imageWrap || !cardsWrap) return;

    const ctx = gsap.context(() => {
      const cardEls = gsap.utils.toArray(
        cardsWrap.querySelectorAll("[data-card]"),
      );

      // ✅ Initial: about is positioned below (not hidden via opacity)
      gsap.set(heroText, { y: 0 });
      gsap.set(aboutText, { y: 500 }); // starts below
      gsap.set(imageWrap, { x: 0, scale: 1, rotate: 0 });
      gsap.set(cardEls, { y: 0 });

      // ✅ Clip containers so text "leaves" naturally (no fading)
      // Ensure both layers are clipped within left column box
      // (CSS also set below in JSX: overflow-hidden)
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const computeRightCornerX = () => {
          // Move image to right corner of pinned section
          const sectionRect = section.getBoundingClientRect();
          const imgRect = imageWrap.getBoundingClientRect();
          const padding = 20;

          const targetCenterX = sectionRect.right - padding - imgRect.width/1.5 ;
          const currentCenterX = imgRect.left + imgRect.width;
          return targetCenterX - currentCenterX;
        };

        const computeCardsUpY = () => {
          // cards go fully out above viewport
          return -(window.innerHeight * 1.2);
        };

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=200%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // ✅ Cards go UP out of view
        tl.to(
          cardEls,
          {
            y: () => computeCardsUpY(),
            ease: "none",
            stagger: 0.06,
          },
          0,
        );

        // ✅ Hero text goes UP out (real movement)
        tl.to(
          heroText,
          {
            y: -500,
            ease: "none",
          },
          0,
        );

        // ✅ About text comes FROM DOWN (real movement)
        tl.to(
          aboutText,
          {
            y: 0,
            ease: "none",
          },
          0,
        );

        // ✅ Hero image to RIGHT CORNER
        tl.to(
          imageWrap,
          {
            x: () => computeRightCornerX(),
            ease: "none",
          },
          0,
        );

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });

      // Mobile: no right-corner travel (keep centered), still real scroll swap
      mm.add("(max-width: 1023px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=120%",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.to(cardsWrap, { y: -180, ease: "none" }, 0);
        tl.to(heroText, { y: -240, ease: "none" }, 0);
        tl.to(aboutText, { y: 0, ease: "none" }, 0);

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div id="home" className="absolute top-0" />
      <section
        ref={sectionRef}
        className="relative overflow-hidden pb-16 pt-32"
      >
      {/* background blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-primary-200/40 blur-3xl dark:bg-primary-500/20" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-neutral-200/50 blur-3xl dark:bg-neutral-800/50" />
        <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/30 dark:bg-neutral-900/20" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr_1fr]">
          {/* LEFT — clip area */}
          <div className="relative min-h-[360px] overflow-hidden">
            {/* HERO layer */}
            <div ref={heroTextRef} className="space-y-6 will-change-transform">
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
            </div>

            {/* ABOUT layer (starts below; slides up) */}
            
          </div>
          <div
            ref={aboutTextRef}
            className="absolute inset-0 will-change-transform w-full"
          >
            <AboutSection />
          </div>

          {/* CENTER — image */}
          <div className="relative mx-auto flex w-full max-w-[440px] justify-center lg:justify-start">
            <div ref={imageWrapRef} className="relative will-change-transform">
              <div className="absolute top-32 inset-0 translate-y-6 rounded-full bg-black/40 blur-2xl dark:bg-white/10" />
              <img
                src={"https://res.cloudinary.com/dksfpirc6/image/upload/v1771135547/Me_sl9phq.webp"}
                alt={heroContent.name}
                className="relative w-full select-none object-cover rounded-3xl"
                draggable={false}
              />
            </div>
          </div>

          {/* RIGHT — cards */}
          <div
            ref={cardsWrapRef}
            className="relative hidden h-[420px] lg:block"
          >
            {cards.map((c) => (
              <div
                key={c.title}
                data-card
                className={`absolute ${c.top} ${c.left} ${c.z} w-44 will-change-transform`}
              >
                <div className="rounded-3xl border border-neutral-200 bg-white/70 p-4 shadow-soft backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/70">
                  <div className="overflow-hidden rounded-2xl dark:bg-neutral-800">
                    <img
                      src={c.img}
                      alt={c.title}
                      className="h-36 w-full object-contain"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-center">
                    <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-700 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
                      {c.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </Container>
      </section>
    </>
  );
}
