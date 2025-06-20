import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import ServicesOverview from "../components/sections/ServicesOverview";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import CallToAction from "../components/sections/CallToAction";
import Testimonials from "../components/sections/Testimonials";

export default function Home() {
  const features = [
    {
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs with modern technologies and scalable architecture.",
      image: "/assets/software-dev.jpg",
      bgColor: "bg-blue-500",
    },
    {
      title: "Portfolio Management",
      description: "Professional portfolio management services with real-time tracking and strategic investment guidance.",
      image: "/assets/portfolio.avif",
      bgColor: "bg-green-500",
    },
    {
      title: "Education & Training",
      description: "Comprehensive education programs covering technology skills, financial literacy, and professional development.",
      image: "/assets/learning.jpg",
      bgColor: "bg-purple-500",
    },
    {
      title: "Interior Design",
      description: "Transform your spaces with our professional interior design services for residential and commercial properties.",
      image: "/assets/interior.jpg",
      bgColor: "bg-orange-500",
    },
  ];

  return (
    <div>
      <Hero />
      <Features text="Our Core Services" features={features} />
      <ServicesOverview />
      <WhyChooseUs />
      <CallToAction />
      <Testimonials />
    </div>
  );
}