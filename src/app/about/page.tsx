import type { Metadata } from "next";
import { AboutPageContent } from "./about-page-content";

export const metadata: Metadata = {
  title: "About Us | InjuryRight - Empowering Accident Victims with Trusted Legal Guidance",
  description:
    "Learn how InjuryRight is transforming the personal injury legal process. We connect accident victims with verified, trusted lawyers — making legal help accessible, transparent, and free unless you win.",
  keywords: [
    "about InjuryRight",
    "personal injury help",
    "accident victim support",
    "find personal injury lawyer",
    "trusted legal guidance",
    "free case review",
    "injury lawyer matching",
    "legal help for accidents",
  ],
  openGraph: {
    title: "About InjuryRight | Empowering Accident Victims",
    description:
      "InjuryRight gives power back to accident victims by providing clear, transparent access to legal guidance and verified personal injury experts.",
    type: "website",
    url: "https://injuryright.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About InjuryRight | Empowering Accident Victims",
    description:
      "Learn how InjuryRight connects accident victims with trusted personal injury lawyers. Free, fast, and no obligation.",
  },
  alternates: {
    canonical: "https://injuryright.com/about",
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
