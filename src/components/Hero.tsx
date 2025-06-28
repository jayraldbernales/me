import React from "react";
import { motion } from "framer-motion";
import Hero3D from "./Hero3D";
import { FileText, Linkedin, Github, Mail } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-[100vh] flex flex-col-reverse md:flex-row justify-center items-center md:items-stretch text-center md:text-left pt-28 md:pt-0 pb-12 md:pb-0 pl-6 md:pl-32 lg:pl-52 relative overflow-hidden bg-main"
    >
      <div className="flex-1 flex flex-col justify-center items-center md:items-start mb-12 md:mb-0">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4 text-main font-sans leading-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          HI, I'M JAYRALD
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-main mb-8 max-w-xl mx-auto md:mx-0 font-sans leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          A 22yo Fullstack Web Developer
        </motion.p>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          <motion.a
            href="#projects"
            className="px-8 py-3 rounded border border-neutral-200 dark:border-neutral-700 text-main font-bold shadow-sm hover:scale-105 hover:bg-main/10 transition font-sans flex items-center gap-2 focus:outline-none "
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Resume
            <FileText className="w-5 h-5" />
          </motion.a>
          <div className="flex items-center gap-3 mt-2 sm:mt-0">
            <a
              href="https://www.linkedin.com/in/jayrald-bernales-19a8bb346/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full p-2 hover:bg-main/10 transition focus:outline-none "
            >
              <Linkedin className="w-6 h-6 text-main" />
            </a>
            <a
              href="https://github.com/jayraldbernales/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full p-2 hover:bg-main/10 transition focus:outline-none "
            >
              <Github className="w-6 h-6 text-main" />
            </a>
            <a
              href="mailto:bernalesj28@gmail.com"
              aria-label="Email"
              className="rounded-full p-2 hover:bg-main/10 transition focus:outline-none "
            >
              <Mail className="w-6 h-6 text-main" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:mr-20 items-center md:items-center">
        <Hero3D />
      </div>
    </section>
  );
};

export default Hero;
