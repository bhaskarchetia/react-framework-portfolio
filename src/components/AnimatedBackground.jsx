import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // <<< FIX: Using loadSlim

const AnimatedBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        // This loads the tsparticles package bundle, it's required for it to work
        await loadSlim(engine); // <<< FIX: Using loadSlim
    }, []);

    const particlesOptions = {
        background: { color: { value: "#1a1b26" } },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true,
            },
            modes: {
                repulse: { distance: 100, duration: 0.4 },
            },
        },
        particles: {
            color: { value: "#44475A" },
            links: { color: "#44475A", distance: 150, enable: true, opacity: 0.2, width: 1 },
            collisions: { enable: true },
            move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 1,
                straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.2 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={particlesOptions}
            style={{ position: 'fixed', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%' }}
        />
    );
};

export default AnimatedBackground;