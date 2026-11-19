import React, { useEffect, useState } from "react";

export default function Preloader({ onComplete, brandName = "STUDIO." }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // 1. Listen for actual window/asset load completion
  useEffect(() => {
    if (document.readyState === "complete") {
      setIsLoaded(true);
    } else {
      const handleLoad = () => setIsLoaded(true);
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  // 2. Smooth 0% -> 100% counter synced with page load
  useEffect(() => {
    let animationFrameId;
    let current = 0;

    const tick = () => {
      if (!isLoaded) {
        // Ease steadily up to 90% while assets are still loading
        current += (90 - current) * 0.04;
      } else {
        // Accelerate smoothly to 100% once page is ready
        current += (100 - current) * 0.14;
        if (current > 99.4) current = 100;
      }

      setProgress(Math.floor(current));

      if (current < 100) {
        animationFrameId = requestAnimationFrame(tick);
      } else {
        // Pause briefly at 100%, then trigger curtain exit
        setTimeout(() => setIsExiting(true), 250);
        setTimeout(() => onComplete?.(), 1050);
      }
    };

    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isLoaded, onComplete]);

  // Lock body scroll while preloader is active
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const getStatusText = () => {
    if (progress < 35) return "INITIALIZING ENVIRONMENT";
    if (progress < 75) return "LOADING PORTFOLIO ASSETS";
    if (progress < 100) return "PREPARING EXPERIENCE";
    return "READY";
  };

  return (
    <div
      className={`fixed mt-5 inset-0 z-[9999] flex flex-col justify-between bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950 px-6 py-8 text-white transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] sm:px-12 sm:py-10 ${
        isExiting ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-neutral-800/50 blur-3xl" />
        <div className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-neutral-900/20" />
      </div>
      {/* Top Bar */}
      <div
        className={`flex items-center justify-between text-xs uppercase tracking-[0.25em] text-neutral-400 transition-opacity duration-300 ${
          isExiting ? "opacity-0" : "opacity-100"
        }`}
      ></div>

      {/* Center Kinetic Counter */}
      <div className="my-auto flex flex-col items-start sm:items-center">
        <div className="overflow-hidden">
          <div
            className={`flex items-baseline font-mono text-7xl font-bold tracking-tighter transition-transform duration-500 sm:text-9xl ${
              isExiting ? "-translate-y-full" : "translate-y-0"
            }`}
          >
            <span>{String(progress).padStart(2, "0")}</span>
            <span className="ml-1 text-3xl font-normal text-neutral-500 sm:text-5xl"></span>
          </div>
        </div>

        {/* Progress Bar */}
        <div
          className={`mt-6 h-[2px] w-full max-w-md overflow-hidden bg-neutral-800 transition-opacity duration-300 ${
            isExiting ? "opacity-0" : "opacity-100"
          }`}
        >
          <div
            className="h-full bg-white transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
