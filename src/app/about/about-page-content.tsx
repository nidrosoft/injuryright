"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import { InjuryRightHeader } from "@/components/layout/InjuryRightHeader";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/base/buttons/button";
import { 
  CheckCircle, 
  ArrowRight, 
  Users01, 
  ShieldTick, 
  Target01, 
  Heart,
  Scale01,
  Building07,
  Lightbulb01,
  Star01
} from "@untitledui/icons";

const missionPoints = [
  {
    icon: ShieldTick,
    title: "Verified and trusted",
    description: "Every lawyer in our network is pre-vetted and highly rated by real clients.",
  },
  {
    icon: Target01,
    title: "Specialized in their accident type",
    description: "Get matched with attorneys who have proven expertise in your specific case type.",
  },
  {
    icon: Building07,
    title: "Located nearby or available virtually",
    description: "Find local representation or connect with experts remotely — whatever works for you.",
  },
  {
    icon: Users01,
    title: "Able to guide them clearly through every step",
    description: "From initial consultation to settlement, you'll never feel lost in the process.",
  },
];

const stats = [
  { value: "$800M+", label: "Recovered for clients" },
  { value: "3,000+", label: "People helped nationwide" },
  { value: "4.8★", label: "Average Trustpilot rating" },
  { value: "100%", label: "Free unless you win" },
];

function HeroSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-28 bg-gradient-to-br from-primary via-primary to-brand-primary_alt/10 overflow-hidden"
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
              About InjuryRight
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight"
          >
            The legal system should work for{" "}
            <span className="text-brand-primary">accident victims</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg sm:text-xl text-tertiary max-w-3xl mx-auto leading-relaxed"
          >
            We're on a mission to give power back to people injured in accidents by providing 
            clear, transparent access to legal guidance and verified experts.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
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

function ProblemSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <motion.div variants={slideInLeft}>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-error-100 text-error-700">
              The Problem
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
              But it doesn't work that way
            </h2>
            <div className="mt-6 space-y-4 text-tertiary leading-relaxed">
              <p>
                After an accident, people are left navigating confusing legal options. They call 
                around for recommendations. They wait for responses. They try to figure out if a 
                lawyer is right for them, or if they'll be charged upfront.
              </p>
              <p>
                Meanwhile, injuries, bills, and stress keep piling up.
              </p>
              <p className="font-medium text-secondary">
                In any other industry, companies delivering such a poor experience would fail. 
                But in personal injury, accident victims often lack guidance and market power.
              </p>
            </div>
          </motion.div>

          <motion.div variants={slideInRight} className="relative">
            <div className="bg-primary rounded-3xl p-8 shadow-xl border border-secondary">
              <div className="space-y-6">
                {[
                  { label: "Confusing legal options", icon: "❓" },
                  { label: "Endless phone calls", icon: "📞" },
                  { label: "Long wait times", icon: "⏳" },
                  { label: "Unclear pricing", icon: "💰" },
                  { label: "Mounting stress", icon: "😰" },
                ].map((item, index) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 p-4 bg-error-50 rounded-xl border border-error-100"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-error-700 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-[#055148] via-[#03695D] to-[#047B6D]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <motion.div variants={slideInLeft} className="order-2 lg:order-1 relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                {[
                  { label: "Clear, transparent guidance", icon: "✨" },
                  { label: "Verified expert matching", icon: "🎯" },
                  { label: "Compare your options", icon: "⚖️" },
                  { label: "Choose who to work with", icon: "🤝" },
                  { label: "Get fair compensation", icon: "💪" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/20"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-white font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={slideInRight} className="order-1 lg:order-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white">
              Our Solution
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              We give power to accident victims
            </h2>
            <div className="mt-6 space-y-4 text-white/80 leading-relaxed">
              <p>
                By giving people clear, transparent access to legal guidance and verified experts, 
                we put control back in their hands.
              </p>
              <p>
                Victims can see which lawyers are best suited for their case, compare options, 
                and choose who to work with.
              </p>
              <p className="font-medium text-white">
                This makes the process fairer, faster, and more predictable — helping victims 
                get the compensation they deserve.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function MissionSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-28 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-50 text-brand-700">
              Our Mission
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-primary"
          >
            We believe accident victims{" "}
            <span className="text-brand-primary">deserve better</span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="mt-6 text-lg text-tertiary leading-relaxed">
            InjuryRight helps thousands of people every month connect with personal injury 
            lawyers who are right for them. Whether it's car accidents, slip & fall, workplace 
            injuries, or other types of claims, we help people find professionals who are:
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {missionPoints.map((point) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                variants={fadeInUp}
                className="group relative p-6 bg-primary rounded-2xl border border-secondary shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 group-hover:from-brand-600 group-hover:to-brand-500 transition-all duration-300">
                  <Icon className="w-7 h-7 text-brand-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-primary">{point.title}</h3>
                <p className="mt-2 text-sm text-tertiary leading-relaxed">{point.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function LawyersSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <motion.div variants={slideInLeft}>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-50 text-brand-700">
              For Lawyers
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
              And we help lawyers focus on{" "}
              <span className="text-brand-primary">what matters</span>
            </h2>
            <div className="mt-6 space-y-4 text-tertiary leading-relaxed">
              <p>
                Lawyers didn't study for years to spend their time sorting through unqualified 
                leads. InjuryRight helps attorneys reach the right clients efficiently — matching 
                them to people who truly need their expertise.
              </p>
              <p className="font-medium text-secondary">
                This means lawyers can focus on winning cases, and victims can focus on recovery.
              </p>
            </div>
            <div className="mt-8">
              <Button
                color="secondary"
                size="lg"
                href="/for-law-firms"
                iconTrailing={ArrowRight}
              >
                Learn More for Law Firms
              </Button>
            </div>
          </motion.div>

          <motion.div variants={slideInRight} className="relative">
            <div className="bg-primary rounded-3xl p-8 shadow-xl border border-secondary">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-500">
                  <Scale01 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">Better for Everyone</h3>
                  <p className="text-tertiary">A win-win approach</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary">Qualified leads, not random inquiries</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary">Clients matched to your expertise</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary">More time for casework, less for intake</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success-500 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary">Build your reputation with verified reviews</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function VisionSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-28 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-50 text-brand-700">
              Our Vision
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-primary"
          >
            We're building a home for{" "}
            <span className="text-brand-primary">accident victims</span>
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="mt-8 space-y-6 text-lg text-tertiary leading-relaxed text-left sm:text-center"
          >
            <p>
              A place where anyone injured in an accident can find the support and guidance they 
              need. A place where people can explore their options, understand potential 
              compensation, and connect with trusted experts — all without upfront costs.
            </p>
            <p>
              A place where victims have transparency, clarity, and control over the process.
            </p>
            <p className="font-semibold text-primary text-xl">
              We won't stop until every accident victim has the legal support experience they 
              expect and deserve.
            </p>
            <p className="text-brand-primary font-medium text-xl">
              And that's what we work on, every day.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center p-6 bg-secondary rounded-2xl"
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
    <section ref={ref} className="py-16 sm:py-20 lg:py-28 bg-secondary">
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
              Ready to get the help you deserve?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg text-gray-300 leading-relaxed"
            >
              Join thousands of Americans who have used InjuryRight to understand their legal 
              options and connect with trusted professionals.
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

export function AboutPageContent() {
  return (
    <main className="min-h-screen">
      <InjuryRightHeader />
      <article itemScope itemType="https://schema.org/AboutPage">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <MissionSection />
        <LawyersSection />
        <VisionSection />
        <CTASection />
      </article>
      <Footer />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "InjuryRight",
            url: "https://injuryright.com",
            logo: "https://injuryright.com/logo.png",
            description:
              "InjuryRight is a personal injury lawyer matching platform that helps accident victims connect with trusted, verified legal professionals. Free case review, no obligation.",
            foundingDate: "2024",
            sameAs: [
              "https://twitter.com/injuryright",
              "https://linkedin.com/company/injuryright",
              "https://facebook.com/injuryright",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              email: "support@injuryright.com",
              contactType: "customer service",
              availableLanguage: "English",
            },
            areaServed: {
              "@type": "Country",
              name: "United States",
            },
            knowsAbout: [
              "Personal Injury Law",
              "Car Accident Claims",
              "Truck Accident Claims",
              "Motorcycle Accident Claims",
              "Slip and Fall Injuries",
              "Workplace Injuries",
              "Medical Malpractice",
              "Wrongful Death Claims",
            ],
          }),
        }}
      />
    </main>
  );
}
