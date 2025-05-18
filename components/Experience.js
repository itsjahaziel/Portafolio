"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Founder • Rovo Studios",
    location: "New York, United States",
    date: "2024 – Present",
    bullets: [
      "Founded an indie studio for game and app development.",
      "Led design, coding, and business strategy.",
      "Shipped multiple prototypes and managed remote teams."
    ]
  },
  {
    title: "Co-Founder / Full Stack Developer • SpotOn",
    location: "Remote",
    date: "2024 – Present",
    bullets: [
      "Built a prototype app for real-time NYC parking using AI camera analysis.",
      "Led feature development and collaborated on backend infrastructure.",
      "Prepared for public launch and user testing."
    ]
  },
  {
    title: "Frontend Developer • Tern Systems",
    location: "Hybrid",
    date: "2024 – 2025",
    bullets: [
      "Migrated company site from WordPress to React for better performance.",
      "Worked with JavaScript, Node.js, and Figma.",
      "Improved UI, accessibility, and team workflow."
    ]
  },
  {
    title: "Software Developer Intern • MAXX Potential",
    location: "Remote",
    date: "2024",
    bullets: [
      "Built UI components in React and created demo features.",
      "Converted WordPress prototypes into working React apps."
    ]
  },
  {
    title: "Software Developer Intern • Bloomberg LP",
    location: "Manhattan, NY",
    date: "2023",
    bullets: [
      "Worked on automation scripts for robotics-sponsored high school team.",
      "Collaborated on fast-paced Agile teams for dashboards.",
      "Presented projects to senior engineers; praised for teamwork and communication."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-500">
      <h2 className="text-4xl font-extrabold text-center mb-16 text-neutral-800 dark:text-purple-400">Experience</h2>
      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-3 top-0 bottom-0 w-1 bg-purple-400/50"></div>
        <ul className="space-y-16">
          {experiences.map((exp, idx) => (
            <motion.li
              key={idx}
              className="relative pl-14"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.15, type: "spring" }}
              viewport={{ once: true }}
            >
              <span className="absolute left-0 top-2 block h-6 w-6 rounded-full bg-purple-500 border-4 border-white dark:border-neutral-900"></span>
              <h3 className="font-bold text-2xl text-neutral-900 dark:text-neutral-100 mb-1">{exp.title}</h3>
              <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                <span>{exp.location}</span> &nbsp;|&nbsp; <span>{exp.date}</span>
              </div>
              <ul className="list-disc ml-5 text-neutral-800 dark:text-neutral-300">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
