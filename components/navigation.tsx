"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* --------------------------------------------------
   Static nav items
   -------------------------------------------------- */
const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Artists", href: "#artists" },
  { name: "Contact", href: "#contact" },
] as const;

type NavItem = (typeof NAV_ITEMS)[number];

/* --------------------------------------------------
   Helper – smooth scroll
   -------------------------------------------------- */
const scrollToHash = (hash: string) => {
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* --------------------------------------------------
   Navigation component
   -------------------------------------------------- */
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  /* shadow on scroll */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll while mobile menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  /* handle nav click (desktop + mobile) */
  const handleNav = useCallback((href: string, isMobile = false) => {
    if (isMobile) {
      // close menu first, then scroll after exit animation (300 ms)
      setMenuOpen(false);
      setTimeout(() => scrollToHash(href), 320);
    } else {
      scrollToHash(href);
    }
  }, []);

  /* -------------------------------------------------- render */
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-card backdrop-blur-xl bg-studio-black/80 border-b border-studio-purple/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
            {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-studio-purple to-studio-cyan flex items-center justify-center">
              <span className="text-xl font-bold text-white">S</span>
            </div> */}
            <span className="text-2xl font-bold text-gradient">Sir Musiz Studio</span>
          </motion.div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="relative text-studio-white/80 hover:text-studio-white transition-colors duration-300 text-sm font-medium group cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(item.href);
                }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-studio-purple to-studio-cyan transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-3 bg-gradient-to-r from-studio-purple to-studio-cyan rounded-xl text-white font-semibold shadow-lg hover:shadow-glow-purple transition-all duration-300"
            onClick={() => handleNav("#contact")}
          >
            Book Studio
          </motion.button>

          {/* Burger */}
          <button
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
              className="w-6 h-0.5 bg-studio-white block" />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="w-6 h-0.5 bg-studio-white block" />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
              className="w-6 h-0.5 bg-studio-white block" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-card backdrop-blur-xl bg-studio-black/95 border-t border-studio-purple/20 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="block text-studio-white/80 hover:text-studio-white transition-colors duration-300 text-lg font-medium cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(item.href, true);
                  }}
                >
                  {item.name}
                </motion.a>
              ))}

              {/* CTA inside menu */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.1 }}
                className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-studio-purple to-studio-cyan rounded-xl text-white font-semibold shadow-lg"
                onClick={() => handleNav("#contact", true)}
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

