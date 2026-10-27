import { experiences } from "@/data/experience";
const metric =
  /(5,000\+ maps|500\+ records|20–30 daily customer inquiries|20\+ weekly orders|8 participants)/g;
function emphasizeMetrics(value: string) {
  return value
    .split(metric)
    .map((part, index) =>
      index % 2 === 1 ? <strong key={index}>{part}</strong> : part,
    );
}
export function ExperienceList() {
  return (
    <div className="experience-list">
      {experiences
        .filter((e) => e.role !== "Honours Research Project")
        .map((e, i) => (
          <article className="experience-row" key={e.role}>
            <div className="experience-meta">
              <span className="eyebrow">0{i + 1}</span>
              <p>{e.dates}</p>
              <span className="status-label">
                {i === 0 ? "Completed USRA" : "Professional experience"}
              </span>
            </div>
            <div>
              <h2>{e.role}</h2>
              <p className="organization">{e.organization}</p>
              <ul className="experience-bullets">
                {e.bullets.map((b) => (
                  <li key={b}>{emphasizeMetrics(b)}</li>
                ))}
              </ul>
              <ul className="technology-list" aria-label="Focus areas">
                {e.focus.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
    </div>
  );
}
