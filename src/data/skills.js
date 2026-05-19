import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaDocker,
  FaFigma,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiThreedotjs,
  SiFramer,
  SiExpress,
  SiVite,
  SiGithub,
} from "react-icons/si";

export const skillCategories = [
  {
    id: 1,
    category: "Frontend",
    description:
      "Building responsive and interactive user interfaces with modern frontend technologies.",
    skills: [
      {
        id: 101,
        name: "React",
        icon: FaReact,
        level: "Advanced",
      },
      {
        id: 102,
        name: "JavaScript",
        icon: SiJavascript,
        level: "Advanced",
      },
      {
        id: 103,
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        level: "Advanced",
      },
      {
        id: 104,
        name: "Framer Motion",
        icon: SiFramer,
        level: "Intermediate",
      },
      {
        id: 105,
        name: "Three.js",
        icon: SiThreedotjs,
        level: "Intermediate",
      },
      {
        id: 106,
        name: "Vite",
        icon: SiVite,
        level: "Intermediate",
      },
    ],
  },

  {
    id: 2,
    category: "Backend",
    description:
      "Developing scalable backend systems, APIs, and authentication workflows.",
    skills: [
      {
        id: 201,
        name: "Java",
        icon: FaJava,
        level: "Advanced",
      },
      {
        id: 202,
        name: "Spring Boot",
        icon: SiSpringboot,
        level: "Intermediate",
      },
      {
        id: 203,
        name: "Node.js",
        icon: FaNodeJs,
        level: "Intermediate",
      },
      {
        id: 204,
        name: "Express.js",
        icon: SiExpress,
        level: "Intermediate",
      },
    ],
  },

  {
    id: 3,
    category: "Databases",
    description:
      "Working with relational and NoSQL databases for scalable applications.",
    skills: [
      {
        id: 301,
        name: "MySQL",
        icon: SiMysql,
        level: "Intermediate",
      },
      {
        id: 302,
        name: "MongoDB",
        icon: SiMongodb,
        level: "Intermediate",
      },
      {
        id: 303,
        name: "PostgreSQL",
        icon: SiPostgresql,
        level: "Beginner",
      },
    ],
  },

  {
    id: 4,
    category: "Tools & Platforms",
    description:
      "Using modern tools and workflows for development, collaboration, and deployment.",
    skills: [
      {
        id: 401,
        name: "Git",
        icon: FaGitAlt,
        level: "Advanced",
      },
      {
        id: 402,
        name: "GitHub",
        icon: SiGithub,
        level: "Advanced",
      },
      {
        id: 403,
        name: "Docker",
        icon: FaDocker,
        level: "Beginner",
      },
      {
        id: 404,
        name: "Postman",
        icon: SiPostman,
        level: "Advanced",
      },
      {
        id: 405,
        name: "Figma",
        icon: FaFigma,
        level: "Beginner",
      },
    ],
  },
];
