'use client'

import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            About Unico
          </h2>
          
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            <p>
              Unico is a pioneering multi-domain company committed to transforming businesses 
              and empowering individuals through comprehensive solutions across technology, 
              finance, education, and design.
            </p>
            
            <p>
              Our mission is to bridge the gap between complex business challenges and 
              innovative solutions by providing affordable, high-quality services that 
              simplify operations and accelerate growth across multiple industries.
            </p>
            
            <p>
              From cutting-edge software development to strategic portfolio management, 
              from transformative education programs to stunning interior designs – 
              Unico is your trusted partner for comprehensive business excellence.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <Link href="/about">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Know more
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}