"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";
import Image from "next/image";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What services does Sunrise IT Company offer?",
      answer:
        "We provide comprehensive IT solutions including custom software development, cloud services, cybersecurity, AI/ML integration, digital transformation consulting, and 24/7 IT support to drive your business forward.",
    },
    {
      id: 2,
      question: "How does Sunrise IT ensure data security?",
      answer:
        "We implement multi-layered security protocols including end-to-end encryption, regular security audits, compliance with international standards (ISO 27001, GDPR), and advanced threat detection systems to protect your valuable data.",
    },
    {
      id: 3,
      question: "What is your project development process?",
      answer:
        "Our agile methodology includes discovery & planning, design prototyping, development sprints, quality assurance testing, deployment, and continuous maintenance with regular progress updates and client collaboration.",
    },
    {
      id: 4,
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer comprehensive post-launch support including bug fixes, performance optimization, feature updates, and 24/7 technical assistance with flexible support packages tailored to your needs.",
    },
    {
      id: 5,
      question: "How can I get started with Sunrise IT Company?",
      answer:
        "Simply contact us through our website, email, or phone. We'll schedule a free consultation to understand your requirements and provide a customized proposal with timeline and pricing details.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className=" bg-white py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-cyan-50/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}    
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-light leading-relaxed bg-gradient-to-r from-cyan-600 to-blue-900 bg-clip-text text-transparent mb-6">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Main Image Container */}
              <div className="aspect-square bg-gradient-to-br from-cyan-50 to-blue-100 rounded-3xl flex items-center justify-center p-8 relative">
                {/* Background Pattern */}
                {/* <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 left-10 w-32 h-32 border-4 border-cyan-400 rounded-full"></div>
                  <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-blue-600 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-4 border-cyan-300 rounded-full"></div>
                </div> */}

                {/* Image from Public Folder */}
                <div className="relative z-10 text-center">
                  <div className="relative inline-block">
                    <Image
                      src="/img.jpg"
                      alt="FAQ Illustration"
                      width={100}
                      height={100}
                      className="w-64 h-64 object-cover rounded-2xl shadow-lg mx-auto"
                    //   whileHover={{ scale: 1.05 }}
                    //   transition={{ duration: 0.3 }}
                    />
                    {/* Fallback if image doesn't exist */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg">
                      <div className="text-center text-white p-8">
                        <FaQuestionCircle className="w-20 h-20 mx-auto mb-4" />
                        <p className="text-lg font-semibold">
                          FAQ Illustration
                        </p>
                        {/* <p className="text-sm opacity-80 mt-2">Add your image to public folder</p> */}
                      </div>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-4 -right-4 w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center shadow-lg"
                  >
                    <FaQuestionCircle className="w-8 h-8 text-white" />
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, 10, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg"
                  >
                    <FaQuestionCircle className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Section - FAQs - Kept exactly as before */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {faqData.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left cursor-pointer flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-cyan-500/20 rounded-2xl"
                >
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center"
                  >
                    <FaChevronDown className="w-4 h-4 text-white" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4" />
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
