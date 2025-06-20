"use client";

import OurServicesSection from '@/components/sections/ServiceSection';
import FaqSection from '@/components/sections/Faqs';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import ReachOutCard from '@/components/sections/ReachedOutCard';

const data1 = [
  { name: 'Apr 30', a: 30, b: 18 },
  { name: 'May 5', a: 40, b: 20 },
  { name: 'May 10', a: 35, b: 22 },
  { name: 'May 15', a: 50, b: 28 },
  { name: 'May 20', a: 60, b: 30 },
  { name: 'May 25', a: 55, b: 32 },
  { name: 'May 30', a: 48, b: 34 },
];

const data2 = [
  { name: 'Mon', today: 10, yesterday: 14 },
  { name: 'Tue', today: 11, yesterday: 15 },
  { name: 'Wed', today: 14, yesterday: 15 },
  { name: 'Thu', today: 25, yesterday: 20 },
  { name: 'Fri', today: 40, yesterday: 21 },
  { name: 'Sat', today: 38, yesterday: 25 },
  { name: 'Sun', today: 39, yesterday: 30 },
];

const PortFolioManagement = () => {
  const features = [
    {
      title: 'Personalized Strategies',
      desc: 'Tailored investment plans designed to meet your unique financial objectives and risk profile.',
    },
    {
      title: 'Ongoing Optimization',
      desc: 'Continuous monitoring and adjustments to ensure your portfolio adapts to market changes and stays aligned with your goals.',
    },
  ];

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
            pfm
          </motion.span>
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-4 max-w-md leading-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Portfolio Management
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Streamline your finance, manage projects, and empower your team with Findays the all-in-one finance.
          </motion.p>
        </div>
        <motion.img
          src='/assets/portfolio-hero.avif'
          alt='Hero Image'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-[80%] h-auto rounded-lg absolute -bottom-28"
        />
      </motion.section>
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center mt-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center w-full"
        >
          <div className="bg-blue-50 p-6 rounded-2xl shadow-md w-full max-w-md">
            <motion.img
              src="/assets/portfolio-chart1.svg"
              alt="Usage Chart"
              className="rounded-xl w-full"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900">
            Comprehensive portfolio management solutions tailored to your goals
          </h2>
          <p className="text-gray-600 mb-8">
            Our comprehensive portfolio management solutions create personalized strategies to meet your unique financial goals. We continuously optimize your investments to ensure growth and minimize risk in a dynamic market.
          </p>
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
        </motion.div>
      </section>
      <OurServicesSection />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='mt-24 border w-full py-10'
      >
        <div className='flex justify-center py-8'>
          <h2 className="px-5 py-2 bg-blue-100 text-blue-700 font-semibold rounded-md">What we do</h2>
        </div>
        <p className="text-4xl text-gray-900 font-semibold mx-auto text-center w-full md:max-w-[50%]">
          Optimize Your Workflow with Our Core Features
        </p>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 my-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-blue-500 rounded-2xl p-6 text-white"
          >
            <h3 className="text-2xl font-semibold my-4">Savings Goals</h3>
            <p className="mb-6 mt-4">
              Security measures ensure that your information is safeguarded against unauthorized access.
            </p>
            <div className="bg-white rounded-xl p-4">
              <h4 className="text-gray-800 text-lg font-semibold text-center">Revenue Overview</h4>
              <p className="text-sm text-gray-500 text-center mb-4">Apr 30 - May 30</p>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={data1}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="a" stroke="#1e90ff" name="Product A" fillOpacity={0.3} />
                  <Line type="monotone" dataKey="b" stroke="#38bdf8" name="Product B" fillOpacity={0.3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-black text-white rounded-2xl p-6"
          >
            <h3 className="text-2xl font-semibold my-4">Expense Tracking</h3>
            <p className="mb-6 mt-4 text-white/80">
              We provide recommendations. Create and stick to budgets that help you stay on track with your financial goals.
            </p>
            <div className="bg-white rounded-xl p-4">
              <h4 className="text-gray-800 text-lg font-semibold text-center">Website Stats Activity</h4>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data2}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="today" stroke="#0ea5e9" name="Today" />
                  <Line type="monotone" dataKey="yesterday" stroke="#22d3ee" name="Yesterday" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <FaqSection/>
      <ReachOutCard/>
    </div>
  );
};

export default PortFolioManagement;