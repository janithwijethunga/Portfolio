import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECT_CATEGORIES } from "../data/projects";

const createSlug = (name = "") =>
  name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const ProjectDetails = () => {
  const { projectName } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Flatten projects from PROJECT_CATEGORIES with their parent category info
  const allProjects = PROJECT_CATEGORIES.flatMap((category) =>
    (category.projects || []).map((proj) => ({
      ...proj,
      categoryName: category.name,
      categoryColor: category.color,
    }))
  );

  const project =
    allProjects.find((p) => createSlug(p.name) === projectName) ||
    location.state?.project;

  const [activeImage, setActiveImage] = useState(project?.image || "");

  // ONLY run when projectName changes (prevents scrolling to top on re-renders)
  useEffect(() => {
    window.scrollTo(0, 0);
    if (project?.image) {
      setActiveImage(project.image);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectName]);

  if (!project) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center gap-4">
        <p className="text-neutral-400 font-mono uppercase tracking-widest">
          Project not found
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2.5 rounded-full bg-indigo-500 text-neutral-950 text-xs font-black uppercase tracking-wider cursor-pointer"
        >
          Back to Portfolio
        </button>
      </div>
    );
  }

  const accentColor = project.categoryColor || "#6366f1";
  const hasGallery = project.imageArray && project.imageArray.length > 0;
  const marqueeImages = hasGallery
    ? [...project.imageArray, ...project.imageArray]
    : [];

  return (
    <div className="mt-10 min-h-screen bg-neutral-950 text-white selection:bg-indigo-500 selection:text-white pb-24">
      {/* Inline CSS for smooth GPU-accelerated marquee that pauses cleanly on hover */}
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translate3d(0%, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .animate-project-marquee {
          display: flex;
          width: max-content;
          animation: marqueeScroll 35s linear infinite;
        }
        .marquee-wrapper:hover .animate-project-marquee {
          animation-play-state: paused;
        }
      `}</style>

      {/* Top Sticky Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors cursor-pointer group"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform">
              ←
            </span>
            Back to Projects
          </button>

          <div className="flex items-center gap-3">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                style={{ backgroundColor: accentColor }}
                className="px-4 py-2 rounded-full hover:opacity-90 text-neutral-950 text-xs font-black uppercase tracking-wider transition-all"
              >
                Live Preview ↗
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-700 hover:border-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto px-6 md:pt-16 space-y-14">
        {/* Hero Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <div className="flex flex-wrap items-center gap-3">
            {project.categoryName && (
              <span
                style={{
                  color: accentColor,
                  borderColor: `${accentColor}50`,
                  backgroundColor: `${accentColor}15`,
                }}
                className="px-3 py-1 rounded-full border text-xs font-mono uppercase tracking-widest font-bold"
              >
                {project.categoryName}
              </span>
            )}

            {project.text1 && (
              <span className="px-3 py-1 rounded-full border border-neutral-700 text-neutral-300 text-xs font-mono uppercase tracking-widest font-bold">
                {project.text1}
              </span>
            )}
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none">
            {project.name}
          </h1>
        </motion.header>

        {/* Hero Showcase Image + Slow Moving Gallery Carousel */}
        {activeImage && (
          <div className="space-y-5">
            {/* Main Image Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-[0_30px_90px_rgba(0,0,0,0.8)] aspect-[16/9] max-h-[560px]"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  src={activeImage}
                  alt={project.name}
                  initial={{ opacity: 0.3, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.3 }}
                  transition={{ duration: 0.35 }}
                  className="w-full h-full object-contain"
                />
              </AnimatePresence>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
            </motion.div>

            {/* Slow-Moving Infinite Thumbnail Carousel */}
            {hasGallery && (
              <div className="marquee-wrapper relative overflow-hidden py-3 rounded-2xl border border-neutral-800/70 bg-neutral-900/40">
                {/* Edge Fade Masks */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-neutral-950 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-neutral-950 to-transparent" />

                <div className="animate-project-marquee gap-4 px-4">
                  {marqueeImages.map((imgUrl, index) => {
                    const isSelected = activeImage === imgUrl;
                    return (
                      <button
                        key={`${imgUrl}-${index}`}
                        type="button"
                        onClick={() => setActiveImage(imgUrl)}
                        style={{
                          borderColor: isSelected ? accentColor : "transparent",
                        }}
                        className={`relative h-20 sm:h-24 aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer flex-shrink-0 bg-neutral-950 ${
                          isSelected
                            ? "scale-105 opacity-100 shadow-lg"
                            : "opacity-55 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={imgUrl}
                          alt={`${project.name} preview ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Two-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-2">
          {/* Left 2 Columns: Project Overview & Optional Extra Fields from projects.js */}
          <div className="lg:col-span-2 space-y-10">
            <section className="space-y-4">
              <h2
                style={{ color: accentColor }}
                className="text-xs font-mono uppercase tracking-widest font-bold"
              >
                Overview
              </h2>
              <p className="text-neutral-300 leading-relaxed text-base md:text-lg font-light">
                {project.overview}
              </p>
            </section>

            {/* Renders only if you add `features` to a project in projects.js */}
            {project.features?.length > 0 && (
              <section className="space-y-6">
                <h2
                  style={{ color: accentColor }}
                  className="text-xs font-mono uppercase tracking-widest font-bold"
                >
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feat, i) => (
                    <div
                      key={i}
                      className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6 space-y-2"
                    >
                      <span
                        style={{ color: accentColor }}
                        className="text-xs font-mono"
                      >
                        0{i + 1}
                      </span>
                      <h3 className="text-base font-black uppercase tracking-tight text-white">
                        {feat.title}
                      </h3>
                      <p className="text-sm text-neutral-400 font-light leading-relaxed">
                        {feat.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column: Tech Stack & Links Sidebar */}
          <aside>
            <div className="bg-neutral-900/60 border border-neutral-800 rounded-3xl p-6 space-y-6 sticky top-24">
              {project.tech?.length > 0 && (
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold mb-4">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 text-xs font-bold tracking-wider uppercase bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-6 border-t border-neutral-800 space-y-3">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 px-5 rounded-xl bg-white text-neutral-950 hover:bg-neutral-200 font-black text-xs uppercase tracking-widest flex items-center justify-between transition-colors"
                  >
                    <span>Explore on GitHub</span>
                    <span>→</span>
                  </a>
                )}

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{ backgroundColor: accentColor }}
                    className="w-full py-3.5 px-5 rounded-xl hover:opacity-90 text-neutral-950 font-black text-xs uppercase tracking-widest flex items-center justify-between transition-opacity"
                  >
                    <span>Launch Live App</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;