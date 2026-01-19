import type { Metadata } from "next";
import { ForLawFirmsPageContent } from "./for-law-firms-content";

export const metadata: Metadata = {
  title: "For Law Firms | InjuryRight - AI-Powered Legal Directory for Personal Injury Attorneys",
  description:
    "Grow your personal injury practice with InjuryRight. Reach qualified clients, streamline intake with AI, and gain visibility into your firm's performance. Trusted by leading PI law firms.",
  keywords: [
    "personal injury lawyer marketing",
    "law firm lead generation",
    "legal directory for attorneys",
    "PI lawyer client acquisition",
    "AI legal intake",
    "law firm growth",
    "attorney marketing platform",
    "personal injury case leads",
  ],
  openGraph: {
    title: "For Law Firms | InjuryRight",
    description:
      "Reach more qualified injury clients, streamline intake, and gain clear visibility into your firm's performance with InjuryRight.",
    type: "website",
    url: "https://injuryright.com/for-law-firms",
  },
  twitter: {
    card: "summary_large_image",
    title: "For Law Firms | InjuryRight",
    description:
      "AI-powered legal directory helping personal injury law firms grow their practice.",
  },
  alternates: {
    canonical: "https://injuryright.com/for-law-firms",
  },
};

export default function ForLawFirmsPage() {
  return <ForLawFirmsPageContent />;
}
