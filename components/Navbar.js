"use client";
import React, { useState } from "react";

export default function Navbar({ onToggleTheme, theme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white dark:bg-neutral-900 transition-colors duration-500 shadow-lg">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6">
        <span className="text-lg sm:text-2xl font-bold text-indigo-700 dark:text-indigo-300 tracking-tight">
          Jahaziel Ramos
        </span>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-5">
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
        {/* Mobile Nav */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-900 transition"
            aria-label="Open Menu"
          >
            <svg
              className="w-7 h-7 text-indigo-700 dark:text-indigo-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col px-6 pt-2 pb-4 bg-white dark:bg-neutral-900 shadow">
          <a href="#experience" className="py-2 font-semibold text-gray-700 dark:text-gray-100 hover:text-indigo-500 transition" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#about" className="py-2 font-semibold text-gray-700 dark:text-gray-100 hover:text-indigo-500 transition" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" className="py-2 font-semibold text-gray-700 dark:text-gray-100 hover:text-indigo-500 transition" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" className="py-2 font-semibold text-gray-700 dark:text-gray-100 hover:text-indigo-500 transition" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" className="py-2 font-semibold text-gray-700 dark:text-gray-100 hover:text-indigo-500 transition" onClick={() => setMenuOpen(false)}>Contact</a>
          <a
            href="https://www.linkedin.com/in/jahazielramos/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            LinkedIn
          </a>
          <button
            aria-label="Toggle light/dark mode"
            onClick={() => {
              onToggleTheme();
              setMenuOpen(false);
            }}
            className="mt-2 px-3 py-2 text-sm font-bold rounded border border-indigo-300 bg-white dark:bg-neutral-800 dark:text-indigo-200 text-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-900 transition"
          >
            {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      )}
    </nav>
  );
}
