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
  listingTechnologies?: string[];
  image: string | null;
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
      "A full-stack application that helps businesses create employee schedules using AI while accounting for availability, shift conflicts, and working hours.",
    detailTitle: "AI assists. The manager decides.",
    detail:
      "Interpret → review → preview → apply → publish. The LLM does not choose employees or write shifts. Managers review suggestions, apply selected shifts to a draft, and publish separately.",
    technologies: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "Groq"],
    listingTechnologies: [
      "React",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "Groq API",
    ],
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
      "A shared grocery list app that helps households organize shopping, track purchases, and avoid buying the same items twice.",
    detailTitle: "Shared lists. Clear ownership.",
    detail:
      "Household membership scopes access to lists and items. The frontend runs on Vercel, the backend on Render, and PostgreSQL on Neon. Invitations are tied to an email address and reviewed in the application.",
    technologies: ["React", "Spring Boot", "PostgreSQL", "JWT"],
    listingTechnologies: ["React", "Spring Boot", "PostgreSQL", "Docker"],
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
    slug: "pawsignal",
    title: "PawSignal",
    category: "AI-POWERED PLATFORM",
    summary:
      "An AI-powered platform built during a hackathon that analyzes animal-service data to identify trends and areas that may need attention.",
    description:
      "An AI-powered platform built during a hackathon that analyzes animal-service data to identify trends and areas that may need attention.",
    detailTitle: "",
    detail: "",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Groq API"],
    image: "/pawsignal.jpg",
    width: 806,
    height: 386,
    imageAlt: "PawSignal animal welfare analytics dashboard",
    caption: "",
    previewLabel: "PawSignal",
    tone: "peach",
    githubUrl: "https://github.com/nigerianpickle/animalhack-2026",
    liveUrl: null,
  },
];
