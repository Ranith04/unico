"use client";

export default function ServiceCard({ title, image, bgColor = "bg-white", textColor = "text-black" }) {
  return (
    <div className={`rounded-xl overflow-hidden p-4 w-full max-w-xs min-h-80 flex flex-col justify-between shadow-lg ${bgColor} ${textColor}`}>
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <img src={image} alt={title} className="w-full h-52 object-cover rounded-md" />
    </div>
  );
}