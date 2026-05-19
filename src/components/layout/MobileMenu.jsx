import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { socials } from "../../data/socials";
import "./MobileMenu.css";

const resumeLink = socials.find(
  (social) => social.name === "Resume"
);

const MobileMenu = ({
  isOpen,
  setIsOpen,
  navLinks,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: -40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -40,
          }}
          transition={{
            duration: 0.3,
          }}
          className="mobile-menu-overlay"
        >
          <div className="mobile-menu-header">
            <button
              className="mobile-close-btn"
              onClick={() =>
                setIsOpen(false)
              }
            >
              <X size={28} />
            </button>
          </div>

          <nav className="mobile-menu-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="mobile-menu-link"
                onClick={() =>
                  setIsOpen(false)
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={resumeLink?.url}
            target="_blank"
            rel="noreferrer"
            className="mobile-resume-btn"
          >
            View Resume
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;