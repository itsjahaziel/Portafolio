"use client";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.div
      className="max-w-3xl mx-auto mt-20 mb-10 px-4 sm:px-8 py-8 rounded-xl shadow bg-white/80 dark:bg-[#19202b]/80 backdrop-blur"
      id="about"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.22 }}
      viewport={{ once: false, amount: 0.7 }}
    >
      {/* Full-body pic with your dog */}
      <div className="flex flex-col items-center mb-6">
        <img
          src="/images/dog.jpg"
          alt="Jahaziel with his dog"
          className="w-60 max-w-full rounded-xl border-2 border-indigo-200 shadow-lg object-cover"
        />
        <span className="text-xs text-gray-500 mt-2 italic">:)</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-4">
        About Me
      </h2>
      <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200">
        Hey! I’m Jahaziel Ramos, a Software Developer born in Harlem, NYC, with a bit of a twist. I spent a few years growing up in Honduras before making my way back to NYC.
        <br /><br />
        My tech journey kicked off in high school, where I was the kid taking apart computers just to see if I could put them back together. Fast-forward to now, I’m all about building full-stack apps, working on indie games, and running my own startup, Rovo Studios.
        <br /><br />
        I love creating user-friendly stuff, geeking out with teammates, and constantly learning new things. When I’m not coding, you’ll probably find me making content, gaming, or brainstorming the next big idea (usually with coffee in hand)!
      </p>
    </motion.div>
  );
}
