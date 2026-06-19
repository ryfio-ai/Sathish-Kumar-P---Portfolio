import { useState, useEffect } from 'react';

export const useScrollSpy = (sectionIds: string[], offset = 100): string => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Find which section is currently active
      let currentActiveId = '';
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentActiveId = id;
          }
        }
      }

      // Fallback to first section if scrolled to top
      if (window.scrollY < 50 && sectionIds.length > 0) {
        currentActiveId = sectionIds[0];
      }

      // Check if user is at the bottom of the page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        currentActiveId = sectionIds[sectionIds.length - 1];
      }

      if (currentActiveId && currentActiveId !== activeId) {
        setActiveId(currentActiveId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset, activeId]);

  return activeId;
};
