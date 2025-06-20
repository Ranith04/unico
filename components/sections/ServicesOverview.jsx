"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../ui/ServiceCard';
import FeatureSection from '../ui/FeatureSection';

const services = [
  {
    title: "Software Development",
    image: "/assets/software.jpg",
    bgColor: "bg-black",
    textColor: "text-white"
  },
  {
    title: "Interior Design",
    image: "/assets/interior.jpg",
    bgColor: "bg-gray-100",
    textColor: "text-black"
  },
  {
    title: "Portfolio Management",
    image: "/assets/portfolio.avif",
    bgColor: "bg-blue-500",
    textColor: "text-white"
  },
];

const features = [
  {
    title: "Software Development",
    description:
      "Innovative solutions tailored to your vision. Our software development services focus on building scalable, secure, and high-performing applications that meet your unique business needs.",
    image: "/assets/software-dev.jpg",
    points: [
      "End-to-end development for web, mobile, and desktop applications",
      "Agile methodologies ensuring faster delivery and adaptability",
      "Ongoing support, maintenance, and scalability for future growth"
    ],
    buttonText: "Learn More",
    buttonLink: "/services/software",
    reverse: false
  },
  {
    title: "Interior Design",
    description:
      "Our design team blends functionality with aesthetic appeal, ensuring beautiful, efficient spaces that reflect your identity and maximize usability.",
    image: "/assets/design.avif",
    points: [
      "Modern and traditional concepts tailored to client needs",
      "Full-cycle interior planning and visualization",
      "Material sourcing and contractor coordination"
    ],
    buttonText: "View Gallery",
    buttonLink: "/services/interior",
    reverse: true
  },
  {
    title: "Portfolio Management",
    description:
      "We help you manage your financial assets efficiently, offering customized investment strategies to ensure your money works for your goals.",
    image: "/assets/portfolio-mgm.jpg",
    points: [
      "Smart tools for real-time investment tracking",
      "Diversified asset strategies for stable returns",
      "Dedicated advisors and detailed reporting"
    ],
    buttonText: "Start Investing",
    buttonLink: "/services/portfolio",
    reverse: false
  }
];

const ServicesOverview = () => {
  return (
    <section className="pt-16 lg:pt-20">
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="pt-16 px-4 text-center"
        >
          <span className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-md border-blue-800 mb-2 inline-block">
            Core Features
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Services Provided By Us
          </h2>
          <p className="text-gray-500 mb-10">
            We provide a wide range of services on our platform which are mentioned below
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service}/>
            ))}
          </div>
        </motion.div>
      </div>
      <div>
        {features.map((feature, idx) => (
          <FeatureSection key={idx} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;