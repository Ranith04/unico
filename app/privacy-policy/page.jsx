'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, ShieldCheck, Smile } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="container mx-auto max-w-5xl px-6 py-20 text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
        >
          About Unico International
        </motion.h1>
        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={1}
        >
          We are dedicated to deliver tailored solutions for your Tech Needs.
        </motion.p>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[ 
            { icon: <Users className="mx-auto mb-4 text-primary" size={48} />, title: 'Community Focus' },
            { icon: <Globe className="mx-auto mb-4 text-primary" size={48} />, title: 'Global Reach' },
            { icon: <ShieldCheck className="mx-auto mb-4 text-primary" size={48} />, title: 'Security First' },
            { icon: <Smile className="mx-auto mb-4 text-primary" size={48} />, title: 'User Happiness' },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={i}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="container mx-auto max-w-4xl px-6 py-20 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="text-gray-700 text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          To create impactful, accessible, and joyful digital products that enrich lives across the globe.
        </motion.p>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Meet the Team
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { name: 'Alice Johnson', role: 'Founder & CEO' },
              { name: 'Mark Thompson', role: 'Lead Designer' },
              { name: 'Sophia Lee', role: 'Head of Development' },
              { name: 'Liam Smith', role: 'Marketing Lead' },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="h-32 w-32 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-4xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="mt-1 text-primary/90">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}