"use client";

import { CheckCircle, Users, Globe, BarChart2, Award, HeartHandshake as Handshake } from 'lucide-react';
    import { motion } from 'framer-motion';

    const benefits = [
      { icon: <Users className="h-8 w-8 text-brand-orange" />, text: 'Multi-industry expertise' },
      { icon: <CheckCircle className="h-8 w-8 text-brand-orange" />, text: 'Personalized client service' },
      { icon: <Handshake className="h-8 w-8 text-brand-orange" />, text: 'Transparent communication' },
      { icon: <Award className="h-8 w-8 text-brand-orange" />, text: 'Commitment to quality and results' },
      { icon: <Globe className="h-8 w-8 text-brand-orange" />, text: 'Offices in India and UAE' },
      { icon: <BarChart2 className="h-8 w-8 text-brand-orange" />, text: 'Focus on long-term relationships' },
    ];

    const listItemVariants = {
      hidden: { opacity: 0, x: -20 },
      visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
          delay: i * 0.15,
          duration: 0.5,
          ease: "easeOut"
        }
      })
    };

    const WhyChooseUs = () => {
      return (
        <section className="py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto">
            <motion.div 
              initial={{ opacity: 0, y:20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold text-primary sm:text-4xl">Why Choose Unico International?</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Partner with us for reliable, innovative, and impactful solutions.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  custom={index}
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-background/50 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
                  <div>
                    <p className="text-lg font-medium text-primary">{benefit.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default WhyChooseUs;