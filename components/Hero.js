"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="flex flex-col items-center justify-center min-h-[80vh] h-screen pt-28 pb-12 px-4 sm:px-8"
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, type: "spring" }}
    >
      {/* Professional Profile Picture */}
      <img
        src="/images/profesional.jpg"
        alt="Jahaziel Ramos"
        className="w-36 h-36 rounded-full border-4 border-indigo-400 shadow-lg object-cover mb-6 bg-white"
      />
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 text-gray-900 dark:text-purple-300 tracking-tight text-center animate-fade-in-down">
        Jahaziel Ramos
      </h1>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-purple-700 dark:text-purple-300 text-center animate-fade-in-down">
        Software Developer
      </h2>
      <p className="text-base sm:text-lg italic mb-8 text-gray-700 dark:text-gray-200 text-center">
        "Built with love, sweat, and a lot of Google searches."
      </p>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-xs sm:max-w-full justify-center items-center">
        <a
          href="#experience"
          className="w-full sm:w-auto text-center px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          My Experience
        </a>
        <a
          href="#contact"
          className="w-full sm:w-auto text-center px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
          Contact Me
        </a>
        <a
          href="https://www.linkedin.com/in/jahazielramos/"
          className="w-full sm:w-auto text-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          target="_blank" rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </motion.section>
  );
}
