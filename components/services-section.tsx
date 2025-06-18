"use client"

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    console.log("Services section in view:", isInView);
  }, [isInView]);

  const services = [
    {
      title: "Recording",
      icon: "🎵",
      description: "Multi-track recording with world-class equipment and acoustic perfection.",
      features: ["Live Band Recording", "Overdubs & Layering", "Remote Collaboration", "MIDI Programming"],
      price: "From $150/hr",
      color: "purple"
    },
    {
      title: "Mixing",
      icon: "🎛️",
      description: "Transform your raw tracks into polished, radio-ready productions.",
      features: ["Analog & Digital Processing", "Spatial Audio", "Stem Preparation", "Mix Revisions"],
      price: "From $400/song",
      color: "cyan"
    },
    {
      title: "Mastering",
      icon: "💎",
      description: "Final polish and optimization for all playback systems and formats.",
      features: ["Loudness Optimization", "Format Delivery", "Vinyl Mastering", "Streaming Prep"],
      price: "From $200/song",
      color: "gold"
    },
    {
      title: "Production",
      icon: "🎹",
      description: "Full-service music production from concept to completion.",
      features: ["Arrangement", "Session Musicians", "Sound Design", "Creative Direction"],
      price: "Custom Quote",
      color: "purple"
    },
    {
      title: "Post Production",
      icon: "🎬",
      description: "Audio for film, TV, podcasts, and multimedia projects.",
      features: ["Dialogue Editing", "Sound Effects", "Music Scoring", "Audio Restoration"],
      price: "From $100/hr",
      color: "cyan"
    },
    {
      title: "Live Recording",
      icon: "🎪",
      description: "Capture the energy of live performances with mobile recording rigs.",
      features: ["On-Location Setup", "Multi-Camera Sync", "Live Streaming", "Concert Recording"],
      price: "From $800/day",
      color: "gold"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.175, 0.885, 0.32, 1.275]
      }
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'purple':
        return {
          border: 'border-studio-purple/30',
          gradient: 'from-studio-purple/20 to-studio-purple/5',
          shadow: 'hover:shadow-glow-purple',
          text: 'text-studio-purple'
        };
      case 'cyan':
        return {
          border: 'border-studio-cyan/30',
          gradient: 'from-studio-cyan/20 to-studio-cyan/5',
          shadow: 'hover:shadow-glow-cyan',
          text: 'text-studio-cyan'
        };
      case 'gold':
        return {
          border: 'border-studio-gold/30',
          gradient: 'from-studio-gold/20 to-studio-gold/5',
          shadow: 'hover:shadow-glow-gold',
          text: 'text-studio-gold'
        };
      default:
        return {
          border: 'border-studio-purple/30',
          gradient: 'from-studio-purple/20 to-studio-purple/5',
          shadow: 'hover:shadow-glow-purple',
          text: 'text-studio-purple'
        };
    }
  };

  return (
    <section id="services" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-studio-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-studio-cyan/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-studio-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Our Services</span>
          </h2>
          <p className="text-xl text-studio-white/70 max-w-3xl mx-auto">
            From initial recording to final master, we provide comprehensive audio services 
            to bring your musical vision to life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03,
                  rotate: 5
                }}
                className="perspective-container group cursor-pointer"
              >
                <div className={`card-3d glass-card p-8 h-full relative overflow-hidden border ${colorClasses.border} ${colorClasses.shadow} transition-all duration-500`}>
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon and Title */}
                    <div className="flex items-center mb-6">
                      <motion.div
                        className="text-5xl mr-4"
                        animate={{ rotate: [0, 15, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        {service.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-studio-white group-hover:text-gradient transition-all duration-300">
                          {service.title}
                        </h3>
                        <p className={`text-sm font-semibold ${colorClasses.text}`}>
                          {service.price}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-studio-white/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                          className="flex items-center space-x-3"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color === 'purple' ? 'from-studio-purple to-studio-cyan' : service.color === 'cyan' ? 'from-studio-cyan to-studio-gold' : 'from-studio-gold to-studio-purple'}`} />
                          <span className="text-studio-white/60 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`mt-8 w-full py-3 glass-card border ${colorClasses.border} rounded-xl text-studio-white font-semibold hover:bg-gradient-to-r ${service.color === 'purple' ? 'hover:from-studio-purple/20 hover:to-studio-cyan/20' : service.color === 'cyan' ? 'hover:from-studio-cyan/20 hover:to-studio-gold/20' : 'hover:from-studio-gold/20 hover:to-studio-purple/20'} transition-all duration-300`}
                      onClick={() => {
                        console.log(`Service selected: ${service.title}`);
                        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Get Quote
                    </motion.button>

                    {/* Hover Effect Line */}
                    <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${service.color === 'purple' ? 'from-studio-purple to-studio-cyan' : service.color === 'cyan' ? 'from-studio-cyan to-studio-gold' : 'from-studio-gold to-studio-purple'} group-hover:w-full transition-all duration-500`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Package Deals Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="glass-card p-8 lg:p-12 rounded-3xl border border-studio-purple/30">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gradient mb-4">
                Package Deals
              </h3>
              <p className="text-studio-white/70 text-lg">
                Save big with our comprehensive production packages
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Single Package",
                  description: "Complete single production",
                  includes: ["Recording", "Mixing", "Mastering"],
                  price: "$800",
                  savings: "Save $200"
                },
                {
                  name: "EP Package", 
                  description: "4-5 song extended play",
                  includes: ["Recording", "Mixing", "Mastering", "Artwork"],
                  price: "$2,800",
                  savings: "Save $600"
                },
                {
                  name: "Album Package",
                  description: "Full-length album production", 
                  includes: ["Recording", "Mixing", "Mastering", "Artwork", "Distribution"],
                  price: "$6,500",
                  savings: "Save $1,500"
                }
              ].map((packageItem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 rounded-2xl border border-studio-cyan/20 text-center group cursor-pointer"
                >
                  <h4 className="text-xl font-bold text-studio-white mb-2 group-hover:text-gradient transition-all duration-300">
                    {packageItem.name}
                  </h4>
                  <p className="text-studio-white/60 text-sm mb-4">
                    {packageItem.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {packageItem.includes.map((item, i) => (
                      <div key={i} className="text-studio-white/50 text-xs">
                        ✓ {item}
                      </div>
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-studio-cyan mb-1">
                    {packageItem.price}
                  </div>
                  <div className="text-studio-gold text-xs font-semibold">
                    {packageItem.savings}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;