"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  // Handler for form submission
  function handleSubmit(e) {
    setTimeout(() => setSubmitted(true), 100); // Show thank you message
  }

  return (
    <motion.div
      className="max-w-3xl mx-auto my-10 px-4 py-8 rounded-xl shadow bg-white/80 dark:bg-[#19202b]/80 backdrop-blur"
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-4">
        Contact
      </h2>
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center text-center"
        >
          <span className="text-green-600 text-2xl font-bold mb-2">
            Thank you! 🎉
          </span>
          <p className="text-gray-800 dark:text-gray-200">
            Your message has been sent.<br />
            I’ll get back to you as soon as possible!
          </p>
        </motion.div>
      ) : (
        <form
          action="https://formspree.io/f/mrbqdzbv"
          method="POST"
          className="flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="p-4 rounded-lg border border-gray-300 dark:bg-[#161b22] dark:border-neutral-700 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="p-4 rounded-lg border border-gray-300 dark:bg-[#161b22] dark:border-neutral-700 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows={5}
            className="p-4 rounded-lg border border-gray-300 dark:bg-[#161b22] dark:border-neutral-700 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg mt-2 text-lg transition"
          >
            Send Message
          </button>
        </form>
      )}
    </motion.div>
  );
}
