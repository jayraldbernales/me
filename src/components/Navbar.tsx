import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { AlignRight } from "lucide-react";
import "../App";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav className="w-full bg-transparent z-40 absolute top-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-24 py-4 md:py-10">
        <div className="text-3xl font-extrabold relative blinker-bold">
          <span className="text-main">JB.</span>
          <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-accent block rounded-sm" />
        </div>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-4 text-md font-medium">
            <li>
              <a
                href="#home"
                className="transition font-sans text-main px-2 py-1 hover:bg-white/10 rounded-md"
                onClick={(e) => handleSmoothScroll(e, "home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="transition font-sans text-main px-2 py-1 hover:bg-white/10 rounded-md"
                onClick={(e) => handleSmoothScroll(e, "about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="transition font-sans text-main px-2 py-1 hover:bg-white/10 rounded-md"
                onClick={(e) => handleSmoothScroll(e, "projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition font-sans text-main px-2 py-1 hover:bg-white/10 rounded-md"
                onClick={(e) => handleSmoothScroll(e, "contact")}
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
              <AlignRight className="w-7 h-7 text-main" />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-main border-t border-neutral-800 px-6 py-4 animate-fade-in-up">
          <ul className="flex flex-col gap-4 text-main font-sans">
            <li>
              <a
                href="#home"
                className="block py-2 px-3 hover:bg-white/10 rounded-md transition"
                onClick={(e) => handleSmoothScroll(e, "home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 px-3 hover:bg-white/10 rounded-md transition"
                onClick={(e) => handleSmoothScroll(e, "about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 px-3 hover:bg-white/10 rounded-md transition"
                onClick={(e) => handleSmoothScroll(e, "projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 hover:bg-white/10 rounded-md transition"
                onClick={(e) => handleSmoothScroll(e, "contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
