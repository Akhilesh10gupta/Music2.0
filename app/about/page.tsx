"use client"

import { motion } from 'framer-motion';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import AboutSection from '../../components/about-section';

const AboutPage = () => {
  const timeline = [
    {
      year: "2008",
      title: "The Beginning",
      description: "Marcus Rodriguez founded SoundForge Studio in a converted warehouse with a vision to create Nashville's premier recording destination.",
      icon: "🏗️"
    },
    {
      year: "2010",
      title: "First Grammy Win",
      description: "Our first Grammy-winning production put SoundForge on the map as a world-class facility capable of creating chart-topping hits.",
      icon: "🏆"
    },
    {
      year: "2012",
      title: "Studio Expansion",
      description: "Doubled our space with the addition of a dedicated mastering suite and expanded our equipment inventory with vintage and modern gear.",
      icon: "🔧"
    },
    {
      year: "2015",
      title: "Digital Innovation",
      description: "Pioneered remote collaboration technology, allowing artists worldwide to connect and create together in real-time.",
      icon: "💻"
    },
    {
      year: "2018",
      title: "Industry Recognition",
      description: "Named 'Studio of the Year' by Pro Audio Review and expanded our team to include specialized mixing and mastering engineers.",
      icon: "⭐"
    },
    {
      year: "2020",
      title: "Virtual Sessions",
      description: "Adapted to global challenges by perfecting remote recording techniques, keeping music creation alive during unprecedented times.",
      icon: "🌐"
    },
    {
      year: "2022",
      title: "Sustainability Initiative",
      description: "Launched green studio practices, becoming carbon-neutral through renewable energy and eco-friendly operations.",
      icon: "🌱"
    },
    {
      year: "2024",
      title: "Next Generation",
      description: "Continuing to push boundaries with AI-assisted mixing, immersive audio production, and cutting-edge recording technologies.",
      icon: "🚀"
    }
  ];

  const achievements = [
    {
      category: "Awards & Recognition",
      items: [
        "15x Grammy Award Winning Productions",
        "Studio of the Year - Pro Audio Review (2018, 2020, 2022)",
        "Best Recording Studio - Nashville Scene (2019-2024)",
        "TEC Award for Outstanding Technical Achievement (2021)",
        "Music Industry Hall of Fame Induction (2023)"
      ]
    },
    {
      category: "Chart Success",
      items: [
        "200+ Billboard Hot 100 Entries",
        "50+ #1 Singles Produced",
        "500+ Platinum & Multi-Platinum Certifications",
        "25+ Albums Debuted at #1",
        "2 Billion+ Streams Across All Platforms"
      ]
    },
    {
      category: "Industry Impact",
      items: [
        "500+ Artists Recorded",
        "2000+ Songs Produced",
        "100+ Sync Placements in Film & TV",
        "50+ Educational Workshops Hosted",
        "25+ Emerging Artists Scholarships Awarded"
      ]
    }
  ];

  const certifications = [
    { name: "Dolby Atmos Certified", icon: "🔊" },
    { name: "Sony 360 Reality Audio", icon: "🎧" },
    { name: "MQA Certified Studio", icon: "💎" },
    { name: "AES Professional Member", icon: "🎼" },
    { name: "RIAA Gold Partner", icon: "🥇" },
    { name: "Green Studio Certified", icon: "🌿" }
  ];

  return (
    <div className="min-h-screen bg-studio-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-studio-purple/20 via-transparent to-studio-cyan/10" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Our Story</span>
            </h1>
            <p className="text-xl text-studio-white/70 max-w-4xl mx-auto leading-relaxed">
              From humble beginnings in a converted warehouse to becoming Nashville's premier recording destination, 
              SoundForge Studio has been at the forefront of musical innovation for over 15 years. 
              Our journey is one of passion, dedication, and an unwavering commitment to artistic excellence.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="glass-card p-8 lg:p-12 rounded-3xl border border-studio-purple/30 mb-20"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gradient mb-6">Our Mission</h2>
              <p className="text-xl text-studio-white/80 leading-relaxed max-w-4xl mx-auto">
                "To provide artists with an inspiring environment where creativity flourishes, technical excellence meets 
                artistic vision, and every song has the potential to touch hearts and change lives. We believe that great 
                music deserves great production, and every artist deserves to hear their vision realized at its highest potential."
              </p>
              <div className="mt-8 text-studio-cyan font-semibold">
                - Marcus Rodriguez, Founder & Lead Producer
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gradient mb-6">Our Journey</h2>
            <p className="text-xl text-studio-white/70 max-w-3xl mx-auto">
              Every milestone in our story represents growth, innovation, and a deeper commitment to musical excellence.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-studio-purple via-studio-cyan to-studio-gold"></div>
            
            {timeline.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="glass-card p-6 rounded-2xl border border-studio-white/10">
                    <div className="text-3xl mb-4">{event.icon}</div>
                    <div className="text-2xl font-bold text-gradient mb-2">{event.year}</div>
                    <h3 className="text-xl font-semibold text-studio-white mb-3">{event.title}</h3>
                    <p className="text-studio-white/70 leading-relaxed">{event.description}</p>
                  </div>
                </div>
                
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-studio-purple to-studio-cyan rounded-full border-4 border-studio-black"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-studio-purple/5 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gradient mb-6">Achievements & Recognition</h2>
            <p className="text-xl text-studio-white/70 max-w-3xl mx-auto">
              Our success is measured not just in awards, but in the impact our music has made on artists and audiences worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {achievements.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-card p-8 rounded-2xl border border-studio-white/10"
              >
                <h3 className="text-xl font-bold text-gradient mb-6">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-studio-purple to-studio-cyan mt-2 flex-shrink-0" />
                      <span className="text-studio-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass-card p-8 rounded-2xl border border-studio-cyan/20"
          >
            <h3 className="text-2xl font-bold text-gradient text-center mb-8">Professional Certifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 glass-card border border-studio-white/10 rounded-xl"
                >
                  <div className="text-2xl mb-2">{cert.icon}</div>
                  <div className="text-studio-white/80 text-sm font-medium">{cert.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section Component */}
      <AboutSection />

      <Footer />
    </div>
  );
};

export default AboutPage;