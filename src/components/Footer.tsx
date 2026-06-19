import React from 'react';
import { profile } from '../data/portfolioData';
import { FiArrowUpRight, FiHeart } from 'react-icons/fi';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-zinc-950 border-t border-zinc-900 text-zinc-500 font-mono text-xs select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Section: Copyright */}
        <div className="flex flex-col space-y-1.5 text-center md:text-left">
          <p className="text-zinc-400 font-semibold font-sans text-sm">
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="flex items-center justify-center md:justify-start">
            <span>Handcrafted with</span>
            <FiHeart className="w-3.5 h-3.5 mx-1 text-rose-500 animate-pulse" />
            <span>using React &amp; Tailwind.</span>
          </p>
        </div>

        {/* Center Section: System Status */}
        <div className="flex items-center space-x-2.5 px-4 py-2 border border-zinc-900 bg-zinc-900/20 rounded-full">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="w-2 h-2 rounded-full bg-emerald-500 absolute" />
          <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
            SYSTEM STATUS: ALL AGENTS OPERATIONAL | UPTIME 99.98%
          </span>
        </div>

        {/* Right Section: Core shortcuts */}
        <div className="flex items-center space-x-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 flex items-center space-x-1"
          >
            <span>GitHub</span>
            <FiArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 flex items-center space-x-1"
          >
            <span>LinkedIn</span>
            <FiArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
