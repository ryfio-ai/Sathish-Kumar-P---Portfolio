import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolioData';
import { FiDownload, FiEye, FiFileText, FiLinkedin, FiGithub } from 'react-icons/fi';

const ResumeCTA: React.FC = () => {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-zinc-950/40 border-t border-zinc-900/50">
      
      {/* Background visual light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/10 dark:bg-zinc-900/5 backdrop-blur-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Info Details (Left) */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
              <FiFileText className="w-3.5 h-3.5" />
              <span>Full Portfolio Resume</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-100 tracking-tight">
              Looking for a Developer?
            </h2>
            
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-xl">
              Download my complete, printer-friendly curriculum vitae to review my academic performance, complete robotics research projects, and software design competencies.
            </p>

            <div className="flex items-center justify-center md:justify-start space-x-4 pt-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white p-2 border border-zinc-850 hover:border-zinc-700 bg-zinc-900/40 rounded-lg transition-colors"
                aria-label="Visit LinkedIn profile"
              >
                <FiLinkedin className="w-4.5 h-4.5" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-white p-2 border border-zinc-850 hover:border-zinc-700 bg-zinc-900/40 rounded-lg transition-colors"
                aria-label="Visit GitHub profile"
              >
                <FiGithub className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Action Trigger Buttons (Right) */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-4 w-full md:w-auto shrink-0">
            <a
              href="/Sathish_Kumar_P_Resume.pdf"
              download="Sathish_Kumar_P_Resume.pdf"
              className="px-6 py-3.5 bg-primary hover:bg-purple-600 text-white font-semibold rounded-xl flex items-center justify-center space-x-2.5 text-sm transition-all shadow-[0_0_20px_-5px_rgba(139,92,246,0.5)] w-full md:w-56"
            >
              <FiDownload className="w-4.5 h-4.5 animate-bounce" />
              <span>Download CV PDF</span>
            </a>
            
            <a
              href="/Sathish_Kumar_P_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 border border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-850 font-semibold rounded-xl flex items-center justify-center space-x-2.5 text-sm transition-all w-full md:w-56"
            >
              <FiEye className="w-4.5 h-4.5" />
              <span>View in Browser</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResumeCTA;
