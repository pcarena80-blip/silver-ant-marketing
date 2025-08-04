'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Target } from 'lucide-react';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      category: "SEO",
      client: "US Jewels",
      description: "US Jewels' organic traffic grew by 54% through strategic SEO efforts.",
      metric: "54%",
      metricLabel: "Increase in Organic Traffic",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      category: "SEO",
      client: "Wild About Carts",
      description: "Online sales grew 30% with improved visibility and user experience.",
      metric: "30%",
      metricLabel: "Online sales increased",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      category: "SMM",
      client: "FireFold",
      description: "FireFold is an ecommerce business providing reliable Technology Solutions all over the US",
      metric: "20X",
      metricLabel: "Return on Ad Spend",
      icon: <Target className="w-6 h-6" />
    }
  ];

  const testimonials = [
    {
      name: "Google Review 1",
      rating: 5,
      content: "Outstanding results and professional service!"
    },
    {
      name: "Google Review 2", 
      rating: 5,
      content: "Exceeded our expectations in every way."
    },
    {
      name: "Clutch Review 1",
      rating: 5,
      content: "Highly recommended for digital marketing needs."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-red-600">Digital Marketing</span> Projects Driving Real Results!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by Businesses That Value Real Growth
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                  {item.category}
                </span>
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                  {item.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.client}</h3>
              <p className="text-gray-600 mb-6">{item.description}</p>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-1">{item.metric}</div>
                <div className="text-sm text-gray-500">{item.metricLabel}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Testimonial</h3>
            <p className="text-xl text-gray-600">
              Our clients consistently experience measurable success with our tailored digital marketing strategies.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-yellow-400 rounded-full mx-1"></div>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Trusted by Leading Platforms</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="flex justify-center">
              <div className="w-24 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-sm text-gray-500 font-medium">Google</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-24 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-sm text-gray-500 font-medium">Clutch</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-24 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-sm text-gray-500 font-medium">Shopify</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-24 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-sm text-gray-500 font-medium">Facebook</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300">
            Get a Free Proposal
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection; 