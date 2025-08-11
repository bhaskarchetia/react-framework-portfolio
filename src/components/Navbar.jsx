import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const navLinks = [ { name: "About", href: "#about" }, { name: "Skills", href: "#skills" }, { name: "Projects", href: "#experience" }];
const photoURL = "https://media.licdn.com/dms/image/v2/D4D03AQHocXbcTeDeDA/profile-displayphoto-shrink_800_800/B4DZdZamyNHkAg-/0/1749551837522?e=1757548800&v=beta&t=B5ao8rHxELnPyffFhB8jCHOr8L9scralvor0vI_a77o";

const Navbar = ({ lenis }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 100));

    const handleScrollTo = (target) => {
        if (lenis) lenis.scrollTo(target, { offset: -80, duration: 1.5 });
        setIsMenuOpen(false);
    };

    const navVariants = { hidden: { y: '-150%', opacity: 0 }, visible: { y: '0%', opacity: 1, transition: { duration: 0.4, ease: 'easeInOut' } } };
    const linkHighlightVariants = { initial: { opacity: 0 }, hover: { opacity: 1, transition: { duration: 0.2 } } };
    const mobileMenuVariants = { closed: { opacity: 0, y: "-100%", transition: { duration: 0.5, ease: 'easeOut' } }, open: { opacity: 1, y: "0%", transition: { duration: 0.4, ease: 'easeIn' } } };

    return (
        <>
            <div style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', width: 'auto', zIndex: 1000 }}>
                <motion.div variants={navVariants} initial="hidden" animate={scrolled ? "visible" : "hidden"} className="navbar-container">
                    <motion.a href="#" onClick={(e) => { e.preventDefault(); handleScrollTo(0); }} className="navbar-logo" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
                        <img src={photoURL} alt="Bhaskar Jyoti Chetia" style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} />
                        <span>Bhaskar J. Chetia</span>
                    </motion.a>
                    <ul className="desktop-nav-links">
                        {navLinks.map(link => (
                            <motion.li key={link.name} style={{ position: 'relative' }} initial="initial" whileHover="hover" whileTap={{ scale: 0.95 }} transition={{ duration: 0.15 }}>
                                <a href={link.href} onClick={(e) => { e.preventDefault(); handleScrollTo(link.href); }}>{link.name}</a>
                                <motion.div variants={linkHighlightVariants} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '9999px', zIndex: -1 }} />
                            </motion.li>
                        ))}
                    </ul>
                    <motion.a href="#contact" onClick={(e) => { e.preventDefault(); handleScrollTo('#contact'); }} className="desktop-contact-btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.15 }}>Contact</motion.a>
                    <div className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <motion.div animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 5 : 0 }} style={{height: '2px', width: '20px', background: 'var(--color-text-primary)', transformOrigin: 'center'}} />
                        <motion.div animate={{ opacity: isMenuOpen ? 0 : 1 }} style={{height: '2px', width: '20px', background: 'var(--color-text-primary)'}} />
                        <motion.div animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -5 : 0 }} style={{height: '2px', width: '20px', background: 'var(--color-text-primary)', transformOrigin: 'center'}} />
                    </div>
                </motion.div>
            </div>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div className="mobile-menu-overlay" variants={mobileMenuVariants} initial="closed" animate="open" exit="closed">
                        <ul>
                            {navLinks.map(link => (<li key={link.name}><a href={link.href} onClick={(e) => { e.preventDefault(); handleScrollTo(link.href); }}>{link.name}</a></li>))}
                        </ul>
                        <a href="#contact" className="mobile-menu-contact-btn" onClick={(e) => { e.preventDefault(); handleScrollTo('#contact'); }}>Contact</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;