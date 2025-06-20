'use client'

import { motion } from 'framer-motion'
import { MoveUpRight } from 'lucide-react'
import { Button } from '../ui/Button'
const items = ['ECHO', 'PORTFOLIO MANAGEMENT', 'EDUCATION', 'INTERIOR DESIGN'];
const features = [
  {
    title: "Unified Digital Ecosystem",
    description:
      "Easily access all our services—software, trading, education, interiors, and finance—through one platform. Everything you need, right at your fingertips.",
    image: "/images/unified.png",
    bgColor: "bg-blue-500",
  },
  {
    title: "Skill-Focused Learning & Growth",
    description:
      "Learn real-world skills through expert-led training in trading, technology, and business. Tailored for beginners and professionals alike.",
    image: "/images/learning.png",
    bgColor: "bg-black",
  },
  {
    title: "Collaborative & Client-Centric Culture",
    description:
      "We work closely with clients to deliver personalized solutions across every domain. Your vision, our innovation—delivered together.",
    image: "/images/collab.png",
    bgColor: "bg-blue-500",
  },
  {
    title: "Enterprise-Grade Security & Reliability",
    description:
      "Enjoy peace of mind with strong data protection and secure transactions. We prioritize your privacy in every interaction.",
    image: "/images/security.png",
    bgColor: "bg-black",
  },
];

export default function HeroCharts() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-r from-black via-[#0f172a] to-blue-500 px-6 pb-12 pt-20 flex flex-col items-center justify-center mb-20">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white max-w-xl"
        >
          <motion.span
            className="mb-6 px-6 py-2 bg-[#3396F620] text-white font-medium rounded-lg transition"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            Introducing Unico International
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            One Platform. Endless Possibilities. Software, Finance, Learning, and Living
          </h1>
          <p className="text-gray-300 text-lg mb-6 font-medium">
            <strong>Unico</strong> is a multi-domain company offering expert solutions in financial portfolio management, trading education, software development, general education, and interior design.  We specialize in empowering individuals and businesses with tools and strategies. From crafting innovative experiences to delivering value across industries — Unico blends technology and creativity for meaningful growth.
          </p>
          <Button className="bg-[#2196F3] hover:bg-[#1E88E5] text-white text-lg font-semibold px-5 py-2 rounded-md">
            Contact Us
            <MoveUpRight strokeWidth={3} className='h-5 w-5 font-bold' />
          </Button>
          <div className="mt-4 flex items-center gap-6 text-sm text-gray-300">
            <span>✔ No credit card required</span>
            <span>⭐ 4.8 (520+ Reviews)</span>
          </div>
        </motion.div>

        
        <div className="relative w-full md:w-[400px]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white text-black rounded-2xl p-6 shadow-lg relative z-10"
          >
            <img src='/assets/hero-chart3.svg'></img>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white text-center text-black rounded-xl z-30 p-5 w-64 shadow-xl absolute -top-32 -left-28"
          >
            <img src='/assets/hero-chart2.svg'></img> 
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white text-center text-black rounded-xl z-30 p-5 w-64 shadow-xl absolute top-36 -left-48"
          >
            <img src='/assets/hero-chart1.svg'></img> 
          </motion.div>
        </div>
      </div>
      <div className="relative overflow-hidden py-6">
        <p className='text-xl text-center font-semibold mb-6'>Trusted & Experienced Employees</p>
        <div className="flex whitespace-nowrap gap-24">
          {[...items].map((item, index) => (
            <span
              key={index}
              className="text-white text-xl font-semibold tracking-wider"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}