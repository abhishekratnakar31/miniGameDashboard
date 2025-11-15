import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <header className="sticky top-9 z-20">
      <div
        className="
          max-w-xl mx-auto px-2 py-3 
          backdrop-blur-md bg-transparent border border-gray-300/10 rounded-xl
          dark:border-gray-700 
          transition
        "
      >
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div
            className="
              w-40 h-10 rounded-lg flex items-center justify-center font-bold
              bg-gradient-to-tr from-primary to-accent
              text-black dark:text-white text-4xl
            "
          >
            MiniHub
          </div>
        </div>
      </div>
    </header>
  );
}
