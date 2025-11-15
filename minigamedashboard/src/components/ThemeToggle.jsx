import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      className="
        fixed bottom-6 right-6 z-50
        p-3 rounded-full 
        bg-white dark:bg-black
        text-black dark:text-white
        border border-gray-300 dark:border-gray-700
        shadow-lg
        transition-colors duration-300
      "
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </motion.button>
  );
}
