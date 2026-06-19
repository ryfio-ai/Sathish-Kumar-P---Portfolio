import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProject from './components/FeaturedProject';
import Projects from './components/Projects';
import ExperienceTimeline from './components/ExperienceTimeline';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import WhyHireMe from './components/WhyHireMe';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import TechMarquee from './components/TechMarquee';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Sathish Kumar P | Full Stack Developer &amp; AI Product Developer</title>
        <meta name="description" content="Portfolio of Sathish Kumar P, Full Stack Developer and AI Product Developer specializing in React, TypeScript, AI-assisted development, Adaptive AI Agents, dashboards, APIs, and startup MVPs." />
        <meta name="keywords" content="Sathish Kumar P, Full Stack Developer, AI Product Developer, React Developer, TypeScript Developer, Adaptive AI Agents, Prompt Engineering, Tamil Nadu Developer, PSG College of Technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* OpenGraph tags */}
        <meta property="og:title" content="Sathish Kumar P | Full Stack Developer &amp; AI Product Developer" />
        <meta property="og:description" content="Portfolio of Sathish Kumar P, Full Stack Developer and AI Product Developer specializing in modern web technologies and AI-driven products." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sathishkumarp.vercel.app" />
        <meta property="og:image" content="/assets/hero_illustration_1781859660363.png" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sathish Kumar P | Full Stack Developer &amp; AI Product Developer" />
        <meta name="twitter:description" content="Portfolio of Sathish Kumar P, Full Stack Developer and AI Product Developer specializing in modern web technologies and AI-driven products." />
        <meta name="twitter:image" content="/assets/hero_illustration_1781859660363.png" />
        
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      {/* Main Layout Container */}
      <div className="relative min-h-screen bg-zinc-950 text-zinc-100 selection:bg-primary/30 selection:text-white transition-colors duration-300">
        
        {/* Loading Entrance */}
        <LoadingScreen />

        {/* Global Utilities */}

        <Toaster position="bottom-center" />

        {/* Navigation */}
        <Navbar />

        {/* Sections in user requested order */}
        <main>
          <Hero />
          <TechMarquee />
          <WhyHireMe />
          <About />
          <FeaturedProject />
          <Projects />
          <ExperienceTimeline />
          <Skills />
          <Achievements />
          <ResumeCTA />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Scroll Utilities */}
        <ScrollToTop />

      </div>
    </HelmetProvider>
  );
};

export default App;
