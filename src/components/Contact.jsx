import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

// Your social links have been added here, including the email
const socialLinks = [
    {
        href: 'https://github.com/chvaskar890',
        icon: <FaGithub />
    },
    {
        href: 'https://www.linkedin.com/in/bhaskar-chetia-433171233/',
        icon: <FaLinkedin />
    },
    {
        href: 'https://www.instagram.com/ch.vaskar',
        icon: <FaInstagram />
    },
    {
        href: 'mailto:bhaskarchetia121@gmail.com',
        icon: <FaEnvelope />
    }
];

const Contact = () => {
    return (
        <section id="contact" className="section-panel">
            <motion.div className="contact-panel" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6 }}>
                <h2><span>04.</span> What's Next?</h2>
                <h3>Get In Touch</h3>
                <p>My inbox is always open. Whether you have a question or just want to say hi, I'll get back to you!</p>
                <div className="social-links-wrapper">
                    {socialLinks.map((contact, index) => (
                        <motion.a key={index} href={contact.href} target="_blank" rel="noopener noreferrer" className="social-link" whileHover={{ y: -3, color: 'var(--color-accent)' }}>
                            {contact.icon}
                        </motion.a>
                    ))}
                </div>
            </motion.div>
            <p className="footer-text">© 2025 Bhaskar Jyoti Chetia</p>
        </section>
    );
};

export default Contact;