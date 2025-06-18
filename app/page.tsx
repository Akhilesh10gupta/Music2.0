"use client"

import { useEffect } from 'react';
import Navigation from '../components/navigation';
import HeroSection from '../components/hero-section';
import ProjectsSection from '../components/projects-section';
import AboutSection from '../components/about-section';
import ServicesSection from '../components/services-section';
import ArtistsSection from '../components/artists-section';
import ContactSection from '../components/contact-section';
import Footer from '../components/footer';

export default function Home() {
  useEffect(() => {
    console.log("SoundForge Music Studio website loaded");
    
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Initialize custom cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'fixed w-6 h-6 bg-gradient-to-br from-studio-purple to-studio-cyan rounded-full pointer-events-none z-50 mix-blend-difference opacity-50 transition-all duration-300';
    cursor.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(cursor);

    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', updateCursor);

    // Add hover effects for interactive elements
    const addHoverEffect = (selector: string) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          cursor.style.transform = 'translate(-50%, -50%) scale(2)';
          cursor.style.opacity = '0.8';
        });
        el.addEventListener('mouseleave', () => {
          cursor.style.transform = 'translate(-50%, -50%) scale(1)';
          cursor.style.opacity = '0.5';
        });
      });
    };

    // Apply hover effects to interactive elements
    setTimeout(() => {
      addHoverEffect('button');
      addHoverEffect('a');
      addHoverEffect('[role="button"]');
    }, 1000);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      if (cursor && cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-studio-black relative overflow-x-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Projects Showcase */}
        <ProjectsSection />
        
        {/* About Us */}
        <AboutSection />
        
        {/* Services */}
        <ServicesSection />
        
        {/* Artists Portfolio */}
        <ArtistsSection />
        
        {/* Contact */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Loading Screen Overlay (fades out) */}
      <div 
        id="loading-screen"
        className="fixed inset-0 bg-studio-black z-50 flex items-center justify-center transition-opacity duration-1000"
        style={{ 
          animation: 'fadeOut 2s ease-out 1s forwards',
          pointerEvents: 'none'
        }}
      >
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-studio-purple to-studio-cyan flex items-center justify-center mb-4 mx-auto animate-pulse-glow">
            <span className="text-3xl font-bold text-white">S</span>
          </div>
          <div className="text-2xl font-bold text-gradient typing-text">
            Sir Musiz Studio
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeOut {
          0% { opacity: 1; }
          100% { opacity: 0; visibility: hidden; }
        }
      `}</style>
    </div>
  );
}
