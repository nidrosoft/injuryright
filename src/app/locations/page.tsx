import type { Metadata } from "next";
import { LocationsPageContent } from "./locations-content";

export const metadata: Metadata = {
  title: "Find Personal Injury Lawyers by Location | InjuryRight",
  description:
    "Find trusted personal injury lawyers in your city or state. Browse our nationwide network of verified attorneys ready to help with your case.",
  keywords: [
    "personal injury lawyer near me",
    "accident attorney by state",
    "local injury lawyer",
    "find lawyer by city",
  ],
  openGraph: {
    title: "Find Lawyers by Location | InjuryRight",
    description:
      "Browse personal injury lawyers by city or state. Connect with local experts.",
    type: "website",
    url: "https://injuryright.com/locations",
  },
  alternates: {
    canonical: "https://injuryright.com/locations",
  },
};

export default function LocationsPage() {
  return <LocationsPageContent />;
}
