import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { Arrow } from "./arrow";
export function ProjectSection({
  project,
  compact = false,
  simple = false,
}: {
  project: Project;
  compact?: boolean;
  simple?: boolean;
}) {
  const Heading = compact ? "h3" : "h2";
  const technologies = simple
    ? (project.listingTechnologies ?? project.technologies)
    : project.technologies;
  return (
    <article
      id={project.slug}
      className={
        "project project-" + project.tone + (compact ? " project-compact" : "")
      }
    >
      <figure className="project-visual">
        {project.image ? (
          <>
            <div className="preview-bar" aria-hidden="true">
              <span>● ● ●</span>
              <span>{project.previewLabel}</span>
              <span>↗</span>
            </div>
            <a
              className="preview-image"
              href={project.image}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                "Open full-size visual for " +
                project.title +
                " (opens in new tab)"
              }
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={project.width}
                height={project.height}
                loading={!compact && project.number === "01" ? "eager" : "lazy"}
                sizes={
                  compact
                    ? "(max-width: 760px) 92vw, 44vw"
                    : "(max-width: 960px) 92vw, 55vw"
                }
              />
            </a>
          </>
        ) : (
          <div
            className="project-placeholder"
            role="img"
            aria-label={project.title + " screenshot unavailable"}
          >
            <strong>{project.title}</strong>
            <span>Screenshot not available</span>
          </div>
        )}
        {!simple && project.caption && <figcaption>{project.caption}</figcaption>}
      </figure>
      <div className="project-copy">
        {!simple && (
          <p className="eyebrow">
            <span>{project.number}</span> / {project.category}
          </p>
        )}
        <Heading>{project.title}</Heading>
        <p className="body-copy">
          {compact ? project.summary : project.description}
        </p>
        {!compact && !simple && (
          <div className="project-detail">
            <h3>{project.detailTitle}</h3>
            <p>{project.detail}</p>
          </div>
        )}
        <ul
          className="technology-list"
          aria-label={project.title + " technologies"}
        >
          {technologies.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="project-links">
          {compact && (
            <Link
              href={"/projects/#" + project.slug}
              aria-label={"Explore " + project.title}
            >
              Explore project <Arrow diagonal />
            </Link>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                project.title + " source code on GitHub (opens in new tab)"
              }
            >
              Source code <Arrow diagonal />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={project.title + " live demo (opens in new tab)"}
            >
              Live demo <Arrow diagonal />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
