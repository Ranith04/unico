'use client'

import { motion } from 'framer-motion'
import { MoveUpRight, Play } from 'lucide-react'
import { Button } from '../ui/button'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Animated Video-like Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Base gradient with animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 animate-gradient-shift">
        </div>

        {/* Moving geometric shapes */}
        <div className="absolute inset-0">
          {/* Large animated circles */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-5 animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500 rounded-full opacity-5 animate-bounce-slow"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500 rounded-full opacity-5 animate-ping-slow"></div>

          {/* Animated tech grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid-pattern animate-grid-move"></div>
          </div>

          {/* Floating tech elements */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: `${Math.random() * 80 + 40}px`,
                height: `${Math.random() * 80 + 40}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 30 - 15, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            >
              {/* Tech-themed shapes */}
              {i % 4 === 0 && (
                <div className="w-full h-full bg-blue-400 rounded-lg opacity-20 transform rotate-45"></div>
              )}
              {i % 4 === 1 && (
                <div className="w-full h-full bg-green-400 rounded-full opacity-20"></div>
              )}
              {i % 4 === 2 && (
                <div className="w-full h-full bg-purple-400 opacity-20" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
              )}
              {i % 4 === 3 && (
                <div className="w-full h-full bg-yellow-400 opacity-20" style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}}></div>
              )}
            </motion.div>
          ))}

          {/* Animated particle system */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}

          {/* Code-like animated lines */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`line-${i}`}
                className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20"
                style={{
                  top: `${(i + 1) * 12}%`,
                  width: '100%',
                }}
                animate={{
                  x: ['-100%', '100%'],
                  opacity: [0, 0.4, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Pulsing tech nodes */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`node-${i}`}
              className="absolute w-4 h-4 bg-blue-400 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-5xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="bg-blue-600 bg-opacity-20 text-blue-200 px-6 py-2 rounded-full text-sm font-semibold border border-blue-400 border-opacity-30 backdrop-blur-sm">
                Introducing Unico International
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Multi-Domain Solutions for
              <span className="text-blue-400"> Modern Business</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 font-medium max-w-4xl mx-auto leading-relaxed">
              Transforming businesses through expert solutions in software development, 
              financial portfolio management, education, and interior design
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-12 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Explore Solutions
              <MoveUpRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg font-semibold px-8 py-4 rounded-lg backdrop-blur-sm bg-white bg-opacity-10 transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-8 text-sm text-gray-300"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>Expert consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>Trusted by 500+ clients</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}