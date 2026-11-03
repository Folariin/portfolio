import Link from "next/link";
import { Arrow } from "@/components/arrow";
import { pageMetadata } from "@/lib/metadata";
import { ProjectSection } from "@/components/project-section";
import { projects } from "@/data/projects";
export const metadata = pageMetadata(
  "Projects",
  "Explore Farouk Amusat’s projects in software engineering, AI-assisted scheduling, collaborative grocery shopping, and animal-service data.",
);
export default function ProjectsPage() {
  return (
    <main id="main" tabIndex={-1} className="shell inner-page">
      <header className="projects-page-heading">
        <h1>Projects</h1>
      </header>
      <div className="project-list">
        {projects.map((p) => (
          <ProjectSection key={p.slug} project={p} simple />
        ))}
      </div>
      <section className="projects-research" aria-labelledby="projects-research-heading">
        <h2 id="projects-research-heading">I&apos;m also interested in research.</h2>
        <p>
          Beyond building software, I enjoy exploring how people interact with
          technology.
        </p>
        <Link className="text-link" href="/research/">
          Explore My Research <Arrow diagonal />
        </Link>
      </section>
    </main>
  );
}
