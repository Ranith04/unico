import HeroCharts from "../components/sections/Hero";
import Features from "../components/sections/Features";
import ServicesOverview from "../components/sections/ServicesOverview";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import CallToAction from "../components/sections/CallToAction";
import Testimonials from "../components/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroCharts />
      <Features />
      <ServicesOverview />
      <WhyChooseUs />
      <CallToAction />
      <Testimonials />
    </div>
  );
}