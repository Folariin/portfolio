import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
export const metadata: Metadata = { title: "Research | Farouk Amusat", description: "HCI research on competitive gaming and ongoing honours research in teleoperation." };
export default function ResearchPage() {
 return <><Navigation/><main id="main" className="shell inner-page">
  <p className="eyebrow section-kicker">03 / RESEARCH</p>
  <h1>Studying how people <span>interact with technology.</span></h1>
  <p className="hero-description">From social interaction in competitive games to adaptive interfaces for robotic teleoperation.</p>
  <div className="inner-page-content">
   <section className="research-detail">
    <p className="eyebrow section-kicker">01 / UNDERGRADUATE SUMMER RESEARCH · MAY–AUG 2026</p>
    <h2>Trash Talk, Gameplay Approach & Re-engagement</h2>
    <p className="body-copy">At the University of Manitoba, I investigated how trash talk in competitive video games might influence gameplay strategy, perceived enjoyment and fairness, and willingness to compete against the same opponent again.</p>
    <p className="body-copy">I designed a between-subjects study using UFC 5, with trash-talk and neutral-communication conditions. I developed standardized communication scripts, consent and debriefing materials, practice instructions, post-game questionnaires, and semi-structured interview questions.</p>
    <p className="body-copy">The study design uses gameplay measures such as strikes, knockdowns, and takedown attempts alongside participant feedback. I conducted a three-participant pilot to refine the procedure, including improving practice-sheet consistency and headset setup.</p>
    <p className="body-copy">This description focuses on the study design and pilot work; no definitive findings are claimed here.</p>
   </section>
   <section className="research-detail">
    <p className="eyebrow section-kicker">02 / HONOURS PROJECT · ONGOING</p>
    <h2>Adaptive-Flow Task Structuring in Teleoperation</h2>
    <p className="body-copy">My ongoing honours project explores whether joystick-control behaviour and galvanic skin response (GSR) can help identify possible overload or underload during robotic manipulation.</p>
    <p className="body-copy">I am bringing together a robot arm, joystick input, and physiological sensing as an initial system. The broader research direction is to investigate adaptive task structuring and compare an adaptive interface with a static approach. The study and its findings are not yet complete.</p>
   </section>
  </div>
 </main><SiteFooter/></>;
}
