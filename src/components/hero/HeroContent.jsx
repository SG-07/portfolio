import HeroButtons from "./HeroButtons";

const HeroContent = () => {
  return (
    <div className="hero-content">
      {/* Label */}
      
      {/* Name */}
      <h1 className="hero-title">
        Satyam Gangwar
      </h1>

      {/* Subtitle */}
      <p className="hero-subtitle">
        Full Stack Developer crafting scalable and immersive digital experiences.
      </p>

      {/* Buttons */}
      <HeroButtons />
    </div>
  );
};

export default HeroContent;