"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { InjuryRightHeader } from "@/components/layout/InjuryRightHeader";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/base/buttons/button";
import { INJURY_TYPES } from "@/lib/constants";
import {
  ArrowRight,
  AlertCircle,
  Home02,
  Users01,
  Briefcase02,
  Heart,
  Activity,
  Target04,
  Zap,
  ShieldTick,
  HelpCircle,
  Truck02,
  Speedometer02,
  AlertTriangle,
  Building07,
  Scale01,
} from "@untitledui/icons";

const injuryTypeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "car-accident": Speedometer02,
  "truck-accident": Truck02,
  "slip-and-fall": Home02,
  "motorcycle-accident": Zap,
  "pedestrian-accident": Users01,
  "rideshare-accident": Speedometer02,
  "bicycle-accident": Activity,
  "catastrophic-injury": AlertTriangle,
  "wrongful-death": Heart,
  "dog-bite": ShieldTick,
  "workplace-injury": Briefcase02,
  "medical-malpractice": Activity,
  "personal-injury": Target04,
};

const injuryTypeColors: Record<string, { bg: string; border: string; icon: string; hover: string }> = {
  "car-accident": {
    bg: "bg-blue-50",
    border: "border-blue-200",
    icon: "text-blue-600",
    hover: "hover:border-blue-400 hover:shadow-blue-100",
  },
  "truck-accident": {
    bg: "bg-orange-50",
    border: "border-orange-200",
    icon: "text-orange-600",
    hover: "hover:border-orange-400 hover:shadow-orange-100",
  },
  "slip-and-fall": {
    bg: "bg-amber-50",
    border: "border-amber-200",
    icon: "text-amber-600",
    hover: "hover:border-amber-400 hover:shadow-amber-100",
  },
  "motorcycle-accident": {
    bg: "bg-red-50",
    border: "border-red-200",
    icon: "text-red-600",
    hover: "hover:border-red-400 hover:shadow-red-100",
  },
  "pedestrian-accident": {
    bg: "bg-purple-50",
    border: "border-purple-200",
    icon: "text-purple-600",
    hover: "hover:border-purple-400 hover:shadow-purple-100",
  },
  "rideshare-accident": {
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    icon: "text-indigo-600",
    hover: "hover:border-indigo-400 hover:shadow-indigo-100",
  },
  "bicycle-accident": {
    bg: "bg-green-50",
    border: "border-green-200",
    icon: "text-green-600",
    hover: "hover:border-green-400 hover:shadow-green-100",
  },
  "catastrophic-injury": {
    bg: "bg-rose-50",
    border: "border-rose-200",
    icon: "text-rose-600",
    hover: "hover:border-rose-400 hover:shadow-rose-100",
  },
  "wrongful-death": {
    bg: "bg-slate-50",
    border: "border-slate-200",
    icon: "text-slate-600",
    hover: "hover:border-slate-400 hover:shadow-slate-100",
  },
  "dog-bite": {
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    icon: "text-yellow-600",
    hover: "hover:border-yellow-400 hover:shadow-yellow-100",
  },
  "workplace-injury": {
    bg: "bg-cyan-50",
    border: "border-cyan-200",
    icon: "text-cyan-600",
    hover: "hover:border-cyan-400 hover:shadow-cyan-100",
  },
  "medical-malpractice": {
    bg: "bg-pink-50",
    border: "border-pink-200",
    icon: "text-pink-600",
    hover: "hover:border-pink-400 hover:shadow-pink-100",
  },
  "personal-injury": {
    bg: "bg-teal-50",
    border: "border-teal-200",
    icon: "text-teal-600",
    hover: "hover:border-teal-400 hover:shadow-teal-100",
  },
};

function HeroSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 lg:pt-44 lg:pb-20 bg-gradient-to-br from-primary via-primary to-brand-primary_alt/10 overflow-hidden"
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
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-brand-50 text-brand-700">
              <HelpCircle className="w-4 h-4 mr-1.5" />
              Injury Types
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight"
          >
            Find the right lawyer for{" "}
            <span className="text-brand-primary">your injury</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg sm:text-xl text-tertiary max-w-2xl mx-auto leading-relaxed"
          >
            Every accident is different. Explore the types of injuries we cover and connect 
            with lawyers who specialize in cases like yours.
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
            <span className="text-sm text-tertiary">Free • No obligation • 2 minutes</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function InjuryTypesGrid() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary"
          >
            Types of injuries we cover
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-tertiary"
          >
            Click on any injury type to learn more and find specialized legal help.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6"
        >
          {INJURY_TYPES.map((injury) => {
            const Icon = injuryTypeIcons[injury.slug] || HelpCircle;
            const colors = injuryTypeColors[injury.slug] || {
              bg: "bg-gray-50",
              border: "border-gray-200",
              icon: "text-gray-600",
              hover: "hover:border-gray-400",
            };

            return (
              <motion.div key={injury.slug} variants={fadeInUp}>
                <Link
                  href={`/injury-types/${injury.slug}`}
                  className={`group block h-full bg-primary rounded-2xl border-2 ${colors.border} ${colors.hover} p-6 transition-all duration-300 hover:shadow-xl`}
                >
                  {/* Icon */}
                  <div
                    className={`flex items-center justify-center w-14 h-14 rounded-xl ${colors.bg} mb-5 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className={`w-7 h-7 ${colors.icon}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-brand-primary transition-colors">
                    {injury.label}
                  </h3>
                  <p className="text-sm text-tertiary leading-relaxed mb-4">
                    {injury.description}
                  </p>

                  {/* Learn More Link */}
                  <span className="inline-flex items-center text-sm font-medium text-brand-primary group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function NotSureSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative bg-gradient-to-br from-[#055148] via-[#03695D] to-[#047B6D] rounded-3xl px-6 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-20 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Not sure which category fits your case?
              </h2>
              <p className="mt-4 text-lg text-white/80 leading-relaxed">
                Don't worry — many accidents don't fit neatly into one category. Our quick 
                assessment will help identify your situation and match you with the right 
                legal expert.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Takes less than 2 minutes",
                  "100% free and confidential",
                  "No obligation to proceed",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/90">
                    <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-white/20">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center lg:items-end">
              <Button
                color="secondary"
                size="xl"
                href="/survey"
                iconTrailing={ArrowRight}
                className="shadow-lg bg-white text-brand-primary hover:bg-gray-50"
              >
                Check My Case Now
              </Button>
              <p className="mt-4 text-sm text-white/60">
                Join 3,000+ people we've helped
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { value: "$800M+", label: "Recovered for clients" },
    { value: "3,000+", label: "People helped nationwide" },
    { value: "13", label: "Injury types covered" },
    { value: "100%", label: "Free unless you win" },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center p-6 bg-primary rounded-2xl border border-secondary"
            >
              <div className="text-3xl sm:text-4xl font-bold text-brand-primary">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-tertiary">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function InjuryTypesPageContent() {
  return (
    <main className="min-h-screen">
      <InjuryRightHeader />
      <article>
        <HeroSection />
        <InjuryTypesGrid />
        <NotSureSection />
        <StatsSection />
      </article>
      <Footer />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Personal Injury Types",
            description:
              "Explore all personal injury types covered by InjuryRight and find specialized lawyers for your case.",
            url: "https://injuryright.com/injury-types",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: INJURY_TYPES.map((injury, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: injury.label,
                description: injury.description,
                url: `https://injuryright.com/injury-types/${injury.slug}`,
              })),
            },
            publisher: {
              "@type": "Organization",
              name: "InjuryRight",
              url: "https://injuryright.com",
            },
          }),
        }}
      />
    </main>
  );
}
