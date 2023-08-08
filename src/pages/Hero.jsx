import React from "react";
import hero from "../images/bg.svg";
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
      <h1 className="phone:text-4xl lg:text-7xl font-semibold mt-28 text-white text-center">
        Soft CodeHack 2.0
      </h1>
      <p className="text-white pt-7 text-center">
        Collaborate, innovative, and conquer at the hackathon!
      </p>
      <div className="phone:grid lg:flex mx-auto justify-center phone:gap-4 lg:gap-7 mt-20">
        <button className="px-7 py-3 rounded-md bg-violet-700 text-white font-medium">
          Get Started
        </button>
        <button className="px-7 py-3 rounded-md bg-white text-black font-medium">
          Sponsor Us
        </button>
        <button className="px-7 py-3 rounded-md bg-white text-black border font-medium">
          Join Us as Partner
        </button>
        <button className="px-7 py-3 rounded-md bg-black border text-white font-medium">
          Apply With DevFolio
        </button>
      </div>
    </>
  );
};

export default Hero;
