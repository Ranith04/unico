"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code, TrendingUp, GraduationCap, Palette } from 'lucide-react';

const services = [
  {
    title: "Unico",
    subtitle: "SOFTWARE-DEV",
    description: "Our comprehensive software development services offer end-to-end solutions for web, mobile, and desktop applications. Built with modern technologies and scalable architecture.",
    features: [
      "Custom web and mobile application development",
      "Cloud-based solutions and deployment",
      "API integration and microservices architecture"
    ],
    icon: Code,
    image: "/assets/software.jpg",
    color: "bg-blue-600"
  },
  {
    title: "Unico",
    subtitle: "PORTFOLIO-MGT",
    description: "Professional portfolio management designed for both individual investors and businesses. Smart tools for real-time tracking and strategic investment decisions.",
    features: [
      "Real-time portfolio tracking and analytics",
      "Risk assessment and diversification strategies",
      "Dedicated financial advisors and reporting"
    ],
    icon: TrendingUp,
    image: "/assets/portfolio.avif",
    color: "bg-green-600"
  },
  {
    title: "Unico",
    subtitle: "EDUCATION",
    description: "Comprehensive education and training programs covering technology skills, financial literacy, and professional development for individuals and teams.",
    features: [
      "Trading and financial literacy courses",
      "Technology skills and certification programs",
      "Corporate training and team development"
    ],
    icon: GraduationCap,
    image: "/assets/learning.jpg",
    color: "bg-purple-600"
  },
  {
    title: "Unico",
    subtitle: "INTERIOR-DESIGN",
    description: "Transform your spaces with our professional interior design services. From residential homes to commercial offices, we create functional and beautiful environments.",
    features: [
      "Residential and commercial design solutions",
      "3D visualization and space planning",
      "Material sourcing and project management"
    ],
    icon: Palette,
    image: "/assets/interior.jpg",
    color: "bg-orange-600"
  }
];

const ServicesOverview = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Multi-Domain Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of services designed to transform your business and accelerate growth across multiple domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mr-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title} <span className={`text-base font-semibold ${service.color.replace('bg-', 'text-')}`}>{service.subtitle}</span>
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className={`w-2 h-2 ${service.color} rounded-full mt-2 mr-3 flex-shrink-0`}></span>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.subtitle}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute inset-0 ${service.color} opacity-10`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8">
            Explore our integrated solutions and discover how Unico can transform your business today
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;