import { experiences } from "@/data/experience";
const metric =
  /(6 participants|500\+ records|5,000\+ maps|20–30 daily customer inquiries|20\+ weekly orders)/g;
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
        .map((e) => (
          <article className="experience-row" key={e.role}>
            <div className="experience-meta">
              <p>{e.dates}</p>
            </div>
            <div className="experience-content">
              <h2>{e.role}</h2>
              <p className="organization">{e.organization}</p>
              <ul className="experience-bullets">
                {e.bullets.map((b) => (
                  <li key={b}>{emphasizeMetrics(b)}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
    </div>
  );
}
