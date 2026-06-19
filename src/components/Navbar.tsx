import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX, FiCpu } from 'react-icons/fi';
import { useScrollSpy } from '../hooks/useScrollSpy';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'featured', label: 'Featured' },
  { id: 'projects', label: 'Sandbox' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Milestones' },
  { id: 'contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeId = useScrollSpy(sections.map(s => s.id));

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-zinc-900/80 bg-zinc-950/75 dark:bg-zinc-950/75 backdrop-blur-md transition-colors duration-300">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Brand/Logo */}
        <ScrollLink
          to="hero"
          smooth
          duration={500}
          className="flex items-center space-x-2.5 cursor-pointer font-bold text-zinc-100 hover:text-white transition-colors"
        >
          <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary">
            <FiCpu className="w-5 h-5 text-glow-purple" />
          </div>
          <span className="text-base tracking-wide font-sans">
            Sathish Kumar P
          </span>
        </ScrollLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-widest font-mono">
          {sections.map(section => (
            <li key={section.id}>
              <ScrollLink
                to={section.id}
                smooth
                offset={-80}
                duration={500}
                className={`cursor-pointer transition-all duration-300 hover:text-primary ${
                  activeId === section.id 
                    ? 'text-primary text-glow-purple font-extrabold' 
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {section.label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-primary/45"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>

      </nav>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[65px] h-[calc(100vh-65px)] bg-zinc-950/95 backdrop-blur-xl border-t border-zinc-900/80 z-30 md:hidden flex flex-col justify-center px-8 py-12">
          <ul className="flex flex-col space-y-6 text-center font-mono text-sm uppercase tracking-widest font-bold">
            {sections.map(section => (
              <li key={section.id}>
                <ScrollLink
                  to={section.id}
                  smooth
                  offset={-80}
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`cursor-pointer block py-3 transition-colors ${
                    activeId === section.id 
                      ? 'text-primary font-extrabold text-glow-purple' 
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {section.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
