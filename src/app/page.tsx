import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { Arrow } from "@/components/arrow";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";
import Image from "next/image";
export default function Home(){
 const work=experiences.filter(e=>e.role!=="Honours Research Project");
 return <><Navigation/><main id="main" className="bright-home">
 <section className="bright-hero shell">
   <div className="bright-hero-copy">
    <p className="bright-eyebrow">COMPUTER SCIENCE · UNIVERSITY OF MANITOBA</p>
    <h1>Hi, I'm <span>Farouk.</span></h1>
    <h2>I build software and explore how people interact with technology.</h2>
    <p>Final-year Computer Science student focused on full-stack development, practical applications, and human-computer interaction research.</p>
    <div className="bright-actions"><Link className="bright-button" href="/projects/">View my projects <Arrow diagonal/></Link><a className="bright-button bright-button-outline" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <Arrow diagonal/></a></div>
    <div className="bright-specialties"><span>⌘ Full-stack development</span><span>◈ Real-world applications</span><span>✳ HCI research</span></div>
   </div>
   <div className="bright-hero-art" aria-hidden="true"><div className="bright-orb bright-orb-one"/><div className="bright-orb bright-orb-two"/><div className="bright-art-window"><span>F / A</span><strong>BUILD<br/>LEARN<br/>EXPLORE<span className="bright-period">.</span></strong><small>SOFTWARE × HUMAN INTERACTION</small></div><div className="bright-float-note">Ideas into<br/>working things ↗</div></div>
 </section>
 <section className="shell bright-section">
  <div className="bright-section-heading"><div><p className="bright-eyebrow">SELECTED WORK</p><h2>Things I've <span>built.</span></h2></div><Link href="/projects/">All projects <Arrow diagonal/></Link></div>
  <div className="bright-project-grid">{projects.slice(0,2).map((p,i)=><article className={`bright-project-card bright-project-${i+1}`} key={p.number}><div className="bright-card-top"><span className="bright-project-icon">{i===0?"▦":"◈"}</span><span className="bright-project-index">0{i+1} / PROJECT</span></div><h3>{p.title}</h3><p>{p.description}</p><div className="bright-pills">{p.technologies.map(t=><span key={t}>{t}</span>)}</div><div className="bright-project-links"><a href={p.githubUrl??"#"} target="_blank" rel="noopener noreferrer" className="bright-card-link">Source code <Arrow diagonal/></a>{p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="bright-card-link bright-live-link">Live demo <Arrow diagonal/></a>}</div><div className="bright-project-image"><Image src={p.image} alt={p.imageAlt} width={800} height={620}/><span>Project preview · replace with an app screenshot</span></div></article>)}</div>
 </section>
 <section className="shell bright-two-column bright-two-column-compact">
  <div className="bright-info-panel"><div className="bright-panel-heading"><h2>Experience</h2><Link href="/experience/">View experience ↗</Link></div><div className="bright-timeline">{work.map(e=><article key={e.role}><small>{e.dates}</small><h3>{e.role}</h3><p>{e.organization}</p></article>)}</div></div>
  <div className="bright-info-panel"><div className="bright-panel-heading"><h2>Research</h2><Link href="/research/">View research ↗</Link></div><article className="bright-research-item"><span>01</span><div><h3>Gameplay & Social Interaction</h3><p>Undergraduate summer research · 2026</p></div></article><article className="bright-research-item"><span>02</span><div><h3>Adaptive Robotic Teleoperation</h3><p>Honours project · Ongoing</p></div></article></div>
 </section>
 <section className="shell bright-contact"><div><p className="bright-eyebrow">LET'S CONNECT</p><h2>Interested in working together?</h2><p>I'm exploring new-grad software engineering opportunities and always happy to connect.</p></div><a href={profile.github} target="_blank" rel="noopener noreferrer" className="bright-button">Find me on GitHub <Arrow diagonal/></a></section>
 </main><SiteFooter/></>;
}