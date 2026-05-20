import { motion } from "framer-motion";

const focusAreas = [
  "System Design",
  "AI Workflows",
  "Scalable Architecture",
];

const AboutCard = () => {
  return (
    <motion.div
      className="about-card"
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: 0.15,
      }}
    >

      <div className="about-card-glow" />

      <div className="about-card-content">

        <p className="about-card-role">
          Backend-Focused
        </p>

        <h3 className="about-card-title">
          Full Stack Developer
        </h3>

        <div className="about-divider" />

        <div className="about-focus-section">

          <p className="about-focus-label">
            Currently Exploring
          </p>

          <div className="about-focus-list">

            {focusAreas.map((item) => (
              <div
                key={item}
                className="about-focus-item"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      </div>

    </motion.div>
  );
};

export default AboutCard;