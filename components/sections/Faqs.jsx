'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const faqs = [
  { q: "What services does Unico offer?", a: "Unico offers financial planning, software development, and design solutions tailored to your needs." },
  { q: "Do you offer end-to-end interior design services?", a: "Yes, we provide comprehensive interior design solutions from concept to execution." },
  { q: "Can I get personalized financial advice or portfolio management?", a: "Absolutely! Our experts will tailor a strategy specific to your goals and risk profile." },
  { q: "Can I combine multiple Unico services for a bundled solution?", a: "Yes, you can bundle services for a more integrated and cost-effective solution." },
  { q: "Do I need any prior experience to join your trading coaching programs?", a: "No prior experience is needed. Our coaching starts from the basics." },
  { q: "How experienced is the Unico team?", a: "Our team consists of seasoned professionals with years of industry experience." },
  { q: "What types of software do you develop?", a: "We develop web, mobile, and custom enterprise software tailored to client needs." },
  { q: "Do you work with clients internationally?", a: "Yes, we have global clients and work across time zones seamlessly." },
  { q: "How do I get started with Unico?", a: "Just contact us through our site and we’ll guide you through onboarding." },
];

export default function FaqSection() {
  const [openStates, setOpenStates] = useState(Array(faqs.length).fill(false));
  const toggle = (index) => {
    setOpenStates(prev =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <section className="px-4 py-20 max-w-5xl mx-auto text-center">
      <div className="mb-8">
        <div className='flex justify-center py-8'>
          <h2 className="px-5 py-2 bg-blue-100 text-blue-700 font-semibold rounded-md">What we do</h2>
        </div>
        <h2 className="text-4xl text-slate-900 font-bold mt-4">Frequently Asked Questions</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-4 text-left text-black">
        {faqs.map((item, index) => (
  <div
    key={index}
    className="bg-gray-100 rounded-xl p-4 cursor-pointer hover:bg-gray-200 transition-all"
            onClick={() => toggle(index)}
          >
            <div className="flex items-center justify-between">
              <p className="font-medium text-lg">{item.q}</p>
              <ChevronRight
                className={`transition-transform ${openStates[index] ? 'rotate-90' : ''}`}
              />
            </div>
            <AnimatePresence>
              {openStates[index] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="mt-2 text-gray-600">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}