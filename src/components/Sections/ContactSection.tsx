'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

interface ContactSectionProps {
  isLoaded: boolean;
  observeElement: (element: HTMLElement, sectionId: string) => void;
}

export default function ContactSection({ isLoaded, observeElement }: ContactSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      observeElement(sectionRef.current, 'contact');
    }
  }, [observeElement]);

  if (!isLoaded) {
    return (
      <section ref={sectionRef} id="contact" className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-8 bg-white/20 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-white/20 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 rounded-lg p-6 h-64 animate-pulse"></div>
            <div className="bg-white/10 rounded-lg p-6 h-64 animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-primary-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Have questions? Get in touch!</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Ready to take your business to the next level? Let's discuss how we can help you achieve your digital marketing goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail size={24} className="text-primary-200" />
                  <span>hello@silverantmarketing.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={24} className="text-primary-200" />
                  <span>+1 214-247-6882</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin size={24} className="text-primary-200" />
                  <span>100 N Central Expy Suite 914/1 Main, Richardson, TX 75080, United States</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 