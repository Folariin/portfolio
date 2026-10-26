import Link from "next/link";
import { profile } from "@/data/profile";
import { Arrow } from "./arrow";
export function SiteFooter(){return <footer className="shell footer"><p>© {new Date().getFullYear()} {profile.name}</p><div><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <Arrow diagonal /></a>{profile.linkedin&&<a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow diagonal /></a>}<Link href="/">Back to home ↑</Link></div></footer>}