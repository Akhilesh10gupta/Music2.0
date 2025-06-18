"use client";

import React, {
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/* ───────────────────────── 1. Static data ───────────────────────── */
export const CONTACT_INFO = [
  {
    icon: "📍",
    title: "Studio Location",
    details: ["123 Music Row", "Nashville, TN 37203"],
    color: "purple",
  },
  {
    icon: "📞",
    title: "Phone & Booking",
    details: ["+1 (615) 555‑0123", "Available 24/7"],
    color: "cyan",
  },
  {
    icon: "✉️",
    title: "Email",
    details: ["hello@soundforge.studio", "info@soundforge.studio"],
    color: "gold",
  },
  {
    icon: "🕐",
    title: "Studio Hours",
    details: ["Mon‑Sun 24/7", "By Appointment"],
    color: "purple",
  },
] as const;

export const SERVICES = [
  "Recording Session",
  "Mixing & Mastering",
  "Music Production",
  "Post Production",
  "Live Recording",
  "Studio Tour",
  "Other",
] as const;

export const BUDGETS = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000+",
  "I need a custom quote",
] as const;

/* ───────────────────────── 2. Helpers ───────────────────────── */
type ContactInfo = (typeof CONTACT_INFO)[number];

const colourMap = {
  purple: { border: "border-studio-purple/30", hover: "hover:shadow-glow-purple" },
  cyan:   { border: "border-studio-cyan/30",   hover: "hover:shadow-glow-cyan"   },
  gold:   { border: "border-studio-gold/30",   hover: "hover:shadow-glow-gold"   },
} as const;

type ColourKey = keyof typeof colourMap;

/* ───────────────────────── 3. Memo sub‑components ───────────────────────── */
interface InfoCardProps { info: ContactInfo; delay: number; inView: boolean }
const InfoCard = memo(({ info, delay, inView }: InfoCardProps) => {
  const { border, hover } = colourMap[info.color as ColourKey] || colourMap.purple;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02, rotate: 2 }}
      className={`glass-card p-6 rounded-2xl border ${border} group ${hover} perspective-container`}
      style={{ willChange: "transform" }}
    >
      <div className="card-3d">
        <div className="flex items-start space-x-4">
          <motion.div
            className="text-3xl"
            animate={{ rotateZ: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {info.icon}
          </motion.div>

          <div>
            <h4 className="text-lg font-semibold text-studio-white mb-2 group-hover:text-gradient transition-all duration-300">
              {info.title}
            </h4>

            {info.details.map((d) => (
              <p key={d} className="text-studio-white/60 mb-1">
                {d}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
});
InfoCard.displayName = "InfoCard";

/* Quick‑action button (memo) */
interface ActionBtnProps {
  label: string;
  border: string;
  hoverBg: string;
  onClick: () => void;
}
const ActionBtn = memo(({ label, border, hoverBg, onClick }: ActionBtnProps) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.97 }}
    className={`w-full py-3 glass-card rounded-xl text-studio-white font-medium transition-all ${border} ${hoverBg}`}
    onClick={onClick}
    style={{ willChange: "transform" }}
  >
    {label}
  </motion.button>
));
ActionBtn.displayName = "ActionBtn";

/* ───────────────────────── 4. Main component ───────────────────────── */
const ContactSection = () => {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef           = useRef<HTMLDivElement | null>(null);
  const isInView             = useInView(sectionRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "", email: "", service: "", message: "", budget: "",
  });
  const [submitting, setSubmitting] = useState(false);

  /* stable handlers */
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((s) => ({ ...s, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback<React.FormEventHandler>(async (e) => {
    e.preventDefault();
    setSubmitting(true);

    /* fake network call */
    await new Promise((r) => setTimeout(r, 1800));

    alert("Thank you for your inquiry! We'll get back to you within 24 hours.");

    setFormData({ name: "", email: "", service: "", message: "", budget: "" });
    setSubmitting(false);
  }, []);

  /* dev log */
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.log("📬 Contact in view:", isInView);
    }
  }, [isInView]);

  /* ───────────── markup ───────────── */
  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden scroll-mt-24"
    >
      {/* Background orbs */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 pointer-events-none select-none">
          {/* static blobs fade‑in the first time they scroll into view */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-studio-purple/10 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
            className="absolute bottom-0 right-1/4 w-80 h-80 bg-studio-cyan/10 rounded-full blur-3xl"
          />
          {/* slow pulsing halo */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-studio-gold/5 rounded-full blur-3xl"
            style={{ willChange: "transform" }}
          />
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Let&rsquo;s Create Together</span>
          </h2>
          <p className="text-xl text-studio-white/70 max-w-3xl mx-auto">
            Ready to bring your musical vision to life? Get in touch and let&rsquo;s
            start crafting something extraordinary in our world‑class studio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* ───── Contact form ───── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8 rounded-3xl border border-studio-purple/30">
              <h3 className="text-2xl font-bold text-gradient mb-8">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
                {/* Name */}
                <div>
                  <label className="block text-sm mb-2 text-studio-white/70">
                    Name *
                  </label>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-studio-white/5 border border-studio-white/20 rounded-xl text-studio-white placeholder-studio-white/40 focus:outline-none focus:border-studio-purple focus:ring-2 focus:ring-studio-purple/20 transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm mb-2 text-studio-white/70">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 bg-studio-white/5 border border-studio-white/20 rounded-xl text-studio-white placeholder-studio-white/40 focus:outline-none focus:border-studio-cyan focus:ring-2 focus:ring-studio-cyan/20 transition-all"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm mb-2 text-studio-white/70">
                    Service interest *
                  </label>
                  <select
                    required
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-studio-white/5 border border-studio-white/20 rounded-xl text-studio-white focus:outline-none focus:border-studio-gold focus:ring-2 focus:ring-studio-gold/20 transition-all"
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s} className="bg-studio-black">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm mb-2 text-studio-white/70">
                    Project budget
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-studio-white/5 border border-studio-white/20 rounded-xl text-studio-white focus:outline-none focus:border-studio-purple focus:ring-2 focus:ring-studio-purple/20 transition-all"
                  >
                    <option value="">Select budget range</option>
                    {BUDGETS.map((b) => (
                      <option key={b} value={b} className="bg-studio-black">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm mb-2 text-studio-white/70">
                    Message *
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project…"
                    className="w-full px-4 py-3 bg-studio-white/5 border border-studio-white/20 rounded-xl text-studio-white placeholder-studio-white/40 focus:outline-none focus:border-studio-cyan focus:ring-2 focus:ring-studio-cyan/20 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-4 bg-gradient-to-r from-studio-purple to-studio-cyan rounded-xl text-white font-bold shadow-3d transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending…</span>
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* ───── Info + quick actions ───── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact cards */}
            {CONTACT_INFO.map((info, i) => (
              <InfoCard
                key={info.title}
                info={info}
                delay={0.5 + i * 0.1}
                inView={isInView}
              />
            ))}

            {/* Quick actions */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
              className="glass-card p-6 rounded-2xl border border-studio-gold/20"
            >
              <h4 className="text-lg font-semibold text-gradient mb-4">
                Quick Actions
              </h4>

              <div className="space-y-3">
                {/* Studio tour */}
                <ActionBtn
                  label="📅 Schedule Studio Tour"
                  border="border-studio-purple/30"
                  hoverBg="hover:bg-studio-purple/20"
                  onClick={() =>
                    setFormData((s) => ({ ...s, service: "Studio Tour" }))
                  }
                />

                {/* Rate card */}
                <ActionBtn
                  label="💰 Download Rate Card"
                  border="border-studio-cyan/30"
                  hoverBg="hover:bg-studio-cyan/20"
                  onClick={() => alert("Rate card will be sent to your email!")}
                />

                {/* Emergency */}
                <ActionBtn
                  label="🚨 Emergency Booking"
                  border="border-studio-gold/30"
                  hoverBg="hover:bg-studio-gold/20"
                  onClick={() => window.open("tel:+16155550123", "_self")}
                />
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <h4 className="text-lg font-semibold text-studio-white mb-4">
                Follow Our Journey
              </h4>

              <div className="flex justify-center space-x-4">
                {["🎵", "📸", "🎬", "💼"].map((icon) => (
                  <motion.button
                    key={icon}
                    whileHover={{ scale: 1.1, rotateY: 15 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 glass-card border border-studio-white/20 rounded-xl flex items-center justify-center text-xl transition-all"
                    onClick={() => console.log(`${icon} clicked`)}
                  >
                    {icon}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

