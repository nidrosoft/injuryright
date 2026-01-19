"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { InjuryRightHeader } from "@/components/layout/InjuryRightHeader";
import { Footer } from "@/components/layout/Footer";
import { Globe01 } from "@untitledui/icons";

const sections = [
  {
    title: "What Are Cookies?",
    content: `Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They help websites remember your preferences, understand how you use the site, and improve your overall experience. Cookies are widely used across the internet and are essential for many website features to work properly.`,
  },
  {
    title: "How We Use Cookies",
    content: `InjuryRight uses cookies for several purposes:

• Essential Cookies: These are necessary for the website to function properly. They enable core features like page navigation, secure areas access, and form submissions. Without these cookies, the website cannot function properly.

• Analytics Cookies: We use these to understand how visitors interact with our website. This helps us improve our services and user experience. These cookies collect anonymous information about page visits, time spent on pages, and any errors encountered.

• Functional Cookies: These remember your preferences and choices (like your location or language) to provide a more personalized experience.

• Marketing Cookies: With your consent, we may use these cookies to show you relevant advertisements and measure the effectiveness of our marketing campaigns.`,
  },
  {
    title: "Types of Cookies We Use",
    content: `Session Cookies: These temporary cookies are deleted when you close your browser. They help maintain your session as you navigate through our website.

Persistent Cookies: These remain on your device for a set period or until you delete them. They help us recognize you when you return to our website.

First-Party Cookies: Set by InjuryRight directly when you visit our website.

Third-Party Cookies: Set by our partners and service providers (like analytics tools) to help us understand usage patterns and improve our services.`,
  },
  {
    title: "Specific Cookies We Use",
    content: `Here are some of the main cookies used on our platform:

• _ga, _gid (Google Analytics): Used to distinguish users and sessions for analytics purposes. Expires after 2 years and 24 hours respectively.

• _fbp (Facebook Pixel): Used to deliver advertisements and measure their effectiveness. Expires after 3 months.

• session_id: Essential cookie for maintaining your session. Expires when you close your browser.

• preferences: Stores your cookie consent preferences. Expires after 1 year.

• survey_progress: Remembers your progress in our case evaluation survey. Expires after 7 days.`,
  },
  {
    title: "Managing Your Cookie Preferences",
    content: `You have control over how cookies are used on your device:

Browser Settings: Most web browsers allow you to control cookies through their settings. You can typically find these in the "Options," "Preferences," or "Settings" menu. You can delete existing cookies, allow or block all cookies, or set preferences for certain websites.

Opt-Out Tools: For advertising cookies, you can use industry opt-out tools like:
• Digital Advertising Alliance: www.aboutads.info/choices
• Network Advertising Initiative: www.networkadvertising.org/choices
• European Interactive Digital Advertising Alliance: www.youronlinechoices.eu

Please note that blocking certain cookies may impact your experience on our website and limit the functionality available to you.`,
  },
  {
    title: "Do Not Track Signals",
    content: `Some browsers have a "Do Not Track" feature that signals to websites that you do not want your online activity tracked. Currently, there is no industry standard for how websites should respond to these signals. Our website does not currently respond to Do Not Track signals, but we respect your privacy choices through our cookie consent mechanism.`,
  },
  {
    title: "Updates to This Policy",
    content: `We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date. We encourage you to review this policy periodically.`,
  },
  {
    title: "Contact Us",
    content: `If you have questions about our use of cookies or this Cookie Policy, please contact us at:

Email: privacy@injuryright.com
Address: InjuryRight Privacy Team, 123 Legal Way, Suite 100, Wilmington, DE 19801

We're committed to addressing your concerns and providing transparency about our data practices.`,
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
              <Globe01 className="w-4 h-4 mr-1.5" />
              Privacy
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight"
          >
            Cookie Policy
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg sm:text-xl text-tertiary leading-relaxed"
          >
            Learn how InjuryRight uses cookies and similar technologies to improve your 
            experience and understand your choices.
          </motion.p>

          <motion.p variants={fadeInUp} className="mt-4 text-sm text-quaternary">
            Last updated: January 2026
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function CookiesContent() {
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

export function CookiesPageContent() {
  return (
    <main className="min-h-screen">
      <InjuryRightHeader />
      <article>
        <HeroSection />
        <CookiesContent />
      </article>
      <Footer />
    </main>
  );
}
