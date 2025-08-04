'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';

const faqData = [
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
  }
];

interface FAQSectionProps {
  isLoaded: boolean;
  observeElement: (element: HTMLElement, sectionId: string) => void;
}

export default function FAQSection({ isLoaded, observeElement }: FAQSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      observeElement(sectionRef.current, 'faq');
    }
  }, [observeElement]);

  if (!isLoaded) {
    return (
      <section ref={sectionRef} id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-6 animate-pulse">
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Get answers to the most common questions about our services.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={cn(
                    "text-gray-500 transition-transform",
                    openFaq === index && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 