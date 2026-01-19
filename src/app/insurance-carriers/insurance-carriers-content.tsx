"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { InjuryRightHeader } from "@/components/layout/InjuryRightHeader";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";
import {
  ArrowRight,
  CheckCircle,
  ShieldTick,
  SearchLg,
  Building07,
  Heart,
  Briefcase02,
} from "@untitledui/icons";

const insuranceCategories = [
  {
    id: "auto",
    name: "Auto Insurance Providers",
    icon: ShieldTick,
    description: "Major auto insurance carriers for car, truck, and motorcycle accident claims.",
    carriers: [
      "Allstate",
      "GEICO",
      "State Farm",
      "Progressive",
      "Farmers Insurance",
      "Nationwide",
      "Liberty Mutual",
      "USAA",
      "Travelers",
      "American Family Insurance",
      "The Hartford",
      "Amica Mutual",
      "Erie Insurance",
      "Auto-Owners Insurance",
      "MetLife Auto & Home",
      "Safeco Insurance",
      "Chubb",
      "AAA Insurance",
      "MAPFRE Insurance",
      "Mercury Insurance",
      "Infinity Insurance",
      "Pekin Insurance",
      "Sentry Insurance",
      "Hanover Insurance",
      "Zurich North America",
      "Grange Insurance",
      "Selective Insurance",
    ],
  },
  {
    id: "workers-comp",
    name: "Workers' Compensation & Employer Liability",
    icon: Briefcase02,
    description: "Workers' compensation insurance providers for workplace injury claims.",
    carriers: [
      "State Workers' Compensation Funds (by state)",
      "Travelers Workers' Compensation",
      "Liberty Mutual Workers' Comp",
      "The Hartford Workers' Compensation",
      "CNA Insurance Workers' Comp",
      "Zurich Workers' Compensation",
      "AmTrust North America",
      "FM Global",
      "Nationwide Workers' Comp",
    ],
  },
  {
    id: "health",
    name: "Health Insurance Providers",
    icon: Heart,
    description: "Health insurance carriers for medical lien cases and injury-related medical coverage.",
    carriers: [
      "Aetna",
      "Aetna Better Health",
      "Anthem Blue Cross / Blue Shield",
      "Blue Cross Blue Shield (all states)",
      "Cigna",
      "Humana",
      "Kaiser Permanente",
      "UnitedHealthcare",
      "Molina Healthcare",
      "Centene",
      "WellCare Health Plans",
      "Health Net",
      "CareSource",
      "Medicaid (all states)",
      "Medicare",
      "CHAMPVA",
      "Tricare",
      "Workers' Compensation Medical Coverage",
    ],
  },
  {
    id: "liability",
    name: "Liability & Umbrella Insurance",
    icon: Building07,
    description: "Liability and umbrella insurance providers for premises and general liability claims.",
    carriers: [
      "Chubb",
      "Travelers",
      "The Hartford",
      "Liberty Mutual",
      "Nationwide",
      "Zurich North America",
      "Allstate",
      "State Farm",
    ],
  },
];

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
              <ShieldTick className="w-4 h-4 mr-1.5" />
              Insurance Carriers
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight"
          >
            Personal Injury{" "}
            <span className="text-brand-primary">Insurance Carriers</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg sm:text-xl text-tertiary max-w-2xl mx-auto leading-relaxed"
          >
            Find lawyers experienced with your insurance carrier. We work with 60+ major 
            insurance providers across auto, workers' compensation, health, and liability coverage.
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

function SearchSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [searchTerm, setSearchTerm] = useState("");

  const allCarriers = insuranceCategories.flatMap((cat) =>
    cat.carriers.map((carrier) => ({ carrier, category: cat.name }))
  );

  const filteredCarriers = searchTerm
    ? allCarriers.filter((item) =>
        item.carrier.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <section ref={ref} className="py-12 sm:py-16 bg-secondary border-b border-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="relative">
            <SearchLg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-quaternary" />
            <input
              type="text"
              placeholder="Search for your insurance carrier..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-secondary bg-primary text-primary placeholder:text-quaternary focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-lg"
            />
          </motion.div>

          {searchTerm && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 bg-primary rounded-xl border border-secondary shadow-lg max-h-64 overflow-y-auto"
            >
              {filteredCarriers.length > 0 ? (
                <ul className="divide-y divide-secondary">
                  {filteredCarriers.slice(0, 10).map((item, index) => (
                    <li key={index} className="p-4 hover:bg-secondary transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-primary">{item.carrier}</span>
                        <span className="text-sm text-tertiary">{item.category}</span>
                      </div>
                    </li>
                  ))}
                  {filteredCarriers.length > 10 && (
                    <li className="p-4 text-center text-sm text-tertiary">
                      +{filteredCarriers.length - 10} more results
                    </li>
                  )}
                </ul>
              ) : (
                <div className="p-4 text-center text-tertiary">
                  No carriers found matching "{searchTerm}"
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function CategorySection({ category, index }: { category: typeof insuranceCategories[0]; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const Icon = category.icon;
  const isEven = index % 2 === 0;

  return (
    <section
      ref={ref}
      className={cx("py-12 sm:py-16 lg:py-20", isEven ? "bg-primary" : "bg-secondary")}
      id={category.id}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50">
              <Icon className="w-6 h-6 text-brand-600" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                {category.name}
              </h2>
              <p className="text-tertiary mt-1">{category.description}</p>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
          >
            {category.carriers.map((carrier) => (
              <motion.div
                key={carrier}
                variants={fadeInUp}
                className={cx(
                  "group p-4 rounded-xl border transition-all duration-300 hover:shadow-md hover:border-brand-300 cursor-pointer",
                  isEven
                    ? "bg-secondary border-secondary"
                    : "bg-primary border-secondary"
                )}
              >
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-sm font-medium text-secondary group-hover:text-brand-primary transition-colors">
                    {carrier}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8 text-center">
            <p className="text-tertiary mb-4">
              Have a claim with {category.name.toLowerCase().replace(" & ", " or ")}?
            </p>
            <Button
              color="primary"
              size="lg"
              href="/survey"
              iconTrailing={ArrowRight}
            >
              Check My Case
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function QuickNavSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-8 bg-brand-600 sticky top-16 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {insuranceCategories.map((category) => {
            const Icon = category.icon;
            return (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors text-sm font-medium"
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.name.split(" ")[0]}</span>
                <span className="sm:hidden">{category.name.split(" ")[0]}</span>
              </a>
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
      title: "Find Your Insurance",
      description: "Search for your insurance carrier or browse by category above.",
    },
    {
      number: "02",
      title: "Check Your Case",
      description: "Complete our quick assessment to see if you have a valid claim.",
    },
    {
      number: "03",
      title: "Get Matched",
      description: "We connect you with lawyers experienced with your specific carrier.",
    },
    {
      number: "04",
      title: "Get Compensation",
      description: "Your lawyer handles the insurance company while you focus on recovery.",
    },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#055148] via-[#03695D] to-[#047B6D]">
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
            How we help with insurance claims
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-white/80"
          >
            Dealing with insurance companies can be overwhelming. We make it simple.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-white/30" />
              )}
              <span className="text-3xl font-bold text-white/30">{step.number}</span>
              <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { value: "60+", label: "Insurance carriers" },
    { value: "$800M+", label: "Recovered from insurers" },
    { value: "3,000+", label: "Claims handled" },
    { value: "98%", label: "Client satisfaction" },
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 bg-secondary">
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

function CTASection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-primary">
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
              Don't let insurance companies undervalue your claim
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg text-gray-300 leading-relaxed"
            >
              Insurance adjusters work for the insurance company, not for you. Get a lawyer 
              who will fight for the full compensation you deserve.
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
                No upfront costs
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-400" />
                Pay only if you win
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function InsuranceCarriersPageContent() {
  return (
    <main className="min-h-screen">
      <InjuryRightHeader />
      <article>
        <HeroSection />
        <SearchSection />
        <QuickNavSection />
        {insuranceCategories.map((category, index) => (
          <CategorySection key={category.id} category={category} index={index} />
        ))}
        <HowItWorksSection />
        <StatsSection />
        <CTASection />
      </article>
      <Footer />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Personal Injury Insurance Carriers",
            description:
              "Find personal injury lawyers experienced with your insurance carrier. 60+ major insurance providers across auto, workers' compensation, health, and liability coverage.",
            url: "https://injuryright.com/insurance-carriers",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: insuranceCategories.map((category, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: category.name,
                description: category.description,
                item: {
                  "@type": "ItemList",
                  name: category.name,
                  numberOfItems: category.carriers.length,
                  itemListElement: category.carriers.map((carrier, i) => ({
                    "@type": "ListItem",
                    position: i + 1,
                    name: carrier,
                  })),
                },
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
