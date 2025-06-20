"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

export default function FeatureSection({
    title,
    description,
    image,
    points = [],
    reverse = false,
    buttonText,
    buttonLink = "#"
}) {
    return (

        <div className={`w-fit flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse bg-gradient-to-t from-blue-500 to-white" : ""} items-center gap-32 mx-auto mt-20 p-16 rounded-3xl`}>
            <motion.div
                className="w-full md:w-1/2"
                initial={{ opacity: 0, x: reverse ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <img
                    src={image}
                    alt={title}
                    className="object-center shadow-xl w-[500px] h-[400px]"
                />
            </motion.div>

            <motion.div
                className="w-full md:max-w-md"
                initial={{ opacity: 0, x: reverse ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl font-bold text-slate-900 mb-4">{title}</h2>
                <p className="text-gray-700 font-medium text-lg mb-6">{description}</p>

                <ul className="space-y-4 mb-8">
                    {points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="text-blue-500 w-6 h-6" />
                            <span className="text-slate-700 font-medium text-lg">{point}</span>
                        </li>
                    ))}
                </ul>
                { buttonText === '' ? (
                    <a
                    href={buttonLink}
                    className="inline-flex items-center gap-2 bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-600 transition"
                    >
                        {buttonText} <ArrowUpRight size={18} />
                    </a>
                ) : (<></>)}
            </motion.div>
        </div>

    );
}