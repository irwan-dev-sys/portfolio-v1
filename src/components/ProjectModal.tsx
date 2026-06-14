import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface ProjectModalProps {
  project: any;
  labels: any;
  onClose: () => void;
}

export default function ProjectModal({ project, labels, onClose }: ProjectModalProps) {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project || !project.modalDetails) return null;

  const { modalDetails } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, type: "spring", bounce: 0, ease: "easeOut" }}
        className="relative flex flex-col w-full max-w-2xl max-h-full bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header (Sticky) */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-slate-700 bg-slate-800/95 backdrop-blur">
          <h2 id="modal-title" className="text-xl font-bold text-slate-200 pr-8">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 text-slate-400 hover:text-slate-200 transition-colors bg-slate-800 rounded-full hover:bg-slate-700"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto">
          {/* Status Badge */}
          {modalDetails.status && (
            <div className="mb-8">
              <span className="inline-flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300 ring-1 ring-inset ring-teal-400/20">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-2 animate-pulse"></span>
                {modalDetails.status}
              </span>
            </div>
          )}

          <div className="space-y-8">
            {/* Overview */}
            {modalDetails.overview && (
              <section>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-3">
                  {labels?.overview || "Overview"}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                  {modalDetails.overview}
                </p>
              </section>
            )}

            {/* The Problem */}
            {modalDetails.problem && (
              <section>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-3">
                  {labels?.problem || "The Problem"}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                  {modalDetails.problem}
                </p>
              </section>
            )}

            {/* What Was Built */}
            {modalDetails.solution && (
              <section>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-3">
                  {labels?.solution || "What Was Built"}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                  {modalDetails.solution}
                </p>
              </section>
            )}

            {/* Impact */}
            {modalDetails.impact && modalDetails.impact.length > 0 && (
              <section>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-200 mb-3">
                  {labels?.impact || "Impact"}
                </h3>
                <ul className="list-disc list-outside ml-5 text-slate-400 leading-relaxed space-y-2 text-sm sm:text-base">
                  {modalDetails.impact.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Tech Stack */}
          {modalDetails.techStack && modalDetails.techStack.length > 0 && (
            <div className="mt-10 pt-6 border-t border-slate-700/50">
              <ul className="flex flex-wrap" aria-label="Technologies used">
                {modalDetails.techStack.map((tech: string, i: number) => (
                  <li className="mr-1.5 mt-2" key={i}>
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
