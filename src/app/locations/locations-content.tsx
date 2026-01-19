"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { InjuryRightHeader } from "@/components/layout/InjuryRightHeader";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/base/buttons/button";
import {
  ArrowRight,
  MarkerPin01,
} from "@untitledui/icons";

const popularCities = [
  { name: "Atlanta", state: "GA" },
  { name: "Boston", state: "MA" },
  { name: "Chicago", state: "IL" },
  { name: "Dallas", state: "TX" },
  { name: "Denver", state: "CO" },
  { name: "Houston", state: "TX" },
  { name: "Las Vegas", state: "NV" },
  { name: "Los Angeles", state: "CA" },
  { name: "Miami", state: "FL" },
  { name: "New York", state: "NY" },
  { name: "Philadelphia", state: "PA" },
  { name: "Phoenix", state: "AZ" },
  { name: "San Antonio", state: "TX" },
  { name: "San Diego", state: "CA" },
  { name: "San Francisco", state: "CA" },
  { name: "San Jose", state: "CA" },
  { name: "Seattle", state: "WA" },
  { name: "Washington", state: "DC" },
];

const statesByRegion = {
  "Northeast": [
    "Connecticut", "Maine", "Massachusetts", "New Hampshire", "New Jersey",
    "New York", "Pennsylvania", "Rhode Island", "Vermont"
  ],
  "Southeast": [
    "Alabama", "Arkansas", "Florida", "Georgia", "Kentucky", "Louisiana",
    "Mississippi", "North Carolina", "South Carolina", "Tennessee", "Virginia", "West Virginia"
  ],
  "Midwest": [
    "Illinois", "Indiana", "Iowa", "Kansas", "Michigan", "Minnesota",
    "Missouri", "Nebraska", "North Dakota", "Ohio", "South Dakota", "Wisconsin"
  ],
  "Southwest": [
    "Arizona", "New Mexico", "Oklahoma", "Texas"
  ],
  "West": [
    "Alaska", "California", "Colorado", "Hawaii", "Idaho", "Montana",
    "Nevada", "Oregon", "Utah", "Washington", "Wyoming"
  ],
  "Other": [
    "District of Columbia"
  ]
};

function HeroSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 lg:pt-44 lg:pb-20 bg-gradient-to-br from-primary via-primary to-brand-primary_alt/10 overflow-hidden"
    >
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
              <MarkerPin01 className="w-4 h-4 mr-1.5" />
              Lawyers by Location
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight"
          >
            Find Lawyers{" "}
            <span className="text-brand-primary">Near You</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg sm:text-xl text-tertiary max-w-2xl mx-auto leading-relaxed"
          >
            Browse our nationwide network of verified personal injury attorneys. 
            Find local experts who understand your state's laws.
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

function PopularCitiesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl font-bold text-primary mb-8"
          >
            Browse by Popular Cities
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {popularCities.map((city) => (
              <motion.div key={city.name} variants={fadeInUp}>
                <Link
                  href="/survey"
                  className="block p-4 bg-primary rounded-xl border border-secondary hover:border-brand-300 hover:shadow-md transition-all text-center group"
                >
                  <MarkerPin01 className="w-5 h-5 text-brand-600 mx-auto mb-2" />
                  <span className="block font-medium text-brand-600 group-hover:text-brand-700">
                    {city.name}, {city.state}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function StatesByRegionSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl font-bold text-primary mb-8"
          >
            Browse by State
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {Object.entries(statesByRegion).filter(([region]) => region !== "Other").map(([region, states]) => (
              <motion.div
                key={region}
                variants={fadeInUp}
                className="bg-secondary rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-primary mb-4">{region}</h3>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {states.map((state) => (
                    <li key={state}>
                      <Link
                        href="/survey"
                        className="text-sm text-brand-600 hover:text-brand-700 hover:underline transition-colors"
                      >
                        {state}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* DC */}
          <motion.div variants={fadeInUp} className="mt-8">
            <div className="bg-secondary rounded-2xl p-6 max-w-xs">
              <h3 className="text-lg font-bold text-primary mb-4">District of Columbia</h3>
              <Link
                href="/survey"
                className="text-sm text-brand-600 hover:text-brand-700 hover:underline transition-colors"
              >
                Washington, D.C.
              </Link>
            </div>
          </motion.div>
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
          className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl px-6 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-20 overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
            >
              Ready to find a lawyer in your area?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg text-gray-300 leading-relaxed"
            >
              Take our free case evaluation and get matched with verified attorneys who 
              specialize in your type of case.
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function LocationsPageContent() {
  return (
    <main className="min-h-screen">
      <InjuryRightHeader />
      <article>
        <HeroSection />
        <PopularCitiesSection />
        <StatesByRegionSection />
        <CTASection />
      </article>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Find Personal Injury Lawyers by Location",
            description: "Browse personal injury lawyers by city or state across the United States.",
            url: "https://injuryright.com/locations",
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
