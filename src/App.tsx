import React, { useEffect, useState, Suspense, lazy } from "react";
import Loader from "./components/Loader";

const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const TechStack = lazy(() => import("./components/TechStack"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const ChatWidget = lazy(() => import("./components/ChatWidget"));
// const SplashCursor = lazy(() => import("./components/SplashCursor"));

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-main text-main font-sans relative overflow-x-hidden transition-colors duration-300">
      <Suspense fallback={<Loader />}>
        {/* <SplashCursor /> */}
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">
                <Hero />
                <About />
                <TechStack />
                <Projects />
                <Contact />
              </main>
            </div>
            <ChatWidget />
          </>
        )}
      </Suspense>
    </div>
  );
};

export default App;
