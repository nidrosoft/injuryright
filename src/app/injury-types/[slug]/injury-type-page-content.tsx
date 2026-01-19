"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { InjuryRightHeader } from "@/components/layout/InjuryRightHeader";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/base/buttons/button";
import { INJURY_TYPES } from "@/lib/constants";
import type { InjuryTypeContent } from "@/lib/injury-type-content";
import {
  ArrowRight,
  CheckCircle,
  AlertCircle,
  File06,
  Users01,
  ShieldTick,
  Clock,
  Scale01,
  Lightbulb02,
  ChevronLeft,
} from "@untitledui/icons";

interface InjuryTypePageContentProps {
  content: InjuryTypeContent;
  injuryType: (typeof INJURY_TYPES)[number];
}

function HeroSection({
  content,
  injuryType,
}: {
  content: InjuryTypeContent;
  injuryType: (typeof INJURY_TYPES)[number];
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 lg:pt-44 lg:pb-20 bg-gradient-to-br from-[#055148] via-[#03695D] to-[#047B6D] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <Link
            href="/injury-types"
            className="inline-flex items-center text-white/70 hover:text-white transition-colors text-sm"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            All Injury Types
          </Link>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{injuryType.emoji}</span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white">
              Injury Type
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
          >
            {content.title}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg sm:text-xl text-white/80 max-w-3xl leading-relaxed"
          >
            {content.heroDescription}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Button
              color="secondary"
              size="xl"
              href="/survey"
              iconTrailing={ArrowRight}
              className="shadow-lg bg-white text-brand-primary hover:bg-gray-50"
            >
              Check My Case
            </Button>
            <span className="text-sm text-white/60">Free • No obligation • 2 minutes</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function KeyTakeawaysSection({ content }: { content: InjuryTypeContent }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-12 sm:py-16 bg-brand-50 border-b border-brand-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
            <Lightbulb02 className="w-6 h-6 text-brand-600" />
            <h2 className="text-xl font-bold text-primary">Key Takeaways</h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {content.keyTakeaways.map((takeaway, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-3 p-4 bg-white rounded-xl border border-brand-100"
              >
                <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-secondary leading-relaxed">{takeaway}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ContentSection({
  title,
  intro,
  items,
  icon: Icon,
  variant = "default",
}: {
  title: string;
  intro?: string;
  items: string[];
  icon: React.ComponentType<{ className?: string }>;
  variant?: "default" | "highlight" | "warning";
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const bgClass = variant === "highlight" ? "bg-secondary" : variant === "warning" ? "bg-warning-50" : "bg-primary";

  return (
    <section ref={ref} className={`py-12 sm:py-16 ${bgClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-50">
              <Icon className="w-5 h-5 text-brand-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">{title}</h2>
          </motion.div>

          {intro && (
            <motion.p variants={fadeInUp} className="text-lg text-tertiary mb-6 leading-relaxed">
              {intro}
            </motion.p>
          )}

          <motion.ul variants={staggerContainer} className="space-y-3">
            {items.map((item, index) => (
              <motion.li
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <span className="text-secondary leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}

function WhatIsSection({ content }: { content: InjuryTypeContent }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-12 sm:py-16 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-50">
              <File06 className="w-5 h-5 text-brand-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
              {content.whatIs.title}
            </h2>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-lg text-tertiary leading-relaxed">
            {content.whatIs.content}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function KeyTermsSection({ content }: { content: InjuryTypeContent }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  if (!content.keyTerms) return null;

  return (
    <section ref={ref} className="py-12 sm:py-16 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-50">
              <Scale01 className="w-5 h-5 text-brand-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
              {content.keyTerms.title}
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid gap-4 sm:grid-cols-2">
            {content.keyTerms.terms.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-4 bg-primary rounded-xl border border-secondary"
              >
                <h3 className="font-semibold text-primary mb-1">{item.term}</h3>
                <p className="text-sm text-tertiary">{item.definition}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function HowItWorksSection({ content }: { content: InjuryTypeContent }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  if (!content.howItWorks) return null;

  return (
    <section ref={ref} className="py-12 sm:py-16 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-50">
              <Clock className="w-5 h-5 text-brand-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
              {content.howItWorks.title}
            </h2>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-lg text-tertiary mb-6">
            {content.howItWorks.intro}
          </motion.p>

          <motion.div variants={staggerContainer} className="space-y-4">
            {content.howItWorks.steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-4 p-4 bg-secondary rounded-xl"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-600 text-white font-bold text-sm flex-shrink-0">
                  {index + 1}
                </span>
                <span className="text-secondary leading-relaxed pt-1">{step}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p variants={fadeInUp} className="mt-6 text-tertiary italic">
            A personal injury lawyer can guide you through each step to protect your rights and maximize your recovery.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function InsuranceSection({ content }: { content: InjuryTypeContent }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  if (!content.insuranceConsiderations) return null;

  return (
    <section ref={ref} className="py-12 sm:py-16 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-50">
              <ShieldTick className="w-5 h-5 text-brand-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
              {content.insuranceConsiderations.title}
            </h2>
          </motion.div>

          <motion.ul variants={staggerContainer} className="space-y-3">
            {content.insuranceConsiderations.items.map((item, index) => (
              <motion.li
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-3 p-4 bg-primary rounded-xl border border-secondary"
              >
                <ShieldTick className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <span className="text-secondary leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}

function TimelineSection({ content }: { content: InjuryTypeContent }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  if (!content.timeline) return null;

  return (
    <section ref={ref} className="py-12 sm:py-16 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl"
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-50">
              <Clock className="w-5 h-5 text-brand-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary">
              {content.timeline.title}
            </h2>
          </motion.div>

          <motion.p variants={fadeInUp} className="text-lg text-tertiary leading-relaxed">
            {content.timeline.content}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl px-6 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-20 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
            >
              Ready to explore your legal options?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg text-gray-300 leading-relaxed"
            >
              Get a free case evaluation and connect with trusted personal injury lawyers who specialize in cases like yours.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                color="primary"
                size="xl"
                href="/survey"
                iconTrailing={ArrowRight}
                className="shadow-lg"
              >
                Check My Case Now
              </Button>
              <span className="text-gray-400 text-sm">Free • No obligation • 2 min</span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400"
            >
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-400" />
                Free case review
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-400" />
                Verified experts
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-400" />
                $800M+ recovered
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function RelatedInjuryTypes({ currentSlug }: { currentSlug: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const relatedTypes = INJURY_TYPES.filter((t) => t.slug !== currentSlug).slice(0, 4);

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl font-bold text-primary text-center mb-8"
          >
            Explore Other Injury Types
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {relatedTypes.map((type) => (
              <motion.div key={type.slug} variants={fadeInUp}>
                <Link
                  href={`/injury-types/${type.slug}`}
                  className="group block p-5 bg-secondary rounded-xl border border-secondary hover:border-brand-300 hover:shadow-lg transition-all"
                >
                  <span className="text-2xl mb-3 block">{type.emoji}</span>
                  <h3 className="font-semibold text-primary group-hover:text-brand-primary transition-colors">
                    {type.label}
                  </h3>
                  <p className="text-sm text-tertiary mt-1 line-clamp-2">
                    {type.shortDescription}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center mt-8">
            <Link
              href="/injury-types"
              className="inline-flex items-center text-brand-primary font-medium hover:underline"
            >
              View all injury types
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function InjuryTypePageContent({ content, injuryType }: InjuryTypePageContentProps) {
  return (
    <main className="min-h-screen">
      <InjuryRightHeader />
      <article itemScope itemType="https://schema.org/Article">
        <HeroSection content={content} injuryType={injuryType} />
        <KeyTakeawaysSection content={content} />
        <WhatIsSection content={content} />

        <ContentSection
          title={content.financialProtection.title}
          intro={content.financialProtection.intro}
          items={content.financialProtection.items}
          icon={ShieldTick}
          variant="highlight"
        />

        <ContentSection
          title={content.whoNeedsHelp.title}
          intro={content.whoNeedsHelp.intro}
          items={content.whoNeedsHelp.items}
          icon={Users01}
        />

        <KeyTermsSection content={content} />
        <HowItWorksSection content={content} />

        <ContentSection
          title={content.commonInjuries.title}
          items={content.commonInjuries.items}
          icon={AlertCircle}
          variant="highlight"
        />

        <ContentSection
          title={content.compensation.title}
          intro={content.compensation.intro}
          items={content.compensation.items}
          icon={Scale01}
        />

        {content.challenges && (
          <ContentSection
            title={content.challenges.title}
            intro={content.challenges.intro}
            items={content.challenges.items}
            icon={AlertCircle}
            variant="warning"
          />
        )}

        {content.types && (
          <ContentSection
            title={content.types.title}
            items={content.types.items}
            icon={File06}
            variant="highlight"
          />
        )}

        <InsuranceSection content={content} />

        <ContentSection
          title={content.whyLawyerHelps.title}
          intro={content.whyLawyerHelps.intro}
          items={content.whyLawyerHelps.items}
          icon={Scale01}
        />

        <TimelineSection content={content} />
        <CTASection />
        <RelatedInjuryTypes currentSlug={content.slug} />
      </article>
      <Footer />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: content.title,
            description: content.metaDescription,
            url: `https://injuryright.com/injury-types/${content.slug}`,
            author: {
              "@type": "Organization",
              name: "InjuryRight",
              url: "https://injuryright.com",
            },
            publisher: {
              "@type": "Organization",
              name: "InjuryRight",
              url: "https://injuryright.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://injuryright.com/injury-types/${content.slug}`,
            },
            about: {
              "@type": "Thing",
              name: content.title,
              description: content.heroDescription,
            },
          }),
        }}
      />

      {/* FAQ Schema for key takeaways */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: content.whatIs.title,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: content.whatIs.content,
                },
              },
              {
                "@type": "Question",
                name: content.whyLawyerHelps.title,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `${content.whyLawyerHelps.intro} ${content.whyLawyerHelps.items.join(". ")}.`,
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
