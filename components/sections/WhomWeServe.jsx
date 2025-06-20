'use client'

import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { Building2, Users, Briefcase, GraduationCap } from 'lucide-react'

export default function WhomWeServe() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Whom we Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empowering Businesses and Individuals with comprehensive solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* For Businesses */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                For Businesses
              </h3>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Transform your business operations with our comprehensive suite of services. 
              From custom software solutions to financial portfolio management and 
              professional interior design – we provide integrated solutions that drive growth.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-600">Custom software development & digital transformation</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-600">Professional portfolio management & financial consulting</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-600">Corporate training & skill development programs</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-600">Office & commercial space interior design</span>
              </li>
            </ul>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300">
              See more
            </Button>
          </motion.div>

          {/* For Individuals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                For Individuals
              </h3>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Empower your personal and professional growth with our tailored individual services. 
              Whether you're looking to learn new skills, manage your investments, or design your dream space – we're here to help.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-600">Personal portfolio management & investment guidance</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-600">Trading education & financial literacy programs</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-600">Technology skills training & certification courses</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-600">Residential interior design & home makeovers</span>
              </li>
            </ul>

            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300">
              See more
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}