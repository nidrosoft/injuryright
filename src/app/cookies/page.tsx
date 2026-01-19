import type { Metadata } from "next";
import { CookiesPageContent } from "./cookies-content";

export const metadata: Metadata = {
  title: "Cookie Policy | InjuryRight",
  description:
    "Learn how InjuryRight uses cookies and similar technologies. Understand your choices for managing cookie preferences.",
  keywords: [
    "cookie policy",
    "cookies",
    "tracking",
    "privacy",
    "InjuryRight cookies",
  ],
  openGraph: {
    title: "Cookie Policy | InjuryRight",
    description:
      "How InjuryRight uses cookies and your choices.",
    type: "website",
    url: "https://injuryright.com/cookies",
  },
  alternates: {
    canonical: "https://injuryright.com/cookies",
  },
};

export default function CookiesPage() {
  return <CookiesPageContent />;
}
