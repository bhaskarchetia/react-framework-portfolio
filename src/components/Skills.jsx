import { motion } from 'framer-motion';

const skillsList = [
    'UI/UX Design', 'Web Design', 'Figma', 'JavaScript', 'React', 'Node.js',
    'Tailwind CSS', 'C++', 'SQL', '3D CAD', 'Machine Design', 'Framer Motion'
];

// Duplicate the list for a seamless loop
const extendedSkills = [...skillsList, ...skillsList];

const Skills = () => {
    const marqueeVariants = {
        animate: {
            x: [0, -1300], // Adjust this based on the total width of your skill tags
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25, // Adjust duration to control the speed
                    ease: "linear",
                },
            },
        },
    };

    return (
        <section id="skills" className="section-panel skills-section">
            <h2 className="section-heading">
                <span>02.</span> Tools & Technologies
            </h2>
            <div className="skills-marquee">
                <motion.div
                    className="skills-track"
                    variants={marqueeVariants}
                    animate="animate"
                >
                    {extendedSkills.map((skill, index) => (
                        <div key={index} className="skill-tag">
                            {skill}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;