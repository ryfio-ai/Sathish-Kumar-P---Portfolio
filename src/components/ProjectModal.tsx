import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { FiX, FiExternalLink, FiGithub, FiCheckCircle } from 'react-icons/fi';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Listen for escape key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-6 md:p-8 shadow-2xl z-10 text-zinc-100 scrollbar-thin"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-zinc-100 rounded-lg hover:bg-zinc-900 transition-colors"
              aria-label="Close modal"
            >
              <FiX className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="mb-6 pr-6">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.categories.map((cat, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-primary/10 text-primary border border-primary/20"
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-100 tracking-tight">
                {project.name}
              </h2>
            </div>

            {/* Content Body */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-2">Overview</h3>
                <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Features List */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-3">Key Features &amp; Workflow</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-sm text-zinc-300">
                        <FiCheckCircle className="w-4.5 h-4.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Case Study Sections */}
              {project.caseStudy && (
                <div className="space-y-6 pt-4 border-t border-zinc-900">
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-2">Problem</h3>
                    <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                      {project.caseStudy.problem}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-2">Solution</h3>
                    <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                      {project.caseStudy.solution}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-3">Key Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.caseStudy.keyFeatures.map((feat, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-sm text-zinc-300">
                          <FiCheckCircle className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-2">My Contribution</h3>
                    <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                      {project.caseStudy.myContribution}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-2">Impact</h3>
                    <p className="text-sm md:text-base text-zinc-300 leading-relaxed">
                      {project.caseStudy.impact}
                    </p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-zinc-900">
                {project.url && project.url !== '#' && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-primary hover:bg-purple-600 text-white font-semibold rounded-lg flex items-center justify-center space-x-2 text-sm transition-all"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    <span>Launch Live Site</span>
                  </a>
                )}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 border border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800/80 font-semibold rounded-lg flex items-center justify-center space-x-2 text-sm transition-all"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span>View GitHub</span>
                  </a>
                ) : (
                  <a
                    href="https://github.com/sathish126"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 border border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800/80 font-semibold rounded-lg flex items-center justify-center space-x-2 text-sm transition-all"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span>Find Code on Github</span>
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 font-semibold rounded-lg ml-auto text-sm transition-all border border-zinc-800/50"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
