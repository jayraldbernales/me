import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-main text-main py-28 relative overflow-hidden"
    >
      <motion.div
        className="text-center px-6"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-[16vw] md:text-[12vw] font-extrabold text-main leading-none tracking-tighter font-sans uppercase">
          LET’S TALK
        </h1>

        <div className="mt-10 text-sm md:text-base font-semibold max-w-md mx-auto">
          <p className="uppercase">
            Got a question, proposal, project, or want to work together on
            something?
          </p>
          <a
            href="mailto:your-email@example.com"
            className="block mt-2 underline hover:text-accent transition duration-300"
          >
            Send me an email
          </a>
        </div>

        <div className="mt-10 flex justify-center gap-8 text-main">
          <a
            href="https://github.com/yourhandle"
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
      </motion.div>

      <footer className="mt-20 border-t border-neutral-800 pt-6 flex justify-between items-center text-xs px-6">
        <p>COPYRIGHT 2025</p>
        <p>
          DESIGN & DEVELOPMENT BY{" "}
          <a
            href="https://sankalp-jaiswal-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline hover:text-accent"
          >
            SANKALP JAISWAL
          </a>
        </p>
      </footer>
    </section>
  );
};

export default Contact;
