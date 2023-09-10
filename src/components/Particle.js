import React, { useCallback } from 'react'
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import circle from "./images/circle.png";
import tag from "./images/tag.png";

const particleOptions = {
    fpsLimit: 60,
    interactivity: {
        events: {
            onClick: {
                enable: false,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: false,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 1000,
            },
            value: 40,
        },
        opacity: {
            value: 0.3,
        },
        shape: {
            type: "images",
            image: [
                { src: circle, height: 30, width: 30 },
                { src: tag, height: 30, width: 30 },
            ],
        },
        size: {
            value: 20,
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 0.2,
                sync: false,
            },
        },
    },
    detectRetina: true,
};

const Particle = () => {

    const particlesInit = useCallback(async (engine) => {
        // console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <>
            <div style={{ opacity: 0.5 }} className="particles-container">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={particleOptions}
                />
            </div>
        </>
    )
}

export default Particle
