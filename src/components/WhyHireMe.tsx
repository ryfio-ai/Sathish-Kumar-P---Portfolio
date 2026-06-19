import React from 'react';
import { motion } from 'framer-motion';
import { whyHireMe } from '../data/portfolioData';
import { 
  FiZap, FiCpu, FiCode, FiDatabase, FiAward, FiUsers 
} from 'react-icons/fi';

const icons = [
  FiZap, // Fast MVP builder
  FiCode, // Strong frontend execution
  FiCpu, // AI-assisted development workflow
  FiDatabase, // API and database integration
  FiAward, // Real-world project experience
  FiUsers // Leadership in technical teams
];

const colors = [
  'text-amber-400 border-amber-500/20 bg-amber-500/5',
  'text-blue-400 border-blue-500/20 bg-blue-500/5',
  'text-purple-400 border-purple-500/20 bg-purple-500/5',
  'text-emerald-400 border-emerald-500/20 bg-emerald-500/5',
  'text-cyan-400 border-cyan-500/20 bg-cyan-500/5',
  'text-rose-400 border-rose-500/20 bg-rose-500/5'
];

const WhyHireMe: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-zinc-950/40">
      {/* Visual background divider grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-secondary font-bold mb-3"
          >
            Why Hire Me
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-100"
          >
            Engineered for Speed, AI, &amp; Execution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-zinc-400 mt-4 leading-relaxed"
          >
            I bridge the gap between production engineering principles and modern digital workflows to ship clean code rapidly.
          </motion.p>
        </div>

        {/* Recruiter Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyHireMe.map((item, idx) => {
            const Icon = icons[idx] || FiCode;
            const colorClass = colors[idx] || 'text-primary';
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 rounded-xl border border-zinc-800/40 bg-zinc-900/10 hover:border-zinc-700/60 dark:hover:bg-zinc-900/30 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-lg border ${colorClass} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-200 group-hover:text-zinc-100 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed pl-1">
                  {item.description}
                </p>
                {/* Visual hover glow light in card corners */}
                <div className="absolute -right-4 -bottom-4 w-12 h-12 rounded-full bg-purple-500/5 group-hover:bg-purple-500/10 blur-xl transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
