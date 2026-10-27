export type Project = {
  number: string;
  slug: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  detailTitle: string;
  detail: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  width: number;
  height: number;
  caption: string;
  previewLabel: string;
  tone: "violet" | "mint" | "peach";
  githubUrl: string | null;
  liveUrl: string | null;
};
// Technical claims checked against the linked repositories. See docs/review.md.
export const projects: Project[] = [
  {
    number: "01",
    slug: "employee-scheduler",
    title: "Employee Scheduler",
    category: "FULL-STACK · AI-ASSISTED",
    summary:
      "Natural-language staffing requests, structured requirements, and a schedule the manager stays in control of.",
    description:
      "A full-stack workforce scheduling application. Groq turns natural-language requests into editable staffing requirements; a deterministic Spring Boot planner suggests shifts using availability, existing assignments, weekly-hour limits, and an optional fairness preference.",
    detailTitle: "AI assists. The manager decides.",
    detail:
      "Interpret → review → preview → apply → publish. The LLM does not choose employees or write shifts. Managers review suggestions, apply selected shifts to a draft, and publish separately.",
    technologies: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "Groq"],
    image: "/projects/employee-scheduler.webp",
    width: 1280,
    height: 657,
    imageAlt:
      "Employee Scheduler AI instructions screen for entering staffing requests and reviewing requirements",
    caption: "Application screenshot · AI-assisted staffing workflow",
    previewLabel: "employee scheduler / staffing workspace",
    tone: "violet",
    githubUrl: "https://github.com/Folariin/employee-scheduler",
    liveUrl: null,
  },
  {
    number: "02",
    slug: "grocery-app",
    title: "Grocery App",
    category: "FULL-STACK · COLLABORATION",
    summary:
      "A shared space for household grocery lists, member invitations, and keeping track of what has been bought.",
    description:
      "A deployed, SaaS-style household application with a React frontend, Spring Boot API, and PostgreSQL database. Members collaborate on shared grocery lists with JWT authentication, owner/member roles, email-addressed invitations, quantities, purchase status, and purchaser tracking.",
    detailTitle: "Shared lists. Clear ownership.",
    detail:
      "Household membership scopes access to lists and items. The frontend runs on Vercel, the backend on Render, and PostgreSQL on Neon. Invitations are tied to an email address and reviewed in the application.",
    technologies: ["React", "Spring Boot", "PostgreSQL", "JWT"],
    image: "/projects/grocery-app.webp",
    width: 1042,
    height: 792,
    imageAlt:
      "Grocery App household workspace displaying shared grocery items and purchase controls",
    caption: "Application screenshot · shared household grocery list",
    previewLabel: "grocery app / household workspace",
    tone: "mint",
    githubUrl: "https://github.com/Folariin/grocery-app",
    liveUrl: "https://grocery-app-ivory-rho.vercel.app/",
  },
  {
    number: "03",
    slug: "movie-data-analysis",
    title: "Movie Data Analysis",
    category: "JAVA · RELATIONAL DATA",
    summary:
      "Exploring movie performance, creative collaborations, and production through analytical SQL.",
    description:
      "A Java console application that imports CSV datasets into Microsoft SQL Server through JDBC. Its 19 analytical reports explore movie performance, people, collaborations, production, and dataset coverage using relational queries.",
    detailTitle: "From raw records to analytical reports.",
    detail:
      "The source includes relational schema creation, JDBC batch imports, and SQL joins and aggregations. The original university database is no longer available; a complete local restoration has not yet been verified. This is a console project, not a web dashboard.",
    technologies: ["Java", "JDBC", "SQL Server", "SQL"],
    image: "/projects/movie-schema.svg",
    width: 1200,
    height: 720,
    imageAlt:
      "Schema illustration connecting Movie, workedIn, and People, with the project’s SQL query for highest-rated movies",
    caption: "Source-based schema illustration · not a running application",
    previewLabel: "movie data / analytical exploration",
    tone: "peach",
    githubUrl: "https://github.com/Folariin/movie-data-analysis",
    liveUrl: null,
  },
];
