'use client';

import MotionWrapper from '../components/MotionWrapper';
import Hero from '../components/sections/Hero';
import ServicesOverview from '../components/sections/ServicesOverview';
import Testimonials from '../components/sections/Testimonials';
import FaqSection from '../components/sections/Faqs';
import Features from '../components/sections/Features';
import ReachOutCard from '../components/sections/ReachedOutCard';

const features = [
  {
    title: "Unified Digital Ecosystem",
    description:
      "Easily access all our services—software, trading, education, interiors, and finance—through one platform. Everything you need, right at your fingertips.",
    image: "/assets/unified.jpg",
    bgColor: "bg-blue-500",
  },
  {
    title: "Skill-Focused Learning & Growth",
    description:
      "Learn real-world skills through expert-led training in trading, technology, and business. Tailored for beginners and professionals alike.",
    image: "/assets/learning.jpg",
    bgColor: "bg-black",
  },
  {
    title: "Collaborative & Client-Centric Culture",
    description:
      "We work closely with clients to deliver personalized solutions across every domain. Your vision, our innovation—delivered together.",
    image: "/assets/colab.avif",
    bgColor: "bg-blue-500",
  },
  {
    title: "Enterprise-Grade Security & Reliability",
    description:
      "Enjoy peace of mind with strong data protection and secure transactions. We prioritize your privacy in every interaction.",
    image: "/assets/security.avif",
    bgColor: "bg-black",
  },
];

export default function HomePage() {
  return (
    <MotionWrapper>
      <Hero />
      <Features text="How UNICO International Empowers Your Success" features={features}/>
      <ServicesOverview />
      <FaqSection/>
      <Testimonials />
      <ReachOutCard />
    </MotionWrapper>
  );
}