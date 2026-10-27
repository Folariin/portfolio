import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { skills, profile } from "@/data/profile";
import { Arrow } from "@/components/arrow";
export const metadata = pageMetadata(
  "About",
  "Meet Farouk Amusat, a final-year Computer Science student at the University of Manitoba interested in full-stack engineering and HCI.",
);
export default function AboutPage() {
  return (
    <main id="main" tabIndex={-1} className="shell inner-page">
      <PageIntro
        eyebrow="04 / ABOUT ME"
        title="Curiosity meets"
        accent="engineering."
      >
        I’m Farouk Amusat, a final-year Computer Science student at the
        University of Manitoba. I enjoy building useful software and
        understanding how people interact with technology.
      </PageIntro>
      <section className="education">
        <div>
          <p className="eyebrow">EDUCATION</p>
          <h2>University of Manitoba</h2>
          <p>Computer Science · Final year</p>
        </div>
        <span className="education-mark" aria-hidden="true">
          F / A<span>BUILD. QUESTION. LEARN.</span>
        </span>
      </section>
      <section className="toolkit" aria-labelledby="toolkit-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">TECHNICAL TOOLKIT</p>
            <h2 id="toolkit-title">
              Tools for the <span>work.</span>
            </h2>
          </div>
          <p className="body-copy">
            Across software development
            <br />
            and human-centred research.
          </p>
        </div>
        <dl className="skills-grid">
          {skills.map((s) => (
            <div key={s.category}>
              <dt>{s.category}</dt>
              <dd>{s.items}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="about-connect">
        <p className="eyebrow">NEXT CHAPTER</p>
        <h2>Let’s build something useful.</h2>
        <p className="body-copy">
          I’m exploring new-grad software engineering opportunities.
        </p>
        <div className="actions">
          <a
            className="button"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <Arrow diagonal />
          </a>
          {profile.linkedin && (
            <a className="text-link" href={profile.linkedin}>
              LinkedIn <Arrow diagonal />
            </a>
          )}
          {profile.email && (
            <a className="text-link" href={"mailto:" + profile.email}>
              Email <Arrow />
            </a>
          )}
          <Link className="text-link" href="/projects/">
            See my work <Arrow />
          </Link>
        </div>
      </section>
    </main>
  );
}
