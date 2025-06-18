"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import Navigation from '../../../components/navigation';
import Footer from '../../../components/footer';

const ProjectDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id;

  // Mock project data - in a real app, this would come from an API or database
  const projectData: Record<string, any> = {
    "1": {
      title: "Luna Eclipse - Midnight Dreams",
      artist: "Luna Eclipse",
      genre: "Electronic / Ambient",
      year: "2024",
      duration: "4:32",
      plays: "2.3M",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail: "🌙",
      color: "purple",
      description: "A mesmerizing journey through ethereal soundscapes and haunting melodies that transport listeners to another dimension.",
      fullDescription: "This groundbreaking electronic album represents a new frontier in ambient music production. Recorded over six months in our state-of-the-art studio, each track was meticulously crafted using a combination of analog synthesizers, field recordings, and advanced digital processing techniques. The result is a sonic journey that has captivated audiences worldwide and earned critical acclaim from industry professionals.",
      highlights: ["Grammy Nominated", "Spotify Editorial Playlist", "International Radio Hit", "Sync in Major Film"],
      credits: [
        { role: "Artist", name: "Luna Eclipse" },
        { role: "Producer", name: "Marcus Rodriguez" },
        { role: "Mixing Engineer", name: "Sarah Chen" },
        { role: "Mastering Engineer", name: "James Thompson" },
        { role: "Additional Programming", name: "Alex Kim" }
      ],
      equipment: [
        "Moog Modular Synthesizer",
        "Roland Jupiter-8",
        "Neumann U87 Microphone",
        "SSL 9000J Console",
        "Lexicon 480L Reverb"
      ],
      techniques: [
        "Analog synthesizer layering",
        "Field recording integration",
        "Spatial audio processing",
        "Dynamic range preservation",
        "Harmonic enhancement"
      ],
      streamingLinks: [
        { platform: "Spotify", url: "#", icon: "🎵" },
        { platform: "Apple Music", url: "#", icon: "🍎" },
        { platform: "YouTube Music", url: "#", icon: "📺" },
        { platform: "SoundCloud", url: "#", icon: "☁️" }
      ]
    }
    // Add more projects here...
  };

  const project = projectData[String(projectId)];
  
  if (!project) {
    return (
      <div className="min-h-screen bg-studio-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-3xl font-bold text-studio-white mb-4">Project Not Found</h1>
          <button
            onClick={() => router.push('/projects')}
            className="px-6 py-3 bg-gradient-to-r from-studio-purple to-studio-cyan rounded-xl text-white font-semibold"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'purple':
        return {
          border: 'border-studio-purple/30',
          gradient: 'from-studio-purple/20 to-studio-purple/5',
          shadow: 'shadow-glow-purple',
          text: 'text-studio-purple'
        };
      case 'cyan':
        return {
          border: 'border-studio-cyan/30',
          gradient: 'from-studio-cyan/20 to-studio-cyan/5',
          shadow: 'shadow-glow-cyan',
          text: 'text-studio-cyan'
        };
      case 'gold':
        return {
          border: 'border-studio-gold/30',
          gradient: 'from-studio-gold/20 to-studio-gold/5',
          shadow: 'shadow-glow-gold',
          text: 'text-studio-gold'
        };
      default:
        return {
          border: 'border-studio-purple/30',
          gradient: 'from-studio-purple/20 to-studio-purple/5',
          shadow: 'shadow-glow-purple',
          text: 'text-studio-purple'
        };
    }
  };

  const colorClasses = getColorClasses(project.color);

  return (
    <div className="min-h-screen bg-studio-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-studio-purple/20 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5 }}
            className="flex items-center space-x-2 text-studio-white/70 hover:text-studio-white transition-colors duration-300 mb-8"
            onClick={() => {
              console.log("Back to projects clicked");
              router.push('/projects');
            }}
          >
            <span>←</span>
            <span>Back to Projects</span>
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Video Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-video bg-studio-black rounded-2xl overflow-hidden border border-studio-white/20 mb-6">
                <iframe
                  src={`https://www.youtube.com/embed/${project.youtubeId}?rel=0&modestbranding=1&controls=1`}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              
              {/* Streaming Links */}
              <div className="grid grid-cols-2 gap-3">
                {project.streamingLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center space-x-2 py-3 glass-card border border-studio-white/20 rounded-xl text-studio-white hover:border-studio-purple/50 transition-all duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(`Streaming link clicked: ${link.platform}`);
                    }}
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="font-medium">{link.platform}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-6xl mb-6">{project.thumbnail}</div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gradient mb-4">
                {project.title}
              </h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-xl text-studio-cyan font-semibold">{project.artist}</span>
                <span className="text-studio-white/60">•</span>
                <span className="text-studio-white/60">{project.genre}</span>
                <span className="text-studio-white/60">•</span>
                <span className="text-studio-white/60">{project.year}</span>
              </div>
              
              <div className="flex items-center space-x-6 mb-8 text-studio-white/60">
                <div className="flex items-center space-x-2">
                  <span>⏱️</span>
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>▶️</span>
                  <span>{project.plays} plays</span>
                </div>
              </div>
              
              <p className="text-lg text-studio-white/70 leading-relaxed mb-8">
                {project.fullDescription}
              </p>
              
              {/* Highlights */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-studio-white mb-4">Achievements</h3>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-3 py-2 bg-gradient-to-r from-studio-gold/20 to-studio-gold/10 rounded-lg border border-studio-gold/30"
                    >
                      <span className="text-studio-gold font-medium text-sm">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Production Details */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Credits */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`glass-card p-8 rounded-2xl border ${colorClasses.border}`}
            >
              <h3 className="text-xl font-bold text-gradient mb-6">Production Credits</h3>
              <div className="space-y-4">
                {project.credits.map((credit, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-studio-white/60 text-sm">{credit.role}</span>
                    <span className="text-studio-white font-medium">{credit.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Equipment */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`glass-card p-8 rounded-2xl border ${colorClasses.border}`}
            >
              <h3 className="text-xl font-bold text-gradient mb-6">Equipment Used</h3>
              <div className="space-y-3">
                {project.equipment.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-studio-purple to-studio-cyan" />
                    <span className="text-studio-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Techniques */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`glass-card p-8 rounded-2xl border ${colorClasses.border}`}
            >
              <h3 className="text-xl font-bold text-gradient mb-6">Production Techniques</h3>
              <div className="space-y-3">
                {project.techniques.map((technique, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-studio-cyan to-studio-gold" />
                    <span className="text-studio-white/70 text-sm">{technique}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 lg:p-12 rounded-3xl border border-studio-purple/30"
          >
            <h3 className="text-3xl font-bold text-gradient mb-6">
              Ready to Create Your Masterpiece?
            </h3>
            <p className="text-studio-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Experience the same world-class production quality that made this track a success. 
              Let's bring your musical vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-studio-purple to-studio-cyan rounded-2xl text-white font-bold text-lg shadow-3d hover:shadow-glow-purple transition-all duration-300"
                onClick={() => {
                  console.log("Book session button clicked from project page");
                  router.push('/#contact');
                }}
              >
                Book Your Session
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass-card border border-studio-cyan/30 rounded-2xl text-studio-white font-bold text-lg hover:bg-studio-cyan/20 transition-all duration-300"
                onClick={() => {
                  console.log("View all projects button clicked");
                  router.push('/projects');
                }}
              >
                View All Projects
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;