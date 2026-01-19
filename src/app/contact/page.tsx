import type { Metadata } from "next";
import { ContactPageContent } from "./contact-page-content";

export const metadata: Metadata = {
  title: "Contact Us | InjuryRight - Get in Touch with Our Team",
  description:
    "Have questions about InjuryRight? Contact our team for support, partnership inquiries, or feedback. We're here to help accident victims find the legal guidance they need.",
  keywords: [
    "contact InjuryRight",
    "personal injury help",
    "legal support contact",
    "accident victim support",
    "lawyer matching help",
    "InjuryRight support",
  ],
  openGraph: {
    title: "Contact Us | InjuryRight",
    description:
      "Get in touch with the InjuryRight team. We're here to help with questions, support, and partnership inquiries.",
    type: "website",
    url: "https://injuryright.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | InjuryRight",
    description:
      "Have questions? Contact the InjuryRight team for support and assistance.",
  },
  alternates: {
    canonical: "https://injuryright.com/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
