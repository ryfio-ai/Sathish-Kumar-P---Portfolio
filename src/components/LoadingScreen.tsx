import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLogs = [
  'Initializing Neural Interface...',
  'Connecting to agentic workspace...',
  'Loading model constraints...',
  'Fetching portfolios / Sathish Kumar P...',
  'Ready.'
];

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Progress interval
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setVisible(false), 300);
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + diff, 100);
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Log cycler based on progress threshold
    if (progress < 25) {
      setLogIndex(0);
    } else if (progress < 50) {
      setLogIndex(1);
    } else if (progress < 75) {
      setLogIndex(2);
    } else if (progress < 95) {
      setLogIndex(3);
    } else {
      setLogIndex(4);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-950 text-zinc-100 font-mono select-none px-4"
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="max-w-md w-full flex flex-col space-y-6">
            {/* Header / Brand */}
            <div className="flex items-center space-x-3">
              <span className="w-3.5 h-3.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#8B5CF6]" />
              <h1 className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">
                SATHISH_AGENTS_CORE
              </h1>
            </div>

            {/* Terminal Screen */}
            <div className="p-4 border border-zinc-800/80 bg-black/60 rounded-lg min-h-[140px] flex flex-col justify-end space-y-2 relative overflow-hidden">
              <div className="absolute top-2 right-2 text-xs text-zinc-600 font-semibold uppercase tracking-widest select-none">
                SYS_BOOT
              </div>
              <div className="text-zinc-500 text-xs">
                {`> antigravity -v 1.2.0`}
              </div>
              <div className="text-zinc-400 text-xs transition-opacity duration-300">
                {progress > 10 ? `[OK] Node dependencies bound` : ''}
              </div>
              <div className="text-zinc-400 text-xs transition-opacity duration-300">
                {progress > 40 ? `[OK] Local theme config cached` : ''}
              </div>
              <div className="text-zinc-400 text-xs transition-opacity duration-300">
                {progress > 70 ? `[OK] Portfolio details parsed` : ''}
              </div>
              
              {/* Boot status display */}
              <div className="text-primary text-sm font-semibold flex items-center">
                <span className="mr-2">&gt;</span>
                <span>{bootLogs[logIndex]}</span>
              </div>
            </div>

            {/* Progress Bar Container */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-zinc-500 font-semibold uppercase">
                <span>Core Initialization</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/50">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
