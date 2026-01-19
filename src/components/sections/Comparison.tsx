"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { COMPARISON_DATA } from "@/lib/constants";
import { Button } from "@/components/base/buttons/button";
import { Check, XClose } from "@untitledui/icons";

export function Comparison() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-32 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#E6F5F3] text-[#03695D]">
              Why Choose Us
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="mt-4 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary"
          >
            Get paid what you <span className="text-[#03695D]">deserve</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-tertiary max-w-2xl mx-auto"
          >
            Join thousands of Americans who recovered millions in settlements
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto"
        >
          {/* InjuryRight Column */}
          <motion.div
            variants={fadeInUp}
            className="relative bg-gradient-to-br from-[#055148] to-[#047B6D] rounded-3xl p-5 sm:p-8 text-white shadow-2xl shadow-[#03695D]/30"
          >
            <div className="absolute -top-3 left-8">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-white text-[#03695D] shadow-lg">
                RECOMMENDED
              </span>
            </div>

            <div className="flex items-center gap-3 mb-6 sm:mb-8 mt-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/20">
                <span className="text-white font-bold text-lg">IR</span>
              </div>
              <span className="font-display text-lg sm:text-xl font-bold">InjuryRight</span>
            </div>

            <ul className="space-y-4">
              {COMPARISON_DATA.injuryRight.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-white/20">
                    <Check className="w-4 h-4 stroke-[2.5px] text-white" />
                  </div>
                  <span className={`text-white/90 ${index === COMPARISON_DATA.injuryRight.length - 1 ? "font-semibold text-white" : ""}`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                color="secondary"
                size="lg"
                href="/survey"
                className="w-full justify-center"
              >
                Check My Case
              </Button>
            </div>
          </motion.div>

          {/* Traditional Column */}
          <motion.div
            variants={fadeInUp}
            className="bg-secondary rounded-3xl p-5 sm:p-8 border border-secondary"
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-tertiary">
                <span className="text-quaternary font-bold text-lg">?</span>
              </div>
              <span className="font-display text-lg sm:text-xl font-bold text-secondary">Traditional Law Firms</span>
            </div>

            <ul className="space-y-4">
              {COMPARISON_DATA.traditional.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-error-100">
                    <XClose className="w-4 h-4 stroke-[2.5px] text-error-500" />
                  </div>
                  <span className="text-tertiary">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
