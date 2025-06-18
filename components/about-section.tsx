"use client";

import { memo, useEffect, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/* ───────────────────────── 1. Static data ───────────────────────── */
export const TEAM_MEMBERS = [
  {
    name: "Marcus Rodriguez",
    role: "Founder & Lead Producer",
    description: "15+ years crafting chart‑topping hits across genres.",
    image: "🎯",
    specialties: ["Hip‑Hop", "R&B", "Pop"],
    achievements: "50+ Platinum Records",
  },
  {
    name: "Sarah Chen",
    role: "Mixing Engineer",
    description: "Immersive soundscapes and pristine mixes.",
    image: "🎛️",
    specialties: ["Electronic", "Rock", "Ambient"],
    achievements: "200+ Mixed Albums",
  },
  {
    name: "James Thompson",
    role: "Mastering Engineer",
    description: "Final touch specialist for perfect playback.",
    image: "💎",
    specialties: ["Mastering", "Restoration", "Vinyl"],
    achievements: "Billboard #1 Masters",
  },
  {
    name: "Luna Martinez",
    role: "Studio Manager",
    description: "Ensures every session flows seamlessly.",
    image: "⭐",
    specialties: ["Operations", "Artist Relations", "Booking"],
    achievements: "99% Client Satisfaction",
  },
] as const;

export const STUDIO_STATS = [
  { number: "2008", label: "Studio Founded" },
  { number: "500+", label: "Artists Worked With" },
  { number: "2000+", label: "Songs Recorded" },
  { number: "50+", label: "Awards Won" },
  { number: "15", label: "Team Members" },
  { number: "24/7", label: "Studio Hours" },
] as const;

export const STUDIO_VALUES = [
  {
    icon: "🎨",
    title: "Artistic Excellence",
    description: "Top‑tier production to bring your vision to life.",
    color: "purple",
  },
  {
    icon: "🤝",
    title: "Collaborative Spirit",
    description: "Your creative voice leads. We amplify it.",
    color: "cyan",
  },
  {
    icon: "🚀",
    title: "Innovation",
    description: "Blending modern tech with timeless skill.",
    color: "gold",
  },
  {
    icon: "❤️",
    title: "Passion First",
    description: "It’s more than music — it’s purpose.",
    color: "purple",
  },
] as const;

/* ───────────────────────── 2. Helper: colours ───────────────────────── */
type ValueColor = "purple" | "cyan" | "gold" | string;

const getColorClasses = (color: ValueColor) => {
  switch (color) {
    case "purple":
      return "border-studio-purple/30 hover:shadow-glow-purple";
    case "cyan":
      return "border-studio-cyan/30 hover:shadow-glow-cyan";
    case "gold":
      return "border-studio-gold/30 hover:shadow-glow-gold";
    default:
      return "border-white/10";
  }
};

/* ───────────────────────── 3. Memo components ───────────────────────── */
const StatCard = memo(({ stat }: { stat: (typeof STUDIO_STATS)[number] }) => (
  <div className="glass-card p-4 rounded-xl text-center border border-white/10">
    <div className="text-2xl font-bold text-gradient mb-1">{stat.number}</div>
    <p className="text-white/60 text-sm">{stat.label}</p>
  </div>
));
StatCard.displayName = "StatCard";

const ValueCard = memo(
  ({ value, index }: { value: (typeof STUDIO_VALUES)[number]; index: number }) => {
    const prefersReducedMotion = useReducedMotion();
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`glass-card p-6 rounded-xl border ${getColorClasses(
          value.color
        )} group transition-all duration-300`}
      >
        <motion.div
          className="text-4xl mb-4"
          animate={
            !prefersReducedMotion ? { rotateY: [0, 15, 0] } : undefined
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 0.4,
            ease: "easeInOut",
          }}
        >
          {value.icon}
        </motion.div>
        <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-gradient transition-all duration-300">
          {value.title}
        </h4>
        <p className="text-sm text-white/60">{value.description}</p>
      </motion.div>
    );
  }
);
ValueCard.displayName = "ValueCard";

const TeamCard = memo(
  ({ member }: { member: (typeof TEAM_MEMBERS)[number] }) => {
    const prefersReducedMotion = useReducedMotion();
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="glass-card p-6 rounded-xl border border-white/10 text-center group"
      >
        <motion.div
          className="text-5xl mb-4"
          animate={
            !prefersReducedMotion ? { rotateZ: [0, 12, 0] } : undefined
          }
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {member.image}
        </motion.div>
        <h4 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all duration-300">
          {member.name}
        </h4>
        <p className="text-studio-cyan text-sm font-medium mb-2">
          {member.role}
        </p>
        <p className="text-sm text-white/60 mb-4">{member.description}</p>
        <div className="flex justify-center flex-wrap gap-2 text-xs">
          {member.specialties.map((s) => (
            <span key={s} className="bg-white/10 px-3 py-1 rounded text-white/80">
              {s}
            </span>
          ))}
        </div>
        <div className="mt-3 text-studio-gold text-xs font-semibold">
          {member.achievements}
        </div>
      </motion.div>
    );
  }
);
TeamCard.displayName = "TeamCard";

/* ───────────────────────── 4. Variants ───────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ───────────────────────── 5. Section component ───────────────────────── */
const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  /* dev log */
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.log("ℹ️  About section in view:", isInView);
    }
  }, [isInView]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background blobs */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 -z-10 pointer-events-none select-none">
          <motion.div
            className="absolute top-20 left-20 w-40 h-40 bg-studio-purple/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            style={{ willChange: "transform" }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-60 h-60 bg-studio-cyan/15 rounded-full blur-3xl"
            animate={{
              scale: [1.1, 0.9, 1.1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
            style={{ willChange: "transform" }}
          />
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* ─── Header ─── */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-gradient mb-4">
            About Sir Musiz Studio
          </h2>
          <p className="text-lg text-studio-white/70 max-w-3xl mx-auto">
            Born from a passion for sound and driven by innovation, we create
            timeless music.
          </p>
        </motion.div>

        {/* ─── Story + stats ─── */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="mb-20"
        >
          <div className="glass-card p-10 rounded-3xl border border-studio-purple/30 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-studio-purple/10 via-transparent to-studio-cyan/10 rounded-3xl" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Story */}
              <div className="space-y-4 text-white/70 leading-relaxed">
                <h3 className="text-3xl font-bold text-gradient mb-6">
                  Our Story
                </h3>
                <p>
                  Founded in 2008, began in a warehouse, now Nashville's
                  premiere recording space.
                </p>
                <p>
                  We’ve shaped sounds for rising talents and Grammy winners
                  alike.
                </p>
                <p>
                  Today, Sir Musiz Studio blends passion, technology, and precision to
                  make your music shine.
                </p>
              </div>

              {/* Stats grid */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 gap-4"
              >
                {STUDIO_STATS.map((stat) => (
                  <motion.div key={stat.label} variants={itemVariants}>
                    <StatCard stat={stat} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ─── Values ─── */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3
            className="text-3xl font-bold text-gradient text-center mb-12"
            variants={itemVariants}
          >
            Our Values
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STUDIO_VALUES.map((value, idx) => (
              <motion.div key={value.title} variants={itemVariants}>
                <ValueCard value={value} index={idx} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── Team ─── */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3
            className="text-3xl font-bold text-gradient text-center mb-12"
            variants={itemVariants}
          >
            Meet the Team
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((m) => (
              <motion.div key={m.name} variants={itemVariants}>
                <TeamCard member={m} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── Call to action ─── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="glass-card p-10 rounded-3xl border border-studio-purple/30">
            <h3 className="text-3xl font-bold text-gradient mb-6">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Join the hundreds of artists who trust Sir Musiz Studio. Your next
              masterpiece starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-studio-purple to-studio-cyan rounded-2xl text-white font-bold text-lg shadow-xl hover:shadow-glow-purple transition"
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Book Your Session
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass-card border border-studio-cyan/30 rounded-2xl text-white font-bold text-lg hover:bg-studio-cyan/20 transition"
                onClick={() =>
                  document
                    .querySelector("#services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

