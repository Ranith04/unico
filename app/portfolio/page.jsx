"use client";

import OurServicesSection from '@/components/sections/ServiceSection';
import FaqSection from '@/components/sections/Faqs';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import ReachOutCard from '@/components/sections/ReachedOutCard';
import { useState, useEffect } from 'react';

const data1 = [
  { name: 'Apr 30', portfolio: 30, benchmark: 18 },
  { name: 'May 5', portfolio: 40, benchmark: 20 },
  { name: 'May 10', portfolio: 35, benchmark: 22 },
  { name: 'May 15', portfolio: 50, benchmark: 28 },
  { name: 'May 20', portfolio: 60, benchmark: 30 },
  { name: 'May 25', portfolio: 55, benchmark: 32 },
  { name: 'May 30', portfolio: 65, benchmark: 34 },
];

const data2 = [
  { name: 'Q1', returns: 12, market: 8 },
  { name: 'Q2', returns: 18, market: 12 },
  { name: 'Q3', returns: 25, market: 15 },
  { name: 'Q4', returns: 32, market: 20 },
];

const PortFolioManagement = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const portfolioStats = [
    { label: "Total Assets", value: "$2.4M", change: "+12.5%", trend: "up" },
    { label: "YTD Returns", value: "18.7%", change: "+3.2%", trend: "up" },
    { label: "Active Positions", value: "47", change: "+5", trend: "up" },
    { label: "Risk Score", value: "7.2/10", change: "-0.3", trend: "down" },
  ];

  const features = [
    {
      title: 'AI-Powered Analytics',
      desc: 'Advanced machine learning algorithms analyze market trends and optimize your portfolio in real-time.',
      icon: '🤖',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Risk Management',
      desc: 'Sophisticated risk assessment tools protect your investments with dynamic hedging strategies.',
      icon: '🛡️',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Global Diversification',
      desc: 'Access to international markets and alternative investments for optimal portfolio balance.',
      icon: '🌍',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Real-time Monitoring',
      desc: 'Live portfolio tracking with instant alerts and automated rebalancing capabilities.',
      icon: '📊',
      gradient: 'from-orange-500 to-red-500'
    },
  ];

  return (
    <div className="w-full bg-black text-white overflow-hidden">
      {/* 3D Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20">
        {/* Floating 3D Background Elements */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          style={{
            transform: `rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`
          }}
        >
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-full blur-xl"></div>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, z: -100 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20"
          style={{ perspective: '1000px' }}
        >
          {/* Hero Content */}
          <motion.div 
            className="text-center max-w-4xl"
            style={{
              transform: `rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
            <motion.span
              className="mb-8 px-8 py-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm text-white font-semibold rounded-full border border-purple-500/30 inline-block"
              initial={{ opacity: 0, scale: 0.8, z: -50 }}
              animate={{ opacity: 1, scale: 1, z: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              whileHover={{ scale: 1.05, z: 20 }}
            >
              ✨ Next-Gen Portfolio Management
            </motion.span>

            <motion.h1
              className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, y: 50, z: -100 }}
              animate={{ opacity: 1, y: 0, z: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ transform: 'translateZ(50px)' }}
            >
              3D Portfolio
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Management
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              style={{ transform: 'translateZ(25px)' }}
            >
              Experience the future of wealth management with our revolutionary 3D visualization platform. Monitor, analyze, and optimize your investments like never before.
            </motion.p>

            {/* 3D CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, z: 30, rotateX: 5 }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                Launch 3D Dashboard
              </motion.button>
              <motion.button
                className="px-8 py-4 border border-gray-600 rounded-xl font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, z: 30, rotateX: 5 }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>

          {/* 3D Stats Cards */}
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {portfolioStats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-center"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: `rotateX(${mousePosition.y * 3}deg) rotateY(${mousePosition.x * 3}deg)`
                }}
                whileHover={{ 
                  scale: 1.05, 
                  z: 50,
                  rotateX: 10,
                  boxShadow: '0 25px 50px rgba(139, 69, 255, 0.3)'
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-sm text-gray-400 mb-2">{stat.label}</h3>
                <p className="text-2xl font-bold mb-1">{stat.value}</p>
                <span className={`text-sm ${stat.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.change}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>

      {/* 3D Features Section */}
      <motion.section 
        className="py-32 px-6 relative"
        style={{ y: y1 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Powered by cutting-edge technology and designed for the modern investor
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 60, rotateX: -45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 15,
                  z: 50
                }}
                style={{ 
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <div className={`bg-gradient-to-br ${feature.gradient} p-0.5 rounded-2xl h-full`}>
                  <div className="bg-black/90 backdrop-blur-xl rounded-2xl p-8 h-full flex flex-col">
                    <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed flex-1">{feature.desc}</p>
                    
                    {/* 3D Learn More Button */}
                    <motion.button
                      className="mt-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 font-semibold hover:bg-white/20 transition-all duration-300"
                      whileHover={{ scale: 1.05, z: 20 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 3D Charts Section */}
      <motion.section 
        className="py-32 px-6 relative"
        style={{ y: y2 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Live Analytics
            </h2>
            <p className="text-xl text-gray-400">Real-time portfolio performance visualization</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* 3D Chart Card 1 */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, x: -100, rotateY: -45 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ 
                scale: 1.02, 
                rotateY: 5,
                z: 30
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Portfolio Performance</h3>
                  <div className="px-4 py-2 bg-green-500/20 rounded-full text-green-400 text-sm font-semibold">
                    +15.7% YTD
                  </div>
                </div>
                <div className="bg-black/40 rounded-2xl p-6">
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data1}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="name" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #374151',
                          borderRadius: '12px'
                        }}
                      />
                      <Legend />
                      <Line type="monotone" dataKey="portfolio" stroke="#8B5CF6" strokeWidth={3} name="Your Portfolio" />
                      <Line type="monotone" dataKey="benchmark" stroke="#06B6D4" strokeWidth={3} name="Market Benchmark" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>

            {/* 3D Chart Card 2 */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, x: 100, rotateY: 45 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ 
                scale: 1.02, 
                rotateY: -5,
                z: 30
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-xl border border-green-500/30 rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Quarterly Returns</h3>
                  <div className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 text-sm font-semibold">
                    Outperforming
                  </div>
                </div>
                <div className="bg-black/40 rounded-2xl p-6">
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data2}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="name" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1F2937', 
                          border: '1px solid #374151',
                          borderRadius: '12px'
                        }}
                      />
                      <Legend />
                      <Line type="monotone" dataKey="returns" stroke="#10B981" strokeWidth={3} name="Portfolio Returns" />
                      <Line type="monotone" dataKey="market" stroke="#F59E0B" strokeWidth={3} name="Market Average" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Enhanced Services Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <OurServicesSection />
      </motion.div>

      {/* Enhanced FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <FaqSection />
      </motion.div>

      {/* Enhanced Reach Out Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <ReachOutCard />
      </motion.div>
    </div>
  );
};

export default PortFolioManagement;