import { motion } from 'framer-motion';
import { useRef } from 'react';

// Step 1: Import the local image file
import profileImage from '../assets/profile-pic.jpg'; // Adjust the path based on your folder structure

const Hero = () => {
    // Step 2: Use the imported image as the source
    const photoURL = profileImage;
    const targetRef = useRef(null);

    // Variants for the initial "fade in" animation
    const entryVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({ // Custom property 'i' for staggered delay
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15, // Stagger delay
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
            }
        }),
    };
    
    return (
        <motion.section
            ref={targetRef}
            id="home"
            className="hero-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.15 }}
        >
            <div className="hero-content">
                <motion.img
                    src={photoURL} // This now refers to your imported local image
                    alt="Bhaskar Jyoti Chetia"
                    className="hero-photo"
                    variants={entryVariants}
                    custom={0}
                />
                <motion.h1 className="hero-name" variants={entryVariants} custom={1}>
                    Bhaskar Jyoti Chetia
                </motion.h1>
                <motion.h2 className="hero-subheading" variants={entryVariants} custom={2}>
                    Web Developer & Mechanical Engineering Sr.
                </motion.h2>
                <motion.p className="hero-description" variants={entryVariants} custom={3}>
                    I'm passionate about building modern web experiences and exploring the intersection of digital technology and mechanical design.
                </motion.p>
            </div>
            <motion.div className="hero-stats" variants={entryVariants} custom={4}>
                <div className="stat-item">
                    <h3>2+</h3>
                    <p>Years of Experience</p>
                </div>
                <div className="stat-item">
                    <h3>Intern</h3>
                    <p>@ Unified Mentor</p>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Hero;