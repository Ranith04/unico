"use client";

import React from 'react';
import ServiceCard from '../ui/ServiceCard';

const services = [
  {
    title: "Software Development",
    description: "Custom web and mobile applications built with cutting-edge technology",
    image: "/assets/software-dev.jpg",
    features: ["Web Applications", "Mobile Apps", "API Development"]
  },
  {
    title: "Portfolio Management",
    description: "Professional investment portfolio management and financial planning",
    image: "/assets/portfolio.avif",
    features: ["Investment Strategy", "Risk Management", "Financial Planning"]
  },
  {
    title: "Education",
    description: "Comprehensive training programs and educational services",
    image: "/assets/learning.jpg",
    features: ["Technical Training", "Financial Education", "Professional Development"]
  },
  {
    title: "Interior Design",
    description: "Transform your spaces with professional interior design solutions",
    image: "/assets/interior.jpg",
    features: ["Residential Design", "Commercial Spaces", "3D Visualization"]
  }
];

const ServicesOverview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions across multiple domains to help your business grow and succeed
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;