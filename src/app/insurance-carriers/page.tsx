import type { Metadata } from "next";
import { InsuranceCarriersPageContent } from "./insurance-carriers-content";

export const metadata: Metadata = {
  title: "Insurance Carriers | InjuryRight - Personal Injury Insurance Providers We Work With",
  description:
    "Find personal injury lawyers who work with your insurance carrier. We help clients with claims involving Allstate, GEICO, State Farm, Progressive, and 50+ other insurance providers.",
  keywords: [
    "personal injury insurance",
    "auto insurance claims",
    "workers compensation insurance",
    "health insurance liens",
    "liability insurance claims",
    "Allstate injury claims",
    "GEICO accident claims",
    "State Farm injury lawyer",
    "Progressive accident attorney",
    "insurance carrier directory",
  ],
  openGraph: {
    title: "Insurance Carriers | InjuryRight",
    description:
      "Find lawyers experienced with your insurance carrier. Auto, workers' comp, health, and liability insurance providers.",
    type: "website",
    url: "https://injuryright.com/insurance-carriers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance Carriers | InjuryRight",
    description:
      "Personal injury lawyers who work with 50+ insurance carriers nationwide.",
  },
  alternates: {
    canonical: "https://injuryright.com/insurance-carriers",
  },
};

export default function InsuranceCarriersPage() {
  return <InsuranceCarriersPageContent />;
}
