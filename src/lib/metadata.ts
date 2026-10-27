import type { Metadata } from "next";
export function pageMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: title + " | Farouk Amusat",
      description,
      type: "website",
      locale: "en_CA",
    },
    twitter: {
      card: "summary",
      title: title + " | Farouk Amusat",
      description,
    },
  };
}
