import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Modern Portfolio",
    description:
      "A sleek, animated portfolio built with React, TypeScript, Vite, and Tailwind CSS.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Chat Widget",
    description: "A floating chat widget with simulated replies and smooth UI.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    tags: ["React", "UI", "Widget"],
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-opposite">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-10 text-center text-main font-sans"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.a
              href={project.link}
              key={project.title}
              className="group block rounded-xl overflow-hidden card shadow-lg hover:scale-105 transition relative font-sans"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
              viewport={{ once: true }}
              tabIndex={0}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:opacity-80 transition"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition font-sans">
                  {project.title}
                </h3>
                <p className="text-main mb-3 font-sans">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded bg-secondary text-main font-sans"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
