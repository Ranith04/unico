'use client';

import MotionWrapper from '../components/MotionWrapper';
import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import WhomWeServe from '../components/sections/WhomWeServe';
import ServicesOverview from '../components/sections/ServicesOverview';
import CallToAction from '../components/sections/CallToAction';
import FaqSection from '../components/sections/Faqs';

export default function HomePage() {
  return (
    <MotionWrapper>
      <Hero />
      <AboutSection />
      <WhomWeServe />
      <ServicesOverview />
      <FaqSection />
      <CallToAction />
    </MotionWrapper>
  );
}