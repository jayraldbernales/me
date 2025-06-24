import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full fixed top-0 left-0 z-40 bg-main backdrop-blur">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Left: Logo - stays on the left */}
        <div className="text-2xl font-extrabold relative font-sans">
          <span className="text-main">JB.</span>
          <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-pink-500 block rounded-sm" />
        </div>

        {/* Right-aligned navigation container */}
        <div className="flex items-center gap-8">
          {/* Center: Nav Links - moved to right side */}
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li>
              <a
                href="#home"
                className="hover:text-main transition font-sans text-main px-2 py-1 hover:bg-white/10 rounded-md"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-main transition font-sans text-main px-2 py-1 hover:bg-white/10 rounded-md"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-main transition font-sans text-main px-2 py-1 hover:bg-white/10 rounded-md"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-main transition font-sans text-main px-2 py-1 hover:bg-white/10 rounded-md"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Theme Toggle and Hamburger - stays on far right */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label="Open navigation menu"
            >
              <svg
                width="28"
                height="28"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-main"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-main border-t border-neutral-800 px-6 py-4 animate-fade-in-up">
          <ul className="flex flex-col gap-4 text-white font-sans">
            <li>
              <a
                href="#home"
                className="block py-2 px-3 hover:bg-white/10 rounded-md transition"
                onClick={() => setOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 px-3 hover:bg-white/10 rounded-md transition"
                onClick={() => setOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 px-3 hover:bg-white/10 rounded-md transition"
                onClick={() => setOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 hover:bg-white/10 rounded-md transition"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </li>
            <li>
              <div className="block py-2 px-3">
                <ThemeToggle />
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
