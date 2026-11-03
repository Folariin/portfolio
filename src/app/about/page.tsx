import { Arrow } from "@/components/arrow";
import { pageMetadata } from "@/lib/metadata";
import { profile } from "@/data/profile";

const services = [
  {
    title: "Full-Stack Development",
    description:
      "Building web applications from frontend interfaces to backend APIs using React, Next.js, Spring Boot, and PostgreSQL.",
  },
  {
    title: "Backend Development",
    description:
      "Developing REST APIs, working with databases, and implementing authentication and application logic.",
  },
  {
    title: "AI Integration",
    description:
      "Integrating LLM APIs into applications to support intelligent features and automate workflows.",
  },
  {
    title: "Testing & Deployment",
    description:
      "Writing automated tests, using Docker, and setting up CI/CD pipelines to build and deploy reliable applications.",
  },
];

const technologyGroups = [
  { category: "Languages", items: "Java, TypeScript, JavaScript, Python, SQL" },
  { category: "Frontend", items: "React, Next.js, Tailwind CSS" },
  { category: "Backend", items: "Spring Boot, REST APIs" },
  { category: "Databases", items: "PostgreSQL, Prisma" },
  { category: "Tools", items: "Git, GitHub, Docker, GitHub Actions" },
  { category: "Testing", items: "JUnit, Mockito, Vitest" },
];

export const metadata = pageMetadata(
  "About",
  "Farouk Amusat is a Computer Science student at the University of Manitoba interested in full-stack and backend development.",
);

export default function AboutPage() {
  return (
    <main id="main" tabIndex={-1} className="shell inner-page">
      <header className="about-page-heading">
        <h1>About Me</h1>
        <p className="lead">
          I enjoy building software and solving problems with technology. I&apos;m
          particularly interested in full-stack development, backend
          engineering, and exploring new technologies.
        </p>
      </header>

      <section className="about-section" aria-labelledby="what-i-do-heading">
        <h2 id="what-i-do-heading">What I Do</h2>
        <div className="about-service-grid">
          {services.map((service) => (
            <article className="about-service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" aria-labelledby="technologies-heading">
        <h2 id="technologies-heading">Technologies I Use</h2>
        <dl className="about-tech-list">
          {technologyGroups.map((group) => (
            <div className="about-tech-group" key={group.category}>
              <dt>{group.category}</dt>
              <dd>{group.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="about-section" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Get in Touch</h2>
        <p className="about-contact-copy">
          I&apos;m always open to connecting and learning about new opportunities.
        </p>
        <nav className="about-contact-links" aria-label="Contact links">
          <a href={`mailto:${profile.email}`} aria-label="Email Farouk Amusat">
            Email <Arrow diagonal />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
          >
            GitHub <Arrow diagonal />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
          >
            LinkedIn <Arrow diagonal />
          </a>
          {profile.resume && (
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume PDF (opens in a new tab)"
            >
              Resume <Arrow diagonal />
            </a>
          )}
        </nav>
      </section>
    </main>
  );
}
