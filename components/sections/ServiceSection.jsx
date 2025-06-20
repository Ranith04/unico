'use client';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowUpRight } from 'lucide-react';

export default function OurServicesSection() {
  const services = [
    {
      title: 'Asset Allocation Strategies',
      description:
        'Balances risk and returns by spreading investments across asset classes',
    },
    {
      title: 'Risk Profiling and Management',
      description:
        'Risk Profiling and Management tailors your portfolio to match your risk tolerance and goals',
    },
    {
      title: 'Investment Planning',
      description:
        'Investment Planning defines clear financial goals and creates a strategy to achieve them efficiently',
    },
    {
      title: 'Real-Time Portfolio Monitoring',
      description:
        'Tracks your investments live to ensure optimal performance and quick adjustments',
    },
  ];

  return (
    <section className="w-full  bg-gradient-to-r from-black via-[#0f172a] to-blue-500 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            Portfolio management focuses on diversifying investments to reduce risk, while regularly monitoring and adjusting strategies to align with your financial goals. This ensures optimal growth and risk control.
          </p>

          <div className="space-y-4 mb-8">
            {['Diversification', 'Regular Monitoring', 'Goal Alignment'].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="text-blue-400 w-6 h-6" />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 font-semibold">
            Get Started
            <ArrowUpRight size={18} />
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white text-gray-900 rounded-xl shadow-lg px-8 py-6 text-center"
            >
              <h4 className="font-semibold text-xl my-4">{service.title}</h4>
              <p className="text-gray-600 text-md mb-4">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}