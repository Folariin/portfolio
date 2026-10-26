import Link from "next/link";
export const metadata = { title: "Resume — Portfolio" };
export default function Resume() {
  return (
    <main id="main" className="shell resume-page">
      <p className="eyebrow">RESUME</p>
      <h1>
        A little more
        <br />
        about my work.
      </h1>
      <p className="body-copy">
        A resume hasn&apos;t been added to this portfolio yet.
      </p>
      <Link className="text-link" href="/#experience">
        Explore experience instead →
      </Link>
    </main>
  );
}
