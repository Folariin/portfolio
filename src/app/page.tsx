import Link from "next/link";
import { Arrow } from "@/components/arrow";
import { ProjectSection } from "@/components/project-section";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
export default function Home() {
  return (
    <main id="main" tabIndex={-1}>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> FINAL-YEAR CS · UNIVERSITY OF
            MANITOBA
          </p>
          <h1>
            Hi, I’m <span>Farouk.</span>
            <br />I build for
            <br />
            <em>people.</em>
          </h1>
          <p className="lead">
            Full-stack development meets human-computer interaction. Useful
            software, thoughtful systems, and curiosity about the people using
            them.
          </p>
          <div className="actions">
            <Link className="button" href="/projects/">
              Explore my work <Arrow diagonal />
            </Link>
            <Link className="text-link" href="/about/">
              A little about me <Arrow />
            </Link>
          </div>
          <p className="availability">
            Exploring new-grad software engineering opportunities
          </p>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-orbit" />
          <span className="art-label art-label-top">
            01 / ENGINEERING + CURIOSITY
          </span>
          <div className="art-tile tile-code">
            <span>BUILD</span>
            <strong>&lt; / &gt;</strong>
            <small>Ideas into working systems</small>
          </div>
          <div className="art-tile tile-human">
            <span>UNDERSTAND</span>
            <strong>✳</strong>
            <small>The human side of technology</small>
          </div>
          <span className="art-label art-label-bottom">
            SOFTWARE × HUMAN INTERACTION
          </span>
        </div>
      </section>
      <section className="shell section" aria-labelledby="work-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2 id="work-heading">
              Built with <span>purpose.</span>
            </h2>
          </div>
          <Link className="text-link" href="/projects/">
            All three projects <Arrow diagonal />
          </Link>
        </div>
        <div className="featured-grid">
          {projects.slice(0, 2).map((p) => (
            <ProjectSection key={p.slug} project={p} compact />
          ))}
        </div>
        <Link
          className="project-footnote"
          href="/projects/#movie-data-analysis"
        >
          <span>ALSO EXPLORING</span> Movie Data Analysis{" "}
          <span>Java / JDBC / SQL Server</span>
          <Arrow diagonal />
        </Link>
      </section>
      <section
        className="shell section perspective"
        aria-labelledby="perspective-heading"
      >
        <div>
          <p className="eyebrow">02 / A BROADER PERSPECTIVE</p>
          <h2 id="perspective-heading">
            Good systems start
            <br />
            with <span>good questions.</span>
          </h2>
          <p className="body-copy">
            Research shapes how I think about software. Professional experience
            has taught me to care about the details people rely on.
          </p>
        </div>
        <div className="perspective-links">
          <Link href="/research/">
            <span className="link-number">01</span>
            <div>
              <h3>Human-computer interaction</h3>
              <p>Completed USRA study · ongoing honours research</p>
            </div>
            <Arrow diagonal />
          </Link>
          <Link href="/experience/">
            <span className="link-number">02</span>
            <div>
              <h3>Experience in practice</h3>
              <p>Research, information management, and service</p>
            </div>
            <Arrow diagonal />
          </Link>
        </div>
      </section>
      <section className="shell contact-band">
        <div>
          <p className="eyebrow">LET’S CONNECT</p>
          <h2>
            Something useful
            <br />
            starts with a conversation.
          </h2>
        </div>
        <a
          className="button"
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Find me on GitHub <Arrow diagonal />
        </a>
      </section>
    </main>
  );
}
