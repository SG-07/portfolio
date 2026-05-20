import { motion } from "framer-motion";

import {
  floatingSkills,
} from "./techStackData";

const positions = [
  { top: "12%", left: "10%" },
  { top: "20%", right: "12%" },
  { top: "45%", left: "18%" },
  { top: "58%", right: "15%" },
  { top: "72%", left: "30%" },
  { top: "38%", right: "32%" },
  { top: "80%", right: "28%" },
  { top: "14%", left: "42%" },
];

const backgroundWords = [
  "FULL STACK",
  "BACKEND",
  "JAVA",
  "SCALABLE",
  "SYSTEM DESIGN",
];

const TechScene = () => {
  return (
    <div className="skills-scene">

      {/* Background Words */}
      <div className="background-words">

        {backgroundWords.map((word) => (
          <motion.span
            key={word}
            animate={{
              x: [0, -40, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {word}
          </motion.span>
        ))}

      </div>

      {/* Glow */}
      <div className="skills-glow" />

      {/* Floating Tech */}
      {floatingSkills.map(
        (skill, index) => (
          <motion.div
            key={skill}
            className="floating-wrapper"
            style={positions[index]}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4 + index * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="floating-pill">
              {skill}
            </div>
          </motion.div>
        )
      )}
    </div>
  );
};

export default TechScene;