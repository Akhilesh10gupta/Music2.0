"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    console.log("Navigation component mounted");
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Artists', href: '#artists' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-card backdrop-blur-xl bg-studio-black/80 border-b border-studio-purple/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-studio-purple to-studio-cyan flex items-center justify-center">
              <span className="text-xl font-bold text-white">S</span>
            </div>
            <span className="text-2xl font-bold text-gradient">SoundForge</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="relative text-studio-white/80 hover:text-studio-white transition-colors duration-300 text-sm font-medium group"
                onClick={(e) => {
                  console.log(`Navigation clicked: ${item.name}`);
                  e.preventDefault();
                  const element = document.querySelector(item.href);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-studio-purple to-studio-cyan transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-3 bg-gradient-to-r from-studio-purple to-studio-cyan rounded-xl text-white font-semibold shadow-lg hover:shadow-glow-purple transition-all duration-300"
            onClick={() => {
              console.log("Book studio button clicked");
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book Studio
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
            onClick={() => {
              console.log("Mobile menu toggled");
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
          >
            <motion.span
              animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 6 : 0 }}
              className="w-6 h-0.5 bg-studio-white block transition-all"
            />
            <motion.span
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              className="w-6 h-0.5 bg-studio-white block transition-all"
            />
            <motion.span
              animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -6 : 0 }}
              className="w-6 h-0.5 bg-studio-white block transition-all"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-card backdrop-blur-xl bg-studio-black/95 border-t border-studio-purple/20"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="block text-studio-white/80 hover:text-studio-white transition-colors duration-300 text-lg font-medium"
                  onClick={(e) => {
                    console.log(`Mobile navigation clicked: ${item.name}`);
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    const element = document.querySelector(item.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-studio-purple to-studio-cyan rounded-xl text-white font-semibold shadow-lg"
                onClick={() => {
                  console.log("Mobile book studio button clicked");
                  setIsMobileMenuOpen(false);
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book Studio
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;