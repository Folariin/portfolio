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
// Illustrative projects: replace with your own work and real URLs.
export const projects: Project[] = [
  {
    number: "01",
    title: "Signal",
    category: "BACKEND / DISTRIBUTED SYSTEMS",
    description:
      "Making complex systems easier to understand. An event-driven service that turns a stream of activity into clear, actionable insights.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    image: "/projects/signal.svg",
    imageAlt: "Abstract event streams converging into a violet processing node",
    githubUrl: null,
    liveUrl: null,
  },
  {
    number: "02",
    title: "Common Ground",
    category: "FULL-STACK / HUMAN-COMPUTER INTERACTION",
    description:
      "A better starting point for working together. A collaborative workspace exploring how thoughtful interfaces can make shared knowledge more accessible.",
    technologies: ["TypeScript", "React", "Next.js", "SQL"],
    image: "/projects/common-ground.svg",
    imageAlt:
      "Overlapping violet and amber geometric planes representing shared knowledge",
    githubUrl: null,
    liveUrl: null,
  },
  {
    number: "03",
    title: "Fieldnotes",
    category: "DATA / EXPLORATION",
    description:
      "Finding the story inside the dataset. An exploratory analysis tool that brings patterns, questions, and evidence into the same view.",
    technologies: ["Python", "SQL", "Pandas", "React"],
    image: "/projects/fieldnotes.svg",
    imageAlt: "An abstract chart of white and violet data bars on black",
    githubUrl: null,
    liveUrl: null,
  },
];
