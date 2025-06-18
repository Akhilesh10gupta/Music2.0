"use client"

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRouter } from 'next/navigation';

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeProject, setActiveProject] = useState(0);
  const router = useRouter();

  useEffect(() => {
    console.log("Projects section in view:", isInView);
  }, [isInView]);

  const projects = [
    {
      id: 1,
      title: "Luna Eclipse - Midnight Dreams",
      artist: "Luna Eclipse",
      genre: "Electronic / Ambient",
      description: "A mesmerizing journey through ethereal soundscapes and haunting melodies that transport listeners to another dimension.",
      youtubeId: "dQw4w9WgXcQ", // Example YouTube ID
      thumbnail: "🌙",
      year: "2024",
      duration: "4:32",
      plays: "2.3M",
      color: "purple",
      highlights: ["Grammy Nominated", "Spotify Playlist", "Radio Hit"]
    },
    {
      id: 2,
      title: "The Midnight Collective - Neon Nights",
      artist: "The Midnight Collective",
      genre: "Indie Rock",
      description: "High-energy indie rock anthem with atmospheric guitar work and powerful vocals that captivated audiences worldwide.",
      youtubeId: "dQw4w9WgXcQ", // Example YouTube ID
      thumbnail: "🎸",
      year: "2024",
      duration: "3:45",
      plays: "1.8M",
      color: "cyan",
      highlights: ["Billboard Top 40", "Festival Headliner", "Viral Hit"]
    },
    {
      id: 3,
      title: "Maya Santos - Soulfire",
      artist: "Maya Santos",
      genre: "R&B / Soul",
      description: "A powerful R&B ballad showcasing Maya's incredible vocal range and emotional depth with lush orchestral arrangements.",
      youtubeId: "dQw4w9WgXcQ", // Example YouTube ID
      thumbnail: "👑",
      year: "2023",
      duration: "5:12",
      plays: "4.1M",
      color: "gold",
      highlights: ["Multi-Platinum", "Award Winner", "Chart Topper"]
    },
    {
      id: 4,
      title: "Digital Dreams - Retro Future",
      artist: "Digital Dreams",
      genre: "Synthwave",
      description: "Nostalgic synthwave masterpiece blending 80s aesthetics with modern production techniques and cinematic storytelling.",
      youtubeId: "dQw4w9WgXcQ", // Example YouTube ID
      thumbnail: "🚀",
      year: "2024",
      duration: "6:08",
      plays: "3.2M",
      color: "purple",
      highlights: ["Editorial Playlist", "Sync Placement", "Fan Favorite"]
    },
    {
      id: 5,
      title: "Alex Chen - Epic Journey",
      artist: "Alex Chen",
      genre: "Film Score",
      description: "Orchestral film score composition featuring sweeping melodies and dramatic crescendos for a major motion picture.",
      youtubeId: "dQw4w9WgXcQ", // Example YouTube ID
      thumbnail: "🎬",
      year: "2023",
      duration: "8:24",
      plays: "956K",
      color: "cyan",
      highlights: ["Emmy Winner", "Box Office Hit", "Critical Acclaim"]
    },
    {
      id: 6,
      title: "Neon Nights - Electric Love",
      artist: "Neon Nights",
      genre: "Pop / Dance",
      description: "Infectious pop-dance track with pulsating beats and catchy hooks that dominated radio charts and dance floors.",
      youtubeId: "dQw4w9WgXcQ", // Example YouTube ID
      thumbnail: "💫",
      year: "2024",
      duration: "3:28",
      plays: "5.7M",
      color: "gold",
      highlights: ["#1 Hit", "Dance Chart", "TikTok Viral"]
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

  const handleProjectClick = (projectId: number) => {
    console.log(`Navigating to project: ${projectId}`);
    router.push(`/project/${projectId}`);
  };

  return (
    <section id="projects" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
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
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-studio-white/70 max-w-3xl mx-auto">
            Discover our latest musical creations and collaborations. Each project represents 
            a unique artistic journey crafted with passion and precision.
          </p>
        </motion.div>

        {/* Featured Project Showcase */}
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
              {/* YouTube Video Embed */}
              <div className="relative">
                <div className="aspect-video bg-studio-black rounded-2xl overflow-hidden border border-studio-white/20">
                  <iframe
                    src={`https://www.youtube.com/embed/SkZWB3LDURk?rel=0&modestbranding=1`}
                    title={projects[activeProject].title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                
                {/* Video Stats */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-4 text-sm text-studio-white/60">
                    <span>⏱️ {projects[activeProject].duration}</span>
                    <span>▶️ {projects[activeProject].plays} plays</span>
                    <span>📅 {projects[activeProject].year}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-studio-purple to-studio-cyan rounded-lg text-white font-medium text-sm"
                    onClick={() => handleProjectClick(projects[activeProject].id)}
                  >
                    View Project →
                  </motion.button>
                </div>
              </div>

              {/* Project Info */}
              <div>
                <motion.div
                  className="text-6xl mb-6"
                  animate={{ rotate: [0, 20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {projects[activeProject].thumbnail}
                </motion.div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                  {projects[activeProject].title}
                </h3>
                
                <p className="text-studio-cyan text-lg mb-2">
                  {projects[activeProject].artist}
                </p>
                
                <p className="text-studio-white/60 text-sm mb-4">
                  {projects[activeProject].genre}
                </p>
                
                <p className="text-studio-white/70 text-lg leading-relaxed mb-6">
                  {projects[activeProject].description}
                </p>
                
                {/* Project Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[activeProject].highlights.map((highlight, index) => (
                    <div key={index} className="px-3 py-1 bg-gradient-to-r from-studio-gold/20 to-studio-gold/10 rounded-lg border border-studio-gold/30">
                      <span className="text-studio-gold text-sm font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const colorClasses = getColorClasses(project.color);
            
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03,
                  rotate: 5
                }}
                className="perspective-container group cursor-pointer"
                onClick={() => {
                  console.log(`Project selected: ${project.title}`);
                  setActiveProject(index);
                }}
              >
                <div className={`card-3d glass-card p-6 h-full relative overflow-hidden border ${colorClasses.border} ${colorClasses.shadow} transition-all duration-500`}>
                  {/* Hover Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* YouTube Video Embed */}
                    <div className="aspect-video bg-studio-black/50 rounded-lg mb-4 flex items-center justify-center border border-studio-white/10 overflow-hidden relative">
                      {/* YouTube Thumbnail Preview */}
                      <div className="w-full h-full relative group">
                        <img 
                          src={`https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white">
                            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M8 5v10l8-5z"/>
                            </svg>
                          </div>
                        </div>
                        {/* Emoji Overlay */}
                        <div className="absolute top-2 right-2 text-2xl">{project.thumbnail}</div>
                      </div>
                    </div>
                    
                    {/* Project Info */}
                    <h3 className="text-lg font-bold text-studio-white mb-2 group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>
                    
                    <p className={`text-sm ${colorClasses.text} mb-1`}>
                      {project.artist}
                    </p>
                    
                    <p className="text-studio-white/60 text-xs mb-3">
                      {project.genre}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between text-xs text-studio-white/50 mb-4">
                      <span>{project.duration}</span>
                      <span>{project.plays}</span>
                      <span>{project.year}</span>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 py-2 glass-card border border-studio-white/20 rounded-lg text-studio-white text-xs font-medium hover:bg-studio-white/10 transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log(`Play clicked for: ${project.title}`);
                          setActiveProject(index);
                        }}
                      >
                        ▶️ Play
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 py-2 border ${colorClasses.border} rounded-lg text-studio-white text-xs font-medium hover:bg-gradient-to-r ${project.color === 'purple' ? 'hover:from-studio-purple/20 hover:to-studio-cyan/20' : project.color === 'cyan' ? 'hover:from-studio-cyan/20 hover:to-studio-gold/20' : 'hover:from-studio-gold/20 hover:to-studio-purple/20'} transition-all duration-300`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProjectClick(project.id);
                        }}
                      >
                        Details →
                      </motion.button>
                    </div>
                  </div>

                  {/* Hover Effect Line */}
                  <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${project.color === 'purple' ? 'from-studio-purple to-studio-cyan' : project.color === 'cyan' ? 'from-studio-cyan to-studio-gold' : 'from-studio-gold to-studio-purple'} group-hover:w-full transition-all duration-500`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Projects Button */}
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
              console.log("View all projects clicked");
              router.push('/projects');
            }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;