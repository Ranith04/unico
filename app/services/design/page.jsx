"use client";

import OurServicesSection from '@/components/sections/ServiceSection';
import FaqSection from '@/components/sections/Faqs';
import { motion } from 'framer-motion';
import Features from '@/components/sections/Features';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import ReachOutCard from '@/components/sections/ReachedOutCard';
import FeatureSection from '@/components/ui/FeatureSection';
import DesignCard from '@/components/ui/DesignCard';

const servicesData = [
  {
    badgeText: "We Provide",
    title: "Space Planning & Functionality",
    description:
      "Thoughtful layout and efficient use of space ensure that every area serves a purpose while maintaining flow and comfort.",
    features: ["Zoning & Flow", "Furniture Placement", "Storage Solutions"],
    imageSrc: "/assets/design1.webp",
    imageAlt: "Reception area at Unico International",
  },
  {
    badgeText: "We Provide",
    title: "Aesthetic Harmony & Style",
    description:
      "Cohesive color palettes, textures, and materials create visual balance, reflecting a specific mood, theme, or identity.",
    features: ["Color Psychology", "Material & Texture Coordination", "Design Consistency"],
    imageSrc: "/assets/design2.webp", 
    imageAlt: "",
  },
  {
    badgeText: "We Provide",
    title: "Lighting & Ambience",
    description:
      "Strategic use of natural and artificial lighting enhances atmosphere, highlights key features, and influences how the space feels and functions.",
    features: ["Layered Lighting", "Natural Light Optimization", "Statement Fixtures"],
    imageSrc: "/assets/design3.webp",
    imageAlt: "",
  },
];

const InteriorDesign = () => {
  return (
    <div className="w-full bg-white">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full min-h-[70vh] flex flex-col gap-8 items-center justify-start bg-gradient-to-r from-black via-[#0f172a] to-blue-500 text-center px-4 py-12 mb-10"
      >
        <div className='flex flex-col items-center gap-5 py-10'>
          <motion.span
            className="mb-6 px-6 py-2 bg-[#3396F620] text-white font-medium rounded-lg transition border border-blue-400 w-fit"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            Services
          </motion.span>
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-4 leading-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Interior Design
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Where exquisite design meets unparalleled elegance — crafting bespoke interiors that embody sophistication, comfort, and timeless luxury.
          </motion.p>
        </div>
      </motion.section>
      <div className='py-5 flex flex-col gap-10'>
        {servicesData.map((service, idx) => (
            <DesignCard key={idx} {...service}/>
        ))}
      </div>
    </div>
  );
};

export default InteriorDesign;