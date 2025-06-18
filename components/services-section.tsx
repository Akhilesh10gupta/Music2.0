"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  useEffect(() => {
    console.log("Services section in view:", isInView);
  }, [isInView]);

  const services = [
    {
      title: "Recording",
      icon: "🎵",
      description:
        "Multi-track recording with world-class equipment and acoustic perfection.",
      features: [
        "Live Band Recording",
        "Overdubs & Layering",
        "Remote Collaboration",
        "MIDI Programming",
      ],
      price: "From $150/hr",
      color: "purple",
    },
    {
      title: "Mixing",
      icon: "🎛️",
      description:
        "Transform your raw tracks into polished, radio-ready productions.",
      features: [
        "Analog & Digital Processing",
        "Spatial Audio",
        "Stem Preparation",
        "Mix Revisions",
      ],
      price: "From $400/song",
      color: "cyan",
    },
    {
      title: "Mastering",
      icon: "💎",
      description:
        "Final polish and optimization for all playback systems and formats.",
      features: [
        "Loudness Optimization",
        "Format Delivery",
        "Vinyl Mastering",
        "Streaming Prep",
      ],
      price: "From $200/song",
      color: "gold",
    },
    {
      title: "Production",
      icon: "🎹",
      description:
        "Full-service music production from concept to completion.",
      features: [
        "Arrangement",
        "Session Musicians",
        "Sound Design",
        "Creative Direction",
      ],
      price: "Custom Quote",
      color: "purple",
    },
    {
      title: "Post Production",
      icon: "🎬",
      description:
        "Audio for film, TV, podcasts, and multimedia projects.",
      features: [
        "Dialogue Editing",
        "Sound Effects",
        "Music Scoring",
        "Audio Restoration",
      ],
      price: "From $100/hr",
      color: "cyan",
    },
    {
      title: "Live Recording",
      icon: "🎪",
      description:
        "Capture the energy of live performances with mobile recording rigs.",
      features: [
        "On-Location Setup",
        "Multi-Camera Sync",
        "Live Streaming",
        "Concert Recording",
      ],
      price: "From $800/day",
      color: "gold",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "purple":
        return {
          border: "border-studio-purple/30",
          gradient: "from-studio-purple/20 to-studio-purple/5",
          shadow: "hover:shadow-glow-purple",
          text: "text-studio-purple",
          hover: "hover:from-studio-purple/20 hover:to-studio-cyan/20",
        };
      case "cyan":
        return {
          border: "border-studio-cyan/30",
          gradient: "from-studio-cyan/20 to-studio-cyan/5",
          shadow: "hover:shadow-glow-cyan",
          text: "text-studio-cyan",
          hover: "hover:from-studio-cyan/20 hover:to-studio-gold/20",
        };
      case "gold":
        return {
          border: "border-studio-gold/30",
          gradient: "from-studio-gold/20 to-studio-gold/5",
          shadow: "hover:shadow-glow-gold",
          text: "text-studio-gold",
          hover: "hover:from-studio-gold/20 hover:to-studio-purple/20",
        };
      default:
        return {
          border: "border-white/10",
          gradient: "from-white/20 to-white/5",
          shadow: "",
          text: "text-white",
          hover: "hover:from-white/10 hover:to-white/5",
        };
    }
  };

  const parentVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-studio-black text-white relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-studio-purple/10 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-studio-cyan/10 blur-3xl rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-studio-gold/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-gradient mb-4">
            Our Services
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            From recording to mastering, we bring your ideas to life.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const color = getColorClasses(service.color);
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`glass-card p-8 rounded-2xl border ${color.border} ${color.shadow} group relative overflow-hidden transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] hover:scale-[1.025] hover:-translate-y-1`}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${color.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-3">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-gradient transition">
                        {service.title}
                      </h3>
                      <p className={`text-sm font-semibold ${color.text}`}>
                        {service.price}
                      </p>
                    </div>
                  </div>

                  <p className="text-white/70 text-sm mb-4">
                    {service.description}
                  </p>

                  <ul className="text-white/60 text-sm space-y-1 mb-6">
                    {service.features.map((f, i) => (
                      <li key={i}>• {f}</li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-2 rounded-lg border ${color.border} text-white font-semibold ${color.hover} transition`}
                    onClick={() =>
                      document
                        .querySelector("#contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Get Quote
                  </motion.button>

                  <div
                    className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${color.gradient} group-hover:w-full transition-all duration-500`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;