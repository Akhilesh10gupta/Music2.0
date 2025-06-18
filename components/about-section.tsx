"use client"

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    console.log("About section in view:", isInView);
  }, [isInView]);

  const teamMembers = [
    {
      name: "Marcus Rodriguez",
      role: "Founder & Lead Producer",
      description: "15+ years crafting chart-topping hits across multiple genres. Grammy-winning producer with a passion for sonic innovation.",
      image: "🎯",
      specialties: ["Hip-Hop", "R&B", "Pop"],
      achievements: "50+ Platinum Records"
    },
    {
      name: "Sarah Chen",
      role: "Mixing Engineer",
      description: "Master of the console with an ear for detail. Specializes in creating immersive soundscapes and pristine mixes.",
      image: "🎛️",
      specialties: ["Electronic", "Rock", "Ambient"],
      achievements: "200+ Mixed Albums"
    },
    {
      name: "James Thompson",
      role: "Mastering Engineer",
      description: "Final touch specialist ensuring every track sounds perfect across all playback systems and formats.",
      image: "💎",
      specialties: ["Mastering", "Restoration", "Vinyl"],
      achievements: "Billboard #1 Masters"
    },
    {
      name: "Luna Martinez",
      role: "Studio Manager",
      description: "The heartbeat of our studio operations. Ensures every session runs smoothly and artists feel at home.",
      image: "⭐",
      specialties: ["Operations", "Artist Relations", "Booking"],
      achievements: "99% Client Satisfaction"
    }
  ];

  const studioStats = [
    { number: "2008", label: "Studio Founded" },
    { number: "500+", label: "Artists Worked With" },
    { number: "2000+", label: "Songs Recorded" },
    { number: "50+", label: "Awards Won" },
    { number: "15", label: "Team Members" },
    { number: "24/7", label: "Studio Hours" }
  ];

  const studioValues = [
    {
      icon: "🎨",
      title: "Artistic Excellence",
      description: "We believe every artist deserves the highest quality production to bring their vision to life.",
      color: "purple"
    },
    {
      icon: "🤝",
      title: "Collaborative Spirit",
      description: "Music is a team effort. We work closely with artists to ensure their creative voice shines through.",
      color: "cyan"
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Constantly evolving with cutting-edge technology while respecting timeless musical traditions.",
      color: "gold"
    },
    {
      icon: "❤️",
      title: "Passion First",
      description: "Our love for music drives everything we do. It's not just business - it's our calling.",
      color: "purple"
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.175, 0.885, 0.32, 1.275]
      }
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'purple':
        return 'border-studio-purple/30 hover:shadow-glow-purple';
      case 'cyan':
        return 'border-studio-cyan/30 hover:shadow-glow-cyan';
      case 'gold':
        return 'border-studio-gold/30 hover:shadow-glow-gold';
      default:
        return 'border-studio-purple/30 hover:shadow-glow-purple';
    }
  };

  return (
    <section id="about" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 bg-studio-purple/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-60 h-60 bg-studio-cyan/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
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
            <span className="text-gradient">About SoundForge</span>
          </h2>
          <p className="text-xl text-studio-white/70 max-w-3xl mx-auto">
            Born from a passion for music and driven by innovation, SoundForge Studio has been 
            the creative home for artists seeking to push boundaries and create timeless music.
          </p>
        </motion.div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-20"
        >
          <div className="glass-card p-8 lg:p-12 rounded-3xl border border-studio-purple/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-studio-purple/10 via-transparent to-studio-cyan/10" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gradient mb-6">Our Story</h3>
                <div className="space-y-4 text-studio-white/70 leading-relaxed">
                  <p>
                    Founded in 2008 by Grammy-winning producer Marcus Rodriguez, SoundForge Studio 
                    began as a dream to create a space where artistic vision meets technical excellence. 
                    What started in a converted warehouse has evolved into Nashville's premier recording destination.
                  </p>
                  <p>
                    Over the years, we've had the privilege of working with emerging artists and established 
                    superstars alike, helping them craft songs that have topped charts, won awards, and 
                    touched millions of hearts worldwide.
                  </p>
                  <p>
                    Today, SoundForge stands as a testament to what's possible when passion meets precision, 
                    where every note matters, and where musical dreams become reality.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {studioStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="glass-card p-4 rounded-2xl text-center border border-studio-white/10"
                  >
                    <div className="text-2xl font-bold text-gradient mb-1">
                      {stat.number}
                    </div>
                    <div className="text-studio-white/60 text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold text-gradient text-center mb-12"
          >
            Our Values
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studioValues.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 5 }}
                className={`glass-card p-6 rounded-2xl border ${getColorClasses(value.color)} transition-all duration-500 group`}
              >
                <div className="card-3d text-center">
                  <motion.div
                    className="text-4xl mb-4"
                    animate={{ rotateY: [0, 15, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {value.icon}
                  </motion.div>
                  
                  <h4 className="text-lg font-semibold text-studio-white mb-3 group-hover:text-gradient transition-all duration-300">
                    {value.title}
                  </h4>
                  
                  <p className="text-studio-white/60 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Meet the Team */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold text-gradient text-center mb-12"
          >
            Meet the Team
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                className="glass-card p-6 rounded-2xl border border-studio-white/10 perspective-container group"
              >
                <div className="card-3d text-center">
                  <motion.div
                    className="text-5xl mb-4"
                    animate={{ rotateZ: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.7 }}
                  >
                    {member.image}
                  </motion.div>
                  
                  <h4 className="text-xl font-bold text-studio-white mb-2 group-hover:text-gradient transition-all duration-300">
                    {member.name}
                  </h4>
                  
                  <p className="text-studio-cyan text-sm mb-3 font-medium">
                    {member.role}
                  </p>
                  
                  <p className="text-studio-white/60 text-sm mb-4 leading-relaxed">
                    {member.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex flex-wrap justify-center gap-1 mb-3">
                      {member.specialties.map((specialty, specIndex) => (
                        <span key={specIndex} className="px-2 py-1 bg-studio-white/10 rounded text-xs text-studio-white/80">
                          {specialty}
                        </span>
                      ))}
                    </div>
                    
                    <div className="px-3 py-1 bg-gradient-to-r from-studio-gold/20 to-studio-gold/10 rounded-lg border border-studio-gold/30">
                      <span className="text-studio-gold text-xs font-medium">
                        {member.achievements}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <div className="glass-card p-8 lg:p-12 rounded-3xl border border-studio-purple/30">
            <h3 className="text-3xl font-bold text-gradient mb-6">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-studio-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Join the hundreds of artists who've trusted SoundForge with their musical vision. 
              Let's create your next masterpiece together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-studio-purple to-studio-cyan rounded-2xl text-white font-bold text-lg shadow-3d hover:shadow-glow-purple transition-all duration-300"
                onClick={() => {
                  console.log("Book session button clicked from about");
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book Your Session
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass-card border border-studio-cyan/30 rounded-2xl text-studio-white font-bold text-lg hover:bg-studio-cyan/20 transition-all duration-300"
                onClick={() => {
                  console.log("Learn more button clicked from about");
                  document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;