"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TestimonialCard({ name, role, avatar, image, content, rating }) {
  return (
    <motion.div
      className="bg-[#041C32] text-white rounded-2xl shadow-lg max-w-6xl mx-auto flex flex-col md:flex-row justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="p-8 flex flex-col max-w-2xl gap-10 z-10">
        <div className="flex items-center gap-4 mb-4">
          <Image src={avatar} alt={name} width={100} height={100} className="rounded-full" />
          <div>
            <p className="font-bold text-3xl">{name}</p>
            <p className="text-lg text-gray-300">{role}</p>
          </div>
        </div>
        <p className="font-semibold leading-9 text-lg text-gray-300 mb-6">{content}</p>
        <div>
          <div className="flex gap-1 mb-2">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
          <p className="font-semibold text-white">{rating}/5</p>
        </div>
      </div>

      <div className="relative md:w-[40%] overflow-visible">
        <img
          src={image}
          alt={name}
          className="absolute -top-12 right-6 w-80 rounded-xl object-cover"
        />
      </div>
    </motion.div>
  );
}