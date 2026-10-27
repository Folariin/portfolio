import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { ExperienceList } from "@/components/experience-list";
export const metadata = pageMetadata(
  "Experience",
  "Farouk Amusat’s University of Manitoba USRA research and Canada Map Sales experience.",
);
export default function ExperiencePage() {
  return (
    <main id="main" tabIndex={-1} className="shell inner-page">
      <PageIntro
        eyebrow="02 / EXPERIENCE"
        title="Learning through"
        accent="doing."
      >
        Research, information management, and the everyday work of making things
        clearer for people.
      </PageIntro>
      <ExperienceList />
      <p className="page-note">
        Currently exploring adaptive robotic teleoperation in my honours
        project.{" "}
        <Link href="/research/#honours">Read about the ongoing research →</Link>
      </p>
    </main>
  );
}
