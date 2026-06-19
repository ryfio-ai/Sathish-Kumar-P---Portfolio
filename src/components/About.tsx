import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolioData';
import { 
  TbBrain, TbLayoutDashboard, TbRocket, TbDatabase, TbCode, TbCpu 
} from 'react-icons/tb';

const icons = [
  TbBrain, // AI Product Development
  TbCode, // Full Stack Engineering
  TbRocket, // Startup MVP Building
  TbCpu, // Adaptive AI Agents
  TbLayoutDashboard, // Dashboards & Automation
  TbDatabase // API & Database Integration
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden bg-zinc-950/20">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-purple-900/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-cyan-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-primary font-bold mb-3"
          >
            01. Background
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-100 mb-6"
          >
            Engineering Adaptive AI &amp; Web Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base md:text-lg text-zinc-400 leading-relaxed"
          >
            {profile.bio}
          </motion.p>
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.aboutHighlights.map((highlight, idx) => {
            const Icon = icons[idx] || TbCode;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="p-6 rounded-xl border border-zinc-800/40 bg-zinc-900/30 dark:bg-zinc-900/20 backdrop-blur-md hover:border-primary/40 hover:bg-zinc-900/50 hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.3)] transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-zinc-800/60 border border-zinc-700/40 flex items-center justify-center text-primary group-hover:text-cyan-400 group-hover:bg-primary/10 transition-colors duration-300 mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-zinc-200 group-hover:text-zinc-100 transition-colors mb-3">
                  {highlight.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {highlight.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Education Callout */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-2xl border border-zinc-800/40 bg-zinc-900/10 dark:bg-zinc-950/20 backdrop-blur-lg flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex-1">
            <h4 className="text-xs uppercase font-bold tracking-widest text-cyan-400 mb-2">Education &amp; Institution</h4>
            <h3 className="text-xl font-bold text-zinc-100">PSG College of Technology</h3>
            <p className="text-sm text-zinc-400 mt-1">Bachelor of Engineering in Production Engineering (2022 – 2026)</p>
          </div>
          <div className="flex items-center space-x-6 text-center md:text-right">
            <div>
              <div className="text-3xl font-extrabold text-primary text-glow-purple">6.8</div>
              <div className="text-xs uppercase font-bold tracking-wider text-zinc-500 mt-1">CGPA</div>
            </div>
            <div className="w-[1px] h-10 bg-zinc-800" />
            <div>
              <div className="text-xl font-bold text-zinc-100">Coimbatore</div>
              <div className="text-xs uppercase font-bold tracking-wider text-zinc-500 mt-1">Tamil Nadu, India</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
