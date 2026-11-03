import Link from "next/link";
import { Arrow } from "@/components/arrow";
import { profile } from "@/data/profile";

export default function Home() {
  const socialLinks = [
    {
      label: "GitHub",
      href: profile.github,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.68-3.75-1.32-3.75-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .72 2.62.5 3.26.38.1-.73.4-1.23.71-1.52-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.16-2.99-.12-.28-.5-1.42.11-2.95 0 0 .95-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.1-1.43 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.16 1.77 1.16 2.99 0 4.3-2.61 5.24-5.1 5.52.4.34.76 1.02.76 2.06v3.67c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
          />
        </svg>
      ),
      external: true,
    },
    {
      label: "LinkedIn",
      href: profile.linkedin,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M5.2 3.2a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.1 0H13v1.64h.05A4.04 4.04 0 0 1 16.7 8.7c3.9 0 4.6 2.57 4.6 5.91V21h-3.8v-5.66c0-1.35-.02-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3V21H9.4V9Z"
          />
        </svg>
      ),
      external: true,
    },
    {
      label: "Email",
      href: profile.email ? `mailto:${profile.email}` : "",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M3.5 6.5h17v11h-17zM4 7l8 6 8-6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.7"
          />
        </svg>
      ),
      external: false,
    },
  ].filter((link) => link.href);

  return (
    <main id="main" tabIndex={-1}>
      <section className="hero shell">
        <div className="hero-copy">
          <h1>
            Hi, I&apos;m Farouk.
            <br />
            I enjoy solving
            <br />
            problems with
            <br />
            <em>technology.</em>
          </h1>
          <p className="lead">
            I build useful software, explore new technologies, and enjoy
            turning ideas into practical solutions.
          </p>
          <div className="actions">
            <Link className="button" href="/projects/">
              View My Work <Arrow diagonal />
            </Link>
            {profile.resume && (
              <a
                className="button button-secondary"
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume <Arrow diagonal />
              </a>
            )}
          </div>
          {socialLinks.length > 0 && (
            <nav className="social-links" aria-label="Social links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  className="social-link"
                  href={link.href}
                  aria-label={link.label}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                >
                  {link.icon}
                </a>
              ))}
            </nav>
          )}
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-orbit" />
          <span className="art-label art-label-top">
            01 / ENGINEERING + CURIOSITY
          </span>
          <div className="art-tile tile-code">
            <span>BUILD</span>
            <strong>&lt; / &gt;</strong>
            <small>Ideas into working systems</small>
          </div>
          <div className="art-tile tile-human">
            <span>UNDERSTAND</span>
            <strong>✳</strong>
            <small>The human side of technology</small>
          </div>
          <span className="art-label art-label-bottom">
            SOFTWARE × HUMAN INTERACTION
          </span>
        </div>
      </section>
    </main>
  );
}
