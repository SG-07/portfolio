import { motion } from "framer-motion";

const AboutContent = () => {
  return (
    <motion.div
      className="about-content"
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
      }}
    >

      <p className="about-label">
        ABOUT ME
      </p>

      <h2 className="about-heading">
        Building scalable systems
        with clean architecture.
      </h2>

      <div className="about-description">

        <p>
          Started with robotics and
          competitive engineering,
          eventually transitioning into
          full-stack development and
          AI-focused workflows.
        </p>

        <p>
          I enjoy building systems that
          combine clean architecture,
          practical usability, and modern
          engineering practices.
        </p>

        <p>
          Outside of development,
          I spend time exploring AI
          systems, reading, small robotics projects, and
          continuously improving my
          engineering fundamentals.
        </p>

      </div>

    </motion.div>
  );
};

export default AboutContent;