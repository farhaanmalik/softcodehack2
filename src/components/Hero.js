import React from "react";
import DevfolioApplyButton from "./Devfoliobtn"


const Hero = () => {

  return (
    <section id="home">
      <div className="hero-section">
        <div className="hero">
          <h1 className="hero-title">Soft CodeHack 2.0</h1>
          <p className="hero-sub">
            Collaborate, Innovate, and Conquer at the Hackathon!
          </p>
          <div className="hero-btn">
            <DevfolioApplyButton />
            <a href="mailto:phicsit.community@gmail.com" className="btn-link">
              Sponsor Us
            </a>
            <a
              href="https://discord.gg/sxVdEZdsNq"
              target="_blank"
              rel="noreferrer"
              className="btn-link"
            >
              Join Our Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
