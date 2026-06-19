import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';
import { 
  FiMonitor, FiServer, FiDatabase, FiCpu, FiTool, FiGlobe 
} from 'react-icons/fi';

const icons = [
  FiMonitor, // Frontend
  FiServer,  // Backend
  FiDatabase, // Database
  FiCpu,     // AI/ML
  FiTool,    // Tools
  FiGlobe    // Deployment
];

const accentColors = [
  'text-blue-400 bg-blue-500/5 border-blue-500/10 hover:border-blue-400/40',
  'text-emerald-400 bg-emerald-500/5 border-emerald-500/10 hover:border-emerald-400/40',
  'text-cyan-400 bg-cyan-500/5 border-cyan-500/10 hover:border-cyan-400/40',
  'text-purple-400 bg-purple-500/5 border-purple-500/10 hover:border-purple-400/40',
  'text-amber-400 bg-amber-500/5 border-amber-500/10 hover:border-amber-400/40',
  'text-rose-400 bg-rose-500/5 border-rose-500/10 hover:border-rose-400/40'
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden bg-zinc-950/40 border-t border-zinc-900/50">
      
      {/* Decorative gradients */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-cyan-900/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-purple-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-accent font-bold mb-3"
          >
            05. Core Skills
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-100 mb-4"
          >
            Developer Tech Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-zinc-400"
          >
            My toolbox organized by layer, covering client libraries, endpoints, database schemas, and AI automation engines.
          </motion.p>
        </div>

        {/* Categories Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group, idx) => {
            const Icon = icons[idx] || FiMonitor;
            const accentClass = accentColors[idx] || 'text-primary border-primary/20 hover:border-primary/50';

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`p-6 rounded-xl border bg-zinc-900/10 dark:bg-zinc-950/20 backdrop-blur-md transition-all duration-300 ${accentClass} flex flex-col`}
              >
                {/* Group Title */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-zinc-200 font-sans tracking-wide">
                    {group.category}
                  </h3>
                </div>

                {/* Skills cloud pills */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 border border-zinc-850 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
