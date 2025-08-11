import { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [lenis, setLenis] = useState(null);
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    setLenis(lenisInstance);
    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenisInstance.destroy();
  }, []);

  return (
    <>
      <Navbar lenis={lenis} />
      <main className="main-container">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

export default App;