import { pageMetadata } from "@/lib/metadata";
import { ExperienceList } from "@/components/experience-list";
export const metadata = pageMetadata(
  "Experience",
  "Farouk Amusat’s undergraduate research and map services experience in Winnipeg, Manitoba.",
);
export default function ExperiencePage() {
  return (
    <main id="main" tabIndex={-1} className="shell inner-page">
      <header className="experience-page-heading">
        <h1>Experience</h1>
      </header>
      <ExperienceList />
    </main>
  );
}
