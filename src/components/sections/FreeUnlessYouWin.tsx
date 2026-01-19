"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const benefits = [
  "Free case review",
  "No upfront costs",
  "No hidden fees",
  "Pay only if you win",
];

export function FreeUnlessYouWin() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-32 bg-gradient-to-br from-[#055148] via-[#03695D] to-[#047B6D] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div variants={slideInLeft}>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white">
                No Risk
              </span>
            </motion.div>

            <motion.h2
              variants={slideInLeft}
              className="mt-4 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            >
              Free Unless You Win
            </motion.h2>

            <motion.p
              variants={slideInLeft}
              className="mt-4 sm:mt-6 text-base sm:text-lg text-white/80 leading-relaxed"
            >
              We've simplified the personal injury process so you can understand your options and get matched with trusted experts from your phone or computer. Your case review and guidance are completely free.
            </motion.p>

            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="mt-8 space-y-4"
            >
              {benefits.map((benefit) => (
                <motion.li
                  key={benefit}
                  variants={fadeInUp}
                  className="flex items-center gap-3"
                >
                  <CheckCircleIcon className="w-6 h-6 text-[#10B981] flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Visual */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-5 sm:p-8 border border-white/20">
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#10B981]/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

              <div className="relative">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white/20">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs sm:text-sm">Average Recovery</p>
                    <p className="text-white text-xl sm:text-2xl font-bold">$52,000+</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 text-sm">Case Review</span>
                      <span className="text-[#10B981] font-semibold">FREE</span>
                    </div>
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-[#10B981] rounded-full" />
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 text-sm">Expert Matching</span>
                      <span className="text-[#10B981] font-semibold">FREE</span>
                    </div>
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-[#10B981] rounded-full" />
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 text-sm">Legal Guidance</span>
                      <span className="text-[#10B981] font-semibold">FREE</span>
                    </div>
                    <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-[#10B981] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
