"use client"

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const StudioShowcase = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    console.log("Studio showcase section in view:", isInView);
  }, [isInView]);

  const studioFeatures = [
    {
      title: "Control Room",
      description: "State-of-the-art mixing console with pristine acoustics",
      specs: ["SSL 9000J Console", "Genelec 1037C Monitors", "Acoustic Treatment"],
      image: "🎛️"
    },
    {
      title: "Live Room",
      description: "Spacious recording environment for full bands",
      specs: ["2000 sq ft Space", "Variable Acoustics", "Vintage Instruments"],
      image: "🎪"
    },
    {
      title: "Vocal Booth",
      description: "Isolated booth for pristine vocal recordings",
      specs: ["Neumann U87", "Avalon VT-737sp", "Perfect Isolation"],
      image: "🎤"
    },
    {
      title: "Mastering Suite",
      description: "Final polish in our dedicated mastering room",
      specs: ["Manley Massive Passive", "Tube-Tech CL1B", "PMC IB2S Monitors"],
      image: "💎"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
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

  return (
    <section id="studio" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-studio-purple/5 to-transparent" />
      
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-studio-cyan/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Studio Spaces</span>
          </h2>
          <p className="text-xl text-studio-white/70 max-w-3xl mx-auto">
            Every corner of our studio is designed for sonic excellence. 
            Explore the spaces where musical magic happens.
          </p>
        </motion.div>

        {/* Studio Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {studioFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                rotate: 5
              }}
              className="perspective-container group cursor-pointer"
              onMouseEnter={() => {
                console.log(`Studio feature hovered: ${feature.title}`);
                setActiveImageIndex(index);
              }}
            >
              <div className="card-3d glass-card p-8 h-full relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-studio-purple/10 to-studio-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="text-6xl mb-6 floating-element"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {feature.image}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-studio-white mb-4 group-hover:text-gradient transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-studio-white/70 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Specifications */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-studio-cyan mb-3">
                      Key Features:
                    </h4>
                    {feature.specs.map((spec, specIndex) => (
                      <motion.div
                        key={specIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.2 + specIndex * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-studio-purple to-studio-cyan" />
                        <span className="text-studio-white/60 text-sm">{spec}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-studio-purple to-studio-cyan group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Specs Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="glass-card p-8 rounded-3xl mx-auto max-w-4xl">
            <h3 className="text-2xl font-bold text-gradient mb-6">
              Technical Excellence
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: "192", unit: "kHz", label: "Sample Rate" },
                { number: "32", unit: "bit", label: "Bit Depth" },
                { number: "128", unit: "ch", label: "Input Channels" }
              ].map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-studio-white mb-2">
                    {spec.number}
                    <span className="text-studio-cyan text-2xl">{spec.unit}</span>
                  </div>
                  <div className="text-studio-white/60">{spec.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-studio-purple to-studio-cyan rounded-2xl text-white font-bold text-lg shadow-3d hover:shadow-glow-purple transition-all duration-300"
            onClick={() => {
              console.log("Tour studio button clicked");
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Schedule Studio Tour
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default StudioShowcase;