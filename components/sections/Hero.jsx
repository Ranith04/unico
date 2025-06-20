'use client'

import { MoveUpRight, Play } from 'lucide-react'
import { Button } from '../ui/button'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Static Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        </div>

        {/* Static geometric shapes */}
        <div className="absolute inset-0">
          {/* Large static circles */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-5"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500 rounded-full opacity-5"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500 rounded-full opacity-5"></div>

          {/* Static grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid-pattern"></div>
          </div>

          {/* Static tech elements */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-blue-400 rounded-lg opacity-20 transform rotate-45"></div>
          <div className="absolute top-32 right-20 w-12 h-12 bg-green-400 rounded-full opacity-20"></div>
          <div className="absolute bottom-40 left-20 w-14 h-14 bg-purple-400 opacity-20" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
          <div className="absolute bottom-20 right-32 w-10 h-10 bg-yellow-400 opacity-20" style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}}></div>

          {/* Static particles */}
          <div className="absolute top-16 left-1/2 w-2 h-2 bg-white rounded-full opacity-30"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white rounded-full opacity-30"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white rounded-full opacity-30"></div>
          <div className="absolute top-2/3 right-1/2 w-2 h-2 bg-white rounded-full opacity-30"></div>

          {/* Static lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-20"></div>

          {/* Static tech nodes */}
          <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-50"></div>
          <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-50"></div>
          <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-blue-400 rounded-full opacity-50"></div>
        </div>
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-5xl w-full">
          <div className="mb-8">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="bg-blue-600 bg-opacity-20 text-blue-200 px-6 py-2 rounded-full text-sm font-semibold border border-blue-400 border-opacity-30 backdrop-blur-sm">
                Introducing Unico International
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Multi-Domain Solutions for
              <span className="text-blue-400"> Modern Business</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 font-medium max-w-4xl mx-auto leading-relaxed">
              Transforming businesses through expert solutions in software development, 
              financial portfolio management, education, and interior design
            </p>
          </div>

          <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
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
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Expert consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Trusted by 500+ clients</span>
            </div>
          </div>
        </div>

        {/* Static scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}