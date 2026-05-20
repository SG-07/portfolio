import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { projectData } from "../../data/projectData";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import "./Projects.css";

const filters = [
  "all",
  "fullstack",
  "creative",
  "ai",
];

const Projects = () => {
  const [activeFilter, setActiveFilter] =
    useState("all");

  const [selectedProject, setSelectedProject] =
    useState(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projectData;
    }

    if (activeFilter === "ai") {
      return projectData.filter((project) =>
        project.stack.some((tech) =>
          tech.toLowerCase().includes("ai")
        )
      );
    }

    return projectData.filter(
      (project) =>
        project.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <>
      <section
        id="projects"
        className="projects-section"
      >
        <div className="projects-container">

          {/* Header */}
          <motion.div
            className="projects-header"
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

            <p className="projects-label">
              SELECTED PROJECTS
            </p>

            <h2 className="projects-heading">
              Engineering systems,
              products, and creative
              workflows.
            </h2>

            <p className="projects-description">
              A collection of full-stack
              applications, backend
              systems, and creative
              engineering experiments.
            </p>

          </motion.div>

          {/* Filters */}
          <div className="projects-filters">

            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-pill ${
                  activeFilter === filter
                    ? "active-filter"
                    : ""
                }`}
                onClick={() =>
                  setActiveFilter(filter)
                }
              >
                {filter}
              </button>
            ))}

          </div>

          {/* Grid */}
          <motion.div
            layout
            className="projects-grid"
          >

            <AnimatePresence>

              {filteredProjects.map(
                (project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onClick={() =>
                      setSelectedProject(
                        project
                      )
                    }
                  />
                )
              )}

            </AnimatePresence>

          </motion.div>

        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() =>
              setSelectedProject(null)
            }
          />
        )}

      </AnimatePresence>
    </>
  );
};

export default Projects;