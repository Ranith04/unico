"use client";

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { MoveUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Multi-Domain Excellence
            <br />
            <span className="text-blue-400">Your Success Partner</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            From software development to portfolio management, education to interior design - 
            we provide comprehensive solutions for your business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold">
              Get Started
              <MoveUpRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold"
            >
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>500+ Satisfied Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Expert Team</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>24/7 Support</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full opacity-10"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500 rounded-full opacity-10"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-green-500 rounded-full opacity-10"></div>
    </section>
  );
}