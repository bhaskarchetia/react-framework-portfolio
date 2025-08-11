import { motion } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
    const photoURL = "https://media.licdn.com/dms/image/v2/D4D03AQHocXbcTeDeDA/profile-displayphoto-shrink_800_800/B4DZdZamyNHkAg-/0/1749551837522?e=1757548800&v=beta&t=B5ao8rHxELnPyffFhB8jCHOr8L9scralvor0vI_a77o";
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
        // The inline 'style' prop has been removed to stop applying the background image
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
                    src={photoURL}
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