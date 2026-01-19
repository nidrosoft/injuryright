import type { Metadata } from "next";
import { SurveyPageContent } from "./survey-content";

export const metadata: Metadata = {
  title: "Check My Case | InjuryRight - Free Case Evaluation",
  description:
    "Take our free 2-minute case evaluation to see if you qualify for compensation. No obligation, no cost. Get matched with trusted personal injury lawyers.",
  keywords: [
    "free case evaluation",
    "personal injury case review",
    "do I have a case",
    "injury claim assessment",
    "lawyer matching",
    "case qualification",
  ],
  openGraph: {
    title: "Check My Case | InjuryRight",
    description:
      "Free 2-minute case evaluation. See if you qualify for compensation.",
    type: "website",
    url: "https://injuryright.com/survey",
  },
  twitter: {
    card: "summary_large_image",
    title: "Check My Case | InjuryRight",
    description:
      "Free case evaluation in 2 minutes. No obligation.",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function SurveyPage() {
  return <SurveyPageContent />;
}
