import type { Metadata } from "next";
import { InjuryTypesPageContent } from "./injury-types-content";

export const metadata: Metadata = {
  title: "Injury Types | InjuryRight - Find Lawyers for Your Specific Case",
  description:
    "Explore all personal injury types we cover: car accidents, truck accidents, slip & fall, motorcycle crashes, wrongful death, and more. Find the right lawyer for your specific case.",
  keywords: [
    "personal injury types",
    "car accident lawyer",
    "truck accident attorney",
    "slip and fall lawyer",
    "motorcycle accident lawyer",
    "wrongful death attorney",
    "dog bite lawyer",
    "workplace injury lawyer",
    "catastrophic injury attorney",
    "rideshare accident lawyer",
    "pedestrian accident lawyer",
    "bicycle accident attorney",
  ],
  openGraph: {
    title: "Injury Types | InjuryRight",
    description:
      "Find trusted lawyers for your specific injury type. Car accidents, truck crashes, slip & fall, wrongful death, and more.",
    type: "website",
    url: "https://injuryright.com/injury-types",
  },
  twitter: {
    card: "summary_large_image",
    title: "Injury Types | InjuryRight",
    description:
      "Explore all personal injury types and find the right lawyer for your case.",
  },
  alternates: {
    canonical: "https://injuryright.com/injury-types",
  },
};

export default function InjuryTypesPage() {
  return <InjuryTypesPageContent />;
}
