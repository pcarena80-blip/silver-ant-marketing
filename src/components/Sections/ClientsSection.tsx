'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, TrendingUp } from 'lucide-react';

const ClientsSection = () => {
  const stats = [
    { icon: <Target className="w-8 h-8" />, value: "2000+", label: "Projects" },
    { icon: <Users className="w-8 h-8" />, value: "400+", label: "People" },
    { icon: <Award className="w-8 h-8" />, value: "7+", label: "Years" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "5", label: "Offices" }
  ];

  const clients = [
    { name: "Client 1", logo: "🏢" },
    { name: "Client 2", logo: "🏢" },
    { name: "Client 3", logo: "🏢" },
    { name: "Client 4", logo: "🏢" },
    { name: "Client 5", logo: "🏢" },
    { name: "Client 6", logo: "🏢" }
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
            Trusted Partners in Your Success
          </h2>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Clients</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With our team's expertise and creative strategies, we'll help your business unlock its true potential, driving steady growth and boosting profits along the way.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{client.logo}</div>
              <div className="text-sm font-medium text-gray-700">{client.name}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Grow with Us</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of successful businesses that trust Silver Ant Marketing to drive their digital growth.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection; 