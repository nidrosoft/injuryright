import type { Metadata } from "next";
import { LegalTopicsPageContent } from "./legal-topics-content";

export const metadata: Metadata = {
  title: "Legal Topics & Q&A | InjuryRight - Personal Injury Law Guide",
  description:
    "Get answers to common personal injury law questions. Learn about accident claims, insurance settlements, compensation, and your legal rights.",
  keywords: [
    "personal injury law",
    "legal questions",
    "accident claims FAQ",
    "injury compensation",
    "insurance settlement",
    "legal rights",
  ],
  openGraph: {
    title: "Legal Topics & Q&A | InjuryRight",
    description:
      "Get answers to common personal injury law questions and learn about your legal rights.",
    type: "website",
    url: "https://injuryright.com/legal-topics",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Topics & Q&A | InjuryRight",
    description:
      "Answers to common personal injury law questions.",
  },
  alternates: {
    canonical: "https://injuryright.com/legal-topics",
  },
};

export default function LegalTopicsPage() {
  return <LegalTopicsPageContent />;
}
