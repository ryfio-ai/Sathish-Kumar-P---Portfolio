import React from 'react';
import { Project } from '../types';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <div className="flex flex-col h-full rounded-xl border border-zinc-800/40 bg-zinc-900/10 dark:bg-zinc-900/5 backdrop-blur-sm overflow-hidden hover:border-zinc-700/60 transition-all duration-300 group select-none">
      <div className="p-6 flex flex-col flex-1">
        
        {/* Categories / Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.categories.map((cat, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-zinc-800/60 dark:bg-zinc-800/30 text-zinc-400 border border-zinc-800/50"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Project Meta */}
        <h3 className="text-lg font-bold text-zinc-100 mb-2 group-hover:text-primary transition-colors duration-300">
          {project.name}
        </h3>
        
        <p className="text-sm text-zinc-400 leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Action Triggers */}
        <div className="flex items-center justify-between pt-4 border-t border-zinc-900/60 mt-auto">
          <button
            onClick={() => onOpenModal(project)}
            className="flex items-center text-xs md:text-sm font-bold text-zinc-300 hover:text-white group/btn transition-colors"
          >
            <span>Explore Specs</span>
            <FiArrowRight className="w-4 h-4 ml-1.5 transform group-hover/btn:translate-x-1 transition-transform" />
          </button>

          {project.url && project.url !== '#' && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-cyan-400 p-1.5 transition-colors"
              aria-label={`Visit ${project.name} website`}
            >
              <FiExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
