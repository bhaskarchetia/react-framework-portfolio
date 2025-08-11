// src/components/About.jsx (Updated with Scroll-Linked Animations & Centered Layout)

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const headingScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const paragraphScale = useTransform(scrollYProgress, [0, 0.7], [1, 1.15]);

  return (
    <motion.section
        ref={targetRef}
        id="about"
        // The main change is here: use flexbox to center the content
        style={{
            minHeight: '100vh', // Give the section height to allow vertical centering
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '6rem 2rem', // Keep padding
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
    >
      {/* Add a wrapper div to constrain width and center text */}
      <div style={{ textAlign: 'center', maxWidth: '800px' }}>
        <motion.h2
          style={{
            fontSize: '2rem',
            marginBottom: '2rem', // Add some space between heading and para
            scale: headingScale,
            // Change origin to center for scaling centered text
            originX: 0.5,
            originY: 0.5,
          }}
        >
          <span style={{color: 'var(--secondary-text-color)'}}>01.</span> About Me
        </motion.h2>

        <motion.p
          style={{
            scale: paragraphScale,
            // Change origin to center for scaling centered text
            originX: 0.5,
            originY: 0.5,
            // Add styling for better readability in a centered layout
            fontSize: '1.2rem',
            lineHeight: '1.6',
          }}
        >
          {/* The user did not provide the new paragraph text, so the original text is used. */}
         I’m a senior B.Tech Mechanical Engineering student with a deep interest in machine design and the energy sector, particularly oil and gas. Throughout my academic journey, I’ve honed my ability to turn concepts into practical solutions through design, analysis, and innovation. Alongside my core engineering work, I explore my creative side through web development, crafting functional and user-friendly websites. Music is my personal escape, keeping me refreshed and inspired. I believe in blending technical expertise with creativity, and I’m driven to bring this balance into every challenge I take on.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default About;