"use client"

import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Studio",
      links: [
        { name: "About Us", href: "#studio" },
        { name: "Equipment", href: "#studio" },
        { name: "Facilities", href: "#studio" },
        { name: "Location", href: "#contact" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Recording", href: "#services" },
        { name: "Mixing", href: "#services" },
        { name: "Mastering", href: "#services" },
        { name: "Production", href: "#services" }
      ]
    },
    {
      title: "Artists",
      links: [
        { name: "Portfolio", href: "#artists" },
        { name: "Testimonials", href: "#artists" },
        { name: "Success Stories", href: "#artists" },
        { name: "Featured Work", href: "#artists" }
      ]
    },
    {
      title: "Contact",
      links: [
        { name: "Book Session", href: "#contact" },
        { name: "Get Quote", href: "#contact" },
        { name: "Studio Tour", href: "#contact" },
        { name: "Support", href: "#contact" }
      ]
    }
  ];

  const socialLinks = [
    { icon: "🎵", name: "Spotify", href: "#" },
    { icon: "📸", name: "Instagram", href: "#" },
    { icon: "🎬", name: "YouTube", href: "#" },
    { icon: "💼", name: "LinkedIn", href: "#" },
    { icon: "🐦", name: "Twitter", href: "#" },
    { icon: "📘", name: "Facebook", href: "#" }
  ];

  return (
    <footer className="relative bg-gradient-to-t from-studio-black to-studio-gray-900 border-t border-studio-purple/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-studio-purple/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-studio-cyan/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="flex items-center space-x-3 mb-6">
                  {/* <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-studio-purple to-studio-cyan flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">S</span>
                  </div> */}
                  <span className="text-3xl font-bold text-gradient">Sir Musiz Studio</span>
                </div>
                
                <p className="text-studio-white/70 text-lg leading-relaxed mb-6">
                  Where musical dreams become reality. Professional recording studio 
                  with cutting-edge technology and unmatched expertise.
                </p>

                {/* Awards & Certifications */}
                <div className="flex flex-wrap gap-3">
                  {['🏆 musiz Studio', '⭐ 5-Star Rated', '🎵 Pro Audio'].map((badge, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-3 py-1 glass-card border border-studio-white/20 rounded-lg text-sm text-studio-white/80"
                    >
                      {badge}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter Signup */}
              
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section, sectionIndex) => (
                <motion.div
                  key={sectionIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                >
                  <h4 className="text-lg font-semibold text-studio-white mb-4">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <motion.a
                          href={link.href}
                          whileHover={{ x: 5 }}
                          className="text-studio-white/60 hover:text-studio-white transition-colors duration-300 text-sm"
                          onClick={(e) => {
                            console.log(`Footer link clicked: ${link.name}`);
                            e.preventDefault();
                            const element = document.querySelector(link.href);
                            element?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          {link.name}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-studio-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-studio-white/50 text-sm"
            >
              © {currentYear} SoundForge Studio. All rights reserved.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 glass-card border border-studio-white/20 rounded-lg flex items-center justify-center text-lg hover:shadow-glow-purple transition-all duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(`Social link clicked: ${social.name}`);
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center space-x-6 text-sm"
            >
              {['Privacy Policy', 'Terms of Service', 'Cookies'].map((legal, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -2 }}
                  className="text-studio-white/50 hover:text-studio-white transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(`Legal link clicked: ${legal}`);
                  }}
                >
                  {legal}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-studio-purple to-studio-cyan rounded-full flex items-center justify-center text-white text-xl shadow-3d hover:shadow-glow-purple transition-all duration-300 z-40"
          onClick={() => {
            console.log("Back to top clicked");
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          ↑
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;