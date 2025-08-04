'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Play, Quote } from 'lucide-react';

const ReviewsSection = () => {
  const videoReviews = [
    {
      name: "Outspoken Visions",
      duration: "0:16",
      description: "Outspoken Visions entrusted us to bolster their online presence. Since their joining in June 2020, we've spearheaded a dynamic SEO strategy that's yielded remarkable results. In just over a year, Outspoken Visions witnessed a 114% surge in Organic Traffic, while leads skyrocketed by an impressive 84%. The Domain Authority saw an exponential surge, leaping by an astounding 300%. We revamped the website structure, introduced new service pages, and strategically targeted diverse locations with tailored landing pages."
    },
    {
      name: "Firefold",
      duration: "0:16",
      description: "Firefold is an ecommerce business providing reliable Technology Solutions all over the US"
    },
    {
      name: "Dallas Designer Handbags",
      duration: "0:16",
      description: "Premium designer handbags and accessories"
    },
    {
      name: "Sell Your Bags",
      duration: "0:16",
      description: "Buy and sell designer bags platform"
    },
    {
      name: "Tomken Veterinary Hospital",
      duration: "0:16",
      description: "Professional veterinary care services"
    }
  ];

  const textReviews = [
    {
      name: "Google Review 1",
      rating: 5,
      content: "Outstanding results and professional service! Silver Ant Marketing delivered exactly what they promised."
    },
    {
      name: "Google Review 2",
      rating: 5,
      content: "Exceeded our expectations in every way. Our organic traffic increased by 200% in just 6 months."
    },
    {
      name: "Clutch Review 1",
      rating: 5,
      content: "Highly recommended for digital marketing needs. The team is responsive and results-driven."
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
            Reviews
          </h2>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Happy Clients & their Experience</h3>
        </motion.div>

        {/* Video Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="relative mb-4">
                  <div className="w-full h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-white fill-current" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {review.duration}
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{review.name}</h4>
                <p className="text-sm text-gray-600 line-clamp-3">{review.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Text Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {textReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-blue-600 mr-3" />
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.content}"</p>
                <div className="font-semibold text-gray-900">{review.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">Google Reviews</div>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">Clutch Reviews</div>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection; 