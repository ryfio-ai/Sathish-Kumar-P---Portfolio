import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { FiSearch, FiLayers, FiFolder } from 'react-icons/fi';

const categories = ['All', 'Full Stack', 'AI/ML', 'Product', 'Web', 'Robotics'];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Filter projects by both category and search query
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      // Category matching
      const matchesCategory =
        selectedCategory === 'All' ||
        project.categories.some(cat => cat.toLowerCase() === selectedCategory.toLowerCase());

      // Search matching
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.features.some(feat => feat.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden bg-zinc-950/40 border-t border-zinc-900/50">
      
      {/* Background radial glows */}
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-blue-900/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-cyan-900/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-accent font-bold mb-3"
          >
            03. Case Studies
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-100 mb-4"
          >
            Projects Sandbox
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-zinc-400 max-w-2xl mx-auto"
          >
            Explore my work spanning machine learning, responsive SaaS frontends, industrial automation prototypes, and campus systems.
          </motion.p>
        </div>

        {/* Filter Controls (Category pills + Search bar) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          
          {/* Category buttons */}
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold border transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-primary border-primary text-white shadow-[0_0_15px_-4px_rgba(139,92,246,0.5)]'
                    : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative max-w-md w-full md:w-80 shrink-0">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search sandbox..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-zinc-900/40 border border-zinc-800 rounded-xl text-xs md:text-sm text-zinc-100 placeholder-zinc-500 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map(project => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard
                    project={project}
                    onOpenModal={setActiveProject}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            // Premium Empty State
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="py-16 text-center border border-dashed border-zinc-850 rounded-xl bg-zinc-900/10 max-w-xl mx-auto flex flex-col items-center space-y-4"
            >
              <div className="p-4 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-500 flex items-center justify-center">
                <FiFolder className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-zinc-300">No projects found</h3>
              <p className="text-xs md:text-sm text-zinc-500 max-w-xs leading-relaxed">
                No sandbox items match "{searchQuery}" under "{selectedCategory}". Reset filters or search term to try again.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-zinc-900 hover:bg-zinc-850 border border-zinc-850 text-xs font-bold text-zinc-300 rounded-lg transition-colors"
              >
                Clear Search &amp; Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project detail modal */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </section>
  );
};

export default Projects;
