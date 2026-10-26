import { Navigation } from "@/components/navigation";
import { Network } from "@/components/network";
import { Reveal } from "@/components/reveal";
import { Arrow } from "@/components/arrow";
import { ProjectSection } from "@/components/project-section";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { profile, skills } from "@/data/profile";
export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <section id="about" className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="status-dot" /> COMPUTER SCIENCE & SOFTWARE
              ENGINEERING
            </p>
            <h1>
              I build software that connects ideas to{" "}
              <span>real-world systems.</span>
            </h1>
            <p className="hero-description">
              Computer Science (Honours) student at the University of Manitoba.
              <br />
              Building full-stack applications and exploring backend systems, data, and the
              human side of technology.
            </p>
            <a className="text-link hero-link" href="#work">
              Explore my work <Arrow />
            </a>
          </div>
          <Network />
          <div className="hero-bottom">
            <span>THOUGHTFUL SOFTWARE. MEANINGFUL CONNECTIONS.</span>
            <a href="#work" aria-label="Scroll to selected work">
              SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>
        <section id="work" className="section shell">
          <Reveal>
            <div className="section-heading">
              <div>
                <p className="eyebrow section-kicker">01 / SELECTED WORK</p>
                <h2>
                  Ideas into
                  <br />
                  <span className="muted">working things.</span>
                </h2>
              </div>
              <p className="section-aside">
                A few explorations in software,
                <br />
                systems, and human experience.
                <br />
                <span className="sample-note">
                  Selected projects from my GitHub.
                </span>
              </p>
            </div>
          </Reveal>
          {projects.map((project, i) => (
            <Reveal key={project.number}>
              <ProjectSection project={project} reverse={i % 2 === 1} />
            </Reveal>
          ))}
        </section>
        <section id="experience" className="section shell">
          <Reveal>
            <div className="section-heading">
              <div>
                <p className="eyebrow section-kicker">
                  02 / EXPERIENCE & RESEARCH
                </p>
                <h2>
                  Always building.
                  <br />
                  <span className="muted">Always learning.</span>
                </h2>
              </div>
              <p className="section-aside">
                Learning through collaboration,
                <br />
                experimentation, and practice.
              </p>
            </div>
          </Reveal>
          <div className="experience-list">
            {experiences.map((exp) => (
              <Reveal key={exp.role}>
                <article className="experience-row">
                  <p className="experience-dates">{exp.dates}</p>
                  <div>
                    <h3>{exp.role}</h3>
                    <p className="organization">{exp.organization}</p>
                    <p className="body-copy">{exp.description}</p>
                    <ul className="technology-list" aria-label="Focus areas">
                      {exp.focus.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                  <span className="experience-arrow" aria-hidden="true">
                    ↗
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
        <section id="skills" className="section skills-section shell">
          <Reveal>
            <p className="eyebrow section-kicker">03 / TOOLKIT</p>
            <h2 className="skills-display">
              Java <span>/</span> TypeScript
              <br />
              Python <span>/</span> SQL<span className="accent-dot">.</span>
            </h2>
            <div className="skills-grid">
              {skills.map((s) => (
                <div key={s.category}>
                  <h3>{s.category}</h3>
                  <p>{s.items}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>
        <section id="contact" className="contact section shell">
          <Reveal>
            <p className="eyebrow section-kicker">
              <span className="status-dot" />
              04 / GET IN TOUCH
            </p>
            <h2>
              Let&apos;s build
              <br />
              <span className="muted">something.</span>
              <span className="contact-asterisk" aria-hidden="true">
                ✳
              </span>
            </h2>
            <div className="contact-bottom">
              <a className="email-link" href={`mailto:${profile.email}`}>
                {profile.email}
                <Arrow diagonal />
              </a>
              <p>
                Have an idea, a question,
                <br />
                or just want to say hello?
              </p>
            </div>
          </Reveal>
        </section>
      </main>
      <footer className="shell footer">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub <Arrow diagonal />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn <Arrow diagonal />
          </a>
          <a href="#about">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
