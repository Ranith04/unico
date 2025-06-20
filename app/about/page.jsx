"use client";

import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      title: 'Website Development',
      desc: 'Provide users with in-depth insights into their data through real-time analytics reporting tools feature empowers.',
    },
    {
      title: 'App Development',
      desc: 'Showcase your software’ ability to easily integrate with the other platforms and tools, ensuring that businesses.',
    },
    {
      title: 'Maintenance',
      desc: 'Emphasize how your SaaS solution can grow with clients\' business. Whether they need to scale up for growth or stability.',
    },
  ]
  return (
    <div className="w-full bg-white">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full min-h-[130vh] flex flex-col gap-8 items-center justify-start bg-gradient-to-r from-black via-[#0f172a] to-blue-500 text-center px-4 py-12 mb-10"
      >
        <div className='flex flex-col items-center py-10'>
          <motion.span
            className="mb-6 px-6 py-2 bg-[#3396F620] text-white font-medium rounded-lg transition border border-blue-400 w-fit"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            Our Story
          </motion.span>
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-4 max-w-md leading-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            About Unico International
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            We are dedicated to deliver tailored solutions for your Tech Needs.
          </motion.p>
        </div>
        <motion.img 
          src='/assets/about-hero.png' 
          alt='Hero Image'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-[80%] h-auto rounded-lg absolute -bottom-28"
        />
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='mt-24 border w-full py-10'
      >
        <div className='flex justify-center py-8'>
          <h2 className="px-5 py-2 bg-blue-100 text-blue-700 font-semibold rounded-md">Why Choose Us</h2>
        </div>
        <p className="text-4xl text-gray-900 font-semibold mx-auto text-center w-full md:max-w-[50%]">
          We understand your vision and turn it into reality.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 max-w-6xl mx-auto px-4 md:px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="w-full">
              <motion.img
                src="/assets/about-section1.avif" 
                alt="Team Discussion"
                className="rounded-xl w-full h-auto object-cover shadow"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>
            <div className="space-y-6">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
