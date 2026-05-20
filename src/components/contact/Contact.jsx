import { motion } from "framer-motion";

import { socials } from "../../data/socials";

import "./Contact.css";

const Contact = () => {
  // pick only what we need
  const email = socials.find(
    (s) => s.name === "Email"
  );

  const linkedin = socials.find(
    (s) => s.name === "LinkedIn"
  );

  return (
    <section
      className="contact-section"
      id="contact"
    >
      <div className="contact-container">

        {/* LEFT CONTENT */}
        <motion.div
          className="contact-left"
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >

          <p className="contact-label">
            CONNECT WITH ME
          </p>

          <h2 className="contact-heading">
            I’m currently open to
            opportunities in Full Stack
            Development and Backend
            Engineering.
          </h2>

          <p className="contact-subtext">
            Let’s build scalable systems
            that actually matter.
          </p>

        </motion.div>

        {/* RIGHT CTA */}
        <motion.div
          className="contact-right"
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >

          <div className="contact-actions">

            {/* EMAIL */}
            <a
              href={email?.url}
              className="contact-mail-btn"
              target={
                email?.url?.startsWith(
                  "mailto:"
                )
                  ? "_self"
                  : "_blank"
              }
              rel="noreferrer"
            >
              Email Me
            </a>

            {/* LINKEDIN */}
            <a
              href={linkedin?.url}
              className="contact-linkedin-btn"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

          </div>

          <p className="contact-note">
            Usually responds within 24–48 hours
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;