export const projects = [
  {
    id: 1,
    title: "Travel Archive",
    subtitle: "Full-stack travel booking and listing platform",
    description:
      "A full-stack platform inspired by Airbnb where users can list, explore, and book hotels, homes, and travel stays through an interactive and responsive user experience.",

    features: [
      "Authentication and authorization",
      "Property listing and booking system",
      "Interactive maps integration",
      "Image upload support",
      "Responsive modern UI",
    ],

    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "Bootstrap",
    ],

    github: "https://github.com/SG-07",
    live: "https://your-live-demo-link.com",

    image: "/images/projects/travel-archive.png",

    category: "Full Stack",
    featured: true,

    status: "Completed",

    challenges:
      "Managing authentication flows, database relationships, booking workflows, and map integration while maintaining clean backend architecture.",
  },

  {
    id: 2,
    title: "InvestraX",
    subtitle: "Investment portfolio management platform",
    description:
      "A portfolio management application designed to help users track investments, analyze performance, and manage assets through an intuitive dashboard experience.",

    features: [
      "Portfolio and asset tracking",
      "Interactive analytics dashboard",
      "Authentication and secure access",
      "Responsive UI and data visualization",
      "Investment management workflows",
    ],

    techStack: [
      "React",
      "JavaScript",
      "Spring Boot",
      "PostgreSQL",
      "Tailwind CSS",
    ],

    github: "https://github.com/SG-07",
    live: "https://your-live-demo-link.com",

    image: "/images/projects/investrax.png",

    category: "Full Stack",
    featured: true,

    status: "In Progress",

    challenges:
      "Designing scalable backend APIs and handling financial data visualization while maintaining smooth frontend performance.",
  },

  {
    id: 3,
    title: "ShareNest",
    subtitle: "Community-based nearby item sharing platform",
    description:
      "A community-driven platform where users can list, discover, and book items from nearby users, encouraging local sharing and collaborative usage.",

    features: [
      "Nearby item discovery",
      "Booking and listing workflows",
      "Authentication system",
      "Responsive modern UI",
      "Location-based interactions",
    ],

    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
    ],

    github: "https://github.com/SG-07",
    live: "https://your-live-demo-link.com",

    image: "/images/projects/sharenest.png",

    category: "Full Stack",
    featured: false,

    status: "In Progress",

    challenges:
      "Managing location-based workflows, user interactions, and scalable booking flows while maintaining a smooth user experience.",
  },

  {
    id: 4,
    title: "NeuralFace Studio",
    subtitle: "AI-generated human portrait workflow using LoRA training",
    description:
      "Built a creative AI workflow in ComfyUI where two custom LoRA models were trained on human faces to generate unique AI portraits with controlled styles and visual consistency.",

    features: [
      "Custom LoRA model training",
      "AI-generated portrait creation",
      "ComfyUI workflow pipeline",
      "Prompt engineering and fine-tuning",
      "Style-consistent image generation",
    ],

    techStack: [
      "ComfyUI",
      "Stable Diffusion",
      "LoRA Training",
      "AI Workflows",
      "Prompt Engineering",
    ],

    github: "https://github.com/SG-07",
    live: "https://your-live-demo-link.com",

    image: "/images/projects/neuralface-studio.png",

    category: "Creative AI",
    featured: false,

    status: "Completed",

    challenges:
      "Training stable LoRA models while maintaining facial consistency, improving generation quality, and optimizing workflow outputs.",
  },
];
