import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-4 right-4 md:right-8 z-50">
      <motion.button
        onClick={toggleTheme}
        className="p-3 rounded-full border border-gray-200/50 dark:border-zinc-800/50 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md text-gray-800 dark:text-zinc-100 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center focus:outline-none"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        aria-label="Toggle dark/light theme"
      >
        <motion.div
          initial={false}
          animate={{ rotate: theme === 'dark' ? 180 : 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {theme === 'dark' ? (
            <FiSun className="w-5 h-5 text-yellow-400 text-glow-purple" />
          ) : (
            <FiMoon className="w-5 h-5 text-indigo-600" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default ThemeToggle;
