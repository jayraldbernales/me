import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    typeof window !== "undefined" &&
    window.localStorage.getItem("theme") === "light"
      ? "light"
      : "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Color-filled moon icon with merge-like transition
  const MoonIcon = () => (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      initial={{ scale: 0.3, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: 10 }}
      transition={{
        duration: 0.15,
        ease: "easeOut",
      }}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </motion.svg>
  );

  // Color-filled sun icon with merge-like transition
  const SunIcon = () => (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      initial={{ scale: 0.3, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: 20 }}
      transition={{
        duration: 0.15,
        ease: "easeOut",
      }}
    >
      <circle cx="12" cy="12" r="5" />
      <g>
        <line
          x1="12"
          y1="1"
          x2="12"
          y2="3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="12"
          y1="21"
          x2="12"
          y2="23"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="4.22"
          y1="4.22"
          x2="5.64"
          y2="5.64"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="18.36"
          y1="18.36"
          x2="19.78"
          y2="19.78"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="1"
          y1="12"
          x2="3"
          y2="12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="21"
          y1="12"
          x2="23"
          y2="12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="4.22"
          y1="19.78"
          x2="5.64"
          y2="18.36"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="18.36"
          y1="5.64"
          x2="19.78"
          y2="4.22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </motion.svg>
  );

  return (
    <motion.button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="text-main"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={theme}
          layout
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{
            duration: 0.1,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.05 }}
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
