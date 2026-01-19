"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { InjuryRightHeader } from "@/components/layout/InjuryRightHeader";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";
import {
  Mail01,
  Phone,
  MarkerPin01,
  Clock,
  Send01,
  CheckCircle,
  MessageTextCircle02,
  Users01,
  Building07,
  HelpCircle,
  AlertCircle,
} from "@untitledui/icons";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  matter: string;
  message: string;
}

const contactMatters = [
  { value: "", label: "Select a topic..." },
  { value: "case-inquiry", label: "I have a question about my case" },
  { value: "find-lawyer", label: "Help me find a lawyer" },
  { value: "review-issue", label: "Issue with a review" },
  { value: "lawyer-partnership", label: "I'm a lawyer interested in partnering" },
  { value: "press-media", label: "Press & media inquiries" },
  { value: "technical-support", label: "Technical support" },
  { value: "feedback", label: "General feedback" },
  { value: "other", label: "Other" },
];

const contactInfo = [
  {
    icon: Mail01,
    title: "Email Us",
    description: "Our team typically responds within 24 hours.",
    value: "support@injuryright.com",
    href: "mailto:support@injuryright.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 8am to 6pm EST.",
    value: "(800) 555-0199",
    href: "tel:+18005550199",
  },
  {
    icon: MarkerPin01,
    title: "Visit Us",
    description: "Come say hello at our office.",
    value: "New York, NY",
    href: null,
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "We're here when you need us.",
    value: "Mon-Fri: 8am - 6pm EST",
    href: null,
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
              <MessageTextCircle02 className="w-4 h-4 mr-1.5" />
              Contact Us
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight"
          >
            We're here to{" "}
            <span className="text-brand-primary">help</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg sm:text-xl text-tertiary max-w-2xl mx-auto leading-relaxed"
          >
            Have a question, feedback, or need assistance? Our team is ready to help you 
            navigate your legal journey.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactFormSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                Get in touch
              </h2>
              <p className="mt-4 text-lg text-tertiary leading-relaxed">
                Whether you're an accident victim seeking guidance, a lawyer interested in 
                partnering with us, or just have a question — we'd love to hear from you.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="mt-10 space-y-6"
            >
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeInUp}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50">
                      <Icon className="w-6 h-6 text-brand-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">
                        {item.title}
                      </h3>
                      <p className="text-sm text-tertiary mt-0.5">
                        {item.description}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-brand-primary font-medium hover:underline mt-1 inline-block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-secondary font-medium mt-1">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Quick Links */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="mt-12 p-6 bg-secondary rounded-2xl border border-secondary"
            >
              <h3 className="text-lg font-semibold text-primary mb-4">
                Quick Links
              </h3>
              <div className="space-y-3">
                <a
                  href="/survey"
                  className="flex items-center gap-3 text-tertiary hover:text-brand-primary transition-colors"
                >
                  <HelpCircle className="w-5 h-5" />
                  <span>Check if you have a case</span>
                </a>
                <a
                  href="/verified-reviews"
                  className="flex items-center gap-3 text-tertiary hover:text-brand-primary transition-colors"
                >
                  <Users01 className="w-5 h-5" />
                  <span>How reviews work</span>
                </a>
                <a
                  href="/for-law-firms"
                  className="flex items-center gap-3 text-tertiary hover:text-brand-primary transition-colors"
                >
                  <Building07 className="w-5 h-5" />
                  <span>Partner with us (Law Firms)</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="bg-secondary rounded-3xl p-6 sm:p-8 lg:p-10 border border-secondary shadow-lg">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-success-100 mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-success-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    Message sent!
                  </h3>
                  <p className="mt-3 text-tertiary max-w-sm mx-auto">
                    Thank you for reaching out. Our team will get back to you within 
                    24 hours.
                  </p>
                  <Button
                    color="secondary"
                    size="lg"
                    className="mt-8"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-primary mb-6">
                    Send us a message
                  </h3>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-secondary mb-1.5"
                        >
                          First name <span className="text-error-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          {...register("firstName", {
                            required: "First name is required",
                          })}
                          className={cx(
                            "w-full px-4 py-3 rounded-xl border bg-primary text-primary placeholder:text-quaternary focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all",
                            errors.firstName
                              ? "border-error-500"
                              : "border-secondary"
                          )}
                          placeholder="John"
                        />
                        {errors.firstName && (
                          <p className="mt-1.5 text-sm text-error-500 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.firstName.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-secondary mb-1.5"
                        >
                          Last name <span className="text-error-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          {...register("lastName", {
                            required: "Last name is required",
                          })}
                          className={cx(
                            "w-full px-4 py-3 rounded-xl border bg-primary text-primary placeholder:text-quaternary focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all",
                            errors.lastName
                              ? "border-error-500"
                              : "border-secondary"
                          )}
                          placeholder="Doe"
                        />
                        {errors.lastName && (
                          <p className="mt-1.5 text-sm text-error-500 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.lastName.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-secondary mb-1.5"
                      >
                        Email address <span className="text-error-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        className={cx(
                          "w-full px-4 py-3 rounded-xl border bg-primary text-primary placeholder:text-quaternary focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all",
                          errors.email
                            ? "border-error-500"
                            : "border-secondary"
                        )}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-sm text-error-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-secondary mb-1.5"
                      >
                        Phone number{" "}
                        <span className="text-quaternary">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        {...register("phone")}
                        className="w-full px-4 py-3 rounded-xl border border-secondary bg-primary text-primary placeholder:text-quaternary focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    {/* Matter/Topic Selection */}
                    <div>
                      <label
                        htmlFor="matter"
                        className="block text-sm font-medium text-secondary mb-1.5"
                      >
                        What can we help you with?{" "}
                        <span className="text-error-500">*</span>
                      </label>
                      <select
                        id="matter"
                        {...register("matter", {
                          required: "Please select a topic",
                        })}
                        className={cx(
                          "w-full px-4 py-3 rounded-xl border bg-primary text-primary focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all appearance-none cursor-pointer",
                          errors.matter
                            ? "border-error-500"
                            : "border-secondary"
                        )}
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                          backgroundPosition: "right 0.75rem center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "1.5em 1.5em",
                        }}
                      >
                        {contactMatters.map((matter) => (
                          <option key={matter.value} value={matter.value}>
                            {matter.label}
                          </option>
                        ))}
                      </select>
                      {errors.matter && (
                        <p className="mt-1.5 text-sm text-error-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.matter.message}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-secondary mb-1.5"
                      >
                        Your message <span className="text-error-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        {...register("message", {
                          required: "Message is required",
                          minLength: {
                            value: 10,
                            message: "Message must be at least 10 characters",
                          },
                        })}
                        className={cx(
                          "w-full px-4 py-3 rounded-xl border bg-primary text-primary placeholder:text-quaternary focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none",
                          errors.message
                            ? "border-error-500"
                            : "border-secondary"
                        )}
                        placeholder="Tell us how we can help you..."
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-sm text-error-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      color="primary"
                      size="xl"
                      className="w-full justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send01 className="w-5 h-5" />
                          Send Message
                        </span>
                      )}
                    </Button>

                    <p className="text-xs text-quaternary text-center mt-4">
                      By submitting this form, you agree to our{" "}
                      <a
                        href="/data-privacy"
                        className="text-brand-primary hover:underline"
                      >
                        Privacy Policy
                      </a>
                      . We'll never share your information with third parties.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const faqs = [
    {
      question: "How quickly will I hear back?",
      answer:
        "Our team typically responds within 24 hours during business days. For urgent matters, we recommend calling our support line.",
    },
    {
      question: "I'm a lawyer. How do I partner with InjuryRight?",
      answer:
        "We'd love to hear from you! Select 'I'm a lawyer interested in partnering' from the topic dropdown, or visit our For Law Firms page to learn more about partnership opportunities.",
    },
    {
      question: "I have an issue with a review. What should I do?",
      answer:
        "Select 'Issue with a review' from the contact form and provide details about the review in question. Our moderation team will investigate and respond promptly.",
    },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl font-bold text-primary"
          >
            Common questions
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-tertiary"
          >
            Quick answers to questions you might have.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto grid gap-6"
        >
          {faqs.map((faq) => (
            <motion.div
              key={faq.question}
              variants={fadeInUp}
              className="bg-primary rounded-2xl p-6 border border-secondary"
            >
              <h3 className="text-lg font-semibold text-primary">
                {faq.question}
              </h3>
              <p className="mt-2 text-tertiary leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function ContactPageContent() {
  return (
    <main className="min-h-screen">
      <InjuryRightHeader />
      <article itemScope itemType="https://schema.org/ContactPage">
        <HeroSection />
        <ContactFormSection />
        <FAQSection />
      </article>
      <Footer />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact InjuryRight",
            description:
              "Contact the InjuryRight team for support, partnership inquiries, or feedback.",
            url: "https://injuryright.com/contact",
            mainEntity: {
              "@type": "Organization",
              name: "InjuryRight",
              email: "support@injuryright.com",
              telephone: "+1-800-555-0199",
              address: {
                "@type": "PostalAddress",
                addressLocality: "New York",
                addressRegion: "NY",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-800-555-0199",
                contactType: "customer service",
                email: "support@injuryright.com",
                availableLanguage: "English",
                hoursAvailable: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:00",
                  closes: "18:00",
                },
              },
            },
          }),
        }}
      />
    </main>
  );
}
