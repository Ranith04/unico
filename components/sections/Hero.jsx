'use client'

import { motion } from 'framer-motion'
import { MoveUpRight } from 'lucide-react'
import { Button } from '../ui/Button'

const items = ['ECHO', 'PORTFOLIO MANAGEMENT', 'EDUCATION', 'INTERIOR DESIGN'];

export default function Hero() {
  return (
    <section 
      className="min-h-screen w-full relative px-6 pb-12 pt-20 flex flex-col items-center justify-center mb-20"
      style={{
        backgroundImage: 'url("/assets/hero-background.jpg")', // You can replace this with your background image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
        {/* Left side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white max-w-xl lg:max-w-2xl"
        >
          <motion.span
            className="mb-6 inline-block px-6 py-2 bg-[#3396F620] text-white font-medium rounded-lg transition"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            Introducing Unico International
          </motion.span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            One Platform. Endless Possibilities. Software, Finance, Learning, and Living
          </h1>
          
          <p className="text-gray-300 text-lg mb-6 font-medium leading-relaxed">
            <strong>Unico</strong> is a multi-domain company offering expert solutions in financial portfolio management, trading education, software development, general education, and interior design. We specialize in empowering individuals and businesses with tools and strategies. From crafting innovative experiences to delivering value across industries — Unico blends technology and creativity for meaningful growth.
          </p>
          
          <Button className="bg-[#2196F3] hover:bg-[#1E88E5] text-white text-lg font-semibold px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105">
            Contact Us
            <MoveUpRight strokeWidth={3} className='h-5 w-5 font-bold ml-2' />
          </Button>
          
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-300">
            <span className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              No credit card required
            </span>
            <span className="flex items-center">
              <span className="text-yellow-500 mr-2">⭐</span>
              4.8 (520+ Reviews)
            </span>
          </div>
        </motion.div>

        {/* Right side - Video */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full max-w-md lg:max-w-lg"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto rounded-3xl"
              poster="/assets/video-poster.jpg" // Optional: Add a poster image while video loads
            >
              <source src="/assets/hero-video.mp4" type="video/mp4" />
              {/* You can add additional source formats for better browser compatibility */}
              <source src="/assets/hero-video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            
            {/* Optional: Gradient overlay on video for style */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl pointer-events-none"></div>
          </div>
          
          {/* Optional: Floating elements around video for visual appeal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
          ></motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
          ></motion.div>
        </motion.div>
      </div>

      {/* Bottom section - Trusted employees */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative overflow-hidden py-8 mt-16 w-full relative z-10"
      >
        <p className='text-xl text-center font-semibold mb-6 text-white'>
          Trusted & Experienced Employees
        </p>
        <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
          {items.map((item, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-white/80 text-lg font-semibold tracking-wider hover:text-white transition-colors duration-300"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}