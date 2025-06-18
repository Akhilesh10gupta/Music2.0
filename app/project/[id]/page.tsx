"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";

// -----------------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------------

interface StreamingLink {
  platform: string;
  url: string;
  icon: string;
}

interface Project {
  title: string;
  artist: string;
  genre: string;
  year: string;
  duration: string;
  plays: string;
  youtubeId: string;
  thumbnail: string;
  color: "purple" | "cyan" | "gold";
  description: string;
  fullDescription: string;
  highlights: string[];
  credits: { role: string; name: string }[];
  equipment: string[];
  techniques: string[];
  streamingLinks: StreamingLink[];
}

// -----------------------------------------------------------------------------
// Memoized list item components
// -----------------------------------------------------------------------------

const HighlightItem = memo(({ text }: { text: string }) => (
  <div className="px-3 py-2 bg-gradient-to-r from-studio-gold/20 to-studio-gold/10 rounded-lg border border-studio-gold/30">
    <span className="text-studio-gold font-medium text-sm">{text}</span>
  </div>
));

const CreditItem = memo(({ role, name }: { role: string; name: string }) => (
  <div className="flex justify-between items-center">
    <span className="text-studio-white/60 text-sm">{role}</span>
    <span className="text-studio-white font-medium">{name}</span>
  </div>
));

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const projectData: Record<string, Project> = {
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
      description:
        "A mesmerizing journey through ethereal soundscapes and haunting melodies.",
      fullDescription:
        "This groundbreaking electronic album represents a new frontier in ambient music production...",
      highlights: [
        "Grammy Nominated",
        "Spotify Editorial Playlist",
        "International Radio Hit",
        "Sync in Major Film",
      ],
      credits: [
        { role: "Artist", name: "Luna Eclipse" },
        { role: "Producer", name: "Marcus Rodriguez" },
        { role: "Mixing Engineer", name: "Sarah Chen" },
        { role: "Mastering Engineer", name: "James Thompson" },
        { role: "Additional Programming", name: "Alex Kim" },
      ],
      equipment: [
        "Moog Modular Synthesizer",
        "Roland Jupiter-8",
        "Neumann U87 Microphone",
        "SSL 9000J Console",
        "Lexicon 480L Reverb",
      ],
      techniques: [
        "Analog synthesizer layering",
        "Field recording integration",
        "Spatial audio processing",
        "Dynamic range preservation",
        "Harmonic enhancement",
      ],
      streamingLinks: [
        {
          platform: "Spotify",
          url: "https://open.spotify.com/",
          icon: "🎵",
        },
        { platform: "Apple Music", url: "#", icon: "🍎" },
        { platform: "YouTube Music", url: "#", icon: "📺" },
        { platform: "SoundCloud", url: "#", icon: "☁️" },
      ],
    },
  };

  const project = projectData[id];

  if (!project) {
    return (
      <div className="min-h-screen bg-studio-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-3xl font-bold text-studio-white mb-4">
            Project Not Found
          </h1>
          <button
            onClick={() => router.push("/projects")}
            className="px-6 py-3 bg-gradient-to-r from-studio-purple to-studio-cyan rounded-xl text-white font-semibold"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const getColorClasses = (color: Project["color"]) => {
    switch (color) {
      case "cyan":
        return {
          border: "border-studio-cyan/30",
        };
      case "gold":
        return {
          border: "border-studio-gold/30",
        };
      default:
        return {
          border: "border-studio-purple/30",
        };
    }
  };

  const colorClasses = getColorClasses(project.color);

  return (
    <div className="min-h-screen bg-studio-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-studio-purple/10 via-transparent to-transparent pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -5 }}
            className="flex items-center space-x-2 text-studio-white/70 hover:text-studio-white mb-8"
            onClick={() => router.push("/projects")}
          >
            <span>←</span>
            <span>Back to Projects</span>
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* YouTube Video + Streaming */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="aspect-video bg-black rounded-xl overflow-hidden border border-white/10 mb-6">
                <iframe
                  src={`https://www.youtube.com/embed/${project.youtubeId}?rel=0&controls=1&modestbranding=1`}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {project.streamingLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-white/5 py-3 px-4 rounded-xl hover:bg-white/10 transition"
                  >
                    <span>{link.icon}</span>
                    <span className="font-medium">{link.platform}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Metadata */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="text-6xl mb-4">{project.thumbnail}</div>
              <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
              <div className="text-studio-white/60 text-lg mb-4">
                {project.artist} • {project.genre} • {project.year}
              </div>
              <div className="text-studio-white/60 mb-8">
                ⏱ {project.duration} • ▶ {project.plays} plays
              </div>
              <p className="text-studio-white/80 mb-6 leading-relaxed">{project.fullDescription}</p>

              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-3">Highlights</h3>
                <div className="flex flex-wrap gap-3">
                  {project.highlights.map((highlight, i) => (
                    <HighlightItem key={i} text={highlight} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Credits */}
          <div className={`bg-white/5 p-6 rounded-xl ${colorClasses.border}`}>
            <h3 className="text-xl font-bold mb-4">Production Credits</h3>
            <div className="space-y-3">
              {project.credits.map((c, i) => (
                <CreditItem key={i} role={c.role} name={c.name} />
              ))}
            </div>
          </div>

          {/* Equipment */}
          <div className={`bg-white/5 p-6 rounded-xl ${colorClasses.border}`}>
            <h3 className="text-xl font-bold mb-4">Equipment Used</h3>
            {project.equipment.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                <div className="w-2 h-2 bg-studio-cyan rounded-full" />
                {item}
              </div>
            ))}
          </div>

          {/* Techniques */}
          <div className={`bg-white/5 p-6 rounded-xl ${colorClasses.border}`}>
            <h3 className="text-xl font-bold mb-4">Techniques</h3>
            {project.techniques.map((tech, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                <div className="w-2 h-2 bg-studio-gold rounded-full" />
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto bg-white/5 p-10 rounded-2xl border border-studio-purple/30"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Masterpiece?</h2>
          <p className="text-white/70 mb-8 text-lg">
            Experience the same world-class production quality. Let’s create together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="py-3 px-6 bg-gradient-to-r from-studio-purple to-studio-cyan rounded-xl font-semibold"
              onClick={() => router.push("/#contact")}
            >
              Book Your Session
            </button>
            <button
              className="py-3 px-6 border border-white/20 rounded-xl text-white/80 hover:bg-white/10"
              onClick={() => router.push("/projects")}
            >
              View All Projects
            </button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;