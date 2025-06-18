"use client"

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log("Hero section mounted, initializing particle animation");
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    const colors = ['#8B5CF6', '#06B6D4', '#F59E0B'];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw connections
        particles.forEach(otherParticle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) +
            Math.pow(particle.y - otherParticle.y, 2)
          );

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (100 - distance) / 100 * 0.2;
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const floating3DElements = [
    { icon: '🎵', delay: 0, position: 'top-20 left-20' },
    { icon: '🎸', delay: 0.2, position: 'top-40 right-32' },
    { icon: '🎹', delay: 0.4, position: 'bottom-40 left-32' },
    { icon: '🎤', delay: 0.6, position: 'bottom-20 right-20' },
    { icon: '🥁', delay: 0.8, position: 'top-60 left-1/2' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Background Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-studio-purple/20 via-transparent to-studio-cyan/20" style={{ zIndex: 2 }} />
      <div className="absolute inset-0 bg-gradient-to-tl from-studio-gold/10 via-transparent to-transparent" style={{ zIndex: 2 }} />

      {/* Floating 3D Elements */}
      {floating3DElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ 
            delay: element.delay, 
            duration: 1,
            type: "spring",
            stiffness: 100 
          }}
          className={`absolute ${element.position} text-6xl floating-element hidden lg:block`}
          style={{ zIndex: 3 }}
        >
          <div className="glow-effect">
            {element.icon}
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-gradient text-shadow-glow">
              Create Music
            </span>
            <span className="block text-studio-white">
              That Moves Souls
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-studio-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Professional recording studio with cutting-edge technology and acoustic perfection. 
          Where your musical vision becomes reality.
        </motion.p>

        {/* Waveform Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center mb-12"
        >
          <div className="waveform">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="waveform-bar"
                style={{
                  height: `${20 + Math.random() * 40}px`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-studio-purple to-studio-cyan rounded-2xl text-white font-bold text-lg shadow-3d hover:shadow-glow-purple transition-all duration-300 min-w-[200px]"
            onClick={() => {
              console.log("Book session button clicked");
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book Session
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass-card neon-border rounded-2xl text-studio-white font-bold text-lg min-w-[200px] group"
            onClick={() => {
              console.log("View portfolio button clicked");
              document.querySelector('#artists')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="group-hover:text-gradient transition-all duration-300">
              View Portfolio
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-studio-white/30 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-gradient-to-b from-studio-purple to-studio-cyan rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;