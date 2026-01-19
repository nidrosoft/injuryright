"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/base/buttons/button";
import { ArrowRight, Check } from "@untitledui/icons";

export function CTA() {
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
          className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl px-5 py-10 sm:px-8 sm:py-16 lg:px-16 lg:py-20 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#03695D]/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#047B6D]/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            >
              Ready to understand your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A9688] to-[#10B981]">
                legal options?
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300 leading-relaxed"
            >
              Join thousands of Americans who have used InjuryRight to get clarity on their accident claims. It's free, fast, and there's no obligation.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0"
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
              <span className="text-gray-400 text-sm">
                Free • No obligation • 2 min
              </span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 sm:mt-12 flex items-center justify-center gap-4 sm:gap-8 flex-wrap"
            >
              <div className="flex items-center gap-2">
                <Check className="size-5 stroke-[2.5px] text-success-500" />
                <span className="text-gray-300 text-sm">Free case review</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="size-5 stroke-[2.5px] text-success-500" />
                <span className="text-gray-300 text-sm">Verified experts</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="size-5 stroke-[2.5px] text-success-500" />
                <span className="text-gray-300 text-sm">$800M+ recovered</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
