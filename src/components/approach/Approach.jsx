import { motion } from "framer-motion";

import {
  phases,
} from "./approachData";

import "./Approach.css";

const Approach = () => {
  return (
    <section
      className="approach-section"
      id="approach"
    >
      <div className="approach-container">

        {/* heading */}
        <div className="approach-header">

          <p className="approach-label">
            BUILD PROCESS
          </p>

          <h2 className="approach-heading">
            From idea to scalable
            product.
          </h2>

        </div>

        {/* cards */}
        <div className="approach-grid">

          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              className="approach-card"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >

              {/* default state */}
              <div className="card-default">

                <span className="phase-number">
                  {phase.number}
                </span>

                <h3 className="phase-title">
                  {phase.title}
                </h3>

                <p className="phase-preview">
                  {phase.preview}
                </p>

              </div>

              {/* hover state */}
              <div className="card-hover">

                <p className="phase-description">
                  {phase.description}
                </p>

                <div className="phase-tags">

                  {phase.tags.map((tag) => (
                    <span
                      key={tag}
                      className="phase-tag"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* footer */}
        <p className="approach-footer">
          Always improving through
          iteration, feedback, and
          real-world usage.
        </p>

      </div>
    </section>
  );
};

export default Approach;