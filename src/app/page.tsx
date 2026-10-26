import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { Network } from "@/components/network";
import { Reveal } from "@/components/reveal";
import { Arrow } from "@/components/arrow";
import { ProjectSection } from "@/components/project-section";
import { projects } from "@/data/projects";
export default function Home(){return <><Navigation/><main id="main">
<section className="hero shell"><div className="hero-copy"><p className="eyebrow hero-eyebrow"><span className="status-dot"/> COMPUTER SCIENCE & SOFTWARE ENGINEERING</p><h1>I build software that connects ideas to <span>real-world systems.</span></h1><p className="hero-description">I'm Farouk Amusat, a final-year Computer Science student at the University of Manitoba.<br/>I build full-stack applications and explore human-computer interaction through research.</p><Link className="text-link hero-link" href="/projects/">Explore my projects <Arrow/></Link></div><Network/><div className="hero-bottom"><span>THOUGHTFUL SOFTWARE. MEANINGFUL CONNECTIONS.</span><Link href="/about/">MORE ABOUT ME <span aria-hidden="true">↗</span></Link></div></section>
<section className="section shell"><Reveal><div className="section-heading"><div><p className="eyebrow section-kicker">01 / FEATURED PROJECT</p><h2>Built to <span className="muted">solve problems.</span></h2></div><Link className="text-link" href="/projects/">All projects <Arrow/></Link></div></Reveal><Reveal><ProjectSection project={projects[0]} reverse={false}/></Reveal></section>
<section className="section shell home-next"><Reveal><p className="eyebrow section-kicker">02 / EXPLORE</p><h2>More than <span className="muted">code.</span></h2><div className="page-link-grid"><Link href="/experience/"><span>EXPERIENCE</span><h3>Where I've worked ↗</h3><p>Professional and research experience.</p></Link><Link href="/research/"><span>RESEARCH</span><h3>What I'm exploring ↗</h3><p>Adaptive interfaces and human-robot interaction.</p></Link><Link href="/about/"><span>ABOUT</span><h3>Get to know me ↗</h3><p>Education, background, and technical skills.</p></Link></div></Reveal></section>
</main><SiteFooter/></>}