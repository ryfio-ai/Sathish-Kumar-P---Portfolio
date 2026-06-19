import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { profile } from '../data/portfolioData';
import { 
  FiArrowRight, FiDownload, FiMail, FiLinkedin, FiGithub, FiCpu 
} from 'react-icons/fi';

const rotatingTitles = [
  'AI Product Developer',
  'Full Stack Developer',
  'Adaptive AI Agents Enthusiast',
  'Startup MVP Builder'
];

const Hero: React.FC = () => {
  const [titleIdx, setTitleIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTitleIdx(prev => (prev + 1) % rotatingTitles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-[92vh] flex items-center justify-center relative overflow-hidden bg-zinc-950 pt-20">
      
      {/* Background Neon Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/10 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-cyan-400/10 blur-[140px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370c_1px,transparent_1px),linear-gradient(to_bottom,#1f29370c_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />

      {/* Background illustration */}
      <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-2/3 md:h-full opacity-10 md:opacity-20 pointer-events-none select-none z-0">
        <img
          src="/assets/hero_illustration_1781859660363.png"
          alt="Abstract neural topology model rendering"
          className="w-full h-full object-contain md:object-right-bottom scale-90 md:scale-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent md:bg-gradient-to-l md:from-transparent md:via-zinc-950 md:to-zinc-950" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full py-12 flex flex-col items-center md:items-start text-center md:text-left">
        
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/5 text-emerald-400 text-xs font-bold tracking-wide mb-8 w-fit"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{profile.status}</span>
        </motion.div>

        {/* Owner Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-100 font-sans mb-3"
        >
          {profile.name}
        </motion.h1>

        {/* Rotating Headline */}
        <div className="h-12 md:h-16 flex items-center justify-center md:justify-start mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={titleIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45 }}
              className="text-xl sm:text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400"
            >
              {rotatingTitles[titleIdx]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tagline / Pitch */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed mb-10"
        >
          I build fast, scalable, AI-powered web products from idea to production. Specialized in frontend interfaces, REST API design, and Agentic workflows.
        </motion.p>

        {/* Actions Triggers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-12"
        >
          <ScrollLink
            to="projects"
            smooth
            offset={-80}
            duration={500}
            className="px-6 py-3.5 bg-primary hover:bg-purple-600 text-white font-semibold rounded-xl flex items-center justify-center space-x-2 text-sm transition-all shadow-[0_0_20px_-5px_rgba(139,92,246,0.6)] cursor-pointer"
          >
            <span>Explore Work</span>
            <FiArrowRight className="w-4 h-4 ml-1" />
          </ScrollLink>
          
          <a
            href="/Sathish_Kumar_P_Resume.pdf"
            download="Sathish_Kumar_P_Resume.pdf"
            className="px-6 py-3.5 border border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800/80 font-semibold rounded-xl flex items-center justify-center space-x-2 text-sm transition-all"
          >
            <FiDownload className="w-4 h-4 mr-1.5" />
            <span>Download Resume</span>
          </a>

          <ScrollLink
            to="contact"
            smooth
            offset={-80}
            duration={500}
            className="px-6 py-3.5 border border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800/80 font-semibold rounded-xl flex items-center justify-center space-x-2 text-sm transition-all cursor-pointer"
          >
            <span>Message Me</span>
          </ScrollLink>
        </motion.div>

        {/* Social connections */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center space-x-6 text-zinc-500 border-t border-zinc-900/60 pt-6 w-full md:w-auto justify-center md:justify-start"
        >
          <span className="text-[10px] uppercase font-bold tracking-widest font-mono select-none">
            SOCIALS
          </span>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-100 p-1.5 transition-colors"
            aria-label="GitHub profile link"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-100 p-1.5 transition-colors"
            aria-label="LinkedIn profile link"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-zinc-100 p-1.5 transition-colors"
            aria-label="Email contact trigger"
          >
            <FiMail className="w-5 h-5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
