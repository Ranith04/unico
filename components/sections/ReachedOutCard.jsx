'use client';

import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion'
const pieData = [
  { name: 'Reached', value: 70 },
  { name: 'Remaining', value: 30 }
];

const pieColors = ['#3b82f6', '#e5e7eb'];

const barData = [
  { day: 'M', time: 2 },
  { day: 'T', time: 3.5 },
  { day: 'W', time: 1 },
  { day: 'T', time: 4.5 },
  { day: 'F', time: 3 },
  { day: 'S', time: 1.5 },
  { day: 'Today', time: 2 }
];

export default function ReachOutCard() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-blue-600 text-white p-10 mb-20 rounded-3xl flex flex-col lg:flex-row justify-between items-center gap-10 w-[90%] mx-auto">

      <div className="flex-1 space-y-5 max-w-lg">
        <motion.span
          className="mb-6 px-6 py-2 bg-[#3396F620] text-white font-medium rounded-lg transition border border-blue-400 w-fit"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          Get Started
        </motion.span>
        <h2 className="text-4xl font-bold leading-tight mt-5">
          Take The First Step And<br />Reach Out To Us
        </h2>
        <p className="text-gray-300">
          We’d love to hear from you. Whether you have a question, need a custom solution,
          or just want to explore how we can work together — our team is here to help.
          Reach out today and let’s start building something great.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2">
          Contact Us <ArrowUpRight size={18} />
        </button>
      </div>

      <div className="flex-1 relative flex justify-end items-center min-h-[320px]">
        <div className="bg-white text-black rounded-2xl p-6 w-80 shadow-xl z-20 flex flex-col items-center">
          <div className="relative w-full h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-3xl font-bold">45623</p>
              <p className="text-sm text-gray-500">visitors this month</p>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-lg font-semibold">You are doing good!</p>
            <p className="text-sm text-gray-500">You almost reached your goal</p>
          </div>
        </div>

        <div className="bg-white text-black rounded-xl p-5 w-56 shadow-xl absolute -bottom-6 left-32 z-10 text-center">
          <h3 className="text-lg font-bold">2h 20m</h3>
          <p className="text-sm text-gray-500 mb-3">Average time you spent per day</p>
          <ResponsiveContainer width="100%" height={80}>
            <BarChart data={barData}>
              <XAxis dataKey="day" tickLine={false} axisLine={false} stroke="#9ca3af" />
              <Bar dataKey="time" fill="#3b82f6" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}