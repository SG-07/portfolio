import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { socials } from "../../data/socials";

import "./FloatingDock.css";

const FloatingDock = () => {
  const [hideDock, setHideDock] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer =
        document.querySelector("footer");

      if (!footer) return;

      const footerTop =
        footer.getBoundingClientRect().top;

      const windowHeight = window.innerHeight;

      // Mobile only
      if (window.innerWidth <= 768) {
        setHideDock(
          footerTop < windowHeight - 120
        );
      } else {
        setHideDock(false);
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: hideDock ? 0 : 1,
        y: hideDock ? 20 : 0,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className={`floating-dock ${
        hideDock ? "dock-hidden" : ""
      }`}
    >
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <div
            key={social.id}
            className="dock-item-wrapper"
          >
            {/* Tooltip */}
            <div className="dock-tooltip">
              {social.label}
            </div>

            {/* Icon */}
            <motion.a
              href={social.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="dock-item"
            >
              <Icon size={18} />
            </motion.a>
          </div>
        );
      })}
    </motion.div>
  );
};

export default FloatingDock;