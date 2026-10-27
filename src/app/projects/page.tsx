import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/page-intro";
import { ProjectSection } from "@/components/project-section";
import { projects } from "@/data/projects";
export const metadata = pageMetadata(
  "Projects",
  "Farouk Amusat’s software projects: AI-assisted employee scheduling, collaborative grocery lists, and Java/SQL movie analysis.",
);
export default function ProjectsPage() {
  return (
    <main id="main" tabIndex={-1} className="shell inner-page">
      <PageIntro
        eyebrow="01 / SELECTED WORK"
        title="Ideas, made"
        accent="real."
      >
        Three projects. Different problems. A shared interest in building
        useful, understandable software.
      </PageIntro>
      <div className="project-list">
        {projects.map((p) => (
          <ProjectSection key={p.slug} project={p} />
        ))}
      </div>
    </main>
  );
}
