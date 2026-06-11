import { useState } from "react";
import "./styles/globals.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [activeNav, setActiveNav] = useState("Home");

  return (
    <div style={{ background: "#07091a", minHeight: "100vh" }}>
      <Navbar active={activeNav} setActive={setActiveNav} />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Footer />
    </div>
  );
}
