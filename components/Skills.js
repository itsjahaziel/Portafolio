"use client";
import { motion } from "framer-motion";

const skills = [
  "JavaScript", "React", "Next.js", "Node.js", "Python", "C#", "Unity", "SQL", "MongoDB", "HTML", "CSS", "TailwindCSS", "Firebase", "Git", "Jira"
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="max-w-3xl mx-auto my-20 px-4 py-8 rounded-xl shadow bg-white/80 dark:bg-neutral-900/80 backdrop-blur transition-colors duration-500"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1 }}
      viewport={{ once: true, amount: 0.7 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-6">
        Skills
      </h2>
      <ul className="flex flex-wrap gap-4">
        {skills.map((skill, i) => (
          <motion.li
            key={skill}
            className="px-4 py-2 bg-indigo-100 dark:bg-indigo-800 text-indigo-900 dark:text-indigo-100 rounded-full font-semibold shadow-sm"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true, amount: 0.8 }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
