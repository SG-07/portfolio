import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { socials } from "../../data/socials";
import MobileMenu from "./MobileMenu";

import "./Navbar.css";

const navLinks = [
  { id: 1, label: "About", href: "#about" },
  { id: 2, label: "Skills", href: "#skills" },
  { id: 3, label: "Projects", href: "#projects" },
  { id: 4, label: "Journey", href: "#journey" },
  { id: 5, label: "Contact", href: "#contact" },
];

const resumeLink = socials.find((social) => social.name === "Resume");

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Navbar background
      setIsScrolled(currentScrollY > 20);

      // Hide/show navbar
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);

      // Active section
      const sections = navLinks.map((link) =>
        document.querySelector(link.href),
      );

      sections.forEach((section) => {
        if (!section) return;

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
          currentScrollY >= sectionTop &&
          currentScrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`navbar ${
          isScrolled ? "navbar-scrolled" : ""
        } ${showNavbar ? "navbar-visible" : "navbar-hidden"}`}
      >
        <div className="navbar-container">
          {/* Logo */}
          <a href="#home" className="navbar-logo">
            SG
          </a>

          {/* Desktop Nav */}
          <nav className="navbar-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`navbar-link ${
                  activeSection === link.href.substring(1) ? "active-link" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="navbar-actions">
            <a
              href={resumeLink?.url}
              target="_blank"
              rel="noreferrer"
              className="resume-button"
            >
              View Resume
            </a>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        setIsOpen={setMobileMenuOpen}
        navLinks={navLinks}
      />
    </>
  );
};

export default Navbar;
