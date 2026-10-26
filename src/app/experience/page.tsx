import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
import { ExperienceList } from "@/components/experience-list";
export const metadata:Metadata={title:"Experience | Farouk Amusat"};
export default function ExperiencePage(){return <><Navigation/><main id="main" className="shell inner-page"><p className="eyebrow section-kicker">02 / EXPERIENCE</p><h1>Learning through <span>doing.</span></h1><p className="hero-description">Professional experience and hands-on human-computer interaction research.</p><div className="inner-page-content"><ExperienceList/></div></main><SiteFooter/></>}