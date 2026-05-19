import { socials } from "../../data/socials";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h2 className="footer-logo">SG</h2>

          <p className="footer-tagline">
            Full Stack Developer • Building
            immersive and scalable digital
            experiences.
          </p>
        </div>

        {/* Socials */}
        <div className="footer-socials">
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="footer-social-link"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>
            © 2026 Satyam Gangwar. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;