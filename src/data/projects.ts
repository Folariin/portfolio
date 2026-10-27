export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  githubUrl: string | null;
  liveUrl: string | null;
};
export const projects: Project[] = [
  {
    number: "01",
    title: "AI-Assisted Employee Scheduler",
    category: "AI-ASSISTED SAAS-STYLE WEB APPLICATION",
    description: "A full-stack workforce scheduling app where Groq interprets natural-language staffing requests and a Spring Boot algorithm suggests shifts based on availability, existing assignments, hour limits, and fairness preferences. Managers review suggestions before publishing.",
    technologies: ["React", "Spring Boot", "PostgreSQL", "Groq AI"],
    image: "/projects/signal.svg",
    imageAlt: "Abstract connected nodes representing scheduling workflows",
    githubUrl: "https://github.com/Folariin/employee-scheduler",
    liveUrl: null,
  },
  {
    number: "02",
    title: "Grocery App",
    category: "FULL-STACK SAAS-STYLE WEB APPLICATION",
    description: "A deployed full-stack application that lets households collaborate on shared grocery lists. Built with React, Spring Boot, and PostgreSQL, it supports secure JWT authentication, household roles and email invitations, and item tracking with quantities, purchase status, and purchaser history.",
    technologies: ["React", "Spring Boot", "PostgreSQL", "JWT", "Vercel"],
    image: "/projects/common-ground.svg",
    imageAlt: "Abstract layered shapes representing an application interface",
    githubUrl: "https://github.com/Folariin/grocery-app",
    liveUrl: "https://grocery-app-ivory-rho.vercel.app/",
  },
  {
    number: "03",
    title: "Movie Data Analysis",
    category: "DATA / ANALYSIS",
    description: "A project exploring movie data to investigate patterns and practice turning datasets into meaningful findings.",
    technologies: ["Data analysis", "Exploration"],
    image: "/projects/fieldnotes.svg",
    imageAlt: "Abstract bars representing data exploration",
    githubUrl: "https://github.com/Folariin/movie-data-analysis",
    liveUrl: null,
  },
];
