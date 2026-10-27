"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";
import { Arrow } from "./arrow";
const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects/" },
  { name: "Experience", href: "/experience/" },
  { name: "Research", href: "/research/" },
  { name: "About", href: "/about/" },
];
export function Navigation() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const path = usePathname();
  return (
    <header
      className="site-header shell"
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          setOpen(false);
          button.current?.focus();
        }
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <Link
        className="wordmark"
        href="/"
        onClick={() => setOpen(false)}
        aria-label={profile.name + ", home"}
      >
        <span className="brand-mark" aria-hidden="true">
          f<span>.</span>
        </span>
        {profile.name}
      </Link>
      <button
        ref={button}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
        <span aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <nav
        id="main-navigation"
        aria-label="Main navigation"
        className={open ? "navigation is-open" : "navigation"}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            aria-current={
              path.replace(/\/$/, "") === l.href.replace(/\/$/, "")
                ? "page"
                : undefined
            }
            onClick={() => setOpen(false)}
          >
            {l.name}
          </Link>
        ))}
        {profile.resume && (
          <a className="button button-small" href={profile.resume}>
            Resume <Arrow diagonal />
          </a>
        )}
      </nav>
    </header>
  );
}
