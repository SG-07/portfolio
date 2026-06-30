import { socials } from "../../data/socials";

const HeroButtons = () => {
  const scrollToProjects = () => {
    const el =
      document.querySelector(
        "#projects"
      );

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const openResume = () => {
    const resume =
      socials.find(
        (item) =>
          item.name === "Resume"
      );

    if (resume?.url) {
      window.open(
        resume.url,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <div className="hero-buttons">

      <button
        className="btn primary"
        onClick={
          scrollToProjects
        }
      >
        View Projects
      </button>

      <button
        className="btn secondary"
        onClick={openResume}
      >
        View Resume
      </button>

    </div>
  );
};

export default HeroButtons;