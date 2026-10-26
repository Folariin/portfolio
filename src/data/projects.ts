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
    title: "Employee Scheduler",
    category: "SOFTWARE DEVELOPMENT / SCHEDULING",
    description: "An employee scheduling application exploring how software can organize shifts and make day-to-day scheduling easier to manage.",
    technologies: ["Software engineering", "Scheduling"],
    image: "/projects/signal.svg",
    imageAlt: "Abstract connected nodes representing scheduling workflows",
    githubUrl: "https://github.com/Folariin/employee-scheduler",
    liveUrl: null,
  },
  {
    number: "02",
    title: "Grocery App",
    category: "APPLICATION DEVELOPMENT",
    description: "A grocery-focused application built as a practical software development project, with an emphasis on turning everyday needs into a usable interface.",
    technologies: ["Application development", "User experience"],
    image: "/projects/common-ground.svg",
    imageAlt: "Abstract layered shapes representing an application interface",
    githubUrl: "https://github.com/Folariin/grocery-app",
    liveUrl: null,
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
