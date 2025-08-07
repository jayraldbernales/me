import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "education">(
    "experience"
  );

  const EducationHistory = [
    {
      id: 1,
      institution: "Bohol Island State University",
      level: "College",
      degree: "BS Computer Science",
      period: "2022 - 2026",
      logo: "/me/BISU.png",
      achievements: [
        "Dean's Lister (GWA: 1.25)",
        "Thesis: AI-powered educational platform",
      ],
      links: [
        { name: "Thesis Paper", url: "#" },
        { name: "University Website", url: "https://up.edu.ph" },
      ],
    },
    {
      id: 2,
      institution: "La Union National High School",
      level: "Senior High School",
      degree: "HUMSS Strand",
      period: "2018 - 2020",
      logo: "/me/highschool.png",
      achievements: [
        "Valedictorian (Batch 2020)",
        "National Coding Competition Finalist",
      ],
    },
    {
      id: 3,
      institution: "La Union National High School",
      level: "Junior High School",
      degree: "General Academics",
      period: "2014 - 2018",
      logo: "/me/highschool.png",
      achievements: ["With High Honors", "Computer Club President"],
    },
    {
      id: 4,
      institution: "La Union Elementary School",
      level: "Elementary",
      degree: "Grade 6",
      period: "2008 - 2014",
      logo: "/me/highschool.png",
      achievements: ["Valedictorian (Batch 2014)", "Math Olympiad Champion"],
    },
    {
      id: 5,
      institution: "Mabini Central Elementary School",
      level: "Elementary",
      degree: "Grade 1-5",
      period: "2008 - 2014",
      logo: "/me/elem.png",
      achievements: ["Valedictorian (Batch 2014)", "Math Olympiad Champion"],
    },
  ];

  const experienceData = [
    {
      id: 1,
      company: "4th Year - BS Computer Science",
      position: "Bohol Island State University",
      period: "2023 - 2024",
      logo: "/me/BISU.png",
      achievements: [
        "Thesis: AI-powered educational platform",
        "President - Association of Computer Science Students",
        "Advanced courses: Machine Learning, Cloud Computing",
        "Dean's Lister (GWA: 1.25)",
      ],
    },
    {
      id: 2,
      company: "Jaya Solutions OPC",
      position: "Intern",
      period: "2025 - Present",
      logo: "/me/jaya.png",
      achievements: [
        "Developing responsive web applications using React and TypeScript",
        "Optimizing application performance through code improvements",
        "Collaborating with UX designers to implement interfaces",
      ],
    },
    {
      id: 3,
      company: "3rd Year - BS Computer Science",
      position: "Bohol Island State University",
      period: "2022 - 2023",
      logo: "/me/BISU.png",
      achievements: [
        "Vice President - Computer Science Student Council",
        "Courses: Software Engineering, Database Systems",
        "Developed campus event management system",
        "Dean's Lister",
      ],
    },
    {
      id: 4,
      company: "2nd Year - BS Computer Science",
      position: "Bohol Island State University",
      period: "2021 - 2022",
      logo: "/me/BISU.png",
      achievements: [
        "Courses: Data Structures, Algorithms, Web Development",
        "Participated in inter-university coding competitions",
        "Volunteer - University Tech Support Team",
      ],
    },
    {
      id: 5,
      company: "1st Year - BS Computer Science",
      position: "Bohol Island State University",
      period: "2020 - 2021",
      logo: "/me/BISU.png",
      achievements: [
        "Introductory programming courses",
        "Member - Programming Club",
        "Adapted to online learning environment",
      ],
    },
  ];

  return (
    <section className="min-h-screen py-12 bg-main">
      <div className="max-w-6xl mx-auto px-6">
        {/* Tabs with contained active state */}
        <div className="flex border bg-[#151514] border-neutral-700 rounded-lg mb-5 overflow-hidden p-1">
          <button
            onClick={() => setActiveTab("experience")}
            className={`flex-1 px-6 py-3 font-medium text-center text-sm md:text-base transition-all duration-200 rounded-md
              ${
                activeTab === "experience"
                  ? "bg-main text-main shadow-sm"
                  : "bg-transparent text-gray-400 hover:text-gray-300"
              }`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`flex-1 px-6 py-3 font-medium text-center text-sm md:text-base transition-all duration-200 rounded-md
              ${
                activeTab === "education"
                  ? "bg-main text-main shadow-sm"
                  : "bg-transparent text-gray-400 hover:text-gray-300"
              }`}
          >
            Education
          </button>
        </div>

        {/* Content */}
        <div
          key={activeTab}
          className="border border-neutral-700 rounded-lg p-6 md:p-8 space-y-8 max-h-[70vh] overflow-y-auto"
        >
          {activeTab === "education" &&
            EducationHistory.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
                    {edu.logo ? (
                      <img
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        className="w-full h-full object-contain p-1"
                      />
                    ) : (
                      <span className="font-bold text-sm text-gray-800">
                        {edu.institution.substring(0, 2)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="mb-2">
                    <p className="text-gray-400 text-sm mb-1">{edu.period}</p>
                    <h3 className="text-main font-semibold text-lg mb-1">
                      {edu.institution}
                    </h3>
                    <div className="flex gap-2 items-baseline">
                      <p className="text-gray-300 text-sm font-medium bg-gray-700 px-2 py-1 rounded">
                        {edu.level}
                      </p>
                      <p className="text-gray-300 text-base">{edu.degree}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3">
                        <span className="text-white mt-2 text-xs">•</span>
                        <span className="text-gray-300 text-sm leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {edu.links && (
                    <div className="flex gap-3">
                      {edu.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-opposite text-opposite text-sm rounded-md hover:bg-gray-600 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={12} />
                          {link.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

          {activeTab === "experience" &&
            experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                {/* Logo */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain p-1"
                      />
                    ) : (
                      <span className="font-bold text-sm text-gray-800">
                        {exp.company.substring(0, 2)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="mb-2">
                    <p className="text-gray-400 text-sm mb-1">{exp.period}</p>
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {exp.company}
                    </h3>
                    <p className="text-gray-300 text-base font-medium">
                      {exp.position}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3">
                        <span className="text-white mt-2 text-xs">•</span>
                        <span className="text-gray-300 text-sm leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default About;
