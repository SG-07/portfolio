import { motion } from "framer-motion";
import { socials } from "../../data/socials";

import "./FloatingDock.css";

const FloatingDock = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="floating-dock"
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