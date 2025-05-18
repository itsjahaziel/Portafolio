"use client";
import React from "react";

export default function Navbar({ onToggleTheme, theme }) {
  return (
    <nav className="w-full sticky top-0 z-50 bg-white dark:bg-neutral-900 transition-colors duration-500 shadow-lg">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-6">
        <span className="text-2xl font-bold text-indigo-700 dark:text-indigo-300 tracking-tight">Jahaziel Ramos</span>
        <div className="flex items-center gap-5">
          <a href="#experience" className="font-semibold text-lg text-gray-700 dark:text-gray-100 hover:text-indigo-500 transition">Experience</a>
          <a href="#about" className="font-semibold text-lg text-gray-700 dark:text-gray-100 hover:text-indigo-500 transition">About</a>
          <a href="#skills" className="font-semibold text-lg text-gray-700 dark:text-gray-100 hover:text-indigo-500 transition">Skills</a>
          <a href="#projects" className="font-semibold text-lg text-gray-700 dark:text-gray-100 hover:text-indigo-500 transition">Projects</a>
          <a href="#contact" className="font-semibold text-lg text-gray-700 dark:text-gray-100 hover:text-indigo-500 transition">Contact</a>
          <a
            href="https://www.linkedin.com/in/jahazielramos/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            LinkedIn
          </a>
          <button
            aria-label="Toggle light/dark mode"
            onClick={onToggleTheme}
            className="ml-2 px-3 py-2 text-sm font-bold rounded border border-indigo-300 bg-white dark:bg-neutral-800 dark:text-indigo-200 text-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-900 transition"
          >
            {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </div>
    </nav>
  );
}
