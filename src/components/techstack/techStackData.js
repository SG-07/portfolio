import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiMongodb,
  SiSpringboot,
  SiJavascript,
  SiExpress,
  SiMysql,
  SiPostman,
} from "react-icons/si";

export const techStack = [
  {
    name: "React",
    icon: FaReact,
    x: "20%",
    y: "18%",
  },

  {
    name: "Java",
    icon: FaJava,
    x: "52%",
    y: "14%",
  },

  {
    name: "MongoDB",
    icon: SiMongodb,
    x: "76%",
    y: "22%",
  },

  {
    name: "Docker",
    icon: FaDocker,
    x: "16%",
    y: "48%",
  },

  {
    name: "Node.js",
    icon: FaNodeJs,
    x: "42%",
    y: "42%",
  },

  {
    name: "Spring",
    icon: SiSpringboot,
    x: "72%",
    y: "48%",
  },

  {
    name: "JavaScript",
    icon: SiJavascript,
    x: "28%",
    y: "74%",
  },

  {
    name: "Express",
    icon: SiExpress,
    x: "54%",
    y: "74%",
  },

  {
    name: "MySQL",
    icon: SiMysql,
    x: "80%",
    y: "72%",
  },

  {
    name: "Git",
    icon: FaGitAlt,
    x: "8%",
    y: "76%",
  },

  {
    name: "GitHub",
    icon: FaGithub,
    x: "88%",
    y: "46%",
  },

  {
    name: "Postman",
    icon: SiPostman,
    x: "8%",
    y: "24%",
  },
];

export const connections = [
  {
    from: "React",
    to: "Node.js",
  },

  {
    from: "Node.js",
    to: "MongoDB",
  },

  {
    from: "Java",
    to: "Spring",
  },

  {
    from: "Spring",
    to: "MySQL",
  },

  {
    from: "Docker",
    to: "Node.js",
  },

  {
    from: "Express",
    to: "MongoDB",
  },

  {
    from: "Git",
    to: "GitHub",
  },

  {
    from: "JavaScript",
    to: "React",
  },

  {
    from: "Postman",
    to: "Express",
  },
];