"use client"

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const ArtistsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeArtist, setActiveArtist] = useState(0);

  useEffect(() => {
    console.log("Artists section in view:", isInView);
  }, [isInView]);

  const artists = [
    {
      name: "Luna Eclipse",
      genre: "Electronic / Ambient",
      description: "Grammy-nominated producer creating ethereal soundscapes that blend electronic and organic elements.",
      achievement: "500M+ Streams",
      image: "🌙",
      color: "purple",
      quote: "SoundForge transformed my artistic vision into sonic reality. The team's expertise is unmatched."
    },
    {
      name: "The Midnight Collective", 
      genre: "Indie Rock",
      description: "Rising indie rock band known for their atmospheric sound and powerful live performances.",
      achievement: "Billboard Top 40",
      image: "🎸",
      color: "cyan",
      quote: "Recording at SoundForge was a game-changer. They captured our energy perfectly."
    },
    {
      name: "Maya Santos",
      genre: "R&B / Soul",
      description: "Soulful vocalist whose powerful voice and emotional depth captivate audiences worldwide.",
      achievement: "Multi-Platinum Artist",
      image: "👑",
      color: "gold",
      quote: "The vocal booth at SoundForge brings out the best in every performance. Pure magic."
    },
    {
      name: "Digital Dreams",
      genre: "Synthwave / Retrowave",
      description: "Duo creating nostalgic yet futuristic soundscapes that transport listeners to another dimension.",
      achievement: "Spotify Editorial",
      image: "🚀",
      color: "purple",
      quote: "SoundForge understood our retro-futuristic vision and helped us bring it to life."
    },
    {
      name: "Alex Chen",
      genre: "Film Score",
      description: "Composer creating emotionally resonant scores for major motion pictures and documentaries.",
      achievement: "Emmy Winner",
      image: "🎬",
      color: "cyan",
      quote: "The orchestral recording capabilities at SoundForge are world-class. Incredible space."
    },
    {
      name: "Neon Nights",
      genre: "Pop / Dance",
      description: "High-energy pop duo creating infectious dance tracks that dominate radio and streaming charts.",
      achievement: "300M+ Streams",
      image: "💫",
      color: "gold",
      quote: "SoundForge's production team helped us create our biggest hits. They get our vision."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
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
          border: 'border-studio-purple/40',
          gradient: 'from-studio-purple/30 to-studio-purple/10',
          shadow: 'hover:shadow-glow-purple',
          text: 'text-studio-purple'
        };
      case 'cyan':
        return {
          border: 'border-studio-cyan/40',
          gradient: 'from-studio-cyan/30 to-studio-cyan/10',
          shadow: 'hover:shadow-glow-cyan',
          text: 'text-studio-cyan'
        };
      case 'gold':
        return {
          border: 'border-studio-gold/40',
          gradient: 'from-studio-gold/30 to-studio-gold/10',
          shadow: 'hover:shadow-glow-gold',
          text: 'text-studio-gold'
        };
      default:
        return {
          border: 'border-studio-purple/40',
          gradient: 'from-studio-purple/30 to-studio-purple/10',
          shadow: 'hover:shadow-glow-purple',
          text: 'text-studio-purple'
        };
    }
  };

  return (
    <section id="artists" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Animated Background */}
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
            <span className="text-gradient">Artist Portfolio</span>
          </h2>
          <p className="text-xl text-studio-white/70 max-w-3xl mx-auto">
            Discover the incredible artists who've trusted us with their creative vision. 
            From Grammy winners to emerging talent, we're proud to be part of their journey.
          </p>
        </motion.div>

        {/* Featured Artist Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-16"
        >
          <div className="glass-card p-8 lg:p-12 rounded-3xl border border-studio-purple/30 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-studio-purple/10 via-transparent to-studio-cyan/10" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Featured Artist Info */}
              <div>
                <motion.div
                  className="text-8xl mb-6"
                  animate={{ rotateY: [0, 20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {artists[activeArtist].image}
                </motion.div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                  {artists[activeArtist].name}
                </h3>
                
                <p className="text-studio-cyan text-lg mb-4">
                  {artists[activeArtist].genre}
                </p>
                
                <p className="text-studio-white/70 text-lg leading-relaxed mb-6">
                  {artists[activeArtist].description}
                </p>
                
                <div className="flex items-center mb-6">
                  <div className="px-4 py-2 bg-gradient-to-r from-studio-gold/20 to-studio-gold/10 rounded-lg border border-studio-gold/30">
                    <span className="text-studio-gold font-semibold">
                      {artists[activeArtist].achievement}
                    </span>
                  </div>
                </div>
                
                <blockquote className="text-studio-white/60 italic text-lg border-l-4 border-studio-purple pl-4">
                  "{artists[activeArtist].quote}"
                </blockquote>
              </div>

              {/* Artist Navigation */}
              <div className="space-y-4">
                {artists.map((artist, index) => {
                  const colorClasses = getColorClasses(artist.color);
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                        index === activeArtist 
                          ? `glass-card border ${colorClasses.border} ${colorClasses.shadow}` 
                          : 'hover:bg-studio-white/5'
                      }`}
                      onClick={() => {
                        console.log(`Featured artist changed to: ${artist.name}`);
                        setActiveArtist(index);
                      }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">{artist.image}</div>
                        <div>
                          <h4 className={`font-semibold ${index === activeArtist ? 'text-gradient' : 'text-studio-white'}`}>
                            {artist.name}
                          </h4>
                          <p className="text-studio-white/60 text-sm">{artist.genre}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Artists Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {artists.map((artist, index) => {
            const colorClasses = getColorClasses(artist.color);
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 10
                }}
                className="perspective-container group cursor-pointer"
                onClick={() => {
                  console.log(`Artist card clicked: ${artist.name}`);
                  setActiveArtist(index);
                }}
              >
                <div className={`card-3d glass-card p-6 h-full relative overflow-hidden border ${colorClasses.border} ${colorClasses.shadow} transition-all duration-500`}>
                  {/* Hover Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <motion.div
                      className="text-5xl mb-4"
                      animate={{ rotateZ: [0, 5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {artist.image}
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-studio-white mb-2 group-hover:text-gradient transition-all duration-300">
                      {artist.name}
                    </h3>
                    
                    <p className={`text-sm ${colorClasses.text} mb-3`}>
                      {artist.genre}
                    </p>
                    
                    <div className="px-3 py-1 bg-studio-white/10 rounded-lg border border-studio-white/20">
                      <span className="text-studio-white/80 text-xs font-medium">
                        {artist.achievement}
                      </span>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${artist.color === 'purple' ? 'from-studio-purple to-studio-cyan' : artist.color === 'cyan' ? 'from-studio-cyan to-studio-gold' : 'from-studio-gold to-studio-purple'} group-hover:w-full transition-all duration-500`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-gradient text-center mb-8">
              Studio Achievements
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Artists Recorded" },
                { number: "50+", label: "Grammy Nominations" },
                { number: "2B+", label: "Total Streams" },
                { number: "15", label: "Years Experience" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <div className="text-3xl lg:text-4xl font-bold text-studio-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-studio-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArtistsSection;