import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiExternalLink } from "react-icons/fi";

import Container from "../Components/ui/Container";
import SectionHeader from "../Components/ui/SectionHeader";
import EducationModal from "../Components/EducationModal";
import { education } from "../data/education";

import EDU1 from "../assets/edu1.jpg";
import EDU2 from "../assets/edu2.jpg";

gsap.registerPlugin(ScrollTrigger);

const EducationSection = () => {
  const wrapRef = useRef(null);
  const pinRef = useRef(null);
  const cardContainerRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  
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
          start: "top 1%",
          end: "+=2000",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Initial Setup
      gsap.set([leftCardRef.current, rightCardRef.current], {
        transformPerspective: 1500,
        transformStyle: "preserve-3d",
        borderRadius: "0px",
      });

      // 1. ZOOM AS ONE
      // We scale the CONTAINER so the two cards stay perfectly flush
      tl.to(cardContainerRef.current, {
        scale: 1.01,
        duration: 1.5,
        ease: "power2.inOut",
      })

        // 2. BREAK APART & ROUND CORNERS
        // Now we animate the individual cards inside the scaled container
        .to(
          leftCardRef.current,
          {
            x: -20,
            borderRadius: "24px",
            duration: 1,
            ease: "power2.inOut",
          },
          ">",
        ) // Starts right after zoom finishes
        .to(
          rightCardRef.current,
          {
            x: 20,
            borderRadius: "24px",
            duration: 1,
            ease: "power2.inOut",
          },
          "<",
        ) // "<" means start simultaneously with the previous tween

        // 3. FULL CARD FLIP
        .to(
          [leftCardRef.current, rightCardRef.current],
          {
            rotateY: 180,
            duration: 2,
            ease: "power1.inOut",
          },
          "+=0.2",
        )

        // 4. EXIT
        .to(pinRef.current, {
          opacity: 1,
          y: -50,
          duration: 1.5,
        });
    },
    { scope: wrapRef },
  );

  return (
    <section ref={wrapRef} id="education" className="">
      <div
        ref={pinRef}
        className="h-screen mt-5 flex flex-col items-center justify-center overflow-hidden"
      >
        <SectionHeader title="Academic Background" />

        <div className="relative mt-5 w-full max-w-5xl px-6">
          <div
            ref={cardContainerRef}
            className="flex justify-center items-center gap-0"
          >
            <MilestoneCard
              cardRef={leftCardRef}
              coverImg={EDU1}
              item={education?.[0]}
              onSeeMore={handleCardClick}
            />
            <MilestoneCard
              cardRef={rightCardRef}
              coverImg={EDU2}
              item={education?.[1]}
              onSeeMore={handleCardClick}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      <EducationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        item={selectedEducation}
      />
    </section>
  );
};

function MilestoneCard({ cardRef, coverImg, item, onSeeMore }) {
  return (
    <div
      ref={cardRef}
      className="relative w-1/2 h-[500px] cursor-pointer [transform-style:preserve-3d]"
    >
      {/* FRONT SIDE */}
      <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] overflow-hidden rounded-[inherit]">
        <img
          src={coverImg}
          alt="Cover"
          className="h-full w-full object-cover"
        />
      </div>

      {/* BACK SIDE */}
      <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-[inherit] overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800 shadow-2xl">
        {/* Top visual - Full height background */}
        <div className="relative h-full w-full group">
          <img
            src={item.image}
            alt="Cover"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Sophisticated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

          {/* Top Row: Floating Badges */}
          <div className="absolute top-4 left-0 right-0 px-4 flex justify-between items-center">
            <span className="backdrop-blur-md bg-white/20 dark:bg-black/40 border border-white/20 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold text-white">
              Education
            </span>
            <span className="text-[11px] font-medium text-white/80 tabular-nums">
              {item?.date}
            </span>
          </div>

          {/* See More Icon - Appears on hover */}
          <button
            onClick={() => onSeeMore(item)}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100 z-10"
          >
            <div className="bg-white/20 backdrop-blur-md border-2 border-white/40 rounded-full p-4 hover:bg-white/30 hover:border-white/60 transition-all duration-300 shadow-2xl">
              <FiExternalLink className="w-8 h-8 text-white" strokeWidth={2.5} />
            </div>
          </button>

          {/* Bottom Content: Glassmorphic Info Card */}
          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl">
            <div className="flex items-center gap-4">
              {/* Logo Container */}
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white p-1.5 shadow-inner">
                <img
                  src={item.logo}
                  alt="logo"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Text Stack */}
              <div className="min-w-0 flex-1">
                <h4 className="truncate text-lg font-bold leading-tight text-white tracking-tight">
                  {item?.school}
                </h4>
                <p className="truncate text-xs font-medium text-blue-300 dark:text-blue-400 uppercase tracking-wide mt-0.5">
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
