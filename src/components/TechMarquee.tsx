import React from 'react';
import { 
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase, FaJsSquare 
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiFastapi, SiSupabase, SiAngular, SiPostgresql 
} from 'react-icons/si';
import { TbCpu } from 'react-icons/tb';

const techItems = [
  { name: 'React.js', icon: FaReact, color: 'text-blue-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-sky-500' },
  { name: 'JavaScript', icon: FaJsSquare, color: 'text-yellow-400' },
  { name: 'Python', icon: FaPython, color: 'text-blue-500' },
  { name: 'FastAPI', icon: SiFastapi, color: 'text-emerald-500' },
  { name: 'Supabase', icon: SiSupabase, color: 'text-emerald-400' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'Angular', icon: SiAngular, color: 'text-red-500' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
  { name: 'SQL', icon: FaDatabase, color: 'text-slate-400' },
  { name: 'Adaptive AI Agents', icon: TbCpu, color: 'text-purple-400' },
];

const TechMarquee: React.FC = () => {
  // Duplicate array twice to ensure seamless infinite looping
  const listItems = [...techItems, ...techItems, ...techItems];

  return (
    <section className="py-6 bg-zinc-950/80 border-y border-zinc-900/50 backdrop-blur-md overflow-hidden relative w-full">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }
        .marquee-container {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* Background radial glows for premium feeling */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

      <div className="relative flex items-center">
        <div className="marquee-container space-x-6">
          {listItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center space-x-2.5 px-4 py-2 rounded-full bg-zinc-900/40 border border-zinc-800/40 dark:bg-zinc-900/50 hover:border-primary/40 hover:bg-zinc-900 transition-all duration-300 select-none group cursor-pointer"
              >
                <Icon className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                <span className="text-sm font-semibold text-zinc-300 group-hover:text-zinc-100 transition-colors">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
