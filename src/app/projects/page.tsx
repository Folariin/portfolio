import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { ProjectSection } from "@/components/project-section";
import { Reveal } from "@/components/reveal";
import { projects } from "@/data/projects";
export const metadata:Metadata={title:"Projects | Farouk Amusat"};
export default function ProjectsPage(){return <><Navigation/><main id="main" className="shell inner-page"><p className="eyebrow section-kicker">01 / SELECTED WORK</p><h1>Ideas into <span>working things.</span></h1><p className="hero-description">Selected software projects from my GitHub.</p><div className="inner-page-content">{projects.map((p,i)=><Reveal key={p.number}><ProjectSection project={p} reverse={i%2===1}/></Reveal>)}</div></main><SiteFooter/></>}