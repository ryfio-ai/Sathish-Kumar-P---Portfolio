import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data/portfolioData';
import { FiAward, FiZap, FiStar } from 'react-icons/fi';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 md:py-28 relative overflow-hidden bg-zinc-950/20 border-t border-zinc-900/50">
      
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-10 w-72 h-72 rounded-full bg-purple-900/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-primary font-bold mb-3"
          >
            06. Milestones
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-100 mb-4"
          >
            Achievements &amp; Activities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-zinc-400"
          >
            A history of competitive robotics, hackathons, open laboratory projects, and campus leadership roles.
          </motion.p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, idx) => {
            // Give specific visual priorities to different achievements
            const isWinner = ach.title.toLowerCase().includes('first position') || ach.title.toLowerCase().includes('winner');
            const isRunnerUp = ach.title.toLowerCase().includes('runner-up') || ach.title.toLowerCase().includes('second position');

            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`p-6 rounded-xl border bg-zinc-900/10 dark:bg-zinc-900/5 backdrop-blur-sm hover:bg-zinc-900/30 transition-all duration-300 relative group flex flex-col justify-between ${
                  isWinner 
                    ? 'border-amber-500/20 hover:border-amber-500/40 shadow-[0_0_15px_-5px_rgba(245,158,11,0.15)]' 
                    : isRunnerUp
                    ? 'border-slate-400/20 hover:border-slate-400/40'
                    : 'border-zinc-850 hover:border-zinc-700/80'
                }`}
              >
                <div>
                  {/* Icon indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-lg border flex items-center justify-center ${
                      isWinner 
                        ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' 
                        : isRunnerUp
                        ? 'bg-slate-400/10 border-slate-400/20 text-slate-400'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-500 group-hover:text-primary group-hover:border-primary/20 transition-colors'
                    }`}>
                      {isWinner ? <FiAward className="w-5 h-5" /> : isRunnerUp ? <FiZap className="w-5 h-5" /> : <FiStar className="w-5 h-5" />}
                    </div>
                    {isWinner && (
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full select-none">
                        CHAMPION
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-zinc-200 group-hover:text-zinc-100 transition-colors tracking-wide mb-3">
                    {ach.title}
                  </h3>

                  {ach.description && (
                    <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                      {ach.description}
                    </p>
                  )}
                </div>

                <div className="absolute right-3 bottom-3 w-8 h-8 rounded-full bg-zinc-900/10 group-hover:scale-110 transition-transform pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
