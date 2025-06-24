import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex flex-col justify-center items-center text-center pt-32 pb-12 relative overflow-hidden bg-main"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-4 text-main font-sans"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Hi, I'm Jayrald Bernales
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl text-main mb-8 max-w-xl mx-auto font-sans"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        A passionate Frontend Developer crafting beautiful, performant, and
        accessible web experiences.
      </motion.p>
      <motion.a
        href="#projects"
        className="inline-block px-8 py-3 rounded bg-accent text-main font-bold shadow-lg hover:scale-105 transition font-sans"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default Hero;
