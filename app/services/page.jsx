'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Code, BarChart3, Palette, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    id: 'software',
    icon: <Code className="h-12 w-12 text-brand-orange" />,
    title: 'Software Development',
    description:
      'We build custom web and mobile applications for startups and growing businesses. Our development process focuses on user experience, scalability, and performance. From initial concept to final deployment, we provide end-to-end solutions tailored to your specific needs.',
    details: [
      'Custom Web Application Development',
      'Mobile App Development (iOS & Android)',
      'UI/UX Design & Prototyping',
      'Cloud Solutions & DevOps',
      'Maintenance & Support',
    ],
    imageUrl:
      'https://storage.googleapis.com/hostinger-horizons-assets-prod/86464dc7-19b6-4cf3-a58e-f40170a15b75/1826c5a68842b79722f9c8c11a02b93f.jpg',
    imageAlt: 'Team of software developers collaborating on a project with code on screen',
  },
  {
    id: 'finance',
    icon: <BarChart3 className="h-12 w-12 text-brand-orange" />,
    title: 'Financial Portfolio Management',
    description:
      'We help clients grow and protect their wealth with smart, personalized investment strategies. Our team brings clear advice and hands-on support for long-term success, ensuring your financial goals are met with precision and care.',
    details: [
      'Personalized Investment Strategies',
      'Wealth Management & Growth',
      'Risk Assessment & Mitigation',
      'Retirement Planning',
      'Financial Advisory Services',
    ],
    imageUrl:
      'https://storage.googleapis.com/hostinger-horizons-assets-prod/86464dc7-19b6-4cf3-a58e-f40170a15b75/0c6b12e33c1830a84db80f0ab26ac754.jpg',
    imageAlt: 'Financial stock market chart with various indicators',
  },
  {
    id: 'design',
    icon: <Palette className="h-12 w-12 text-brand-orange" />,
    title: 'Interior Design',
    description:
      'We offer interior design solutions for homes and commercial spaces. From planning to execution, we bring ideas to life through a blend of creativity and functionality, creating spaces that inspire and delight.',
    details: [
      'Residential Interior Design',
      'Commercial Space Planning',
      '3D Visualization & Rendering',
      'Material & Furniture Selection',
      'Project Management & Execution',
    ],
    imageUrl:
      'https://storage.googleapis.com/hostinger-horizons-assets-prod/86464dc7-19b6-4cf3-a58e-f40170a15b75/dbba96bbbb7fb8cc86f604f743bb3eae.jpg',
    imageAlt: 'Modern office interior with Unico International branding and world map',
  },
];

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1, transition: { duration: 0.5 } },
  out: { opacity: 0, transition: { duration: 0.3 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ServicesPage = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
      className="container py-16 lg:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-heading font-bold text-primary sm:text-5xl">Our Expert Services</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive solutions designed to drive growth and innovation for your business and personal needs.
        </p>
      </motion.div>

      <div className="space-y-16">
        {servicesData.map((service, index) => (
          <motion.section
            key={service.id}
            id={service.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="scroll-mt-20"
          >
            <Card className="overflow-hidden shadow-xl glassmorphism">
              <div className={`grid grid-cols-1 ${index % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2'}`}>
                <div className={`p-8 md:p-10 flex flex-col justify-center ${index % 2 === 0 ? '' : 'md:order-last'}`}>
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary/10 rounded-full mr-4">{service.icon}</div>
                    <CardTitle className="text-3xl font-heading text-primary">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base text-foreground mb-6 leading-relaxed">{service.description}</CardDescription>
                  <ul className="space-y-2 mb-8">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-center text-sm text-foreground">
                        <ArrowRight className="h-4 w-4 mr-2 text-brand-orange flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Button variant="default" className="bg-brand-orange hover:bg-orange-600 text-white self-start">
                    Request a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className={`relative min-h-[300px] md:min-h-full ${index % 2 === 0 ? '' : 'md:order-first'}`}>
                  <Image
                    className="absolute inset-0 w-full h-full object-cover"
                    alt={service.imageAlt}
                    src={service.imageUrl}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority={index === 0} // prioritize first image for performance
                  />
                </div>
              </div>
            </Card>
          </motion.section>
        ))}
      </div>
    </motion.div>
  );
};

export default ServicesPage;