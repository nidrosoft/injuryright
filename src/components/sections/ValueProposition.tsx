"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { VALUE_PROPS } from "@/lib/constants";
import { Button } from "@/components/base/buttons/button";
import { Clock, ShieldTick, CurrencyDollar, Trophy01, ArrowRight } from "@untitledui/icons";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  clock: Clock,
  shield: ShieldTick,
  dollar: CurrencyDollar,
  trophy: Trophy01,
};

export function ValueProposition() {
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
              Why InjuryRight
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="mt-4 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary"
          >
            The #1 place to find out what your{" "}
            <span className="text-[#03695D]">accident is worth</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-tertiary max-w-2xl mx-auto"
          >
            We've helped thousands of Americans understand their legal options and connect with trusted professionals.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-8 sm:mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {VALUE_PROPS.map((prop, index) => {
            const Icon = iconMap[prop.icon];
            return (
              <motion.div
                key={prop.title}
                variants={fadeInUp}
                className="group relative p-4 sm:p-6 bg-primary rounded-2xl border border-secondary shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#E6F5F3] to-[#D1FAE5] group-hover:from-[#03695D] group-hover:to-[#047B6D] transition-all duration-300">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#03695D] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-primary">
                  {prop.title}
                </h3>
                <p className="mt-2 text-sm text-tertiary">{prop.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-8 sm:mt-10 lg:mt-12 text-center px-4 sm:px-0"
        >
          <Button
            color="primary"
            size="xl"
            href="/survey"
            iconTrailing={ArrowRight}
          >
            Check My Case
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
