import type { Config } from 'tailwindcss';

export default <Config>{
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6', // Electric Purple
        secondary: '#3B82F6', // Neon Blue
        accent: '#06B6D4', // Cyan
        zinc: {
          100: '#f4f4f5',
          400: '#a1a1aa',
          950: '#0a0a0a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
