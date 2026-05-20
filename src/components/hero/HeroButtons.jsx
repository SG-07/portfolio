const HeroButtons = () => {
  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <div className="hero-buttons">
      <button className="btn primary" onClick={scrollToProjects}>
        View Projects
      </button>

      <button className="btn secondary" onClick={openResume}>
        View Resume
      </button>
    </div>
  );
};

export default HeroButtons;