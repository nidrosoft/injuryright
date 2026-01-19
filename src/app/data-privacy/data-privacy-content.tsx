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
  ShieldTick,
  Lock01,
  Users01,
  Server01,
  Globe01,
  AlertCircle,
  Eye,
  FileCheck02,
  Building07,
  RefreshCw01,
  Mail01,
  ChevronDown,
} from "@untitledui/icons";

interface PrivacySection {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  content: string;
}

const privacySections: PrivacySection[] = [
  {
    id: "general",
    title: "General",
    icon: ShieldTick,
    content:
      "At InjuryRight.com, keeping your information secure is a top priority for us, and we are committed to the security and privacy of our users. This means we're always working hard to safeguard your data and continually earn your trust. If you have questions regarding security, we are happy to answer them. Please write to Privacy@injuryright.com and we will respond as quickly as we can.",
  },
  {
    id: "keeping-data-confidential",
    title: "Keeping Data Confidential",
    icon: Lock01,
    content:
      "We place strict controls over our employees' access to user data, and have technical controls and audit policies in place to ensure the confidentiality, integrity, and availability of user data. Our employees and contracted personnel working with any user data are bound to our policies, and we treat these issues as matters of the highest importance.",
  },
  {
    id: "privacy-security-training",
    title: "Privacy and Security Training",
    icon: Users01,
    content:
      "Everyone at InjuryRight.com receives regular training to ensure that we remain focused on privacy and security. This includes privacy training that covers the protection of sensitive client information, including any health-related data provided by clients in personal injury cases, and compliance with applicable state and federal privacy laws. We also ensure that our employees receive annual data security training, regardless of their role in the company.",
  },
  {
    id: "data-encryption",
    title: "Data Encryption",
    icon: Lock01,
    content:
      "We employ industry-standard technology to safeguard data. Our platform uses full volume encryption on all data stored at rest, with secure backups and robust backup policies. We also use Transport Layer Security (TLS) connections to transmit data over HTTPS, ensuring your information is protected both in transit and at rest.",
  },
  {
    id: "network-protection",
    title: "Network Protection",
    icon: Server01,
    content:
      "In addition to sophisticated system monitoring and logging, we utilize robust administrative identity, authorization, accountability, and authentication controls (including multi-factor authentication), as well as intrusion prevention and detection controls to protect our platform from unauthorized access and cyber threats.",
  },
  {
    id: "vulnerability-management",
    title: "Vulnerability Management",
    icon: AlertCircle,
    content:
      "We have a vulnerability management policy that covers internal and external testing, including annual third-party penetration testing, to find and remediate vulnerabilities that may present a risk to our platform or data. Our security team continuously monitors for new threats and implements patches and updates promptly.",
  },
  {
    id: "logging-monitoring",
    title: "Logging and Monitoring",
    icon: Eye,
    content:
      "InjuryRight operates an extensive security information and events management system. InjuryRight maintains a centralized logging environment, which contains events pertaining to security, monitoring, availability, access, and other metrics about the platform. We review our logging and monitoring systems regularly and respond promptly to automatic alerts.",
  },
  {
    id: "incident-management",
    title: "Incident Management & Response",
    icon: AlertCircle,
    content:
      "InjuryRight has incident management policies and procedures in place in the event of a security breach. This includes notifying users of any unauthorized access to their data in the event of a breach as defined under relevant state laws. Our incident response team is trained to act quickly and effectively to minimize any potential impact.",
  },
  {
    id: "product-security",
    title: "Product Security Practices",
    icon: FileCheck02,
    content:
      "New features, functionality, and design changes go through a security review process facilitated by the InjuryRight development team. We utilize automated static analysis software, and our teams manually peer-review code prior to being deployed to production. The Information Security team works closely with development teams to resolve any security concerns that may arise during development.",
  },
  {
    id: "vendor-management",
    title: "Vendor Management",
    icon: Building07,
    content:
      "InjuryRight operates a vendor management program, which requires our Legal and Information Security Teams to evaluate all third-party vendors, service providers, and partners. We review each potential service provider to ensure that our vendors continue to meet InjuryRight's strict security and legal standards before granting them access to any user data.",
  },
  {
    id: "disaster-recovery",
    title: "Disaster Recovery",
    icon: RefreshCw01,
    content:
      "We maintain a disaster recovery plan that supports a robust business continuity strategy. This plan has been developed to meet industry-standard methodologies and principles of high-availability engineering. Our systems are designed with redundancy and failover capabilities to ensure your data remains accessible and protected.",
  },
  {
    id: "data-retention",
    title: "Data Retention & Deletion",
    icon: Server01,
    content:
      "We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. You have the right to request deletion of your personal data, subject to certain legal exceptions. To request deletion of your data, please contact Privacy@injuryright.com.",
  },
  {
    id: "your-rights",
    title: "Your Privacy Rights",
    icon: Users01,
    content:
      "Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. California residents have additional rights under the CCPA, including the right to know what personal information we collect and the right to opt out of the sale of personal information. We do not sell your personal information.",
  },
  {
    id: "cookies-tracking",
    title: "Cookies & Tracking Technologies",
    icon: Globe01,
    content:
      "We use cookies and similar tracking technologies to improve your experience on our platform, analyze usage patterns, and deliver personalized content. You can control cookie preferences through your browser settings. Essential cookies are required for the platform to function properly, while analytics and marketing cookies can be disabled.",
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
          className="max-w-3xl"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-brand-50 text-brand-700">
              <ShieldTick className="w-4 h-4 mr-1.5" />
              Security & Privacy
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight"
          >
            Data & Privacy
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg sm:text-xl text-tertiary leading-relaxed"
          >
            Your security is our top priority. Learn how we protect your personal information 
            with industry-leading security measures and strict privacy controls.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function PrivacyAccordion({ section }: { section: PrivacySection }) {
  const [isOpen, setIsOpen] = useState(section.id === "general");
  const Icon = section.icon;

  return (
    <div className="border-b border-secondary">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start justify-between gap-4 text-left cursor-pointer group"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-brand-50 group-hover:bg-brand-100 transition-colors">
            <Icon className="w-5 h-5 text-brand-600" />
          </div>
          <h2 className="text-lg sm:text-xl font-semibold text-primary group-hover:text-brand-primary transition-colors pt-1.5">
            {section.title}
          </h2>
        </div>
        <ChevronDown
          className={cx(
            "w-5 h-5 text-tertiary flex-shrink-0 mt-2 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="overflow-hidden"
      >
        <div className="pb-6 pl-14">
          <p className="text-tertiary leading-relaxed">{section.content}</p>
        </div>
      </motion.div>
    </div>
  );
}

function PrivacySectionsContainer() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-primary">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {privacySections.map((section) => (
            <motion.div key={section.id} variants={fadeInUp}>
              <PrivacyAccordion section={section} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SecurityHighlights() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const highlights = [
    {
      icon: Lock01,
      title: "256-bit Encryption",
      description: "All data encrypted at rest and in transit",
    },
    {
      icon: ShieldTick,
      title: "SOC 2 Compliant",
      description: "Audited security controls and processes",
    },
    {
      icon: Server01,
      title: "Secure Infrastructure",
      description: "Enterprise-grade cloud hosting",
    },
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description: "Continuous security surveillance",
    },
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 bg-brand-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 mx-auto mb-3">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-brand-100">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-50 mx-auto mb-6"
          >
            <Mail01 className="w-8 h-8 text-brand-600" />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl font-bold text-primary"
          >
            Still have questions or comments?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-tertiary"
          >
            Our privacy team is here to help. Reach out with any questions about how we 
            protect your data.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8">
            <a
              href="mailto:Privacy@injuryright.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 text-white font-medium hover:bg-brand-700 transition-colors"
            >
              <Mail01 className="w-5 h-5" />
              Privacy@injuryright.com
            </a>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-sm text-quaternary"
          >
            We typically respond within 1-2 business days.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function RelatedPolicies() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const policies = [
    {
      title: "Terms of Service",
      description: "Read our terms and conditions for using InjuryRight.",
      href: "/terms",
    },
    {
      title: "Cookie Policy",
      description: "Learn about how we use cookies on our platform.",
      href: "/cookies",
    },
    {
      title: "Contact Us",
      description: "Get in touch with our support team.",
      href: "/contact",
    },
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 bg-primary border-t border-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h3
            variants={fadeInUp}
            className="text-lg font-semibold text-primary mb-6"
          >
            Related Policies
          </motion.h3>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {policies.map((policy) => (
              <motion.a
                key={policy.title}
                href={policy.href}
                variants={fadeInUp}
                className="p-4 bg-secondary rounded-xl border border-secondary hover:border-brand-300 hover:shadow-md transition-all"
              >
                <h4 className="font-medium text-primary">{policy.title}</h4>
                <p className="text-sm text-tertiary mt-1">{policy.description}</p>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function DataPrivacyPageContent() {
  return (
    <main className="min-h-screen">
      <InjuryRightHeader />
      <article>
        <HeroSection />
        <SecurityHighlights />
        <PrivacySectionsContainer />
        <ContactSection />
        <RelatedPolicies />
      </article>
      <Footer />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Data & Privacy | InjuryRight",
            description:
              "Learn how InjuryRight protects your personal information with industry-leading security measures and strict privacy controls.",
            url: "https://injuryright.com/data-privacy",
            mainEntity: {
              "@type": "FAQPage",
              mainEntity: privacySections.map((section) => ({
                "@type": "Question",
                name: section.title,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: section.content,
                },
              })),
            },
            publisher: {
              "@type": "Organization",
              name: "InjuryRight",
              url: "https://injuryright.com",
              contactPoint: {
                "@type": "ContactPoint",
                email: "Privacy@injuryright.com",
                contactType: "Privacy Inquiries",
              },
            },
          }),
        }}
      />
    </main>
  );
}
