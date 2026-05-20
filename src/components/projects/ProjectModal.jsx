import { motion } from "framer-motion";
import * as Icons from "lucide-react";

const ProjectModal = ({
  project,
  onClose,
}) => {
  return (
    <motion.div
      className="project-modal-overlay"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      onClick={onClose}
    >

      <motion.div
        className="project-modal"
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 40,
          scale: 0.96,
        }}
        transition={{
          duration: 0.35,
        }}
        onClick={(e) =>
          e.stopPropagation()
        }
      >

        {/* Close */}
        <button
          className="modal-close-btn"
          onClick={onClose}
        >
          <Icons.X size={20} />
        </button>

        <div className="project-modal-grid">

          {/* LEFT */}
          <div className="modal-preview">

            <div className="project-browser large-browser">

              <div className="browser-header">

                <div className="browser-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>

                <div className="browser-bar">
                  {project.live
                    ? project.live.replace(
                        "https://",
                        ""
                      )
                    : "local-workflow"}
                </div>

              </div>

              <div className="browser-preview modal-preview-area">

                <div className="preview-gradient" />

                <h2>
                  {project.title}
                </h2>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="modal-content">

            <p className="modal-category">
              {project.category}
            </p>

            <h2 className="modal-title">
              {project.title}
            </h2>

            <p className="modal-description">
              {project.fullDescription}
            </p>

            {/* Architecture */}
            <div className="modal-section">

              <h3>
                Engineering Highlights
              </h3>

              <ul>

                {project.architecture.map(
                  (item) => (
                    <li key={item}>
                      {item}
                    </li>
                  )
                )}

              </ul>

            </div>

            {/* Challenges */}
            <div className="modal-section">

              <h3>Challenges</h3>

              <ul>

                {project.challenges.map(
                  (item) => (
                    <li key={item}>
                      {item}
                    </li>
                  )
                )}

              </ul>

            </div>

            {/* Learnings */}
            <div className="modal-section">

              <h3>Key Learnings</h3>

              <ul>

                {project.learnings.map(
                  (item) => (
                    <li key={item}>
                      {item}
                    </li>
                  )
                )}

              </ul>

            </div>

            {/* Stack */}
            <div className="modal-stack">

              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="stack-badge"
                >
                  {tech}
                </span>
              ))}

            </div>

            {/* Actions */}
            <div className="modal-actions">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link-btn"
              >
                <Icons.Code2 size={16} />
                GitHub
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link-btn"
                >
                  <Icons.ArrowUpRight size={18} />
                  Live Site
                </a>
              )}

            </div>

          </div>

        </div>

      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;