import{r as i,j as e}from"./index-CRqG_VXN.js";const c=()=>{const[t,a]=i.useState(!1),s=[{name:"JavaScript",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",color:"#F7DF1E"},{name:"TypeScript",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",color:"#3178C6"},{name:"React",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",color:"#61DAFB"},{name:"Node.js",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",color:"#339933"},{name:"Express",logo:"/me/express.png",color:"#000000"},{name:"Git",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",color:"#F05032"},{name:"PHP",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",color:"#777BB4"},{name:"Laravel",logo:"/me/laravel-2.svg",color:"#FF2D20"},{name:"SQL",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",color:"#4479A1"},{name:"Tailwind CSS",logo:"/me/tailwindcss.svg",color:"#06B6D4"},{name:"Bootstrap",logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",color:"#7952B3"}],r=[...s,...s];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          @keyframes seamless-marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% / 2));
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
        `}),e.jsxs("div",{className:"w-full px-12 md:px-42 py-16 overflow-hidden bg-main relative",children:[e.jsx("div",{className:"text-center mb-12",children:e.jsx("h1",{className:"text-4xl font-bold text-main",children:"Tools"})}),e.jsxs("div",{className:"px-8 overflow-hidden relative",children:[e.jsx("div",{className:"fade-overlay-left absolute left-0 top-0 bottom-0 w-12 md:w-32 z-10 pointer-events-none"}),e.jsx("div",{className:"fade-overlay-right absolute right-0 top-0 bottom-0 w-12 md:w-32 z-10 pointer-events-none"}),e.jsx("div",{className:`flex space-x-2 animate-seamless-marquee ${t?"paused":""}`,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),style:{width:"fit-content"},children:r.map((o,n)=>e.jsxs("div",{className:"flex flex-col items-center justify-center min-w-[120px] p-6 transition-transform duration-700 ease-in-out hover:scale-130 group cursor-pointer",children:[e.jsx("div",{className:"md:w-25 md:h-25 mb-4 flex items-center justify-center",children:e.jsx("img",{src:o.logo,alt:`${o.name} logo`,className:"w-full h-full object-contain transition-all duration-300 filter brightness-90 group-hover:brightness-110 group-hover:drop-shadow-2xl",style:{filter:"drop-shadow(0 4px 8px rgba(0,0,0,0.1))"}})}),e.jsx("span",{className:"text-sm font-medium text-main text-cente",children:o.name})]},`${o.name}-${n}`))})]})]})]})};export{c as default};
