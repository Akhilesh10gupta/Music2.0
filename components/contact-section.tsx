"use client"

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const ContactSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    console.log("Contact section in view:", isInView);
  }, [isInView]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log(`Form field changed: ${name} = ${value}`);
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
    setFormData({
      name: '',
      email: '',
      service: '',
      message: '',
      budget: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Studio Location",
      details: ["123 Music Row", "Nashville, TN 37203"],
      color: "purple"
    },
    {
      icon: "📞",
      title: "Phone & Booking",
      details: ["+1 (615) 555-0123", "Available 24/7"],
      color: "cyan"
    },
    {
      icon: "✉️",
      title: "Email",
      details: ["hello@soundforge.studio", "info@soundforge.studio"],
      color: "gold"
    },
    {
      icon: "🕐",
      title: "Studio Hours",
      details: ["Mon-Sun: 24/7", "By Appointment"],
      color: "purple"
    }
  ];

  const services = [
    "Recording Session",
    "Mixing & Mastering", 
    "Music Production",
    "Post Production",
    "Live Recording",
    "Studio Tour",
    "Other"
  ];

  const budgets = [
    "Under $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000+",
    "I need a custom quote"
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-studio-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-studio-cyan/10 rounded-full blur-3xl" />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-studio-gold/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
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
            <span className="text-gradient">Let's Create Together</span>
          </h2>
          <p className="text-xl text-studio-white/70 max-w-3xl mx-auto">
            Ready to bring your musical vision to life? Get in touch and let's start 
            crafting something extraordinary in our world-class studio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8 rounded-3xl border border-studio-purple/30">
              <h3 className="text-2xl font-bold text-gradient mb-8">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-studio-white/70 text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-studio-white/5 border border-studio-white/20 rounded-xl text-studio-white placeholder-studio-white/40 focus:outline-none focus:border-studio-purple focus:ring-2 focus:ring-studio-purple/20 transition-all duration-300"
                    placeholder="Your name"
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-studio-white/70 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-studio-white/5 border border-studio-white/20 rounded-xl text-studio-white placeholder-studio-white/40 focus:outline-none focus:border-studio-cyan focus:ring-2 focus:ring-studio-cyan/20 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </motion.div>

                {/* Service Selection */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-studio-white/70 text-sm font-medium mb-2">
                    Service Interest *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-studio-white/5 border border-studio-white/20 rounded-xl text-studio-white focus:outline-none focus:border-studio-gold focus:ring-2 focus:ring-studio-gold/20 transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="bg-studio-black">
                        {service}
                      </option>
                    ))}
                  </select>
                </motion.div>

                {/* Budget Selection */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.6 }}
                >
                  <label className="block text-studio-white/70 text-sm font-medium mb-2">
                    Project Budget
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-studio-white/5 border border-studio-white/20 rounded-xl text-studio-white focus:outline-none focus:border-studio-purple focus:ring-2 focus:ring-studio-purple/20 transition-all duration-300"
                  >
                    <option value="">Select budget range</option>
                    {budgets.map((budget, index) => (
                      <option key={index} value={budget} className="bg-studio-black">
                        {budget}
                      </option>
                    ))}
                  </select>
                </motion.div>

                {/* Message Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.7 }}
                >
                  <label className="block text-studio-white/70 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-studio-white/5 border border-studio-white/20 rounded-xl text-studio-white placeholder-studio-white/40 focus:outline-none focus:border-studio-cyan focus:ring-2 focus:ring-studio-cyan/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your project, vision, and any specific requirements..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-studio-purple to-studio-cyan rounded-xl text-white font-bold text-lg shadow-3d hover:shadow-glow-purple transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, rotate: 2 }}
                className="glass-card p-6 rounded-2xl border border-studio-white/10 group perspective-container"
              >
                <div className="card-3d">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="text-3xl"
                      animate={{ rotateZ: [0, 10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {info.icon}
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-semibold text-studio-white mb-2 group-hover:text-gradient transition-all duration-300">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-studio-white/60 mb-1">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.9 }}
              className="glass-card p-6 rounded-2xl border border-studio-gold/20"
            >
              <h4 className="text-lg font-semibold text-gradient mb-4">
                Quick Actions
              </h4>
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 glass-card border border-studio-purple/30 rounded-xl text-studio-white font-medium hover:bg-studio-purple/20 transition-all duration-300"
                  onClick={() => {
                    console.log("Schedule tour clicked");
                    setFormData(prev => ({ ...prev, service: 'Studio Tour' }));
                  }}
                >
                  📅 Schedule Studio Tour
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 glass-card border border-studio-cyan/30 rounded-xl text-studio-white font-medium hover:bg-studio-cyan/20 transition-all duration-300"
                  onClick={() => {
                    console.log("Download rate card clicked");
                    alert("Rate card will be sent to your email!");
                  }}
                >
                  💰 Download Rate Card
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 glass-card border border-studio-gold/30 rounded-xl text-studio-white font-medium hover:bg-studio-gold/20 transition-all duration-300"
                  onClick={() => {
                    console.log("Emergency booking clicked");
                    window.open('tel:+16155550123', '_self');
                  }}
                >
                  🚨 Emergency Booking
                </motion.button>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 1 }}
              className="text-center"
            >
              <h4 className="text-lg font-semibold text-studio-white mb-4">
                Follow Our Journey
              </h4>
              <div className="flex justify-center space-x-4">
                {['🎵', '📸', '🎬', '💼'].map((social, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1, rotateY: 15 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 glass-card border border-studio-white/20 rounded-xl flex items-center justify-center text-xl hover:shadow-glow-purple transition-all duration-300"
                    onClick={() => console.log(`Social link ${index + 1} clicked`)}
                  >
                    {social}
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