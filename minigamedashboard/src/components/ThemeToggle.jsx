import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 p-3 rounded-full
                bg-gray-800 dark:bg-gray-200
                shadow-lg border border-gray-700 dark:border-gray-300"
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </motion.button>
  );
}