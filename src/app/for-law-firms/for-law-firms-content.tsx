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
  CheckCircle,
  Users01,
  Zap,
  BarChart07,
  Calendar,
  MessageChatCircle,
  Star01,
  Target04,
  Building07,
  Globe01,
  ShieldTick,
  TrendUp01,
  ClipboardCheck,
  Phone,
  Mail01,
} from "@untitledui/icons";

const features = [
  {
    icon: ClipboardCheck,
    title: "Client intake & pre-screening",
    description: "Automated qualification ensures you only speak with viable cases.",
  },
  {
    icon: Calendar,
    title: "Consultation scheduling",
    description: "Clients book directly into your calendar — no back-and-forth.",
  },
  {
    icon: Target04,
    title: "Case qualification",
    description: "AI-powered screening identifies high-value cases before intake.",
  },
  {
    icon: Star01,
    title: "Verified client reviews",
    description: "Build trust with authentic reviews from real clients.",
  },
  {
    icon: BarChart07,
    title: "Performance reporting",
    description: "Track ROI, conversion rates, and case volume in real-time.",
  },
];

const firmTypes = [
  {
    icon: Users01,
    title: "Solo PI Attorneys",
    description: "Compete with larger firms using enterprise-grade tools at an affordable price.",
  },
  {
    icon: Building07,
    title: "Multi-Office Firms",
    description: "Centralize intake and distribute cases across locations seamlessly.",
  },
  {
    icon: Globe01,
    title: "National Practices",
    description: "Scale your reach nationwide with our AI-powered client matching.",
  },
];

const stats = [
  { value: "3,000+", label: "Clients connected monthly" },
  { value: "$800M+", label: "Recovered for clients" },
  { value: "4.8★", label: "Average firm rating" },
  { value: "24/7", label: "AI intake availability" },
];

const benefits = [
  {
    title: "Increase Case Volume",
    description: "Receive a steady stream of pre-qualified personal injury leads directly to your firm.",
    icon: TrendUp01,
  },
  {
    title: "Save Time on Intake",
    description: "Our AI handles initial screening, qualification, and scheduling automatically.",
    icon: Zap,
  },
  {
    title: "Build Your Reputation",
    description: "Verified reviews from real clients help you stand out from competitors.",
    icon: Star01,
  },
  {
    title: "Track Performance",
    description: "Real-time analytics show exactly how your investment is performing.",
    icon: BarChart07,
  },
];

function HeroSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-brand-500/20 text-brand-300 border border-brand-500/30">
              <Building07 className="w-4 h-4 mr-1.5" />
              For Law Firms
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
          >
            Case growth you can{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-300">
              count on
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Reach more qualified injury clients, streamline intake, and gain clear visibility 
            into your firm's performance — all with one AI-powered legal directory.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              color="primary"
              size="xl"
              href="#get-started"
              iconTrailing={ArrowRight}
              className="shadow-lg shadow-brand-500/25"
            >
              Get Started
            </Button>
            <Button
              color="secondary"
              size="xl"
              href="#features"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              See How It Works
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-sm text-gray-400 mb-4">
              Trusted by leading personal injury law firms to consistently deliver case volume
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500">
              {["Morgan & Associates", "Smith Legal Group", "Johnson PI Law", "Davis Injury Firm"].map((firm) => (
                <span key={firm} className="text-sm font-medium text-gray-400">
                  {firm}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-12 sm:py-16 bg-brand-600">
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
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-white">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-brand-100">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FirmTypesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
              Powering Law Firms of All Sizes
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-primary"
          >
            From solo attorneys to national practices
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-tertiary"
          >
            Successful personal injury law firms of all sizes grow with InjuryRight.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {firmTypes.map((type) => {
            const Icon = type.icon;
            return (
              <motion.div
                key={type.title}
                variants={fadeInUp}
                className="group relative p-8 bg-secondary rounded-2xl border border-secondary hover:border-brand-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 group-hover:from-brand-600 group-hover:to-brand-500 transition-all duration-300 mb-6">
                  <Icon className="w-7 h-7 text-brand-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{type.title}</h3>
                <p className="text-tertiary leading-relaxed">{type.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ClientReachSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-50 text-brand-700">
              Client Reach Network
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
              InjuryRight Client Reach Network
            </h2>
            <p className="mt-4 text-lg text-tertiary leading-relaxed">
              Receive direct case inquiries from search, legal content hubs, referral partners, 
              and AI-driven discovery. Our multi-channel approach ensures a steady stream of 
              qualified leads to your firm.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Organic search traffic from injury-related queries",
                "Legal content hubs and educational resources",
                "Strategic referral partner network",
                "AI-driven client-lawyer matching",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative">
            <div className="bg-primary rounded-3xl p-8 shadow-xl border border-secondary">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand-600 to-brand-500">
                  <Globe01 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">Multi-Channel Reach</h3>
                  <p className="text-sm text-tertiary">Clients find you everywhere</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Search Traffic", value: "45%", color: "bg-blue-500" },
                  { label: "Content Hubs", value: "25%", color: "bg-brand-500" },
                  { label: "Referral Partners", value: "20%", color: "bg-purple-500" },
                  { label: "AI Discovery", value: "10%", color: "bg-orange-500" },
                ].map((channel) => (
                  <div key={channel.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-secondary">{channel.label}</span>
                      <span className="text-tertiary">{channel.value}</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full ${channel.color} rounded-full`}
                        style={{ width: channel.value }}
                      />
                    </div>
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

function AIIntakeSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#055148] via-[#03695D] to-[#047B6D]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <motion.div variants={fadeInUp} className="order-2 lg:order-1 relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
                  <MessageChatCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">AI Intake Assistant</p>
                  <p className="text-white/60 text-sm">Online now</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 rounded-2xl rounded-tl-sm p-4">
                  <p className="text-white/90 text-sm">
                    Hi! I'm here to help you get started. Can you tell me about your accident?
                  </p>
                </div>
                <div className="bg-white/20 rounded-2xl rounded-tr-sm p-4 ml-8">
                  <p className="text-white text-sm">
                    I was in a car accident last week. The other driver ran a red light.
                  </p>
                </div>
                <div className="bg-white/10 rounded-2xl rounded-tl-sm p-4">
                  <p className="text-white/90 text-sm">
                    I'm sorry to hear that. Were you injured? I can help connect you with a qualified attorney.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-white/60 text-sm">
                <Zap className="w-4 h-4" />
                <span>Responds instantly, 24/7</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="order-1 lg:order-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white">
              AI-Powered Intake
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              AI Client Intake & Case Qualification
            </h2>
            <p className="mt-4 text-lg text-white/80 leading-relaxed">
              Never miss a case. Our AI intake assistant answers inquiries, qualifies injury 
              claims, and books consultations automatically — 24 hours a day, 7 days a week.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Instant response to client inquiries",
                "Intelligent case qualification questions",
                "Automatic consultation scheduling",
                "Seamless handoff to your team",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="features" ref={ref} className="py-16 sm:py-20 lg:py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-16"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-50 text-brand-700">
              Platform Features
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-primary"
          >
            Essential features for high-converting law firm experiences
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-tertiary"
          >
            Everything you need to attract, qualify, and convert personal injury clients.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="group p-6 bg-secondary rounded-2xl border border-secondary hover:border-brand-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50 group-hover:bg-brand-100 transition-colors mb-4">
                  <Icon className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-tertiary leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function BenefitsSection() {
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
            Why law firms choose InjuryRight
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                className="flex gap-5 p-6 bg-primary rounded-2xl border border-secondary"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50">
                  <Icon className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-tertiary leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={fadeInUp}
            className="bg-secondary rounded-3xl p-8 sm:p-12 border border-secondary"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star01 key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <blockquote className="text-xl sm:text-2xl text-primary font-medium leading-relaxed">
              "InjuryRight has transformed how we acquire clients. The AI intake system handles 
              initial screening 24/7, and we've seen a 40% increase in qualified consultations. 
              It's like having an extra team member who never sleeps."
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
                <span className="text-brand-600 font-bold">JM</span>
              </div>
              <div>
                <p className="font-semibold text-primary">James Mitchell</p>
                <p className="text-sm text-tertiary">Managing Partner, Mitchell & Associates</p>
              </div>
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
    <section id="get-started" ref={ref} className="py-16 sm:py-20 lg:py-24 bg-secondary">
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

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Ready to grow your practice?
              </h2>
              <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                Join leading personal injury law firms who trust InjuryRight to deliver 
                qualified clients and streamline their intake process.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "No long-term contracts required",
                  "Pay only for qualified leads",
                  "Dedicated account manager",
                  "Full performance analytics",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-brand-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-6">Get in touch</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="firm-name" className="block text-sm font-medium text-white/80 mb-1.5">
                    Firm Name
                  </label>
                  <input
                    type="text"
                    id="firm-name"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    placeholder="Your law firm name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-white/80 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    placeholder="you@lawfirm.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <Button
                  type="submit"
                  color="primary"
                  size="lg"
                  className="w-full justify-center mt-2"
                >
                  Request a Demo
                </Button>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-tertiary"
        >
          <a href="mailto:partners@injuryright.com" className="flex items-center gap-2 hover:text-brand-primary transition-colors">
            <Mail01 className="w-5 h-5" />
            partners@injuryright.com
          </a>
          <a href="tel:+18005550199" className="flex items-center gap-2 hover:text-brand-primary transition-colors">
            <Phone className="w-5 h-5" />
            (800) 555-0199
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function ForLawFirmsPageContent() {
  return (
    <main className="min-h-screen">
      <InjuryRightHeader />
      <article>
        <HeroSection />
        <StatsSection />
        <FirmTypesSection />
        <ClientReachSection />
        <AIIntakeSection />
        <FeaturesSection />
        <BenefitsSection />
        <TestimonialSection />
        <CTASection />
      </article>
      <Footer />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "For Law Firms | InjuryRight",
            description:
              "AI-powered legal directory helping personal injury law firms grow their practice with qualified leads and streamlined intake.",
            url: "https://injuryright.com/for-law-firms",
            mainEntity: {
              "@type": "Service",
              name: "InjuryRight for Law Firms",
              description:
                "Reach more qualified injury clients, streamline intake with AI, and gain visibility into your firm's performance.",
              provider: {
                "@type": "Organization",
                name: "InjuryRight",
                url: "https://injuryright.com",
              },
              serviceType: "Legal Marketing Platform",
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Law Firm Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Client Reach Network",
                      description: "Multi-channel lead generation for personal injury law firms",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI Client Intake",
                      description: "24/7 AI-powered intake and case qualification",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Performance Analytics",
                      description: "Real-time reporting and ROI tracking",
                    },
                  },
                ],
              },
            },
          }),
        }}
      />
    </main>
  );
}
