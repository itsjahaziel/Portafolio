"use client";
import { useEffect } from "react";

export default function Background() {
  useEffect(() => {
    // Optional: add a little subtle animation if you want
    // You can also swap this for a cool animated SVG or particle system
    document.body.style.transition = 'background 1s';
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 bg-gradient-to-br from-indigo-100 via-fuchsia-50 to-white dark:from-[#151a23] dark:via-[#1a2030] dark:to-[#151a23] animate-gradient"
      style={{backgroundSize: "200% 200%"}}
    />
  );
}
