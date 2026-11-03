import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Research",
  "Exploring how people interact with technology through studies of competitive video games and adaptive teleoperation.",
);

export default function ResearchPage() {
  return (
    <main id="main" tabIndex={-1} className="shell inner-page">
      <header className="research-page-heading">
        <h1>Research</h1>
        <p className="lead">Exploring how people interact with technology.</p>
      </header>

      <section id="usra" className="research-entry">
        <h2>How Trash Talk Affects Video Game Players</h2>
        <p className="research-subtitle">
          Undergraduate Summer Research Award (USRA) · Summer 2026
        </p>
        <p className="research-description">
          I investigated how trash talk in competitive video games might
          influence gameplay decisions, enjoyment, and willingness to play
          against the same opponent again.
        </p>
        <h3>What I worked on</h3>
        <p className="research-contribution">
          Designed the experiment, developed questionnaires and interview
          questions, prepared the research ethics application, and conducted a
          pilot study with six participants.
        </p>
      </section>

      <section id="honours" className="research-entry">
        <h2>Adaptive Teleoperation Interfaces</h2>
        <p className="research-subtitle">
          Computer Science Honours Project · Ongoing
        </p>
        <p className="research-description">
          I&apos;m exploring how joystick movements and physiological signals can
          help identify changes in a person&apos;s workload while controlling a
          robotic system.
        </p>
        <h3>What I&apos;m working on</h3>
        <p className="research-contribution">
          Developing an initial prototype that collects joystick and GSR sensor
          data to investigate how interfaces might adapt to users&apos; needs.
        </p>
      </section>
    </main>
  );
}
