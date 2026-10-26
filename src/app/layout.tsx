import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import { profile } from "@/data/profile";
export const metadata: Metadata = {
  title: `${profile.name} — Software Engineer`,
  description:
    "Computer Science student and software engineer exploring full-stack development, backend systems, data, and human-computer interaction.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
