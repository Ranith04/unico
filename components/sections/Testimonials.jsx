"use client";

import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';
const Testimonials = () => {
  const testimonials = [
    {
      name: "Saumya Tomar",
      role: "Entrepreneur & Investor",
      avatar: "/assets/saumya-avatar.avif", 
      image: "/assets/Testimonial1.jpg",    
      content:
        "Entrusting Unico with my portfolio was the best financial decision I’ve made. Their team took the time to understand my goals and crafted a strategy that balanced growth and security perfectly. I've seen steady progress and feel confident knowing my finances are being handled with care and expertise.",
      rating: 4.7
    },
  ];

  return (
    <div className="space-y-12 py-16 px-4 md:px-20">
      {testimonials.map((t, i) => (
         <TestimonialCard key={i} {...t} />
      ))}
    </div>
  );
};

export default Testimonials;