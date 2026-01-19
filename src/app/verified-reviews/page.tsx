import type { Metadata } from "next";
import { VerifiedReviewsPageContent } from "./verified-reviews-content";

export const metadata: Metadata = {
  title: "How Reviews Work | InjuryRight - Verified, Trustworthy Lawyer Reviews",
  description:
    "Learn how InjuryRight reviews work. Every review comes from verified clients who actually worked with the lawyer. No fake ratings, no bias — just honest, helpful feedback you can trust.",
  keywords: [
    "verified lawyer reviews",
    "personal injury lawyer reviews",
    "trusted legal reviews",
    "how reviews work",
    "InjuryRight reviews",
    "lawyer feedback",
    "client testimonials",
    "honest lawyer ratings",
  ],
  openGraph: {
    title: "How Reviews Work | InjuryRight",
    description:
      "Every review on InjuryRight comes from verified clients. Learn how our review system ensures honest, trustworthy feedback for accident victims.",
    type: "website",
    url: "https://injuryright.com/verified-reviews",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Reviews Work | InjuryRight",
    description:
      "Verified reviews from real clients. Learn how InjuryRight ensures honest, trustworthy lawyer feedback.",
  },
  alternates: {
    canonical: "https://injuryright.com/verified-reviews",
  },
};

export default function VerifiedReviewsPage() {
  return <VerifiedReviewsPageContent />;
}
