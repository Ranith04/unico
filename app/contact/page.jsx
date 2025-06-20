'use client';

import SupportCard from "@/components/sections/SupportCard";
import { motion } from "framer-motion";

export default function ContactPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Email sent successfully!");
    } else {
      alert("Error sending email.");
    }
  };

  return (
    <div className="min-h-screen w-full bg-white">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full min-h-[70vh] flex flex-col gap-6 items-center justify-center bg-gradient-to-r from-black via-[#0f172a] to-blue-500 text-center px-4"
      >
        <motion.span
          className="mb-6 px-6 py-2 bg-[#3396F620] text-white font-medium rounded-lg transition"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          Let’s Connect
        </motion.span>
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          We're here to empower individuals and organizations—whether you're a student, startup, business, or investor—with innovative solutions tailored to your goals.
        </motion.p>
      </motion.section>

      <div className="flex flex-col lg:flex-row justify-center items-start px-6 py-10 gap-6">
        <SupportCard />

        <motion.div
          className="max-w-[40%] h-auto mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg px-6 py-6 space-y-6 text-gray-800"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-center">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={3}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition resize-none"
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-900 transition"
            >
              Send
            </button>
          </form>
        </motion.div>
      </div>

      <motion.div
        className="w-[80%] h-[400px] mx-auto py-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.591355785375!2d77.66148057583795!3d12.844013117308265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c93e3b289c7%3A0xb6e2ad82fd93f90f!2sNeeladri%20Nagar%2C%20Electronic%20City%2C%20Bengaluru%2C%20Karnataka%20560100!5e0!3m2!1sen!2sin!4v1716567284607!5m2!1sen!2sin"
          className="w-full h-full rounded-xl border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </div>
  );
}