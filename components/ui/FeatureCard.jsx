import { motion } from "framer-motion";

export default function FeatureCard({
  title,
  description,
  image,
  bgColor,
  textColor = "text-white",
}) {
  return (
    <motion.div
      className={`rounded-2xl p-6 w-full max-w-[300px] ${bgColor} ${textColor} flex flex-col justify-between shadow-xl`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <h3 className="text-2xl font-bold mb-2 px-2 text-left">{title}</h3>
        <p className="text-md mb-2 px-2 text-left">{description}</p>
      </div>
      <img src={image} alt={title} className="mt-6 rounded-md h-52"/>
    </motion.div>
  );
}