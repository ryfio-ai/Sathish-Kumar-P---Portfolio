import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/portfolioData';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative overflow-hidden bg-zinc-950/20 border-t border-zinc-900/50">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 left-10 w-84 h-84 rounded-full bg-purple-900/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-84 h-84 rounded-full bg-blue-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-primary font-bold mb-3"
          >
            04. Experience
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-100 mb-4"
          >
            Employment &amp; Leadership
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-zinc-400"
          >
            Chronology of internships, freelance contract development, and technical organization leadership.
          </motion.p>
        </div>

        {/* Vertical Timeline Tree */}
        <div className="relative border-l-2 border-purple-500/20 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-10 group"
            >
              
              {/* Timeline indicator node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center text-zinc-500 group-hover:text-primary group-hover:border-primary/50 group-hover:shadow-[0_0_15px_-4px_rgba(139,92,246,0.6)] transition-all duration-300">
                <FiBriefcase className="w-3.5 h-3.5" />
              </div>

              {/* Timeline Card */}
              <div className="p-6 rounded-xl border border-zinc-800/40 bg-zinc-900/10 hover:border-zinc-800/80 hover:bg-zinc-900/20 transition-all duration-300">
                
                {/* Meta details */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-100 tracking-tight group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-cyan-400 font-semibold mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  
                  {/* Calendar badge */}
                  <div className="flex items-center text-xs text-zinc-500 font-mono font-semibold bg-zinc-900/60 border border-zinc-800/60 px-3 py-1 rounded-full w-fit">
                    <FiCalendar className="w-3.5 h-3.5 mr-1.5" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Bullet Points */}
                {exp.bulletPoints && exp.bulletPoints.length > 0 ? (
                  <ul className="list-none space-y-2 mt-4">
                    {exp.bulletPoints.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-sm text-zinc-400 flex items-start">
                        <span className="text-primary mr-2 select-none mt-0.5 font-bold">•</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
