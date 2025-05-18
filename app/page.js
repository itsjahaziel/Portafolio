"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import "../styles/globals.css"; // Make sure global styles are loaded

export default function Home() {
  const [theme, setTheme] = useState("light");

  // Smooth scroll for hash links in navbar
  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.replace("#", "");
      if (id) {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Sync theme with localStorage and <html> class
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    }
  }, []);
  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <main className="bg-white dark:bg-neutral-950 transition-colors duration-500 min-h-screen">
      <Navbar onToggleTheme={toggleTheme} theme={theme} />
      <Hero />
      <Experience />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
