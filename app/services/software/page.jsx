"use client";

import OurServicesSection from '@/components/sections/ServiceSection';
import FaqSection from '@/components/sections/Faqs';
import { motion } from 'framer-motion';
import Features from '@/components/sections/Features';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import ReachOutCard from '@/components/sections/ReachedOutCard';
import FeatureSection from '@/components/ui/FeatureSection';

const data1 = [
  { name: 'Apr 30', a: 30, b: 18 },
  { name: 'May 5', a: 40, b: 20 },
  { name: 'May 10', a: 35, b: 22 },
  { name: 'May 15', a: 50, b: 28 },
  { name: 'May 20', a: 60, b: 30 },
  { name: 'May 25', a: 55, b: 32 },
  { name: 'May 30', a: 48, b: 34 },
];

const data2 = [
  { name: 'Mon', today: 10, yesterday: 14 },
  { name: 'Tue', today: 11, yesterday: 15 },
  { name: 'Wed', today: 14, yesterday: 15 },
  { name: 'Thu', today: 25, yesterday: 20 },
  { name: 'Fri', today: 40, yesterday: 21 },
  { name: 'Sat', today: 38, yesterday: 25 },
  { name: 'Sun', today: 39, yesterday: 30 },
];

const SoftwareDevelopment = () => {
  const features = [
    {
        title: "Custom Software Solutions",
        description:
        "We build software tailored to your unique business needs—fully personalized and scalable.",
        image: "/assets/software1.avif",
        bgColor: "bg-blue-500",
    },
    {
        title: "Cross-Platform Development",
        description:
        "From concept to launch, we handle every stage of development with precision and care.",
        image: "/assets/software2.avif",
        bgColor: "bg-black",
    },
    {
        title: "Agile & Transparent Process",
        description:
        "We work in short cycles with regular updates—ensuring you stay involved and informed.",
        image: "/assets/software3.avif",
        bgColor: "bg-blue-500",
    },
    {
        title: "Secure & High-Quality Code",
        description:
        "We prioritize clean code and security—delivering reliable software you can trust.",
        image: "/assets/software4.avif",
        bgColor: "bg-black",
    },
    ];

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
            Development Section
          </motion.span>
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-4 leading-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Software Development
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Innovative solutions tailored to your vision. Our software development services focus on building scalable, secure, and high-performing applications that meet your unique business needs. From concept to deployment, we deliver custom software that drives efficiency, enhances user experience, and supports your long-term growth.
          </motion.p>
        </div>
      </motion.section>
      <Features text="UNICO International – Crafting Smart, Scalable Software for a Digital World" features={features} />
      <FeatureSection 
        title="Software Development"
        description="Innovative solutions tailored to your vision. Our software development services focus on building scalable, secure, and high-performing applications that meet your unique business needs. From concept to deployment, we deliver custom software that drives efficiency, enhances user experience, and supports your long-term growth."
        points={["We develop custom software that fits your business goals—no one-size-fits-all.",
            "From planning to deployment, we manage the full development process for smooth delivery.",
            "We build reliable, secure, and high-performing applications using the latest technologies."]}
        image="/assets/sd-main.jpg"
        reverse={true}
      />
    </div>
  );
};

export default SoftwareDevelopment;