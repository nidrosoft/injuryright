import type { Metadata } from "next";
import { SpecialtiesPageContent } from "./specialties-content";

export const metadata: Metadata = {
  title: "Legal Specialties | InjuryRight - Find Lawyers by Practice Area",
  description:
    "Browse personal injury lawyer specialties. Find attorneys specializing in auto accidents, medical malpractice, workplace injuries, wrongful death, and more. Connect with the right expert for your case.",
  keywords: [
    "personal injury lawyer specialties",
    "auto accident lawyer",
    "medical malpractice attorney",
    "workplace injury lawyer",
    "wrongful death attorney",
    "truck accident lawyer",
    "motorcycle accident attorney",
    "slip and fall lawyer",
    "dog bite attorney",
    "brain injury lawyer",
    "spinal cord injury attorney",
  ],
  openGraph: {
    title: "Legal Specialties | InjuryRight",
    description:
      "Find personal injury lawyers by specialty. Auto accidents, medical malpractice, workplace injuries, and more.",
    type: "website",
    url: "https://injuryright.com/specialties",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Specialties | InjuryRight",
    description:
      "Browse 20+ personal injury lawyer specialties and find the right expert for your case.",
  },
  alternates: {
    canonical: "https://injuryright.com/specialties",
  },
};

export default function SpecialtiesPage() {
  return <SpecialtiesPageContent />;
}
