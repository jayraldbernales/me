import React, { useState } from "react";

const TechStack: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const techStack = [
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      color: "#F7DF1E",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "#3178C6",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#339933",
    },
    {
      name: "Express",
      logo: "/me/express.png",
      color: "#000000",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "#F05032",
    },
    {
      name: "PHP",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      color: "#777BB4",
    },
    {
      name: "Laravel",
      logo: "/me/laravel-2.svg",
      color: "#FF2D20",
    },
    {
      name: "SQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "#4479A1",
    },
    {
      name: "Tailwind CSS",
      logo: "/me/tailwindcss.svg",
      color: "#06B6D4",
    },
    {
      name: "Bootstrap",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      color: "#7952B3",
    },
  ];

  const duplicatedStack = [...techStack, ...techStack, ...techStack];

  return (
    <>
      <style>
        {`
          @keyframes seamless-marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% / 3));
            }
          }
          
          .animate-seamless-marquee {
            animation: seamless-marquee 20s linear infinite;
          }
          
          .paused {
            animation-play-state: paused !important;
          }

          .fade-overlay-left {
            background: linear-gradient(90deg, var(--color-bg) 0%, rgba(var(--color-bg-rgb), 0) 100%);
          }

          .fade-overlay-right {
            background: linear-gradient(270deg, var(--color-bg) 0%, rgba(var(--color-bg-rgb), 0) 100%);
          }

          [data-theme="light"] .fade-overlay-left,
          [data-theme="light"] .fade-overlay-right {
            --color-bg-rgb: 255, 255, 255;
          }

          [data-theme="dark"] .fade-overlay-left,
          [data-theme="dark"] .fade-overlay-right {
            --color-bg-rgb: 0, 0, 0;
          }
        `}
      </style>

      <div className="w-full px-12 md:px-42 py-16 overflow-hidden bg-main relative">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-main">Tools</h1>
        </div>

        <div className="px-8 overflow-hidden relative">
          {/* Left fade overlay */}
          <div className="fade-overlay-left absolute left-0 top-0 bottom-0 w-12 md:w-32 z-10 pointer-events-none"></div>

          {/* Right fade overlay */}
          <div className="fade-overlay-right absolute right-0 top-0 bottom-0 w-12 md:w-32 z-10 pointer-events-none"></div>
          <div
            className={`flex space-x-2 animate-seamless-marquee ${
              isHovered ? "paused" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              width: "fit-content",
            }}
          >
            {duplicatedStack.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex flex-col items-center justify-center min-w-[120px] p-6 transition-transform duration-700 ease-in-out hover:scale-130 group cursor-pointer"
              >
                <div className="md:w-25 md:h-25 mb-4 flex items-center justify-center">
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="w-full h-full object-contain transition-all duration-300 filter brightness-90 group-hover:brightness-110 group-hover:drop-shadow-2xl"
                    style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))" }}
                  />
                </div>
                <span className="text-sm font-medium text-main text-cente">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStack;
