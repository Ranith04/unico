"use client";

import Image from "next/image";
import { Check, CheckCircle, CheckCircle2 } from "lucide-react";

export default function DesignCard({
  badgeText,
  title,
  description,
  features,
  imageSrc,
  imageAlt = "Service image",
}) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100 mx-20 p-6 md:p-10 min-h-[500px] rounded-2xl shadow-sm">
      <div className="flex-1">
        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-lg mb-4">
          {badgeText}
        </span>
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
          {title}
        </h3>
        <p className="text-gray-800 mb-6">{description}</p>
        <ul className="space-y-4">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center space-x-2">
              <span><CheckCircle2 className="bg-blue-500 rounded-full"/></span>
              <span className="font-medium text-black">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 mt-6 md:mt-0 md:ml-10 max-w-md rounded-xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="rounded-xl"
          width={400}
          height={400}
          objectFit="cover"
        />
      </div>
    </div>
  );
}
