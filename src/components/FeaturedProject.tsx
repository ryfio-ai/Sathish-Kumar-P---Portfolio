import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { FiPlay, FiGithub, FiExternalLink, FiCpu, FiCheckCircle } from 'react-icons/fi';

const FeaturedProject: React.FC = () => {
  const featuredProjects = projects.filter(p => p.featured);
  if (featuredProjects.length === 0) return null;

  return (
    <section id="featured" className="py-20 md:py-28 relative overflow-hidden bg-zinc-950/20 border-t border-zinc-900/50">
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center md:text-left mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-primary font-bold mb-3"
          >
            02. Featured Projects
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-100"
          >
            Major Works & Case Studies
          </motion.h2>
        </div>

        {/* Featured Projects Grid */}
        <div className="space-y-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl border border-zinc-800/80 bg-zinc-900/10 dark:bg-zinc-900/5 backdrop-blur-md p-6 md:p-10 hover:border-zinc-700/80 transition-all duration-300"
            >
              {/* Project Info (Left) */}
              <div className="lg:col-span-5 flex flex-col space-y-6">
                {/* Badges */}
                {project.badges && project.badges.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2">
                    {project.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                          badge === 'Current Major Work'
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                            : badge === 'Live Product'
                            ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                            : 'bg-primary/10 text-primary border-primary/20'
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}

                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-100 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-4">
                    {project.categories.join(' / ')}
                  </p>
                  <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.slice(0, 6).map((feat, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-zinc-300 text-xs md:text-sm">
                      <FiCheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-primary hover:bg-purple-600 text-white font-semibold rounded-lg flex items-center justify-center space-x-2 text-xs md:text-sm transition-all shadow-[0_0_15px_-3px_rgba(139,92,246,0.4)]"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    <span>Visit Live Site</span>
                  </a>
                  {project.caseStudy && (
                    <button
                      onClick={() => {
                        // This will be handled by the Projects component's modal
                        const event = new CustomEvent('openCaseStudy', { detail: project });
                        window.dispatchEvent(event);
                      }}
                      className="px-5 py-2.5 border border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800/80 font-semibold rounded-lg flex items-center justify-center space-x-2 text-xs md:text-sm transition-all"
                    >
                      <FiPlay className="w-4 h-4" />
                      <span>View Case Study</span>
                    </button>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 border border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800/80 font-semibold rounded-lg flex items-center justify-center space-x-2 text-xs md:text-sm transition-all"
                    >
                      <FiGithub className="w-4 h-4" />
                      <span>GitHub Repo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Project Visual (Right) - Different for each project */}
              <div className="lg:col-span-7 w-full border border-zinc-800/60 bg-black/60 rounded-xl overflow-hidden shadow-2xl relative select-none">
                {project.id === 'proj-modliq' ? (
                  // Modliq ML Dashboard UI
                  <>
                    <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
                      <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-rose-500" />
                        <span className="w-3 h-3 rounded-full bg-amber-500" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500" />
                        <span className="text-[11px] font-mono text-zinc-500 ml-2">modliq_workspace_v1.0.0</span>
                      </div>
                      <div className="flex items-center space-x-1.5 text-xs text-primary font-mono font-semibold uppercase">
                        <FiCpu className="w-3.5 h-3.5" />
                        <span>ACTIVE_AGENT</span>
                      </div>
                    </div>

                    <div className="p-4 md:p-6 space-y-5 font-mono text-xs text-zinc-400">
                      <div className="border border-dashed border-zinc-800 p-4 rounded-lg bg-zinc-900/20">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-zinc-300 font-bold text-xs">Dataset: heart_disease_clean.csv</span>
                          <span className="text-[10px] text-emerald-400 uppercase font-bold">LOADED</span>
                        </div>
                        <div className="grid grid-cols-4 gap-1.5 text-[10px]">
                          <div className="bg-zinc-900 p-1.5 border border-zinc-800 rounded">Age: int64</div>
                          <div className="bg-zinc-900 p-1.5 border border-zinc-800 rounded">Chol: float64</div>
                          <div className="bg-zinc-900 p-1.5 border border-zinc-800 rounded">MaxHR: float64</div>
                          <div className="bg-zinc-900 p-1.5 border border-zinc-800 rounded">Target: int64</div>
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-zinc-300 font-bold">Training: Random Forest Classifier</span>
                          <span className="text-primary font-bold">Epoch 24/50</span>
                        </div>
                        <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/50">
                          <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 w-[68%]" />
                        </div>
                        <div className="flex justify-between text-[10px] text-zinc-500">
                          <span>Loss: 0.142</span>
                          <span>Accuracy: 92.4%</span>
                          <span>Time: 00:04s</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="bg-zinc-900/60 border border-zinc-800 p-3 rounded-lg flex flex-col justify-center">
                          <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Accuracy</span>
                          <span className="text-base md:text-lg font-bold text-emerald-400 mt-1">94.82%</span>
                        </div>
                        <div className="bg-zinc-900/60 border border-zinc-800 p-3 rounded-lg flex flex-col justify-center">
                          <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Precision</span>
                          <span className="text-base md:text-lg font-bold text-primary mt-1">93.15%</span>
                        </div>
                        <div className="bg-zinc-900/60 border border-zinc-800 p-3 rounded-lg flex flex-col justify-center">
                          <span className="text-[10px] text-zinc-500 uppercase tracking-widest">F1-Score</span>
                          <span className="text-base md:text-lg font-bold text-cyan-400 mt-1">93.98%</span>
                        </div>
                      </div>
                    </div>
                  </>
                ) : project.id === 'proj-thiranoli' ? (
                  // ThiranOli EdTech Dashboard UI
                  <>
                    <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
                      <div className="flex items-center space-x-2">
                        <span className="w-3 h-3 rounded-full bg-rose-500" />
                        <span className="w-3 h-3 rounded-full bg-amber-500" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500" />
                        <span className="text-[11px] font-mono text-zinc-500 ml-2">thiranoli_admin_dashboard</span>
                      </div>
                      <div className="flex items-center space-x-1.5 text-xs text-emerald-400 font-mono font-semibold uppercase">
                        <FiCpu className="w-3.5 h-3.5" />
                        <span>LIVE_PLATFORM</span>
                      </div>
                    </div>

                    <div className="p-4 md:p-6 space-y-5 font-mono text-xs text-zinc-400">
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-zinc-900/60 border border-zinc-800 p-3 rounded-lg flex flex-col justify-center">
                          <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Active Students</span>
                          <span className="text-base md:text-lg font-bold text-emerald-400 mt-1">1,247</span>
                        </div>
                        <div className="bg-zinc-900/60 border border-zinc-800 p-3 rounded-lg flex flex-col justify-center">
                          <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Verified Trainers</span>
                          <span className="text-base md:text-lg font-bold text-primary mt-1">89</span>
                        </div>
                        <div className="bg-zinc-900/60 border border-zinc-800 p-3 rounded-lg flex flex-col justify-center">
                          <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Active Courses</span>
                          <span className="text-base md:text-lg font-bold text-cyan-400 mt-1">156</span>
                        </div>
                      </div>

                      <div className="border border-zinc-800 p-4 rounded-lg bg-zinc-900/20">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-zinc-300 font-bold text-xs">Recent Trainer Applications</span>
                          <span className="text-[10px] text-amber-400 uppercase font-bold">PENDING: 12</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-[10px] bg-zinc-900 p-2 rounded border border-zinc-800">
                            <span className="text-zinc-300">Dr. R. Kumar - Mathematics</span>
                            <span className="text-amber-400 font-bold">PENDING</span>
                          </div>
                          <div className="flex justify-between items-center text-[10px] bg-zinc-900 p-2 rounded border border-zinc-800">
                            <span className="text-zinc-300">S. Priya - Physics</span>
                            <span className="text-emerald-400 font-bold">VERIFIED</span>
                          </div>
                          <div className="flex justify-between items-center text-[10px] bg-zinc-900 p-2 rounded border border-zinc-800">
                            <span className="text-zinc-300">M. Rajesh - Chemistry</span>
                            <span className="text-emerald-400 font-bold">VERIFIED</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-zinc-300 font-bold">Learning Path Completion</span>
                          <span className="text-primary font-bold">78% Avg</span>
                        </div>
                        <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/50">
                          <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 w-[78%]" />
                        </div>
                        <div className="flex justify-between text-[10px] text-zinc-500">
                          <span>Completed: 972</span>
                          <span>In Progress: 275</span>
                          <span>Not Started: 89</span>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  // Default placeholder for other featured projects
                  <div className="p-8 flex items-center justify-center h-64">
                    <span className="text-zinc-500 text-sm">Project Preview</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
