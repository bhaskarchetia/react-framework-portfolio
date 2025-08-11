// src/components/ProjectAnimation.jsx  (NEW FILE)

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const ProjectAnimation = ({ type }) => {
  switch (type) {
    case 'wavy':
      return (
        <motion.svg width="100%" height="100%" viewBox="0 0 400 400" initial="hidden" animate="visible">
          <motion.path
            d="M0,200 C100,100 300,300 400,200"
            stroke="var(--accent-color)"
            strokeWidth="4"
            fill="none"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { pathLength: 1, opacity: 1 },
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,220 C100,320 300,120 400,220"
            stroke="var(--secondary-text-color)"
            strokeWidth="2"
            fill="none"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { pathLength: 1, opacity: 1 },
            }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
          />
        </motion.svg>
      );
      
    case 'bars':
      return (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '100%', gap: '10px' }}
        >
          {[0.4, 0.7, 0.3, 0.9, 0.5].map((height, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              style={{
                width: '40px',
                height: `${height * 100}%`,
                backgroundColor: 'var(--accent-color)',
                borderRadius: '5px 5px 0 0',
                transformOrigin: 'bottom',
              }}
            />
          ))}
        </motion.div>
      );

    case 'graph':
       return (
        <motion.svg width="100%" height="100%" viewBox="0 0 400 400" initial="hidden" animate="visible">
          <motion.path
            d="M50,350 L100,250 L150,300 L200,150 L250,200 L300,100 L350,150"
            stroke="var(--accent-color)"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { pathLength: 1, opacity: 1 },
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.svg>
       );
       
    case 'circles':
        return (
          <motion.div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            {[30, 60, 90].map((size, index) => (
              <motion.div
                key={index}
                style={{
                  width: `${size * 2}px`,
                  height: `${size * 2}px`,
                  border: `2px solid var(--accent-color)`,
                  borderRadius: '50%',
                  position: 'absolute',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              />
            ))}
          </motion.div>
        );

    default:
      return null;
  }
};

export default ProjectAnimation;