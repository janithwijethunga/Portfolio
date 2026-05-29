import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FiExternalLink } from "react-icons/fi";

// Custom components
import Container from "../Components/ui/Container";
import SectionHeader from "../Components/ui/SectionHeader";
import EducationModal from "../Components/EducationModal";
import { education } from "../data/education";

const EducationSection = () => {
  const containerRef = useRef(null);
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

  // 🪄 ScrollTrigger Pin අයින් කරලා තියෙන්නේ. 
  // ඒ වෙනුවට Section එක load වෙද්දී cards දෙක smooth විදිහට ඉස්සරහට එන 3D entrance එකක් විතරක් දුන්නා.
  useGSAP(
    () => {
      gsap.from(".premium-hover-card", {
        opacity: 0,
        y: 60,
        z: -200,
        rotationX: -15,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="education"
      className="bg-neutral-950 text-white relative py-24 sm:py-32 overflow-hidden select-none"
    >
      {/* Premium Studio Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f1115_1px,transparent_1px),linear-gradient(to_bottom,#0f1115_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50 pointer-events-none" />
      
      {/* Ambient Lighting Background Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10 space-y-16">
        <SectionHeader title="Academic Journey" />

        {/* 🛠️ Safe Grid Matrix: කිසිම වෙලාවක යට components එක්ක overlap වෙන්නේ නැහැ */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-5xl mx-auto items-center justify-center"
          style={{ perspective: "1500px" }}
        >
          {education?.slice(0, 2).map((item, index) => (
            <InteractivePremiumCard
              key={item?.school || index}
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
      </Container>

      <EducationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        item={selectedEducation}
      />
    </section>
  );
};

/* 💳 3D Parallax Mouse Tracker Card Component */
function InteractivePremiumCard({ item, coverImg, onOpen }) {
  const cardRef = useRef(null);

  if (!item) return null;

  // මවුස් එක කාඩ් එක උඩ හොලවද්දී 3D විදිහට ඇලවෙන (Tilt) ලස්සන dynamic interaction එකක්
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top; 
    
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    
    // Rotation සීමාවන් (max degrees)
    const rotateX = (yc - y) / 12; 
    const rotateY = (x - xc) / 12;

    gsap.to(card, {
      rotationX: rotateX,
      rotationY: rotateY,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  // මවුස් එක කාඩ් එකෙන් අයින් කරපු ගමන් ආපහු සාමාන්‍ය තත්ත්වයට පත්වන එක
  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={cardRef}
      onClick={() => onOpen(item)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="premium-hover-card w-full h-[400px] sm:h-[450px] rounded-3xl overflow-hidden cursor-pointer group will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Glassmorphic Cyber Border */}
      <div className="w-full h-full rounded-3xl p-[1px] bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-950 group-hover:from-indigo-500/50 group-hover:to-purple-500/30 transition-all duration-500 shadow-2xl group-hover:shadow-[0_30px_60px_-15px_rgba(99,102,241,0.2)]">
        <div className="relative w-full h-full rounded-[23px] overflow-hidden bg-neutral-900/90 flex flex-col justify-between p-6" style={{ transformStyle: "preserve-3d" }}>
          
          {/* Background Poster Asset */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ transform: "translateZ(-20px) scale(1.1)" }}>
            <img
              src={coverImg}
              alt="Cover"
              className="w-full h-full object-cover opacity-30 group-hover:opacity-40 filter brightness-50 contrast-115 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
          </div>

          {/* Top Row elements */}
          <div className="w-full flex justify-between items-center z-10" style={{ transform: "translateZ(30px)" }}>
            <div className="h-12 w-12 overflow-hidden rounded-xl bg-white p-2 border border-neutral-800/10 shadow-lg">
              <img src={item.logo} alt="Logo" className="h-full w-full object-contain" />
            </div>
            <span className="px-3 py-1 bg-neutral-950/80 border border-neutral-800/80 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest text-neutral-300">
              {item?.date}
            </span>
          </div>

          {/* Center Pop Trigger Link Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out" style={{ transform: "translateZ(50px) translateX(-50%) translateY(-50%)" }}>
            <div className="w-14 h-14 bg-white text-neutral-950 flex items-center justify-center rounded-full shadow-2xl transform scale-75 group-hover:scale-100 group-hover:rotate-12 transition-all duration-500">
              <FiExternalLink className="w-5 h-5" />
            </div>
          </div>

          {/* Bottom Specification Frame */}
          <div className="w-full space-y-2.5 z-10" style={{ transform: "translateZ(40px)" }}>
            <span className="text-[9px] uppercase tracking-[0.25em] font-black text-indigo-400">
              Academic Milestone
            </span>
            <h4 className="text-lg sm:text-xl font-black uppercase italic tracking-tight text-white leading-tight group-hover:text-indigo-100 transition-colors">
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