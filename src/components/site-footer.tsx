import Link from "next/link";
import { profile } from "@/data/profile";
import { Arrow } from "./arrow";
export function SiteFooter() {
  return (
    <footer className="shell footer">
      <div>
        <Link href="/" className="footer-name">
          {profile.name}
          <span>✳</span>
        </Link>
        <p>Software engineering. Human perspective.</p>
      </div>
      <div className="footer-links">
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub <Arrow diagonal />
        </a>
        {profile.linkedin && (
          <a href={profile.linkedin}>
            LinkedIn <Arrow diagonal />
          </a>
        )}
        <Link href="/about/">
          About & connect <Arrow />
        </Link>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
