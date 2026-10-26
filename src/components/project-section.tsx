import Image from "next/image";
import type { Project } from "@/data/projects";
import { Arrow } from "./arrow";
export function ProjectSection({
  project,
  reverse,
}: {
  project: Project;
  reverse: boolean;
}) {
  return (
    <article className={`project ${reverse ? "project-reverse" : ""}`}>
      <div className="project-copy">
        <p className="eyebrow">
          <span className="project-number">{project.number}</span>
          {project.category}
        </p>
        <h3>{project.title}</h3>
        <p className="body-copy">{project.description}</p>
        <ul className="technology-list" aria-label="Technologies">
          {project.technologies.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="project-links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <Arrow diagonal />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live project <Arrow diagonal />
            </a>
          )}
          {!project.githubUrl && !project.liveUrl && (
            <span className="sample-note">
              Concept project · links coming soon
            </span>
          )}
        </div>
      </div>
      <div className="project-visual">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={800}
          height={620}
          sizes="(max-width: 760px) 100vw, 50vw"
        />
      </div>
    </article>
  );
}
