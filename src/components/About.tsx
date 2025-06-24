import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-main">
      <motion.div
        className="max-w-3xl mx-auto px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-main font-sans">
          About Me
        </h2>
        <p className="text-main text-lg mb-4 font-sans">
          I'm Jayrald Bernales, a frontend developer with a passion for building
          modern, accessible, and visually stunning web applications. I love
          working with React, TypeScript, and the latest web technologies to
          deliver seamless user experiences.
        </p>
        <h3 className="text-xl font-semibold mt-8 mb-2 text-main font-sans">
          Education
        </h3>
        <ul className="list-disc list-inside text-main font-sans">
          <li>
            Bachelor of Science in Computer Science, [Your University], [Year]
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default About;
