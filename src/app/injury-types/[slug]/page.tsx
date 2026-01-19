import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InjuryTypePageContent } from "./injury-type-page-content";
import { getInjuryTypeContent, getAllInjuryTypeSlugs } from "@/lib/injury-type-content";
import { INJURY_TYPES } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllInjuryTypeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getInjuryTypeContent(slug);
  const injuryType = INJURY_TYPES.find((t) => t.slug === slug);

  if (!content || !injuryType) {
    return {
      title: "Injury Type Not Found | InjuryRight",
    };
  }

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: [
      `${injuryType.label.toLowerCase()} lawyer`,
      `${injuryType.label.toLowerCase()} attorney`,
      `${injuryType.label.toLowerCase()} compensation`,
      `${injuryType.label.toLowerCase()} claim`,
      "personal injury lawyer",
      "injury compensation",
      "legal help",
    ],
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      type: "article",
      url: `https://injuryright.com/injury-types/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: content.metaTitle,
      description: content.metaDescription,
    },
    alternates: {
      canonical: `https://injuryright.com/injury-types/${slug}`,
    },
  };
}

export default async function InjuryTypePage({ params }: PageProps) {
  const { slug } = await params;
  const content = getInjuryTypeContent(slug);
  const injuryType = INJURY_TYPES.find((t) => t.slug === slug);

  if (!content || !injuryType) {
    notFound();
  }

  return <InjuryTypePageContent content={content} injuryType={injuryType} />;
}
