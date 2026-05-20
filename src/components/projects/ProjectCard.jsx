import { motion } from "framer-motion";
import * as Icons from "lucide-react";

const ProjectCard = ({
  project,
  onClick,
}) => {
  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 30,
      }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        y: -6,
      }}
      className={`project-card ${
        project.featured
          ? "featured-project"
          : ""
      }`}
      onClick={onClick}
    >

      {/* Browser Preview */}
      <div className="project-browser">

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

        <div className="browser-preview">

          <div className="preview-gradient" />

          <h3>
            {project.title}
          </h3>

        </div>

      </div>

      {/* Content */}
      <div className="project-content">

        <div>

          <h3 className="project-title">
            {project.title}
          </h3>

          <p className="project-description">
            {project.shortDescription}
          </p>

        </div>

        {/* Stack */}
        <div className="project-stack">

          {project.stack.map((tech) => (
            <span
              key={tech}
              className="stack-badge"
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Links */}
        <div className="project-links">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={(e) =>
              e.stopPropagation()
            }
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
              onClick={(e) =>
                e.stopPropagation()
              }
              className="project-link-btn"
            >
              <Icons.ArrowUpRight size={16} />
              Live
            </a>
          )}

        </div>

      </div>

    </motion.div>
  );
};

export default ProjectCard;