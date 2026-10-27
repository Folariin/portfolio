import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { SiteFooter } from "@/components/site-footer";
const description =
  "Farouk Amusat — final-year Computer Science student at the University of Manitoba. Full-stack software development and human-computer interaction research.";
export const metadata: Metadata = {
  title: {
    default: "Farouk Amusat — Software & Human Interaction",
    template: "%s | Farouk Amusat",
  },
  description,
  applicationName: "Farouk Amusat Portfolio",
  openGraph: {
    title: "Farouk Amusat — Software & Human Interaction",
    description,
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary",
    title: "Farouk Amusat — Software & Human Interaction",
    description,
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navigation />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
