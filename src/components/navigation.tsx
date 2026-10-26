"use client";
import { useState } from "react";
import { profile } from "@/data/profile";
import { Arrow } from "./arrow";
export function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header shell">
      <a
        className="wordmark"
        href="#about"
        aria-label={`${profile.name}, home`}
      >
        <span className="brand-mark" aria-hidden="true">
          ✳
        </span>
        {profile.name}
        <span className="name-dot">.</span>
      </a>
      <button
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
        {["About", "Work", "Experience", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setOpen(false)}
          >
            {item}
          </a>
        ))}
        <a
          className="resume-button"
          href={profile.resume ?? "/resume/"}
          onClick={() => setOpen(false)}
        >
          Resume <Arrow diagonal />
        </a>
      </nav>
    </header>
  );
}
