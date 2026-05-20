import HeroContent from "./HeroContent";
import HeroScene from "./HeroScene";

import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <HeroContent />
        <HeroScene />
      </div>
    </section>
  );
};

export default Hero;