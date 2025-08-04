'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Eye } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      category: "Insight",
      title: "How to Find the Right Audience to Buy from Your Online Store",
      readTime: "7 min read",
      image: "📊"
    },
    {
      category: "SEO",
      title: "How to Make Your Website Stand Out in Search Results – Key SEO Tips",
      readTime: "8 min read",
      image: "🔍"
    },
    {
      category: "SEO",
      title: "Struggling to Rank on Google? Learn the Core SEO Strategies That Work",
      readTime: "6 min read",
      image: "📈"
    }
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
            Our <span className="text-red-600">Blogs</span>
          </h2>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Latest News</h3>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-6xl">
                {post.image}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">
                  {post.title}
                </h3>
                <button className="text-red-600 font-semibold hover:text-red-700 transition-colors duration-300 flex items-center space-x-2">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300">
            More News
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection; 