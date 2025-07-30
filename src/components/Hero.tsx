import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { FileText, Linkedin, Github, Mail } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="relative">
      <section
        id="home"
        className="min-h-[100vh] flex flex-col-reverse md:flex-row justify-center items-center md:items-stretch text-center md:text-left pb-12 md:pb-0 md:pl-32 lg:pl-52 relative overflow-hidden bg-main"
      >
        <div className="flex-1 flex flex-col justify-center items-center md:items-start mb-12 md:mb-0">
          <motion.h1
            className="text-7xl sm:text-6xl lg:text-8xl font-extrabold  text-main font-[Blinker] leading-tight text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            HI, I'M JAYRALD
          </motion.h1>

          <motion.p
            className="text-xl sm:text-xl lg:text-2xl text-main/90 mb-10 max-w-xl font-[Blinker] leading-relaxed text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A 22-year-old Fullstack Web Developer passionate about crafting
            responsive and engaging web applications.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded border border-[var(--color-accent)] text-main font-bold shadow-sm hover:scale-105 hover:bg-main/10 transition-all duration-200 font-[Blinker] flex items-center gap-2 focus:outline-none"
            >
              Resume
              <FileText className="w-5 h-5" />
            </a>

            <div className="flex items-center gap-3 mt-2 sm:mt-0 relative z-10">
              <a
                href="https://www.linkedin.com/in/jayrald-bernales-19a8bb346/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full p-2 text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              <a
                href="https://github.com/jayraldbernales/"
                target="_blank"
                className="rounded-full p-2 text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-200"
              >
                <Github className="w-6 h-6" />
              </a>

              <a
                href="mailto:jayraldbernales01@gmail.com"
                aria-label="Email"
                className="rounded-full p-2 text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-200"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
        <div className="hidden md:block ml-20 md:ml-0 md:w-[45vw] h-[5vh] md:h-[90vh] md:max-w-[700px]">
          <Spline
            className="absolute xl:right-[-28%] scale-25 md:scale-100 right-[-20%] md:top-13 top-0"
            scene="https://prod.spline.design/O6lOa1Mwds3cPphR/scene.splinecode"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
