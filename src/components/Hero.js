import React from "react";
import Particles from "react-particles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";

const Hero = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);

        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);
    return (
        <>
            <div className="-z-10">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        fpsLimit: 60,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
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
                                enable: true,
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
                                    area: 800,
                                },
                                value: 40,
                            },
                            opacity: {
                                value: 0.1,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </div>
            <div className="hero-section">
                <div className="hero">
                    <h1 className="hero-title">
                        Soft CodeHack 2.0
                    </h1>
                    <p className="hero-sub">
                        Collaborate, Innovative, and Conquer at the Hackathon!
                    </p>
                    <div className="hero-btn">
                        <a href="/" className="btn-link">
                            Apply With DevFolio
                        </a>
                        <a href="/" className="btn-link">
                            Join Us as Partner
                        </a>
                        <a href="/" className="btn-link">
                            Sponsor Us
                        </a>
                        <a href="/" className="btn-link">
                            Join With Discord
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
