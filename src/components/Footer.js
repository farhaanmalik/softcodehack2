import React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaTelegram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="logo ft-box">
          <img src="../footer-logo.png" alt="Logo" />
          <p className="pow-by">
            Powered by PHICSIT.
          </p>
        </div>
        <div className="social ft-box">
          <h2 className="footer-title">Connect With Us</h2>
          <div className="social-links">
            <a href="https://www.instagram.com/phicsit.in/" target="_blank" rel="noreferrer">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://t.me/phicsitofficial" target="_blank" rel="noreferrer">
              <FaTelegram className="social-icon" />
            </a>
            <a href="https://chat.whatsapp.com/BuZvZcJhk2J9x4eHfk8eGw"
              target="_blank" rel="noreferrer">
              <FaWhatsapp className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/company/phicsit/" target="_blank" rel="noreferrer">
              <FaLinkedinIn className="social-icon" />
            </a>
            <a href="https://twitter.com/PHICSIT" target="_blank" rel="noreferrer">
              <FaTwitter className="social-icon" />
            </a>
          </div>
        </div>
        <div className="contact-us ft-box">
          <h2 className="footer-title">Contact Us</h2>
          <p className="contact-us-email"><a href="mailto:support@softcodehack.in" target="_blank" rel="noreferrer">support@softcodehack.in</a></p>
        </div>
      </div>
      <div className="footer-end">
        <p className="copyright">Made with ❤️ by the Team Soft CodeHack</p>
      </div>
    </footer>
  );
};

export default Footer;


