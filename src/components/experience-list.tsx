import { experiences } from "@/data/experience";
import { Reveal } from "./reveal";
function emphasizeMetrics(value: string) {
  const parts = value.split(/(5,000\+|500\+|20–30|20\+|8 participants)/g);
  return parts.map((part, index) => /^(5,000\+|500\+|20–30|20\+|8 participants)$/.test(part) ? <strong className="experience-metric" key={index}>{part}</strong> : part);
}
export function ExperienceList({ research = false }: { research?: boolean }) {
  return <div className="experience-list">
    {experiences.filter(e => research ? e.role === "Honours Research Project" : e.role !== "Honours Research Project").map(e =>
      <Reveal key={e.role}>
        <article className="experience-row">
          <p className="experience-dates">{e.dates}</p>
          <div>
            <h3>{e.role}</h3>
            <p className="organization">{e.organization}</p>
            {e.bullets.length ? <ul className="experience-bullets">{e.bullets.map(b => <li key={b}>{emphasizeMetrics(b)}</li>)}</ul> : <p className="body-copy">{e.description}</p>}
            <ul className="technology-list">{e.focus.map(f => <li key={f}>{f}</li>)}</ul>
          </div>
          <span className="experience-arrow" aria-hidden="true">↗</span>
        </article>
      </Reveal>
    )}
  </div>;
}
