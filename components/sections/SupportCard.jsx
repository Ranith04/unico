import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from "framer-motion";
import React from 'react';

const SupportCard = () => {
  return (
    <motion.div
      className="max-w-[40%] mx-auto p-6 rounded-2xl bg-gradient-to-b from-white to-blue-100 shadow-md border border-blue-100 space-y-6 h-[400px]"
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex justify-center">
        <button className="px-5 py-2 bg-blue-100 text-blue-700 font-semibold rounded-md">Get In Touch</button>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 text-center">Need Any Support?</h2>
      <p className="text-gray-600 text-center">We're here to help you take your business to the next level with our cutting-edge SaaS solutions.</p>
      <div className="space-y-5 text-base">
        <div className="flex items-start gap-3">
          <Mail className="text-blue-500 w-5 h-5 mt-1" />
          <a href="mailto:support@unico-international.com" className="text-gray-900 font-medium hover:text-blue-500">support@unico-international.com</a>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="text-blue-500 w-5 h-5 mt-1" />
          <a  
            href="https://www.google.com/maps?q=17/152/5+Neeladri+Nagara,+BANGALORE,+KARNATAKA+-560100"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 font-medium"
          >
            #17/152/5 Neeladri Nagara, BANGALORE, KARNATAKA -560100
          </a>
        </div>

        <div className="flex items-start gap-3">
          <MapPin className="text-blue-500 w-5 h-5 mt-1" />
          <a  
            href="https://www.google.com/maps/place/Ontario+Tower/@25.1858917,55.2596135,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f690059af41fd:0xfc3a86ddcf8649b3!8m2!3d25.1858869!4d55.2621884!16s%2Fg%2F11wmncp482?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 font-medium"
          >
            office number 205, Ontario tower, Busines Bay, Dubai
          </a>
        </div>
        <div className="flex items-start gap-3">
          <Phone className="text-blue-500 w-5 h-5 mt-1" />
          <p className="text-gray-900 font-medium">08041489479</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SupportCard;