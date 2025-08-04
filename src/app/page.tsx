'use client';

import React, { useState, useEffect } from 'react';
import { Mail, Phone, Facebook, Linkedin, Instagram, Youtube, ChevronDown, Menu, X, Play } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom hook for lazy loading
const useLazyLoad = () => {
  const [loadedSections, setLoadedSections] = useState<Set<string>>(new Set(['hero']));
  const [loadingIndicator, setLoadingIndicator] = useState(false);

  const observeElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLoadedSections((prev: Set<string>) => new Set([...prev, elementId]));
            setLoadingIndicator(true);
            setTimeout(() => setLoadingIndicator(false), 1000);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  };

  return { loadedSections, observeElement, loadingIndicator };
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { loadedSections, observeElement, loadingIndicator } = useLazyLoad();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Observe sections for lazy loading
    ['services', 'clients', 'seo-services', 'portfolio', 'reviews', 'blog', 'faq', 'contact', 'newsletter', 'footer'].forEach(observeElement);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div className="bg-gray-100 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">hello@silverantmarketing.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700">+1 214-247-6882</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Facebook className="w-4 h-4 text-gray-600 hover:text-blue-600 cursor-pointer" />
            <Linkedin className="w-4 h-4 text-gray-600 hover:text-blue-600 cursor-pointer" />
            <Instagram className="w-4 h-4 text-gray-600 hover:text-pink-600 cursor-pointer" />
            <div className="w-4 h-4 bg-red-600 rounded-sm flex items-center justify-center cursor-pointer">
              <span className="text-white text-xs font-bold">P</span>
            </div>
            <Youtube className="w-4 h-4 text-gray-600 hover:text-red-600 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center mr-4">
                <div className="text-white">
                  <div className="flex space-x-1 mb-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  </div>
                  <div className="text-white font-bold text-lg">sam</div>
                  <div className="text-gray-300 text-xs tracking-wider">SILVER ANT</div>
                  <div className="text-gray-300 text-xs tracking-wider">MARKETING</div>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-1 text-gray-700 hover:text-red-600 cursor-pointer">
                <span className="font-medium">DIGITAL MARKETING</span>
                <span className="text-red-600 font-bold">+</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-700 hover:text-red-600 cursor-pointer">
                <span className="font-medium">ABOUT US</span>
                <span className="text-red-600 font-bold">+</span>
              </div>
              <span className="text-gray-700 hover:text-red-600 cursor-pointer font-medium">PORTFOLIO</span>
              <span className="text-gray-700 hover:text-red-600 cursor-pointer font-medium">CLIENTS</span>
              <span className="text-gray-700 hover:text-red-600 cursor-pointer font-medium">BLOGS</span>
              <span className="text-gray-700 hover:text-red-600 cursor-pointer font-medium">CONTACT US</span>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <div className="space-y-4">
                <div className="text-gray-700 font-medium">DIGITAL MARKETING +</div>
                <div className="text-gray-700 font-medium">ABOUT US +</div>
                <div className="text-gray-700 font-medium">PORTFOLIO</div>
                <div className="text-gray-700 font-medium">CLIENTS</div>
                <div className="text-gray-700 font-medium">BLOGS</div>
                <div className="text-gray-700 font-medium">CONTACT US</div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-blue-600 font-medium text-sm tracking-wider mb-4">
                SILVER ANT MARKETING
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Award-Winning <span className="text-red-600">Digital Marketing</span><br />
                Driving Growth & Sales!
              </h1>
              
              <div className="text-gray-700 text-lg leading-relaxed mb-8 space-y-4">
                <p>
                  Tired of pouring time and money into marketing that doesn't deliver? We make it simple—real results, no gimmicks. With badges from Clutch, Google, and Shopify, <span className="text-red-600 font-semibold">7+ Years of Industry Experience</span>, <span className="text-red-600 font-semibold">$823M Revenue Generated</span> and a <span className="text-red-600 font-semibold">95% Client Satisfaction Rate</span>, we deliver what works!
                </p>
                <p>
                  <span className="text-red-600 font-semibold">400+ Experts</span>, <span className="text-red-600 font-semibold">5 Global Offices</span>, and <span className="text-red-600 font-semibold">Award-Winning Strategies</span>—our expert Silver Ants help you drive revenue and see real results! Curious how we do it? Talk to us and find out!
                </p>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300">
                Get a Free Proposal
              </button>
            </motion.div>

            {/* Right Content - Dashboard Mockups */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative z-10">
                {/* Main Dashboard */}
                <div className="bg-white rounded-xl shadow-2xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-800">Reports snapshot</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-600">All Users</span>
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">8.4K</div>
                      <div className="text-xs text-gray-500">Active users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">8.2K</div>
                      <div className="text-xs text-gray-500">New users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">1m 57s</div>
                      <div className="text-xs text-gray-500">Average engagement time</div>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="h-32 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg mb-4 relative overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 300 120">
                      <path
                        d="M 0 100 Q 75 20 150 40 T 300 30"
                        stroke="#3B82F6"
                        strokeWidth="3"
                        fill="none"
                      />
                      <path
                        d="M 0 100 Q 75 60 150 70 T 300 50 L 300 120 L 0 120 Z"
                        fill="url(#gradient)"
                        opacity="0.3"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#93C5FD" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <div className="text-right">
                    <div className="inline-flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                      ↗ 24%
                    </div>
                  </div>
                </div>

                {/* Side Dashboard */}
                <div className="absolute -right-4 top-8 bg-white rounded-lg shadow-xl p-4 w-48 z-0">
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-500">ACTIVE USERS IN LAST 30 MINUTES</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-2xl font-bold text-gray-800">16</div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="text-xs text-gray-500 mb-1">ACTIVE USERS PER MINUTE</div>
                    <div className="flex items-end space-x-1 h-8">
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="bg-blue-500 w-1"
                          style={{ height: `${Math.random() * 100 + 20}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-500 mb-2">TOP COUNTRIES</div>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span>United States</span>
                        <span className="font-semibold">8</span>
                      </div>
                      <div className="flex justify-between">
                        <span>France</span>
                        <span className="font-semibold">2</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Germany</span>
                        <span className="font-semibold">1</span>
                      </div>
                      <div className="flex justify-between">
                        <span>India</span>
                        <span className="font-semibold">1</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Malaysia</span>
                        <span className="font-semibold">1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Analytics Panel */}
              <div className="absolute top-4 -left-8 bg-white rounded-lg shadow-lg p-4 w-64 opacity-90">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-current" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Reports snapshot</div>
                    <div className="text-xs text-gray-500">Real-time overview</div>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-gray-600">Business objectives</span>
                  </div>
                  <div className="ml-4 space-y-1 text-xs text-gray-500">
                    <div>→ Generate leads</div>
                    <div>→ Drive sales</div>
                    <div>→ Understand web and/or app u...</div>
                    <div>→ View user engagement cros...</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards/Badges Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex justify-center">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-xs text-gray-400 font-medium">BADGE</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lazy Loaded Sections */}
      {loadedSections.has('services') && (
        <div id="services">
          <ServicesSection />
        </div>
      )}

      {loadedSections.has('clients') && (
        <div id="clients">
          <ClientsSection />
        </div>
      )}

      {loadedSections.has('seo-services') && (
        <div id="seo-services">
          <SEOServicesSection />
        </div>
      )}

      {loadedSections.has('portfolio') && (
        <div id="portfolio">
          <PortfolioSection />
        </div>
      )}

      {loadedSections.has('reviews') && (
        <div id="reviews">
          <ReviewsSection />
        </div>
      )}

      {loadedSections.has('blog') && (
        <div id="blog">
          <BlogSection />
        </div>
      )}

      {loadedSections.has('faq') && (
        <div id="faq">
          <FAQSection />
        </div>
      )}

      {loadedSections.has('contact') && (
        <div id="contact">
          <ContactSection />
        </div>
      )}

      {loadedSections.has('newsletter') && (
        <div id="newsletter">
          <NewsletterSection />
        </div>
      )}

      {loadedSections.has('footer') && (
        <div id="footer">
          <Footer />
        </div>
      )}

      {/* Loading Indicator */}
      {loadingIndicator && (
        <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg z-50">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span className="text-sm">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}

// Import the section components
import ServicesSection from '@/components/Sections/ServicesSection';
import ClientsSection from '@/components/Sections/ClientsSection';
import SEOServicesSection from '@/components/Sections/SEOServicesSection';
import PortfolioSection from '@/components/Sections/PortfolioSection';
import ReviewsSection from '@/components/Sections/ReviewsSection';
import BlogSection from '@/components/Sections/BlogSection';
import FAQSection from '@/components/Sections/FAQSection';
import ContactSection from '@/components/Sections/ContactSection';
import NewsletterSection from '@/components/Sections/NewsletterSection';
import Footer from '@/components/Sections/Footer'; 