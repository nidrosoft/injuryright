"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { InjuryRightHeader } from "@/components/layout/InjuryRightHeader";
import { Footer } from "@/components/layout/Footer";
import { FileCheck02 } from "@untitledui/icons";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using InjuryRight.com ("the Platform"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, and your continued use of the Platform constitutes acceptance of any changes.`,
  },
  {
    title: "2. Description of Services",
    content: `InjuryRight provides an online platform that helps individuals who have been injured in accidents connect with qualified personal injury attorneys. We do not provide legal advice, and our services do not create an attorney-client relationship. We act as an intermediary to facilitate connections between users and legal professionals.`,
  },
  {
    title: "3. User Eligibility",
    content: `You must be at least 18 years old and a legal resident of the United States to use our services. By using the Platform, you represent and warrant that you meet these eligibility requirements and have the legal capacity to enter into these Terms of Service.`,
  },
  {
    title: "4. User Accounts and Information",
    content: `When you submit information through our Platform, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.`,
  },
  {
    title: "5. No Legal Advice",
    content: `The information provided on InjuryRight is for general informational purposes only and does not constitute legal advice. The Platform is not a law firm and does not provide legal services. Any information you receive through our Platform should not be relied upon as a substitute for legal advice from a qualified attorney.`,
  },
  {
    title: "6. Attorney Connections",
    content: `InjuryRight connects users with independent attorneys who are not employees or agents of InjuryRight. We do not guarantee the quality, outcome, or results of any legal services provided by attorneys in our network. Any attorney-client relationship is formed directly between you and the attorney, subject to their own terms and agreements.`,
  },
  {
    title: "7. User Conduct",
    content: `You agree not to: (a) Use the Platform for any unlawful purpose; (b) Submit false or misleading information; (c) Interfere with the proper functioning of the Platform; (d) Attempt to gain unauthorized access to our systems; (e) Use automated means to access the Platform without our permission; (f) Harass, abuse, or harm other users or our staff.`,
  },
  {
    title: "8. Intellectual Property",
    content: `All content on the Platform, including text, graphics, logos, images, and software, is the property of InjuryRight or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.`,
  },
  {
    title: "9. Privacy",
    content: `Your use of the Platform is also governed by our Privacy Policy, which describes how we collect, use, and protect your personal information. By using the Platform, you consent to the collection and use of your information as described in our Privacy Policy.`,
  },
  {
    title: "10. Disclaimers",
    content: `THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE. WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.`,
  },
  {
    title: "11. Limitation of Liability",
    content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, INJURYRIGHT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE PLATFORM. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID TO US, IF ANY, IN THE TWELVE MONTHS PRECEDING THE CLAIM.`,
  },
  {
    title: "12. Indemnification",
    content: `You agree to indemnify, defend, and hold harmless InjuryRight, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of the Platform, your violation of these Terms, or your violation of any rights of a third party.`,
  },
  {
    title: "13. Governing Law",
    content: `These Terms of Service shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved in the state or federal courts located in Delaware.`,
  },
  {
    title: "14. Dispute Resolution",
    content: `Any dispute arising from these Terms or your use of the Platform shall first be attempted to be resolved through informal negotiation. If the dispute cannot be resolved informally, you agree to submit to binding arbitration in accordance with the rules of the American Arbitration Association.`,
  },
  {
    title: "15. Termination",
    content: `We reserve the right to terminate or suspend your access to the Platform at any time, without notice, for any reason, including violation of these Terms. Upon termination, your right to use the Platform will immediately cease, and any provisions of these Terms that should survive termination will remain in effect.`,
  },
  {
    title: "16. Contact Information",
    content: `If you have any questions about these Terms of Service, please contact us at legal@injuryright.com or write to us at InjuryRight Legal Department, 123 Legal Way, Suite 100, Wilmington, DE 19801.`,
  },
];

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
          className="max-w-3xl"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-brand-50 text-brand-700">
              <FileCheck02 className="w-4 h-4 mr-1.5" />
              Legal Agreement
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight"
          >
            Terms of Service
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg sm:text-xl text-tertiary leading-relaxed"
          >
            Please read these terms carefully before using InjuryRight. By using our platform, 
            you agree to be bound by these terms.
          </motion.p>

          <motion.p variants={fadeInUp} className="mt-4 text-sm text-quaternary">
            Last updated: January 2026
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function TermsContent() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-primary">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="prose prose-lg max-w-none"
        >
          {sections.map((section, index) => (
            <motion.div key={index} variants={fadeInUp} className="mb-8">
              <h2 className="text-xl font-bold text-primary mb-3">{section.title}</h2>
              <p className="text-tertiary leading-relaxed whitespace-pre-line">{section.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function TermsPageContent() {
  return (
    <main className="min-h-screen">
      <InjuryRightHeader />
      <article>
        <HeroSection />
        <TermsContent />
      </article>
      <Footer />
    </main>
  );
}
