'use client'

import { motion } from 'framer-motion'
import { Button } from '../ui/button'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/software-dev.jpg"
          alt="Professional working on technology"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-white block">Innovative</span>
            <span className="text-orange-500 block">Solutions for</span>
            <span className="text-orange-500 block">Modern Business</span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Empowering businesses with cutting-edge software development, financial portfolio management, 
            interior design, and educational solutions across multiple domains
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="pt-4"
          >
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="/services">Explore</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-medium">Scroll to discover</span>
          <div className="w-px h-8 bg-white/40 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  )
}