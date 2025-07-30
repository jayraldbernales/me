import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Contact: React.FC = () => {
  const [showArrow, setShowArrow] = useState(false);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    function checkVisibility() {
      const contact = contactRef.current;
      if (!contact) return;
      const rect = contact.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        if (!timeoutId) {
          timeoutId = setTimeout(() => setShowArrow(true), 1500);
        }
      } else {
        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = null;
        }
        setShowArrow(false);
      }
    }
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);
    checkVisibility();
    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);
  return (
    <section
      id="contact"
      ref={contactRef}
      className="bg-black text-[#e4ded7] pt-28 relative overflow-hidden"
    >
      <motion.div
        className="text-center px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="/me/talk.png"
          alt="LET’S TALK"
          className="w-full md:h-[450px] object-contain object-center"
        />

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 text-sm md:text-base px-6 md:px-33">
          <div className="blinker-bold font-semibold text-center md:text-left max-w-md">
            <p className="uppercase">
              Got a question, proposal, project, or want to work together on
              something?
            </p>
            <a
              href="mailto:jayraldbernales01@gmail.com"
              className="block mt-2 underline hover:text-accent transition duration-300"
            >
              Send me an email
            </a>
          </div>

          <div className="flex gap-6 text-[#e4ded7]">
            <a
              href="https://github.com/jayraldbernales"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 hover:text-accent transition" />
            </a>
            <a
              href="https://linkedin.com/in/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 hover:text-accent transition" />
            </a>
            <a
              href="https://x.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5 hover:text-accent transition" />
            </a>
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 hover:text-accent transition" />
            </a>
          </div>
        </div>
      </motion.div>

      <footer className="mt-10 border-t blinker-bold border-neutral-800 py-8 flex justify-between items-center text-xs px-6 md:px-43">
        <p>COPYRIGHT 2025</p>
        <p>
          DESIGN & DEVELOPMENT BY{" "}
          <a
            href="https://sankalp-jaiswal-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline hover:text-accent"
          >
            Jayrald Bernales
          </a>
        </p>
      </footer>
      {/* Floating Arrow Up Button (only visible when Contact is in view) */}
      {showArrow && (
        <motion.button
          type="button"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => {
            const top = document.getElementById("home");
            if (top) {
              top.scrollIntoView({ behavior: "smooth" });
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="fixed left-1/2 -translate-x-1/2 bottom-4 bg-white border border-neutral-800 rounded-full p-2 shadow-lg hover:bg-accent/20 transition-colors duration-300 flex items-center justify-center z-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-7 h-7 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </motion.button>
      )}
    </section>
  );
};

export default Contact;
