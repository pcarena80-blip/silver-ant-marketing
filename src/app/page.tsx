'use client';

import React, { useState, useEffect } from 'react';
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
            setLoadedSections((prev: Set<string>) => {
              const newSet = new Set(prev);
              newSet.add(elementId);
              return newSet;
            });
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
  const [digitalMarketingOpen, setDigitalMarketingOpen] = useState(false);
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  const { loadedSections, observeElement, loadingIndicator } = useLazyLoad();

  useEffect(() => {
    // Observe sections for lazy loading
    ['services', 'clients', 'seo-services', 'portfolio', 'reviews', 'blog', 'faq', 'contact', 'newsletter', 'footer'].forEach(observeElement);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle form submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div className="bg-blue-900 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <i className="bi bi-envelope text-white" />
              <span className="text-white">hello@silverantmarketing.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="bi bi-telephone text-white" />
              <span className="text-white">+1 214-247-6882</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <i className="bi bi-facebook text-white hover:text-blue-300 cursor-pointer" />
            <i className="bi bi-linkedin text-white hover:text-blue-300 cursor-pointer" />
            <i className="bi bi-instagram text-white hover:text-pink-300 cursor-pointer" />
            <div className="w-4 h-4 bg-red-600 rounded-sm flex items-center justify-center cursor-pointer">
              <span className="text-white text-xs font-bold">P</span>
            </div>
            <i className="bi bi-youtube text-white hover:text-red-300 cursor-pointer" />
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
                  <div className="flex items-center gap-3">
  <img
    src="https://silverantmarketing.com/wp-content/uploads/2023/10/sam-logo.png"
    alt="Silver Ant Marketing Logo"
    className="w-12 h-12 object-contain"
  />
  <div>
    <div className="text-white font-bold text-lg">sam</div>
    <div className="text-gray-300 text-xs tracking-wider">SILVER ANT</div>
    <div className="text-gray-300 text-xs tracking-wider">MARKETING</div>
  </div>
</div>

              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="relative">
                <div 
                  className="flex items-center space-x-1 text-gray-700 hover:text-red-600 cursor-pointer"
                  onClick={() => setDigitalMarketingOpen(!digitalMarketingOpen)}
                >
                  <span className="font-medium">DIGITAL MARKETING</span>
                  <i className={`bi bi-chevron-down text-red-600 transition-transform ${digitalMarketingOpen ? 'rotate-180' : ''}`} />
                </div>
                {digitalMarketingOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                    <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer" onClick={() => handleScrollToSection('services')}>
                      SEO Services
                    </div>
                    <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer" onClick={() => handleScrollToSection('services')}>
                      PPC Services
                    </div>
                    <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer" onClick={() => handleScrollToSection('services')}>
                      Social Media Marketing
                    </div>
                    <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer" onClick={() => handleScrollToSection('services')}>
                      Web Design & Development
                    </div>
                    <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer" onClick={() => handleScrollToSection('services')}>
                      Content Marketing
                    </div>
                  </div>
                )}
              </div>
              
              <div className="relative">
                <div 
                  className="flex items-center space-x-1 text-gray-700 hover:text-red-600 cursor-pointer"
                  onClick={() => setAboutUsOpen(!aboutUsOpen)}
                >
                  <span className="font-medium">ABOUT US</span>
                  <i className={`bi bi-chevron-down text-red-600 transition-transform ${aboutUsOpen ? 'rotate-180' : ''}`} />
                </div>
                {aboutUsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                    <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                      Our Story
                    </div>
                    <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                      Our Team
                    </div>
                    <div className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                      Our Values
                    </div>
                  </div>
                )}
              </div>
              
              <span 
                className="text-gray-700 hover:text-red-600 cursor-pointer font-medium"
                onClick={() => handleScrollToSection('portfolio')}
              >
                PORTFOLIO
              </span>
              <span 
                className="text-gray-700 hover:text-red-600 cursor-pointer font-medium"
                onClick={() => handleScrollToSection('clients')}
              >
                CLIENTS
              </span>
              <span 
                className="text-gray-700 hover:text-red-600 cursor-pointer font-medium"
                onClick={() => handleScrollToSection('blog')}
              >
                BLOGS
              </span>
              <span 
                className="text-gray-700 hover:text-red-600 cursor-pointer font-medium"
                onClick={() => handleScrollToSection('contact')}
              >
                CONTACT US
              </span>
              <button 
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
                onClick={() => handleScrollToSection('contact')}
              >
                Get a Free Proposal
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <i className="bi bi-x w-6 h-6" /> : <i className="bi bi-list w-6 h-6" />}
            </button>
          </div>

{/* Mobile Menu */}
{isMenuOpen && (
  <div className="lg:hidden border-t border-gray-200 py-4">
    <div className="space-y-4">
      <div className="text-gray-700 font-medium cursor-pointer" onClick={() => handleScrollToSection('services')}>
        DIGITAL MARKETING +
      </div>
      <div className="text-gray-700 font-medium cursor-pointer">
        ABOUT US +
      </div>
      <div className="text-gray-700 font-medium cursor-pointer" onClick={() => handleScrollToSection('portfolio')}>
        PORTFOLIO
      </div>
      <div className="text-gray-700 font-medium cursor-pointer" onClick={() => handleScrollToSection('clients')}>
        CLIENTS
      </div>
      <div className="text-gray-700 font-medium cursor-pointer" onClick={() => handleScrollToSection('blog')}>
        BLOGS
      </div>
      <div className="text-gray-700 font-medium cursor-pointer" onClick={() => handleScrollToSection('contact')}>
        CONTACT US
      </div>
      <button 
        className="bg-red-600 text-white px-6 py-2 rounded-full font-medium"
        onClick={() => handleScrollToSection('contact')}
      >
        Get a Free Proposal
      </button>
    </div>
  </div>
)}
</div>
</nav>

      {/* Hero Section */}
      <section id="hero" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Award-Winning <span className="gradient-text">Digital Marketing</span><br />
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

              <button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300"
                onClick={() => handleScrollToSection('contact')}
              >
                Get a Free Proposal
              </button>

              {/* Small Numbers */}
              <div className="flex space-x-4 mt-8">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-bold">6</div>
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-bold">3</div>
              </div>
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
                <div className="bg-gray-900 rounded-xl shadow-2xl p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-white">Reports snapshot</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-300">All Users</span>
                      <i className="bi bi-chevron-down text-gray-400" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">8.4K</div>
                      <div className="text-xs text-gray-400">Active users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">8.2K</div>
                      <div className="text-xs text-gray-400">New users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">1m 57s</div>
                      <div className="text-xs text-gray-400">Average engagement time</div>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="h-32 bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg mb-4 relative overflow-hidden">
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
                          <stop offset="100%" stopColor="#8B5CF6" />
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
                <div className="absolute -right-4 top-8 bg-gray-800 rounded-lg shadow-xl p-4 w-48 z-0">
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400">ACTIVE USERS IN LAST 30 MINUTES</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-2xl font-bold text-white">16</div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="text-xs text-gray-400 mb-1">ACTIVE USERS PER MINUTE</div>
                    <div className="flex items-end space-x-1 h-8">
                      {[45, 38, 90, 79, 101, 32, 57, 39, 32, 49, 97, 36].map((height, i) => (
                        <div
                          key={i}
                          className="bg-blue-500 w-1"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-400 mb-2">TOP COUNTRIES</div>
                    <div className="space-y-1 text-xs text-gray-300">
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
                    <i className="bi bi-play-fill text-white" />
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-red-600">Our Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a creative agency with years of experience in digital marketing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Email Marketing", desc: "Strengthen your customer relationships. Build stronger bonds with your clients.", icon: "bi-envelope" },
              { title: "Graphic Designing", desc: "Graphics with a Good Visual Style that Help Establish Trust in the Brand.", icon: "bi-palette" },
              { title: "Web Design and Development", desc: "Web Design & Perfect Web Development that gives life to Your Website.", icon: "bi-code-slash" },
              { title: "Search Engine Optimization", desc: "Intensify user engagement and search engine visibility of your site.", icon: "bi-search" },
              { title: "Pay Per Click", desc: "Increase your sales and return on investment to their full potential.", icon: "bi-currency-dollar" },
              { title: "Social Media Marketing", desc: "Boost the interactions with your social media platforms.", icon: "bi-phone" },
              { title: "Content Marketing", desc: "Integrate the strength of content marketing into your strategy to build brand trust.", icon: "bi-file-text" },
              { title: "Video Editing", desc: "Creative expert Video Editing that brings your vision to life!", icon: "bi-camera-video" }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="text-3xl mb-4 text-blue-600">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work With Us / Clients Section */}
      <section id="clients" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-red-600">Work With Us</span><br />
              <span className="text-gray-800">Trusted Partners in Your Success</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With our team's expertise and creative strategies, we'll help your business unlock its true potential, driving steady growth and boosting profits along the way.
            </p>
          </motion.div>

          <div className="text-center mb-12">
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300 mr-4"
              onClick={() => handleScrollToSection('contact')}
            >
              Grow with Us
            </button>
            <button 
              className="bg-transparent border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
              onClick={() => handleScrollToSection('services')}
            >
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "2000+", label: "Projects" },
              { number: "400+", label: "People" },
              { number: "7+", label: "Years" },
              { number: "5", label: "Offices" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center shadow-md"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Digital Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-red-600">Comprehensive Digital Solutions</span><br />
              <span className="text-gray-800">Elevate Your Online Presence with Silver Ant Marketing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Silver Ant Marketing offers a suite of services, including SEO, PPC, SMM, Web Design and Development, graphic design, and Video Editing, to enhance your online presence. Our proven SEO strategies have generated over 5 Million Organic Visits, 200,000+ Leads, and $823M in Revenue, ensuring your business stands out in search results and converts visitors into customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "SEO Services", "PPC Services", "SMM Services", 
              "Web Design & Development", "Graphic Designing", "Video Editing"
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors"
              >
                <div className="text-gray-800 font-medium">{service}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Services Section */}
      <section id="seo-services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-red-600">Boost Your Website Traffic & Sales</span><br />
              <span className="text-gray-800">SEO (Search Engine Optimization)</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              SEO (Search Engine Optimization) helps your business become more visible by placing you higher on Google search results so that customers can find you easily. Organic traffic is important because it allows you to build your website on the back of effective strategies that lead to actual customers. Our SEO services drive results, whether that is increasing your online visibility or turning visitors into customers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">What Is the Process?</h3>
              <p className="text-gray-600 leading-relaxed">
                It begins with getting to know your business, and the audience you are targeting. So, we find the right keywords your customers are using to search, we optimize your website for content, usability, and we ensure that it's technically suitable to do well on search engines as well. We also create quality links to your site that increase its authority, regularly track progress and adjust strategies to ensure your site stays ahead of the competition.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800">What Have We Achieved?</h3>
              <p className="text-gray-600 leading-relaxed">
                Over 5M+ Organic Visits and we're ranking for 300K+ keywords Generating, 200K+ leads, driving 200K+ eCommerce Transactions, $20M+ Revenue, a Client Satisfaction Rate of 95% proves that our strategies work wonders!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-red-600">Reviews</span><br />
              <span className="text-gray-800">Happy Clients & their Experience</span>
            </h2>
            <p className="text-xl text-gray-600">Happy Clients 5 Videos</p>
          </motion.div>

          {/* Video Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
            {[
              "Outspoken Visions", "Firefold", "Dallas Designer Handbags", 
              "Sell Your Bags", "Tomken Veterinary Hospital"
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-100 rounded-lg p-4 text-center"
              >
                <div className="w-full h-24 bg-gray-300 rounded mb-2 flex items-center justify-center">
                  <i className="bi bi-play-circle text-gray-600 text-3xl"></i>
                </div>
                <div className="text-sm font-medium text-gray-800">{client}</div>
                <div className="text-xs text-gray-500">0:16</div>
              </motion.div>
            ))}
          </div>

          {/* Video Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gray-50 rounded-lg p-6 mb-12"
          >
            <p className="text-gray-700">
              <strong>Description:</strong> Outspoken Visions entrusted us to bolster their online presence. Since their joining in June 2020, we've spearheaded a dynamic SEO strategy that's yielded remarkable results. In just over a year, Outspoken Visions witnessed a 114% surge in Organic Traffic, while leads skyrocketed by an impressive 84%. The Domain Authority saw an exponential surge, leaping by an astounding 300%. We revamped the website structure, introduced new service pages, and strategically targeted diverse locations with tailored landing pages.
            </p>
          </motion.div>

          {/* Text Testimonials */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Trusted by Businesses That Value Real Growth</h3>
            <p className="text-xl text-gray-600 mb-8">Testimonial</p>
            <p className="text-lg text-gray-700 italic mb-8">
              "Our clients consistently experience measurable success with our tailored digital marketing strategies."
            </p>
          </div>

          {/* Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Main Review Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-2 bg-white rounded-lg shadow-lg p-6 border border-gray-200"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">G</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Google</div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Silver Ant Marketing has been instrumental in our digital growth. Their expertise and dedication have helped us achieve remarkable results."
              </p>
              <div className="text-sm text-gray-500">- sharon vasallo</div>
            </motion.div>

            {/* Other Review Cards */}
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
              >
                <div className="flex items-center mb-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-2">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                  <div className="text-sm font-medium text-gray-800">google review {9 - index}</div>
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bi bi-star text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Review Platforms */}
          <div className="flex justify-center space-x-8 mt-8">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">G</span>
              </div>
              <span className="text-gray-700 font-medium">Google Reviews</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">C</span>
              </div>
              <span className="text-gray-700 font-medium">Clutch Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner with SAM Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-red-600">We're Running Business Successfully Since 2017!</span><br />
              <span className="text-gray-800">Silver Ant Marketing</span><br />
              <span className="text-gray-800">Why Partner with SAM?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Are you having a hard time growing your company? Silver Ant Marketing is your one-stop shop for all your digital marketing needs. We're here to talk and help you out with everything you need! SAM has been a huge success, with clients giving it high marks and Google and Facebook seeing it as a reliable partner, all because of its continuous, high-quality outcomes.
            </p>
          </motion.div>

          <div className="flex justify-center space-x-8 mb-8">
            <div className="bg-white rounded-lg px-6 py-3 shadow-md">
              <span className="text-gray-700 font-medium">27 techBehemoths</span>
            </div>
            <div className="bg-blue-600 text-white rounded-lg px-6 py-3 shadow-md">
              <span className="font-medium">Free Consultation Today</span>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300">
              Talk To Us
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-red-600">Our Portfolio</span><br />
              <span className="text-gray-800">Our Digital Marketing Projects Driving Real Results!</span>
            </h2>
            <button 
              className="bg-transparent border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
              onClick={() => handleScrollToSection('portfolio')}
            >
              See More
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "SEO US Jewels",
                desc: "US Jewels' organic traffic grew by 54% through strategic SEO efforts.",
                result: "54% Increase in Organic Traffic",
                type: "SEO"
              },
              {
                title: "SEO Wild About Carts",
                desc: "Online sales grew 30% with improved visibility and user experience.",
                result: "30% Online sales increased",
                type: "SEO"
              },
              {
                title: "SMM FireFold",
                desc: "FireFold is an ecommerce business providing reliable Technology Solutions all over the US",
                result: "20X Return on Ad Spend",
                type: "SMM"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-blue-600">{project.type}</span>
                </div>
                <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-gray-500">📱 💻 🖥️</div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.desc}</p>
                <div className="text-sm font-semibold text-green-600">{project.result}</div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300"
              onClick={() => handleScrollToSection('contact')}
            >
              Get a Free Proposal
            </button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-red-600">Our Blogs</span><br />
              <span className="text-gray-800">Latest News</span>
            </h2>
            <button 
              className="bg-transparent border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300"
              onClick={() => handleScrollToSection('blog')}
            >
              More News
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "How to Find the Right Audience to Buy from Your Online Store",
                category: "Key SEO Tips",
                readTime: "7 min read",
                type: "Insight"
              },
              {
                title: "How to Make Your Website Stand Out in Search Results – Key SEO Tips",
                category: "SEO",
                readTime: "8 min read",
                type: "SEO"
              },
              {
                title: "Struggling to Rank on Google? Learn the Core SEO Strategies That Work",
                category: "SEO",
                readTime: "6 min read",
                type: "SEO"
              }
            ].map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <div className="text-gray-500">👤 💻</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600">{post.type}</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{post.title}</h3>
                  <span className="text-sm text-gray-600">{post.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-red-600">Your Questions Answered</span><br />
              <span className="text-gray-800">Frequently Asked Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "What is Silver Ant Marketing?",
                answer: "Silver Ant Marketing is a performance-driven digital agency that works with the precision and persistence of an ant colony. We specialize in SEO, PPC, social media, and web development to help businesses stand out in today's competitive digital space."
              },
              {
                question: "What services does Silver Ant offer?",
                answer: "Silver Ant offers a full suite of digital marketing services, including Search Engine Optimization (SEO), Pay-Per-Click (PPC) Advertising, Social Media Marketing, Website Design & Development, and more."
              },
              {
                question: "How does Silver Ant help businesses grow?",
                answer: "Like ants building their colony, Silver Ant builds your brand presence step by step—using data, strategy, and relentless effort. Our clients typically see a 30–50% increase in organic traffic within the first few months."
              },
              {
                question: "Why choose Silver Ant?",
                answer: "Silver Ant isn't just another agency—we're your digital growth partners. Our team operates with ant-like discipline and collaboration to deliver results that matter. With a client retention rate of 92%, we believe in long-term partnerships."
              },
              {
                question: "How do I get started with Silver Ant?",
                answer: "Getting started is easy! Simply contact us through our website or give us a call. We'll schedule a free consultation to discuss your business goals and create a customized digital marketing strategy."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600 text-white">
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
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for your message! We will get back to you soon.');
              }}>
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
                  className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

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
                    <i className="bi bi-envelope text-blue-200" />
                    <span>hello@silverantmarketing.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <i className="bi bi-telephone text-blue-200" />
                    <span>+1 214-247-6882</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <i className="bi bi-geo-alt text-blue-200" />
                    <span>100 N Central Expy Suite 914/1 Main, Richardson, TX 75080, United States</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section id="contact" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-red-300">Feel free to get in touch!</span><br />
              <span className="text-white">Contact Us</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Have questions? Get in touch!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <i className="bi bi-geo-alt w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-blue-100">
                100 N Central Expy Suite 914/1 Main, Richardson, TX 75080, United States
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <i className="bi bi-envelope w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-blue-100">hello@silverantmarketing.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <i className="bi bi-telephone w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-blue-100">+1 214-247-6882</p>
            </motion.div>
          </div>

          <div className="flex justify-center space-x-6 mt-12">
            <i className="bi bi-facebook w-8 h-8 text-white hover:text-blue-200 cursor-pointer" />
            <i className="bi bi-linkedin w-8 h-8 text-white hover:text-blue-200 cursor-pointer" />
            <i className="bi bi-instagram w-8 h-8 text-white hover:text-blue-200 cursor-pointer" />
            <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center cursor-pointer">
              <span className="text-white text-xs font-bold">P</span>
            </div>
            <i className="bi bi-youtube w-8 h-8 text-white hover:text-blue-200 cursor-pointer" />
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-red-600">Fresh Daily Posts</span><br />
              <span className="text-gray-800">Instagram Feeds</span>
            </h2>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300">
              Follow Us on Instagram
            </button>
          </motion.div>

          <div className="grid grid-cols-3 md:grid-cols-9 gap-4">
            {[...Array(9)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center"
              >
                <i className="bi bi-camera text-gray-500 text-2xl"></i>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Silver Ant Marketing</h3>
              <p className="text-gray-400 mb-4">
                Silver Ant Marketing specializes in delivering innovative digital marketing solutions, helping businesses thrive online.
              </p>
              <div className="text-gray-400 space-y-2">
                <p>hello@silverantmarketing.com</p>
                <p>+1 469-638-3300</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Information</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Home</li>
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Contact</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>SEO Service</li>
                <li>PPC Service</li>
                <li>SMM Service</li>
                <li>Content Marketing</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Tools</h4>
              <ul className="space-y-2 text-gray-400">
                <li>CPA Calculator</li>
                <li>CPC Calculator</li>
                <li>Password Generator</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>Silver Ant Marketing © 2025 All rights reserved. | Privacy Policy</p>
          </div>
        </div>
      </footer>

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
