import type { Metadata } from "next";
import { BlogPageContent } from "./blog-content";

export const metadata: Metadata = {
  title: "Life After Impact Blog | InjuryRight - Injury Recovery Resources",
  description:
    "Read stories, tips, and resources for accident victims. Learn about injury recovery, legal processes, and life after an accident.",
  keywords: [
    "personal injury blog",
    "accident recovery",
    "injury resources",
    "legal tips",
    "life after accident",
  ],
  openGraph: {
    title: "Life After Impact Blog | InjuryRight",
    description:
      "Stories, tips, and resources for accident victims and their families.",
    type: "website",
    url: "https://injuryright.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Life After Impact Blog | InjuryRight",
    description:
      "Resources and stories for accident recovery.",
  },
  alternates: {
    canonical: "https://injuryright.com/blog",
  },
};

export default function BlogPage() {
  return <BlogPageContent />;
}
