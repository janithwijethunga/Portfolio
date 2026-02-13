import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

// Custom components
import SectionHeader from "../Components/ui/SectionHeader";
import EducationModal from "../Components/EducationModal";
import { education } from "../data/education";

// Assets
import EDU1 from "../assets/edu1.jpg";
import EDU2 from "../assets/edu2.jpg";

gsap.registerPlugin(ScrollTrigger);

const EducationSection = () => {
  const wrapRef = useRef(null);
  const pinRef = useRef(null);
  const cardContainerRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const bgTextRef = useRef(null);

  const [selectedEducation, setSelectedEducation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (item) => {
    setSelectedEducation(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedEducation(null), 300);
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
        },
      });

      // --- 1. INITIAL SETUP ---
      gsap.set([leftCardRef.current, rightCardRef.current], {
        transformPerspective: 2000,
        transformStyle: "preserve-3d",
      });

      // ✅ FIX 1: Ensure ONLY the front face is clickable at start
      // (back face is rotated 180 and often fails hit-testing unless we toggle pointer events)
      gsap.set(".front-face", { pointerEvents: "auto" });
      gsap.set(".back-face", { pointerEvents: "none" });

      // --- 2. THE ZOOM & BACKGROUND TEXT ENTRANCE ---
      tl.to(
        bgTextRef.current,
        {
          scale: 1.2,
          opacity: 0.1,
          duration: 2,
        },
        0,
      ).to(
        cardContainerRef.current,
        {
          scale: 1.1,
          duration: 2,
          ease: "power2.inOut",
        },
        0,
      );

      // --- 3. BREAK APART (FLUID MOVEMENT) ---
      tl.to(
        leftCardRef.current,
        {
          x: "-10%",
          rotateY: -10,
          borderRadius: "40px",
          duration: 1.5,
          ease: "expo.out",
        },
        ">-0.5",
      ).to(
        rightCardRef.current,
        {
          x: "10%",
          rotateY: 10,
          borderRadius: "40px",
          duration: 1.5,
          ease: "expo.out",
        },
        "<",
      );

      // ✅ FIX 1: Switch clickability BEFORE the flip completes
      // We enable back-face clickability during the flip window.
      tl.set(
        ".front-face",
        { pointerEvents: "none" },
        "+=0.15", // small offset before flip begins
      ).set(
        ".back-face",
        { pointerEvents: "auto" },
        "<",
      );

      // --- 4. THE DRAMATIC FLIP ---
      tl.to(
        [leftCardRef.current, rightCardRef.current],
        {
          rotateY: 180,
          x: (i) => (i === 0 ? "-5%" : "5%"), // Bring them slightly closer during flip
          duration: 2.5,
          ease: "back.inOut(1.2)",
        },
        "+=0.2",
      );

      // --- 5. INNER IMAGE PARALLAX (Customization) ---
      // We target the images inside the cards for a subtle shift
      tl.to(
        ".card-parallax-img",
        {
          scale: 1.2,
          y: -20,
          duration: 2.5,
          ease: "none",
        },
        "<",
      );
    },
    { scope: wrapRef },
  );

  return (
    <section
      ref={wrapRef}
      id="education"
      className="bg-black text-white relative overflow-hidden"
    >
      <div
        ref={pinRef}
        className="relative z-10 h-screen flex flex-col items-center justify-center"
      >
        <div className="mb-10">
          <SectionHeader title="Academic Journey" />
        </div>

        <div className="relative w-full max-w-5xl px-6">
          <div
            ref={cardContainerRef}
            className="flex justify-center items-center gap-0"
          >
            <MilestoneCard
              cardRef={leftCardRef}
              coverImg={EDU1}
              item={education?.[0]}
              onSeeMore={handleCardClick}
              side="left"
            />
            <MilestoneCard
              cardRef={rightCardRef}
              coverImg={EDU2}
              item={education?.[1]}
              onSeeMore={handleCardClick}
              side="right"
            />
          </div>
        </div>
      </div>

      <EducationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        item={selectedEducation}
      />
    </section>
  );
};

function MilestoneCard({ cardRef, coverImg, item, onSeeMore, side }) {
  // ✅ FIX 1: refs (kept for clarity/debug, not required by GSAP selector-based toggle)
  const frontRef = useRef(null);
  const backRef = useRef(null);

  return (
    <div
      ref={cardRef}
      className="relative w-1/2 h-[450px] md:h-[450px] cursor-pointer shadow-2xl transition-shadow duration-500 hover:shadow-blue-500/10"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* FRONT SIDE (Original Photo) */}
      <div
        ref={frontRef}
        className="front-face absolute inset-0 w-full h-full [backface-visibility:hidden] overflow-hidden rounded-[inherit] border border-white/5"
      >
        <img
          src={coverImg}
          alt="Cover"
          className="card-parallax-img h-full w-full object-cover  hover:grayscale transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
      </div>

      {/* BACK SIDE (Details) */}
      <div
        ref={backRef}
        className="back-face absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[inherit] overflow-hidden  border border-white/10"
      >
        <div className="relative h-full w-full group">
          <img
            src={item.image}
            alt="School Cover"
            className="h-full w-full object-cover  group-hover:scale-110 transition-transform duration-1000"
          />

          {/* Theme Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-zinc-950/30 to-zinc-950" />

          {/* Top UI */}
          <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
            <span className="px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[9px] uppercase tracking-[0.3em] font-black text-blue-100">
              Institution
            </span>
            <span className="px-3 py-1 bg-white/95 backdrop-blur-md border border-white/90 rounded-full text-[9px] uppercase tracking-[0.3em] font-black text-blue-800">
              {item?.date}
            </span>
          </div>

          {/* Center Interactive Button */}
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              onSeeMore(item);
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 group-hover:opacity-100 transition-opacity"
          >
            <div className="bg-white text-black p-5 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              <FiExternalLink className="w-6 h-6" />
            </div>
          </motion.button>

          {/* Content Info Card */}
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-5">
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-white p-2 shadow-xl">
                <img
                  src={item.logo}
                  alt="logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h4 className="text-base font-black uppercase italic leading-none text-white tracking-tighter truncate">
                  {item?.school}
                </h4>
                <p className="text-xs font-bold text-white/80 uppercase mt-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  {item?.program}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationSection;
