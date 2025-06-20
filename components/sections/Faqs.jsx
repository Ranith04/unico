'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What services does Unico offer?",
    answer: "Unico provides comprehensive multi-domain solutions including software development, financial portfolio management, education and training programs, and interior design services. We serve both businesses and individuals with tailored solutions."
  },
  {
    question: "Do you offer end-to-end software development services?",
    answer: "Yes, we provide complete software development services from initial consultation and design to development, testing, deployment, and ongoing maintenance. We work with web, mobile, and desktop applications using modern technologies."
  },
  {
    question: "Can I get personalized financial advice and portfolio management?",
    answer: "Absolutely! We offer personalized portfolio management services with dedicated financial advisors, real-time tracking tools, risk assessment, and customized investment strategies tailored to your financial goals."
  },
  {
    question: "Can I combine multiple Unico services for a bundled solution?",
    answer: "Yes, we specialize in integrated solutions. Many of our clients benefit from combining our services - for example, businesses often use our software development, interior design, and corporate training services together for comprehensive transformation."
  },
  {
    question: "Do I need any prior experience for your training programs?",
    answer: "Not at all! Our education and training programs are designed for all skill levels. We offer beginner-friendly courses as well as advanced programs for professionals. Our instructors tailor the learning experience to your current knowledge level."
  },
  {
    question: "How experienced is the Unico team?",
    answer: "Our team consists of seasoned professionals with extensive experience across all our service domains. We have software engineers, financial advisors, certified trainers, and interior designers with proven track records in their respective fields."
  },
  {
    question: "What types of software do you develop?",
    answer: "We develop a wide range of software solutions including web applications, mobile apps (iOS and Android), desktop applications, enterprise software, e-commerce platforms, and custom business management systems."
  },
  {
    question: "Do you work with clients internationally?",
    answer: "Yes, while we're based in India, we work with clients globally. Our digital-first approach allows us to provide software development, portfolio management, and education services to international clients effectively."
  },
  {
    question: "How do I get started with Unico?",
    answer: "Getting started is easy! Contact us through our website, email, or phone. We'll schedule a consultation to understand your needs and recommend the best services for your goals. We offer free initial consultations for all our service areas."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold">
              What we do
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and how we can help transform your business
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 text-lg pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-200" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200" />
                )}
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-100"
                >
                  <div className="px-6 py-5">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}