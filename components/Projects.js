"use client";
import { motion } from "framer-motion";

const projects = [
  {
    name: "SpotOn",
    desc: "Co-founder & backend developer for a parking availability app using AI-powered street camera analysis and real-time APIs.",
    image: "/images/spoton.png",
  },
  {
    name: "Face Recognition App",
    desc: "Python-based deep learning project using OpenCV & TensorFlow for security and automation.",
    image: "/images/opencv.jpg",
  },
  {
    name: "Rovo Studios",
    desc: "Founder of an indie game and software development studio.",
    image: "/images/rovostudios.png",
  },
  {
    name: "Portfolio Website",
    desc: "This site! Built with Next.js and Tailwind CSS.",
    image: "/images/portafolio.png",
  },
];

export default function Projects() {
  return (
    <motion.div
      className="max-w-3xl mx-auto my-20 px-2 sm:px-4 py-8 rounded-xl shadow bg-white/80 dark:bg-neutral-900/80 backdrop-blur transition-colors duration-500"
      id="projects"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.22 }}
      viewport={{ once: false, amount: 0.45 }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-300 mb-6">
        Projects
      </h2>
      <div className="grid gap-7 grid-cols-1 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            className="bg-gray-100 dark:bg-[#181d29] rounded-xl overflow-hidden shadow hover:shadow-xl transition"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.11,
              duration: 0.55,
              type: "spring",
              bounce: 0.22,
            }}
            viewport={{ once: false, amount: 0.45 }}
          >
            <div className="h-36 sm:h-40 bg-gray-300 dark:bg-gray-800 flex items-center justify-center">
              <img
                src={p.image}
                alt={p.name}
                className="object-contain h-full w-full"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-base sm:text-xl text-gray-900 dark:text-white">
                {p.name}
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-300">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
