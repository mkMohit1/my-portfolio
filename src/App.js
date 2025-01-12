import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import React, { useState } from "react";

function App() {
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    requestAnimationFrame(() => {
      setGradientPosition({ x: clientX, y: clientY });
    });
  };

  return (
    <div
      className="App min-w-[100vw] min-h-[100vh]"
      onMouseMove={handleMouseMove}
    >
      <div className="relative min-w-[100vw] min-h-[100vh]">
        <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
          style={{
            background: `radial-gradient(600px circle at ${gradientPosition.x}px ${gradientPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
          }}
        ></div>
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
          <div className="lg:flex lg:justify-center lg:gap-4">
            <Navbar/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
