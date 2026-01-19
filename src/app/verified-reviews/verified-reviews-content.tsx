"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { InjuryRightHeader } from "@/components/layout/InjuryRightHeader";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";
import {
  CheckCircle,
  ArrowRight,
  ShieldTick,
  MessageTextCircle02,
  Edit05,
  Star01,
  Users01,
  CheckVerified01,
  FileCheck02,
  AlertCircle,
} from "@untitledui/icons";

const valueProps = [
  {
    icon: CheckVerified01,
    title: "Verified and Trustworthy",
    description:
      "Every review comes from a real client who worked with the lawyer. No fake ratings, no bias. Just honest experiences you can trust.",
    color: "text-success-600",
    bgColor: "bg-success-50",
    borderColor: "border-success-200",
  },
  {
    icon: MessageTextCircle02,
    title: "Informative and Helpful",
    description:
      "Reviews include insights about communication, responsiveness, and results, helping you understand how each lawyer handles cases like yours.",
    color: "text-brand-600",
    bgColor: "bg-brand-50",
    borderColor: "border-brand-200",
  },
  {
    icon: Edit05,
    title: "Guidance for Writing Reviews",
    description:
      "Sharing your experience can help others find the right legal support. We make it easy to leave reviews that are concise, clear, and meaningful.",
    color: "text-warning-600",
    bgColor: "bg-warning-50",
    borderColor: "border-warning-200",
  },
];

const faqData = [
  {
    question: "How are InjuryRight reviews different?",
    answer: `All reviews on InjuryRight come from verified clients who worked with the lawyer on an actual case. We display two types of feedback: InjuryRight Client Reviews and Partner Reviews. Our goal is to provide reviews that are accurate, trustworthy, and representative.

Two things set InjuryRight reviews apart from others:

**1. Our reviews come from real clients**
On many platforms, reviews can be written by anyone — even people who never worked with the lawyer, or sometimes the lawyers themselves. On InjuryRight, every review is submitted by a verified client who actually interacted with the attorney about their case.

**2. We show a representative sample of feedback**
We ask clients for feedback after every case, which ensures we capture a wide range of experiences — not just the extremely positive or negative ones. This gives a balanced, accurate picture of how each lawyer handles cases like yours.`,
  },
  {
    question: "What is an InjuryRight Client Review?",
    answer:
      "After your case has begun, we ask clients for feedback about their experience with their lawyer. Following our moderation process, these reviews are published to help other accident victims find the legal help they need. InjuryRight Client Reviews are shown alongside Partner Reviews, which are collected by independent survey providers specializing in legal client feedback.",
  },
  {
    question: "What is a Partner Review?",
    answer:
      "To provide even more representative feedback, we include Partner Reviews for some lawyers. These are collected by independent third-party survey providers who ensure reviews come only from real clients. Partner Reviews are clearly marked and are moderated according to InjuryRight's review guidelines.",
  },
  {
    question: "How do I leave a review for my lawyer?",
    answer:
      'After your case begins, you\'ll receive an email asking for feedback. Follow the link to leave your review. You can also sign into your InjuryRight account at any time and click "Leave Feedback" for any lawyer you worked with. Reviews can be submitted up to 120 days after your case starts.',
  },
  {
    question: "Does InjuryRight only post positive reviews?",
    answer:
      "Absolutely not. We publish positive, negative, and neutral reviews to give a balanced, trustworthy view of a lawyer's work. You can post reviews anonymously. Lawyers are prohibited from influencing reviews or retaliating against clients who post critical feedback. If you encounter any issues, please contact us.",
  },
  {
    question: "Does InjuryRight moderate reviews?",
    answer:
      "Yes. Every review is examined by our moderation team to ensure compliance with our guidelines and community standards. This applies to both InjuryRight Client Reviews and Partner Reviews.",
  },
  {
    question: "Are there instances when a review may not be posted?",
    answer: `We aim to publish any review that meets our guidelines. To give your review the best chance of being posted, avoid:

• **Profanity:** Offensive or vulgar language will not be published.
• **Personal information:** Don't include phone numbers, emails, or other identifying details.
• **Pricing specifics:** You may share your opinion on fairness of fees, but avoid details about insurance or settlement amounts unless it's general.
• **Claims about legal accuracy:** Focus on your experience, not whether the lawyer's strategy was "right" or "wrong."
• **Promotional content:** Reviews should relate only to the client's experience with the lawyer.`,
  },
  {
    question: "Does InjuryRight ever remove published reviews?",
    answer:
      "If you believe a review violates our guidelines, you can report it with evidence. We may remove reviews that clearly violate our standards. However, differing opinions or negative experiences that comply with our guidelines are not removed, as we aim to maintain a balanced, representative review system.",
  },
  {
    question: "Why does InjuryRight moderate reviews so carefully?",
    answer:
      "We want every accident victim to have access to trustworthy and reliable information. Careful moderation ensures reviews reflect real client experiences, helping you make informed decisions while maintaining fairness for lawyers.",
  },
  {
    question: "I submitted a review. Why hasn't it been posted yet?",
    answer:
      "Each review is reviewed by a real moderator, so it can take a few days. Some lawyers also choose not to display their reviews publicly. Don't let this stop you from leaving feedback — we read every review and value your experience.",
  },
  {
    question: "How can I leave a great review?",
    answer: `Here are some tips for writing helpful reviews:

• **Keep it relevant:** Focus on information future clients would find helpful.
• **Answer key questions:** Would you hire this lawyer again? This helps others gauge overall satisfaction.
• **Be concise:** A paragraph or two is enough. Make it easy to read.
• **Be specific:** Explain why you feel the lawyer handled your case well or poorly.
• **Include useful details:** Location, responsiveness, communication, or accessibility can help others.
• **Be authentic:** Write your own review — don't rely on AI or let lawyers dictate your words.

Your review helps create a better experience for accident victims nationwide. Thank you for sharing your insight!`,
  },
];

function HeroSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-24 bg-gradient-to-br from-primary via-primary to-brand-primary_alt/10 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-brand-50 text-brand-700">
              <ShieldTick className="w-4 h-4 mr-1.5" />
              Verified Reviews
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight"
          >
            How reviews work on{" "}
            <span className="text-brand-primary">InjuryRight.com</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg sm:text-xl text-tertiary max-w-3xl mx-auto leading-relaxed"
          >
            Reviews on InjuryRight are different. Here's why.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function IntroSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="prose prose-lg mx-auto text-tertiary"
          >
            <p className="text-lg sm:text-xl leading-relaxed">
              Legal reviews are a crucial part of your accident recovery process, which is why 
              we take them seriously. We're committed to showing you feedback from verified 
              clients that is both honest and helpful.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed mt-4">
              But what makes InjuryRight reviews better than other sites? And how can you write 
              meaningful reviews that guide other accident victims? Read on to find out!
            </p>
          </motion.div>
        </motion.div>

        {/* Value Props Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {valueProps.map((prop) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={prop.title}
                variants={fadeInUp}
                className={cx(
                  "relative p-6 sm:p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl",
                  prop.bgColor,
                  prop.borderColor
                )}
              >
                <div
                  className={cx(
                    "flex items-center justify-center w-14 h-14 rounded-xl mb-5",
                    prop.bgColor
                  )}
                >
                  <Icon className={cx("w-8 h-8", prop.color)} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {prop.title}
                </h3>
                <p className="text-tertiary leading-relaxed">
                  {prop.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const steps = [
    {
      number: "01",
      title: "Complete Your Case",
      description:
        "After your case begins with a lawyer through InjuryRight, you become eligible to leave a review.",
      icon: FileCheck02,
    },
    {
      number: "02",
      title: "Receive Feedback Request",
      description:
        "We'll send you an email invitation to share your experience. You can also leave feedback through your account.",
      icon: MessageTextCircle02,
    },
    {
      number: "03",
      title: "Share Your Experience",
      description:
        "Write an honest review about your lawyer's communication, responsiveness, and how they handled your case.",
      icon: Edit05,
    },
    {
      number: "04",
      title: "Help Others Decide",
      description:
        "Your verified review helps other accident victims find the right legal representation for their needs.",
      icon: Users01,
    },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-50 text-brand-700">
              The Process
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-primary"
          >
            How the review process works
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-tertiary"
          >
            Our verification process ensures every review comes from a real client experience.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="relative bg-primary rounded-2xl p-6 border border-secondary hover:shadow-lg hover:border-brand-300 transition-all duration-300"
              >
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-brand-200" />
                )}
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-brand-200">
                    {step.number}
                  </span>
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-50">
                    <Icon className="w-5 h-5 text-brand-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-tertiary leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openQuestions, setOpenQuestions] = useState<Set<number>>(new Set([0]));
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleToggle = (index: number) => {
    const newSet = new Set(openQuestions);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setOpenQuestions(newSet);
  };

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-50 text-brand-700">
              FAQ
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-primary"
          >
            Frequently asked questions
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-tertiary"
          >
            Everything you need to know about reviews on InjuryRight.
          </motion.p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col gap-4">
            {faqData.map((faq, index) => (
              <div
                key={faq.question}
                className={cx(
                  "bg-secondary rounded-2xl border border-secondary overflow-hidden transition-all duration-300",
                  openQuestions.has(index) && "border-brand-200 shadow-md"
                )}
              >
                <button
                  onClick={() => handleToggle(index)}
                  className="flex w-full items-start justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                >
                  <span className="text-md font-semibold text-primary pr-4">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 flex size-6 items-center justify-center rounded-full bg-brand-50 text-brand-600"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={cx(
                        "transition-transform duration-200",
                        openQuestions.has(index) && "rotate-45"
                      )}
                    >
                      <line x1="7" y1="1" x2="7" y2="13" />
                      <line x1="1" y1="7" x2="13" y2="7" />
                    </svg>
                  </span>
                </button>

                <motion.div
                  className="overflow-hidden"
                  initial={false}
                  animate={{
                    height: openQuestions.has(index) ? "auto" : 0,
                    opacity: openQuestions.has(index) ? 1 : 0,
                  }}
                  transition={{
                    type: "spring",
                    damping: 24,
                    stiffness: 240,
                    bounce: 0.4,
                  }}
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                    <div className="prose prose-sm max-w-none text-tertiary leading-relaxed whitespace-pre-line">
                      {faq.answer.split("\n").map((paragraph, i) => {
                        if (paragraph.startsWith("**") && paragraph.includes("**")) {
                          const parts = paragraph.split("**");
                          return (
                            <p key={i} className="mb-2">
                              {parts.map((part, j) =>
                                j % 2 === 1 ? (
                                  <strong key={j} className="text-secondary font-semibold">
                                    {part}
                                  </strong>
                                ) : (
                                  part
                                )
                              )}
                            </p>
                          );
                        }
                        if (paragraph.startsWith("•")) {
                          return (
                            <p key={i} className="mb-1 pl-2">
                              {paragraph}
                            </p>
                          );
                        }
                        return paragraph.trim() ? (
                          <p key={i} className="mb-3">
                            {paragraph}
                          </p>
                        ) : null;
                      })}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const trustPoints = [
    {
      icon: CheckVerified01,
      title: "100% Verified",
      description: "Every reviewer is a real client",
    },
    {
      icon: ShieldTick,
      title: "Moderated",
      description: "Human review of all feedback",
    },
    {
      icon: Star01,
      title: "Balanced",
      description: "Positive, negative, and neutral",
    },
    {
      icon: Users01,
      title: "Anonymous Option",
      description: "Share freely without fear",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#055148] via-[#03695D] to-[#047B6D]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
          >
            Why you can trust InjuryRight reviews
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-white/80"
          >
            Our commitment to transparency and authenticity sets us apart.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/20 text-center"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {point.title}
                </h3>
                <p className="text-sm text-white/70">{point.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="bg-primary rounded-3xl p-8 sm:p-12 lg:p-16 text-center border border-secondary shadow-xl"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-50 mx-auto mb-6"
          >
            <MessageTextCircle02 className="w-8 h-8 text-brand-600" />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl font-bold text-primary"
          >
            Ready to find a trusted lawyer?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-tertiary max-w-2xl mx-auto"
          >
            Browse verified reviews from real clients and connect with personal injury 
            professionals who are right for your case.
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
              Check My Case
            </Button>
            <span className="text-sm text-tertiary">
              Free • No obligation • 2 minutes
            </span>
          </motion.div>
        </motion.div>

        {/* Contact Support */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-8 text-center"
        >
          <p className="text-tertiary">
            Have questions about reviews?{" "}
            <a
              href="mailto:support@injuryright.com"
              className="text-brand-primary font-medium hover:underline"
            >
              Contact our team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function VerifiedReviewsPageContent() {
  return (
    <main className="min-h-screen">
      <InjuryRightHeader />
      <article itemScope itemType="https://schema.org/FAQPage">
        <HeroSection />
        <IntroSection />
        <HowItWorksSection />
        <FAQSection />
        <TrustSection />
        <CTASection />
      </article>
      <Footer />

      {/* JSON-LD Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer.replace(/\*\*/g, "").replace(/•/g, "-"),
              },
            })),
          }),
        }}
      />

      {/* Additional Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "How Reviews Work on InjuryRight",
            description:
              "Learn how InjuryRight reviews work. Every review comes from verified clients who actually worked with the lawyer.",
            publisher: {
              "@type": "Organization",
              name: "InjuryRight",
              url: "https://injuryright.com",
            },
            mainContentOfPage: {
              "@type": "WebPageElement",
              cssSelector: "article",
            },
          }),
        }}
      />
    </main>
  );
}
