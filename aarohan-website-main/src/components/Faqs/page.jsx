"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "When is Aarohan '25 conducted?",
    answer: "Aarohan '25 will be held on March 20th, 21st, 22nd, and 23rd.",
  },
  {
    id: 2,
    question: "Where is Aarohan '25 held?",
    answer: "The event will be hosted at Lords Arena, NIT Durgapur.",
  },
  {
    id: 3,
    question: "How can I register for the event?",
    answer:
      "You can register through our official website by filling out the form.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    exit: { opacity: 0, y: -50 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit="exit"
      variants={containerVariants}
      viewport={{ once: false, margin: "0px 0px -100px 0px" }}
      className="h-70vh text-white flex flex-col items-center justify-center pb-20 px-4 md:px-8"
    >
      <motion.h1
        variants={itemVariants}
        className="text-7xl md:text-8xl font-extrabold mb-12 text-[#F5F1E3] tracking-tight"
      >
        FAQs
      </motion.h1>
      <motion.div
        className="w-full max-w-4xl space-y-4"
        variants={containerVariants}
      >
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              className={`border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 ${isOpen ? "bg-[#250909]" : "bg-[#1A0303] hover:bg-[#1F0404]"
                }`}
            >
              <div
                className="flex justify-between items-center p-6 cursor-pointer transition-all duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-white/20" : "bg-white/10"
                      }`}
                  >
                    <span className="text-sm font-mono">{index + 1}</span>
                  </div>
                  <h2
                    className={`text-lg md:text-2xl font-bold transition-all duration-300 ${isOpen ? "text-white" : "text-gray-400"
                      }`}
                  >
                    {faq.question}
                  </h2>
                </div>
                <div className="transition-transform duration-300 ease-in-out">
                  {isOpen ? (
                    <ChevronUp size={24} className="text-white" />
                  ) : (
                    <ChevronDown size={24} className="text-gray-500" />
                  )}
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40" : "max-h-0"
                  }`}
              >
                <div className="p-6 pt-0 text-gray-300">{faq.answer}</div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
