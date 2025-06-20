"use client";

import FeatureCard from "@/components/ui/FeatureCard";
export default function Features({text, features}) {
  return (
    <div className="py-12 px-6 text-center w-[95%] mx-auto">
      <h2 className="text-5xl font-bold mb-10 text-gray-900">
        {text}
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {features.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>
    </div>
  );
}
