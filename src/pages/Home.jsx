import Hero from "../components/hero/Hero";

const Home = () => {
  return (
    <div>
      {/* HERO */}
      <section id="home">
        <Hero />
      </section>

      {/* ABOUT (placeholder for now) */}
      <section
        id="about"
        style={{
          minHeight: "100vh",
          padding: "120px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        About Section (Coming Soon)
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        style={{
          minHeight: "100vh",
          padding: "120px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        Skills Section (Coming Soon)
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        style={{
          minHeight: "100vh",
          padding: "120px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        Projects Section (Coming Soon)
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