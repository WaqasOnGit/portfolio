import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SplashCursor from "./components/SplashCursor";
import Loader from "./components/Loader";

function App() {
  const [theme, setTheme] = useState("dark");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Theme
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.body.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      {/* Loader */}
      {loading && <Loader onDone={() => setLoading(false)} />}

      {/* Main content */}
      <div
        className={`transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* <SplashCursor /> */}
        <Navbar theme={theme} onThemeToggle={toggleTheme} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
