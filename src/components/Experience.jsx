// src/components/Experience.jsx (CORRECTED - DATA RESTORED)

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- CRITICAL FIX: Your project data has been restored here ---
const experiences = [
    { title: "AHP Decision-Making Web App", description: "A full-fledged decision support system using JavaScript & React, based on Analytic Hierarchy Process logic.", link: "https://decisionmakingsystem.netlify.app/", linkText: "live-demo" },
    { title: "Full Stack Web Development Intern at Unified Mentor", description: "Contributed to the development of full-stack web applications, gaining hands-on experience with modern frameworks and technologies.", link: "https://www.linkedin.com/in/bhaskar-chetia-433171233/overlay/1754469367801/single-media-viewer/?profileId=ACoAADo4_CcBFywU5jl80ck-d0XWp-15rd9cU_M", linkText: "view-certificate" },
    { title: "Internship: Animal Welfare People", description: "Assisted in organizing street animal rescue, food & vaccination drives, and supported legal actions.", link: "https://www.linkedin.com/in/bhaskar-chetia-433171233/overlay/1721457754154/single-media-viewer/?profileId=ACoAADo4_CcBFywU5jl80ck-d0XWp-15rd9cU_M", linkText: "view-certificate" },
    { title: "CAD DESK Certified", description: "Proficiency in computer-aided design, drafting software, and engineering principles.", link: "https://www.linkedin.com/in/bhaskar-chetia-433171233/overlay/1751647217547/single-media-viewer/?profileId=ACoAADo4_CcBFywU5jl80ck-d0XWp-15rd9cU_M", linkText: "view-certificate" }
];

const Experience = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });

    // Using the same animations from your original file, no logic changed
    const cardsOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
    const cardsScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

    return (
        <section ref={targetRef} id="experience" className="section-panel" style={{ paddingBottom: '50vh', position: 'relative' }}>
            <h2 className="section-heading"><span>03.</span> Projects & Experience</h2>
            
            <motion.div style={{ scale: cardsScale, opacity: cardsOpacity, originY: 0 }}>
                {experiences.map((project, i) => (
                    <div
                        key={project.title}
                        style={{
                            position: 'sticky',
                            top: `${8 + i * 4}vh`,
                            height: '80vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transform: `scale(${1 - ((experiences.length - 1 - i) * 0.05)})`,
                            zIndex: i + 1,
                        }}
                    >
                        <div className="experience-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                {`-> ${project.linkText}`}
                            </a>
                        </div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default Experience;