import { motion } from "framer-motion";
import { useRef } from "react";

import {
  techStack,
  connections,
} from "./techStackData";

import "./TechStack.css";

const TechStack = () => {
  const containerRef = useRef(null);

  return (
    <section
      className="techstack-section"
      id="skills"
    >
      <div className="techstack-wrapper">

        {/* Header */}
        <div className="techstack-header">

          <p className="techstack-label">
            TECH STACK
          </p>

          <h2 className="techstack-heading">
            Technologies powering my
            full-stack workflow.
          </h2>

        </div>

        {/* Ecosystem */}
        <div
          className="tech-network"
          ref={containerRef}
        >

          {/* Glow */}
          <div className="network-glow" />

          {/* SVG Connection Lines */}
          <svg className="connection-lines">

            {connections.map(
              (line, index) => {
                const from =
                  techStack.find(
                    (t) =>
                      t.name === line.from
                  );

                const to =
                  techStack.find(
                    (t) =>
                      t.name === line.to
                  );

                return (
                  <motion.line
                    key={index}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    initial={{
                      pathLength: 0,
                      opacity: 0,
                    }}
                    animate={{
                      pathLength: 1,
                      opacity: 1,
                    }}
                    transition={{
                      duration: 1.4,
                      delay:
                        index * 0.08,
                    }}
                  />
                );
              }
            )}

          </svg>

          {/* Balls */}
          {techStack.map(
            (tech, index) => {
              const Icon = tech.icon;

              return (
                <motion.div
                  key={tech.name}
                  className="tech-node"
                  style={{
                    left: tech.x,
                    top: tech.y,
                  }}
                  animate={{
                    y: [0, -14, 0],
                  }}
                  transition={{
                    duration:
                      4 + index * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.12,
                  }}
                >

                  <div className="node-inner">

                    <Icon
                      size={24}
                      className="node-icon"
                    />

                  </div>

                  <span className="node-label">
                    {tech.name}
                  </span>

                </motion.div>
              );
            }
          )}

        </div>

      </div>
    </section>
  );
};

export default TechStack;