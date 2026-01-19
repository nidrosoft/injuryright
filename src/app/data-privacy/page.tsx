import type { Metadata } from "next";
import { DataPrivacyPageContent } from "./data-privacy-content";

export const metadata: Metadata = {
  title: "Data & Privacy | InjuryRight - Your Security is Our Priority",
  description:
    "Learn how InjuryRight protects your personal information. We use industry-standard encryption, strict access controls, and comprehensive security measures to keep your data safe.",
  keywords: [
    "data privacy",
    "information security",
    "personal injury data protection",
    "client confidentiality",
    "secure legal platform",
    "data encryption",
    "privacy policy",
    "InjuryRight security",
  ],
  openGraph: {
    title: "Data & Privacy | InjuryRight",
    description:
      "Your security is our priority. Learn how InjuryRight protects your personal information with industry-leading security measures.",
    type: "website",
    url: "https://injuryright.com/data-privacy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data & Privacy | InjuryRight",
    description:
      "Learn how InjuryRight keeps your personal information secure and confidential.",
  },
  alternates: {
    canonical: "https://injuryright.com/data-privacy",
  },
};

export default function DataPrivacyPage() {
  return <DataPrivacyPageContent />;
}
