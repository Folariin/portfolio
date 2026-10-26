"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";
import { Arrow } from "./arrow";
const links = [{name:"Home",href:"/"},{name:"Projects",href:"/projects/"},{name:"Experience",href:"/experience/"},{name:"Research",href:"/research/"},{name:"About",href:"/about/"}];
export function Navigation() {
 const [open,setOpen]=useState(false);
 const path=usePathname();
 return <header className="site-header shell">
 <Link className="wordmark" href="/" onClick={()=>setOpen(false)} aria-label={profile.name+", home"}><span className="brand-mark" aria-hidden="true">✳</span>{profile.name}<span className="name-dot">.</span></Link>
 <button className="menu-toggle" aria-expanded={open} aria-controls="main-navigation" onClick={()=>setOpen(!open)}>{open?"Close":"Menu"}<span aria-hidden="true">{open?"−":"+"}</span></button>
 <nav id="main-navigation" aria-label="Main navigation" className={open?"navigation is-open":"navigation"}>
 {links.map(l=><Link key={l.href} href={l.href} aria-current={path.replace(/\/$/,"")===l.href.replace(/\/$/,"")?"page":undefined} onClick={()=>setOpen(false)}>{l.name}</Link>)}
 <Link className="resume-button" href={profile.resume??"/resume/"} onClick={()=>setOpen(false)}>Resume <Arrow diagonal /></Link>
 </nav></header>;
}