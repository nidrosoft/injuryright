"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/base/buttons/button";
import { 
  ClipboardCheck, 
  Calculator, 
  Users01, 
  ArrowRight,
  CheckCircle,
  Clock,
  ShieldTick,
  Zap
} from "@untitledui/icons";
import { cx } from "@/utils/cx";

interface StepCardProps {
  icon: React.ReactNode;
  stepNumber: number;
  title: string;
  description: string;
  benefits: string[];
}

const StepCard: React.FC<StepCardProps> = ({
  icon,
  stepNumber,
  title,
  description,
  benefits,
}) => (
  <div
    className={cx(
      "relative rounded-2xl border border-secondary bg-primary p-5 sm:p-6 transition-all duration-300 ease-in-out",
      "hover:scale-[1.02] hover:shadow-xl hover:border-brand-300 group"
    )}
  >
    {/* Icon */}
    <div className="mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 group-hover:from-brand-100 group-hover:to-brand-200 transition-all duration-300">
      {icon}
    </div>

    {/* Title and Description */}
    <h3 className="mb-2 text-lg sm:text-xl font-semibold text-primary">{title}</h3>
    <p className="mb-5 text-sm sm:text-base text-tertiary leading-relaxed">{description}</p>

    {/* Benefits List */}
    <ul className="space-y-2.5 sm:space-y-3">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-start gap-2.5 sm:gap-3">
          <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 mt-0.5">
            <div className="h-2 w-2 rounded-full bg-brand-500"></div>
          </div>
          <span className="text-sm text-tertiary leading-relaxed">{benefit}</span>
        </li>
      ))}
    </ul>
  </div>
);

export function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stepsData = [
    {
      icon: <ClipboardCheck className="h-6 w-6 sm:h-7 sm:w-7 text-brand-600" />,
      title: "Tell us about your accident",
      description:
        "Answer a few simple questions about your injury. Our smart system guides you through the process in just 2 minutes.",
      benefits: [
        "Simple, guided questionnaire",
        "No legal jargon — plain English",
        "Your information stays private & secure",
      ],
    },
    {
      icon: <Calculator className="h-6 w-6 sm:h-7 sm:w-7 text-brand-600" />,
      title: "See your potential compensation",
      description:
        "Get an instant estimate of what your case may be worth based on similar cases and your specific situation.",
      benefits: [
        "AI-powered case evaluation",
        "Based on real settlement data",
        "Understand your options clearly",
      ],
    },
    {
      icon: <Users01 className="h-6 w-6 sm:h-7 sm:w-7 text-brand-600" />,
      title: "Connect with trusted experts",
      description:
        "We match you with pre-vetted personal injury professionals in your area who specialize in your type of case.",
      benefits: [
        "Verified, highly-rated attorneys",
        "Free consultation — no obligation",
        "You only pay if you win",
      ],
    },
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-secondary to-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mx-auto mb-10 sm:mb-12 lg:mb-16 max-w-3xl text-center"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-50 text-brand-700">
              How It Works
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="mt-4 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary"
          >
            Get clarity on your case in{" "}
            <span className="text-brand-600">3 simple steps</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-base sm:text-lg text-tertiary max-w-2xl mx-auto"
          >
            Our service uses advanced technology to evaluate your accident instantly and connect you with the right legal experts — all at no cost to you.
          </motion.p>
        </motion.div>

        {/* Step Indicators with Connecting Line */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative mx-auto mb-6 sm:mb-8 w-full max-w-4xl hidden md:block"
        >
          <div
            aria-hidden="true"
            className="absolute left-[16.6667%] top-1/2 h-0.5 w-[66.6667%] -translate-y-1/2 bg-gradient-to-r from-brand-200 via-brand-300 to-brand-200"
          ></div>
          <div className="relative grid grid-cols-3">
            {stepsData.map((_, index) => (
              <div
                key={index}
                className="flex h-10 w-10 items-center justify-center justify-self-center rounded-full bg-gradient-to-br from-brand-600 to-brand-500 font-semibold text-white ring-4 ring-primary shadow-lg"
              >
                {index + 1}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3"
        >
          {stepsData.map((step, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <StepCard
                icon={step.icon}
                stepNumber={index + 1}
                title={step.title}
                description={step.description}
                benefits={step.benefits}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-10 sm:mt-12 lg:mt-16 text-center"
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
          <p className="mt-3 text-sm text-quaternary">
            Free • No obligation • Takes 2 minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
}
