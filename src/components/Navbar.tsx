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
        <div className="text-2xl font-extrabold relative blinker-bold">
          <span className="text-main">JB.</span>
          <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-accent block rounded-sm" />
        </div>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-4 text-md font-medium">
            {[
              { label: "Home", id: "home" },
              { label: "About", id: "about" },
              { label: "Projects", id: "projects" },
              { label: "Contact", id: "contact" },
            ].map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="transition-all font-sans text-main px-2 py-1 relative group"
                  onClick={(e) => handleSmoothScroll(e, id)}
                >
                  {label}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
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
            {[
              { label: "Home", id: "home" },
              { label: "About", id: "about" },
              { label: "Projects", id: "projects" },
              { label: "Contact", id: "contact" },
            ].map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="block py-2 px-3 hover:bg-white/10 rounded-md transition"
                  onClick={(e) => handleSmoothScroll(e, id)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
