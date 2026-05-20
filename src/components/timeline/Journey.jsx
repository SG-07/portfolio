import { motion } from "framer-motion";

import {
  timelineData,
} from "./journeyData";

import "./Journey.css";

const Journey = () => {
  return (
    <section
      className="journey-section"
      id="journey"
    >
      <div className="journey-container">

        {/* heading */}
        <div className="journey-header">

          <p className="journey-label">
            JOURNEY
          </p>

          <h2 className="journey-heading">
            From robotics leadership
            to full-stack & AI systems.
          </h2>

        </div>

        {/* timeline */}
        <div className="timeline">

          {timelineData.map(
            (item, index) => (
              <motion.div
                key={item.year}
                className="timeline-item"
                initial={{
                  opacity: 0,
                  y: 30,
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
                  delay:
                    index * 0.08,
                }}
              >

                {/* line */}
                {index !==
                  timelineData.length -
                    1 && (
                  <span className="timeline-line" />
                )}

                {/* dot */}
                <div className="timeline-dot" />

                {/* content */}
                <div className="timeline-content">

                  <span className="timeline-year">
                    {item.year}
                  </span>

                  <h3 className="timeline-title">
                    {item.title}
                  </h3>

                  <p className="timeline-description">
                    {
                      item.description
                    }
                  </p>

                </div>

              </motion.div>
            )
          )}

        </div>

      </div>
    </section>
  );
};

export default Journey;