import { pageMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/page-intro";
export const metadata = pageMetadata(
  "Research",
  "Completed HCI summer research on competitive gameplay and ongoing honours research into adaptive robotic teleoperation.",
);
export default function ResearchPage() {
  return (
    <main id="main" tabIndex={-1} className="shell inner-page">
      <PageIntro
        eyebrow="03 / HUMAN-COMPUTER INTERACTION"
        title="Technology is only"
        accent="half the story."
      >
        I’m interested in what happens on the other side of the interface: how
        people act, feel, and adapt.
      </PageIntro>
      <section id="usra" className="research-study">
        <div className="study-header">
          <div>
            <p className="eyebrow">01 / USRA · MAY–AUG 2026</p>
            <h2>
              Trash talk, gameplay
              <br />& re-engagement.
            </h2>
          </div>
          <span className="status-label completed">
            Completed summer research
          </span>
        </div>
        <p className="study-question">
          How might communication between opponents shape the experience of
          competitive play?
        </p>
        <div className="research-grid">
          <div>
            <h3>The question</h3>
            <p>
              I investigated how trash talk in competitive video games might
              influence gameplay strategy, perceived enjoyment and fairness, and
              willingness to face the same opponent again.
            </p>
            <h3>My contribution</h3>
            <p>
              I designed a between-subjects UFC 5 study, developed standardized
              scripts, consent and debriefing materials, practice instructions,
              questionnaires, and semi-structured interview questions.
            </p>
          </div>
          <div className="study-method">
            <p className="eyebrow">STUDY AT A GLANCE</p>
            <dl>
              <div>
                <dt>Participants</dt>
                <dd>
                  <strong>8 participants</strong> in the study
                </dd>
              </div>
              <div>
                <dt>Pilot</dt>
                <dd>3 participants; procedure and headset refinements</dd>
              </div>
              <div>
                <dt>Conditions</dt>
                <dd>Trash talk / neutral communication</dd>
              </div>
              <div>
                <dt>Evidence</dt>
                <dd>Gameplay measures, questionnaires, and interviews</dd>
              </div>
            </dl>
          </div>
        </div>
        <p className="research-note">
          The USRA appointment is complete. This summary describes the study and
          methods; it does not claim a definitive causal finding.
        </p>
      </section>
      <section id="honours" className="research-study honours">
        <div className="study-header">
          <div>
            <p className="eyebrow">02 / HONOURS PROJECT</p>
            <h2>
              Adaptive-flow task structuring
              <br />
              in teleoperation.
            </h2>
          </div>
          <span className="status-label">Ongoing · initial system</span>
        </div>
        <p className="study-question">
          Could an interface adapt to the demands of controlling a robot?
        </p>
        <div className="research-grid">
          <div>
            <h3>Research direction</h3>
            <p>
              I’m exploring whether joystick-control behaviour and galvanic skin
              response (GSR) can help identify possible overload or underload
              during robotic manipulation.
            </p>
            <h3>Current work</h3>
            <p>
              I’m bringing together a robot arm, joystick input, and
              physiological sensing as an initial system. The broader direction
              is to investigate adaptive task structuring and compare an
              adaptive interface with a static approach.
            </p>
          </div>
          <div className="research-flow">
            <p className="eyebrow">PROPOSED RESEARCH DIRECTION</p>
            <ol>
              <li>
                <span>01</span>
                <div>
                  <strong>Observe</strong>
                  <p>Joystick behaviour + physiological sensing</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>Explore</strong>
                  <p>Possible overload and underload signals</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>Investigate</strong>
                  <p>Adaptive versus static task structuring</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <p className="research-note">
          Work in progress. The study and its findings are not yet complete.
        </p>
      </section>
    </main>
  );
}
