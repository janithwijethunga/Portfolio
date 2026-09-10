import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ isOpen, onClose, category }) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !category) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 mt-8 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-6xl h-full bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden flex flex-col shadow-[0_50px_100px_rgba(0,0,0,0.9)]"
        >
          
          {/* Modal Header */}
          <div className="p-6 md:p-7 border-b border-neutral-800 flex justify-between items-center bg-neutral-900/50 backdrop-blur-sm sticky top-0 z-10">
            <div>
              <p className="text-xs font-mono tracking-widest uppercase font-bold text-indigo-400">
                {category.fullName}
              </p>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mt-1">
                {category.name} 
              </h2>
            </div>
            
            <button
              onClick={onClose}
              className="p-3 rounded-full bg-neutral-800 border border-neutral-700 hover:bg-white hover:text-neutral-950 hover:border-white transition-all text-sm font-bold uppercase tracking-widest cursor-pointer pointer-events-auto"
            >
              ✕ Close
            </button>
          </div>

          <div 
            data-lenis-prevent
            className="flex-1 overflow-y-auto p-6 md:p-4 space-y-8 select-text pointer-events-auto"
            style={{ 
              overflowY: 'auto', 
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-y'
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.projects.map((project) => (
                <div 
                  key={project.id} 
                  className="bg-neutral-950/50 border border-neutral-800/60 rounded-2xl p-5 flex flex-col justify-between hover:border-neutral-700/80 transition-colors group"
                >
                  <div className="space-y-4">
                    <div className="w-full h-48 rounded-xl overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 block">
                        {project.fullName}
                      </span>
                      <h4 className="text-xl font-black text-white uppercase tracking-tight">
                        {project.name}
                      </h4>
                    </div>

                    <p className="text-sm text-neutral-400 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 mt-4 border-t border-neutral-900/60">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span 
                          key={t} 
                          className="px-2.5 py-1 text-[9px] font-bold tracking-wider uppercase bg-neutral-900 border border-neutral-800 rounded-md text-neutral-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-300 hover:text-indigo-400 group/link transition-colors"
                    >
                      Explore on GitHub 
                      <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;