'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, TrendingUp, Users, DollarSign, CheckCircle } from 'lucide-react';

const SEOServicesSection = () => {
  const achievements = [
    { icon: <Search className="w-6 h-6" />, value: "5M+", label: "Organic Visits" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "300K+", label: "Keywords Ranking" },
    { icon: <Users className="w-6 h-6" />, value: "200K+", label: "Leads Generated" },
    { icon: <DollarSign className="w-6 h-6" />, value: "$20M+", label: "Revenue" }
  ];

  const processSteps = [
    "Getting to know your business and target audience",
    "Finding the right keywords your customers use",
    "Optimizing website content and usability",
    "Ensuring technical SEO compliance",
    "Creating quality backlinks to increase authority",
    "Regular tracking and strategy adjustments"
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
            Boost Your Website Traffic & Sales
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            SEO (Search Engine Optimization) helps your business become more visible by placing you higher on Google search results so that customers can find you easily. Organic traffic is important because it allows you to build your website on the back of effective strategies that lead to actual customers. Our SEO services drive results, whether that is increasing your online visibility or turning visitors into customers.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Process */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">What Is the Process?</h3>
            <p className="text-lg text-gray-600 mb-8">
              It begins with getting to know your business, and the audience you are targeting. So, we find the right keywords your customers are using to search, we optimize your website for content, usability, and we ensure that it's technically suitable to do well on search engines as well. We also create quality links to your site that increase its authority, regularly track progress and adjust strategies to ensure your site stays ahead of the competition.
            </p>
            
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700">{step}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">What Have We Achieved?</h3>
            <p className="text-lg text-gray-600 mb-8">
              Over 5M+ Organic Visits and we're ranking for 300K+ keywords Generating, 200K+ leads, driving 200K+ eCommerce Transactions, $20M+ Revenue, a Client Satisfaction Rate of 95% proves that our strategies work wonders!
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.value}</div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Boost Your Rankings?</h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let our SEO experts help you climb the search rankings and drive more organic traffic to your website.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Get Free SEO Audit
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEOServicesSection; 