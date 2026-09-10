import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FiExternalLink } from "react-icons/fi";

// Custom components
import Container from "../Components/ui/Container";
import SectionHeader from "../Components/ui/SectionHeader";
import EducationModal from "../Components/EducationModal";
import { education } from "../data/education";

gsap.registerPlugin(ScrollTrigger);

const EducationSection = () => {
  const containerRef = useRef(null);
  const pinTargetRef = useRef(null);
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
      // Overlap ලෙඩේ එන්නේ නැති වෙන්න timeline එකක් පාවිච්චි කරලා pin කරනවා
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1200", // Page එක සිරවී (stop scroll) පවතින කාලය
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // 3D Perspective Setup
      gsap.set([leftCardRef.current, rightCardRef.current], {
        transformPerspective: 2000,
        transformStyle: "preserve-3d",
      });

      // මුලින්ම front face විතරක් clickable කරනවා
      gsap.set(".front-face", { pointerEvents: "auto" });
      gsap.set(".back-face", { pointerEvents: "none" });

      // 🔄 Scroll වෙද්දී කාඩ් දෙකම එකවර 180°ක් Flip වන Timeline ඇනිමේෂන් එක
      tl.to([leftCardRef.current, rightCardRef.current], {
        rotateY: 180,
        duration: 2,
        ease: "power2.inOut",
      });

      // Flip එක මැදදී Clickable target එක front එකෙන් back එකට මාරු කරනවා
      tl.set(".front-face", { pointerEvents: "none" }, 1);
      tl.set(".back-face", { pointerEvents: "auto" }, 1);
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="education"
      className="bg-neutral-950 text-white relative overflow-hidden select-none"
    >
      {/* Premium Studio Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f1115_1px,transparent_1px),linear-gradient(to_bottom,#0f1115_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50 pointer-events-none" />

      {/* Ambient Lighting Background Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Pin වන කාලය තුල screen එක මැද fix වී පවතින inner container එක */}
      <div
        ref={pinTargetRef}
        className="h-screen flex flex-col justify-between py-16 w-full relative z-10"
      >
        <Container className="w-full">
          <SectionHeader title="Academic Journey" />
        </Container>

        <div className="w-full flex-grow flex items-center justify-center my-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-5xl mx-auto px-6 items-center justify-center">
            {education?.slice(0, 2).map((item, index) => (
              <FlipCard
                key={item?.school || index}
                cardRef={index === 0 ? leftCardRef : rightCardRef}
                item={item}
                coverImg={
                  index === 0
                    ? "https://res.cloudinary.com/dksfpirc6/image/upload/v1771135531/EDU1_qr72tr.webp"
                    : "https://res.cloudinary.com/dksfpirc6/image/upload/v1771135532/EDU2_q3ege1.webp"
                }
                onOpen={handleCardClick}
              />
            ))}
          </div>
        </div>

        <div className="h-2" />
      </div>

      <EducationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        item={selectedEducation}
      />
    </section>
  );
};

/* 💳 3D Scroll Flip Card Component */
function FlipCard({ cardRef, item, coverImg, onOpen }) {
  if (!item) return null;

  return (
    <div
      ref={cardRef}
      className="relative w-full h-[400px] sm:h-[450px] rounded-3xl cursor-pointer group transition-shadow duration-500 hover:shadow-indigo-500/10"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* 🟦 FRONT FACE: Academic Details */}
      <div className="front-face absolute inset-0 w-full h-full [backface-visibility:hidden] rounded-3xl p-[1px] bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-950 overflow-hidden">
        <div className="relative w-full h-full rounded-[23px] bg-neutral-900/90 flex flex-col justify-between p-6 overflow-hidden">
          {/* Subtle blurred background thumbnail */}
          <img
            src={coverImg}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            alt=""
          />
        </div>
      </div>

      {/* 🟥 BACK FACE: School Image & External Link Trigger */}
      <div className="back-face absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl p-[1px] bg-gradient-to-b from-neutral-800 to-neutral-950 overflow-hidden">
        <div className="relative w-full h-full rounded-[23px] overflow-hidden bg-neutral-950">
          {/* Main Institution Photo */}
          <img
            src={item.image || coverImg}
            alt={item?.school || "School Cover"}
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.45] contrast-115 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />

          {/* Floating Indicators */}
          <div className="absolute top-5 left-5">
            <span className="px-3 py-1 bg-neutral-950/80 border border-neutral-800/50 backdrop-blur-md rounded-full text-[9px] uppercase tracking-wider font-extrabold text-indigo-400">
              Gallery View
            </span>
          </div>

          {/* Center Click Trigger Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpen(item);
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-white text-neutral-950 p-4 rounded-full shadow-2xl hover:bg-indigo-50 hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <FiExternalLink className="w-5 h-5 stroke-[2.5]" />
          </button>
          {/* School Banner Title inside background */}
          <div className="absolute bottom-5 left-5 right-5 space-y-2.5 z-10">
            <h4 className="text-lg sm:text-xl font-black uppercase italic tracking-tight text-white leading-tight">
              {item?.school}
            </h4>
            <div className="pt-2.5 border-t border-neutral-800/80 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1]" />
              <p className="text-xs font-semibold text-neutral-400 truncate tracking-wide">
                {item?.program}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationSection;
