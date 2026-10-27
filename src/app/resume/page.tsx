import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
export const metadata = {
  title: "Resume",
  robots: { index: false, follow: true },
};
export default function Resume() {
  return (
    <main id="main" tabIndex={-1} className="shell inner-page">
      <PageIntro eyebrow="RESUME" title="More about" accent="my work.">
        A downloadable resume has not been added yet.
      </PageIntro>
      <Link className="button" href="/experience/">
        Explore my experience →
      </Link>
    </main>
  );
}
