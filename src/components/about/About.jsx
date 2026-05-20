import AboutContent from "./AboutContent";
import AboutCard from "./AboutCard";

import "./About.css";

const About = () => {
  return (
    <section
      id="about"
      className="about-section"
    >
      <div className="about-container">

        {/* Left */}
        <AboutContent />

        {/* Right */}
        <AboutCard />

      </div>
    </section>
  );
};

export default About;