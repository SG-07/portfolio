import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Skills from "../components/techstack/TechStack";
import Projects from "../components/projects/Projects";
import Approach from "../components/approach/Approach";
// import Journey from "../components/journey/Journey";
// import Contact from "../components/contact/Contact";

const Home = () => {
  return (
    <div>
      {/* HERO */}
      <section id="home">
        <Hero />
      </section>

      {/* ABOUT (placeholder for now) */}
      <section id="about">
        <About />
      </section>

      {/* PROJECTS */}
      <section
        id="projects">
        <Projects />
      </section>

      {/* SKILLS */}
      <section id="skills">
        <Skills />
      </section>

      {/* APPROACH */}
      <section id="approach">
        <Approach />
      </section>

      {/* JOURNEY */}
      <section
        id="journey"
        style={{
          minHeight: "100vh",
          padding: "120px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        Journey Section (Coming Soon)
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          minHeight: "100vh",
          padding: "120px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        Contact Section (Coming Soon)
      </section>
    </div>
  );
};

export default Home;