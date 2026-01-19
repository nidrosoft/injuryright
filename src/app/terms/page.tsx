import type { Metadata } from "next";
import { TermsPageContent } from "./terms-content";

export const metadata: Metadata = {
  title: "Terms of Service | InjuryRight",
  description:
    "Read the InjuryRight Terms of Service. Understand your rights and responsibilities when using our personal injury lawyer matching platform.",
  keywords: [
    "terms of service",
    "user agreement",
    "legal terms",
    "InjuryRight terms",
  ],
  openGraph: {
    title: "Terms of Service | InjuryRight",
    description:
      "InjuryRight Terms of Service and user agreement.",
    type: "website",
    url: "https://injuryright.com/terms",
  },
  alternates: {
    canonical: "https://injuryright.com/terms",
  },
};

export default function TermsPage() {
  return <TermsPageContent />;
}
