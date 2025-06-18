"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';

const ProjectsPage = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const allProjects = [
    {
      id: 1,
      title: "Luna Eclipse - Midnight Dreams",
      artist: "Luna Eclipse",
      genre: "Electronic",
      description: "A mesmerizing journey through ethereal soundscapes and haunting melodies that transport listeners to another dimension.",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail: "🌙",
      year: "2024",
      duration: "4:32",
      plays: "2.3M",
      color: "purple",
      highlights: ["Grammy Nominated", "Spotify Playlist", "Radio Hit"],
      fullDescription: "This groundbreaking electronic album represents a new frontier in ambient music production. Recorded over six months, each track was meticulously crafted using a combination of analog synthesizers and digital processing. The result is a sonic journey that has captivated audiences worldwide and earned critical acclaim from industry professionals."
    },
    {
      id: 2,
      title: "The Midnight Collective - Neon Nights",
      artist: "The Midnight Collective",
      genre: "Rock",
      description: "High-energy indie rock anthem with atmospheric guitar work and powerful vocals.",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail: "🎸",
      year: "2024",
      duration: "3:45",
      plays: "1.8M",
      color: "cyan",
      highlights: ["Billboard Top 40", "Festival Headliner", "Viral Hit"],
      fullDescription: "Recorded live in our main studio, this track captures the raw energy and emotion of The Midnight Collective's signature sound. The band spent weeks perfecting the arrangement, resulting in a perfect blend of indie sensibilities and rock power that resonated with fans globally."
    },
    {
      id: 3,
      title: "Maya Santos - Soulfire",
      artist: "Maya Santos",
      genre: "R&B",
      description: "A powerful R&B ballad showcasing Maya's incredible vocal range and emotional depth.",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail: "👑",
      year: "2023",
      duration: "5:12",
      plays: "4.1M",
      color: "gold",
      highlights: ["Multi-Platinum", "Award Winner", "Chart Topper"],
      fullDescription: "Maya Santos' breakthrough single was recorded in a single take, capturing the raw emotion and vocal prowess that has made her one of today's most compelling R&B artists. The lush orchestral arrangements complement her voice perfectly, creating a timeless piece of music."
    },
    {
      id: 4,
      title: "Digital Dreams - Retro Future",
      artist: "Digital Dreams",
      genre: "Electronic",
      description: "Nostalgic synthwave masterpiece blending 80s aesthetics with modern production.",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail: "🚀",
      year: "2024",
      duration: "6:08",
      plays: "3.2M",
      color: "purple",
      highlights: ["Editorial Playlist", "Sync Placement", "Fan Favorite"],
      fullDescription: "A masterclass in synthwave production, combining vintage synthesizers with cutting-edge production techniques. This track has been featured in multiple film soundtracks and remains a fan favorite across streaming platforms."
    },
    {
      id: 5,
      title: "Alex Chen - Epic Journey",
      artist: "Alex Chen",
      genre: "Film Score",
      description: "Orchestral film score composition featuring sweeping melodies and dramatic crescendos.",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail: "🎬",
      year: "2023",
      duration: "8:24",
      plays: "956K",
      color: "cyan",
      highlights: ["Emmy Winner", "Box Office Hit", "Critical Acclaim"],
      fullDescription: "Composed for a major motion picture, this orchestral piece showcases the full range of our studio's capabilities. Recorded with a 60-piece orchestra, every note was captured with pristine clarity and emotional depth."
    },
    {
      id: 6,
      title: "Neon Nights - Electric Love",
      artist: "Neon Nights",
      genre: "Pop",
      description: "Infectious pop-dance track with pulsating beats and catchy hooks.",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail: "💫",
      year: "2024",
      duration: "3:28",
      plays: "5.7M",
      color: "gold",
      highlights: ["#1 Hit", "Dance Chart", "TikTok Viral"],
      fullDescription: "This chart-topping hit dominated radio and streaming platforms worldwide. The production process involved innovative use of vocal processing and electronic elements, creating a sound that's both modern and timeless."
    },
    {
      id: 7,
      title: "Jazz Collective - Midnight Sessions",
      artist: "Jazz Collective",
      genre: "Jazz",
      description: "Intimate jazz recording capturing the spontaneity of late-night jam sessions.",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail: "🎺",
      year: "2023",
      duration: "7:15",
      plays: "892K",
      color: "purple",
      highlights: ["Jazz Critics Award", "Live Recording", "Authentic Sound"],
      fullDescription: "Recorded live in our studio with minimal overdubs, this album captures the magic of spontaneous musical creation. The natural acoustics of our live room provide the perfect ambiance for this intimate jazz experience."
    },
    {
      id: 8,
      title: "Acoustic Dreams - Sunrise",
      artist: "Acoustic Dreams",
      genre: "Folk",
      description: "Gentle folk ballad with intricate fingerpicking and heartfelt lyrics.",
      youtubeId: "dQw4w9WgXcQ",
      thumbnail: "🌅",
      year: "2024",
      duration: "4:22",
      plays: "1.2M",
      color: "cyan",
      highlights: ["Folk Chart", "Acoustic Guitar", "Storytelling"],
      fullDescription: "This beautiful acoustic piece showcases the intimacy possible in our vocal booth. Every string resonance and breath was captured with stunning detail, creating an immersive listening experience."
    }
  ];

  const genres = ['All', 'Electronic', 'Rock', 'R&B', 'Pop', 'Jazz', 'Folk', 'Film Score'];

  const filteredProjects = allProjects.filter(project => {
    const matchesGenre = selectedGenre === 'All' || project.genre === selectedGenre;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.artist.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesGenre && matchesSearch;
  });

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
    <div className="min-h-screen bg-studio-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-studio-purple/20 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">All Projects</span>
            </h1>
            <p className="text-xl text-studio-white/70 max-w-3xl mx-auto">
              Explore our complete portfolio of musical creations, collaborations, and artistic journeys 
              crafted with passion and precision.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-6 rounded-2xl border border-studio-white/10 mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search projects or artists..."
                  value={searchTerm}
                  onChange={(e) => {
                    console.log(`Search term changed: ${e.target.value}`);
                    setSearchTerm(e.target.value);
                  }}
                  className="w-full px-4 py-3 bg-studio-white/5 border border-studio-white/20 rounded-xl text-studio-white placeholder-studio-white/40 focus:outline-none focus:border-studio-purple focus:ring-2 focus:ring-studio-purple/20 transition-all duration-300"
                />
              </div>

              {/* Genre Filter */}
              <div className="flex flex-wrap gap-2">
                {genres.map((genre) => (
                  <motion.button
                    key={genre}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedGenre === genre
                        ? 'bg-gradient-to-r from-studio-purple to-studio-cyan text-white'
                        : 'glass-card border border-studio-white/20 text-studio-white/70 hover:text-studio-white hover:border-studio-purple/50'
                    }`}
                    onClick={() => {
                      console.log(`Genre filter changed: ${genre}`);
                      setSelectedGenre(genre);
                    }}
                  >
                    {genre}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => {
              const colorClasses = getColorClasses(project.color);
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, rotate: 2 }}
                  className="perspective-container group cursor-pointer"
                >
                  <div className={`card-3d glass-card p-6 h-full relative overflow-hidden border ${colorClasses.border} ${colorClasses.shadow} transition-all duration-500`}>
                    {/* Hover Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Video Thumbnail */}
                      <div className="aspect-video bg-studio-black/50 rounded-lg mb-4 flex items-center justify-center border border-studio-white/10 overflow-hidden relative group">
                        <div className="text-4xl">{project.thumbnail}</div>
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-white text-xl">▶️</span>
                          </div>
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
                        {project.genre} • {project.year}
                      </p>
                      
                      <p className="text-studio-white/70 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Highlights */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.highlights.slice(0, 2).map((highlight, i) => (
                          <span key={i} className="px-2 py-1 bg-studio-white/10 rounded text-xs text-studio-white/80">
                            {highlight}
                          </span>
                        ))}
                      </div>
                      
                      {/* Stats */}
                      <div className="flex items-center justify-between text-xs text-studio-white/50 mb-4">
                        <span>⏱️ {project.duration}</span>
                        <span>▶️ {project.plays}</span>
                      </div>
                      
                      {/* Action Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full py-3 border ${colorClasses.border} rounded-lg text-studio-white font-medium hover:bg-gradient-to-r ${project.color === 'purple' ? 'hover:from-studio-purple/20 hover:to-studio-cyan/20' : project.color === 'cyan' ? 'hover:from-studio-cyan/20 hover:to-studio-gold/20' : 'hover:from-studio-gold/20 hover:to-studio-purple/20'} transition-all duration-300`}
                        onClick={() => {
                          console.log(`Project details clicked: ${project.title}`);
                          // Here you would typically navigate to individual project page
                          // router.push(`/project/${project.id}`);
                        }}
                      >
                        View Details →
                      </motion.button>
                    </div>

                    {/* Hover Effect Line */}
                    <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${project.color === 'purple' ? 'from-studio-purple to-studio-cyan' : project.color === 'cyan' ? 'from-studio-cyan to-studio-gold' : 'from-studio-gold to-studio-purple'} group-hover:w-full transition-all duration-500`} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-studio-white mb-4">No Projects Found</h3>
              <p className="text-studio-white/60">Try adjusting your search terms or filters.</p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;