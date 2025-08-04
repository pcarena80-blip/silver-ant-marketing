'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Target, Share2, FileText, Mail, Palette, Video, Globe, BarChart3, Users, Zap, TrendingUp } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Services",
      description: "Local SEO, Technical SEO, Franchise SEO, Enterprise SEO",
      features: ["Local SEO Services", "Technical SEO Services", "Franchise SEO Services", "Enterprise SEO Services"],
      color: "bg-blue-500"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "PPC Services",
      description: "Google Ads Management, Search Ads, Display Ads, Shopping Ads",
      features: ["Google Ads Management", "Google Ads Strategy", "Search Ads", "Display Ads", "Shopping Ads", "YouTube Ads", "Ecommerce Ads", "Lead Generation PPC", "Local Service Ads (LSAs)", "Bing Ads (Microsoft Ads)"],
      color: "bg-red-500"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "SMM Services",
      description: "Social Media Management, Advertising, Enterprise Solutions",
      features: ["Social Media Management Services", "Social Media Advertising Services", "Enterprise Social Media Services"],
      color: "bg-purple-500"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Content Marketing Services",
      description: "Strategic content creation and distribution",
      color: "bg-green-500"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Marketing Services",
      description: "Email campaigns and automation",
      color: "bg-yellow-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Graphic Designing Services",
      description: "Visual design and branding",
      color: "bg-pink-500"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Editing Services",
      description: "Professional video production and editing",
      color: "bg-indigo-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Design and Development Services",
      description: "Custom websites and web applications",
      color: "bg-teal-500"
    }
  ];

  const stats = [
    { icon: <BarChart3 className="w-6 h-6" />, value: "7+", label: "Years Experience" },
    { icon: <Users className="w-6 h-6" />, value: "400+", label: "Experts" },
    { icon: <Zap className="w-6 h-6" />, value: "5", label: "Global Offices" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "95%", label: "Client Satisfaction" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-red-600">Digital Marketing</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're Running Business Successfully Since 2017! Silver Ant Marketing is your one-stop shop for all your digital marketing needs.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center text-white mb-6`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              {service.features && (
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              
              <button className="mt-6 text-red-600 font-semibold hover:text-red-700 transition-colors duration-300">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Why Partner with SAM?</h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Are you having a hard time growing your company? We're here to talk and help you out with everything you need! 
              SAM has been a huge success, with clients giving it high marks and Google and Facebook seeing it as a reliable partner.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Free Consultation Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection; 