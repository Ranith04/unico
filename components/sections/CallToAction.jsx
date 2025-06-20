'use client'

import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function CallToAction() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Calling <span className="text-yellow-300">Business Leaders</span> and{' '}
            <span className="text-yellow-300">Entrepreneurs</span> to Make an Impact!
          </h2>
          
          <div className="space-y-4 text-lg text-blue-100 max-w-3xl mx-auto">
            <p>
              Be among the first to <strong className="text-white">experience comprehensive business transformation!</strong>
            </p>
            
            <p className="text-xl font-semibold text-white">
              Ready to be an early partner?
            </p>
            
            <p>
              Your expert insights can help shape solutions that could impact{' '}
              <strong className="text-yellow-300">thousands of businesses!</strong>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-2xl max-w-md mx-auto"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your business email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                Get Early Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          ) : (
            <div className="text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600">We'll be in touch soon with exclusive early access opportunities.</p>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <p className="text-blue-100 text-sm">
            <strong className="text-white">Unico</strong> is soon to begin partnering with businesses and entrepreneurs across multiple industries
          </p>
        </motion.div>
      </div>
    </section>
  )
}