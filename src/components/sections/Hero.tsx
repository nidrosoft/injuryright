"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/base/buttons/button";
import { CheckCircle, Star01, ArrowRight } from "@untitledui/icons";

const valueBadges = [
  "Free case review",
  "No obligation",
  "Simple, guided process",
  "Trusted legal professionals",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-brand-primary_alt/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Trust Badge */}
          <motion.div variants={fadeInUp} className="mb-6 sm:mb-8">
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 px-4 py-2.5 sm:py-2 bg-primary rounded-2xl sm:rounded-full shadow-md ring-1 ring-secondary_alt">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star01
                      key={i}
                      className={`size-4 stroke-[2px] ${i < Math.floor(SITE_CONFIG.trustpilotRating) ? "text-warning-500 fill-warning-500" : "text-tertiary"}`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-secondary">
                  {SITE_CONFIG.trustpilotRating} on Trustpilot
                </span>
              </div>
              <span className="hidden sm:inline text-quaternary">•</span>
              <span className="text-xs sm:text-sm text-tertiary">
                Trusted by {SITE_CONFIG.totalPeopleHelped} people nationwide
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-tight tracking-tight"
          >
            Injured? Get clarity on your{" "}
            <span className="text-brand-primary">
              legal options.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-tertiary max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
          >
            Understand what to do next after an accident and connect with trusted personal injury professionals in minutes at no cost to you.
          </motion.p>

          {/* Value Badges */}
          <motion.div
            variants={fadeInUp}
            className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-3 px-2 sm:px-0"
          >
            {valueBadges.map((badge) => (
              <div
                key={badge}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/80 backdrop-blur-sm rounded-full ring-1 ring-secondary_alt shadow-xs"
              >
                <CheckCircle className="size-4 sm:size-5 stroke-[2px] text-fg-brand-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-secondary">{badge}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={fadeInUp} className="mt-8 sm:mt-10 flex flex-col items-center gap-3 sm:gap-4 px-4 sm:px-0">
            <Button 
              color="primary" 
              size="xl" 
              href="/survey"
              iconTrailing={ArrowRight}
              className="!px-6 sm:!px-8 !py-3.5 sm:!py-4 !text-sm sm:!text-md shadow-lg w-full sm:w-auto justify-center"
            >
              Check My Case
            </Button>
            <p className="text-xs sm:text-sm text-tertiary">
              Free • No obligation • Takes 2 minutes
            </p>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4 sm:px-0"
        >
          {[
            { value: "$800M+", label: "Recovered for clients" },
            { value: "3,000+", label: "People helped" },
            { value: "4.8★", label: "Trustpilot rating" },
            { value: "100%", label: "Free unless you win" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-primary">
                {stat.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-tertiary">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-secondary flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-quaternary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
