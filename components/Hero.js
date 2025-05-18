"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="flex flex-col items-center justify-center h-screen pt-24 pb-12"
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, type: "spring" }}
    >
      <h1 className="text-6xl md:text-7xl font-extrabold mb-4 text-gray-900 dark:text-purple-300 tracking-tight text-center animate-fade-in-down">
        Jahaziel Ramos
      </h1>
      <h2 className="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300 text-center animate-fade-in-down">
        Software Developer
      </h2>
      <p className="text-lg italic mb-8 text-gray-700 dark:text-gray-200 text-center">
        "Built with love, sweat, and a lot of Google searches."
      </p>
      <div className="flex gap-6">
        <a
          href="#experience"
          className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          My Experience
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
          Contact Me
        </a>
        <a
          href="https://www.linkedin.com/in/jahazielramos/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          target="_blank" rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </motion.section>
  );
}
