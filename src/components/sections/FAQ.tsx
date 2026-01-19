"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { FAQ_DATA } from "@/lib/constants";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";

export function FAQ() {
  const [openQuestions, setOpenQuestions] = useState(new Set([0]));
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleToggle = (index: number) => {
    const newSet = new Set(openQuestions);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setOpenQuestions(newSet);
  };

  return (
    <section ref={ref} className="bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-container px-4 md:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mx-auto flex w-full max-w-3xl flex-col items-center text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-display-sm font-semibold text-primary md:text-display-md"
          >
            Frequently asked questions
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl"
          >
            Everything you need to know about InjuryRight and how we can help you.
          </motion.p>
        </motion.div>

        <div className="mx-auto mt-12 max-w-3xl md:mt-16">
          <div className="flex flex-col gap-8">
            {FAQ_DATA.map((faq, index) => (
              <div
                key={faq.question}
                className={cx(
                  index > 0 && "border-t border-secondary pt-6"
                )}
              >
                <h3>
                  <button
                    onClick={() => handleToggle(index)}
                    className="flex w-full cursor-pointer items-start justify-between gap-2 rounded-md text-left outline-focus-ring select-none focus-visible:outline-2 focus-visible:outline-offset-2 md:gap-6"
                  >
                    <span className="text-md font-semibold text-primary">{faq.question}</span>

                    <span aria-hidden="true" className="flex size-6 items-center text-fg-quaternary">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line
                          className={cx(
                            "origin-center rotate-0 transition duration-150 ease-out",
                            openQuestions.has(index) && "-rotate-90",
                          )}
                          x1="12"
                          y1="8"
                          x2="12"
                          y2="16"
                        ></line>
                        <line x1="8" y1="12" x2="16" y2="12"></line>
                      </svg>
                    </span>
                  </button>
                </h3>

                <motion.div
                  className="overflow-hidden"
                  initial={false}
                  animate={{
                    height: openQuestions.has(index) ? "auto" : 0,
                    opacity: openQuestions.has(index) ? 1 : 0,
                  }}
                  transition={{
                    type: "spring",
                    damping: 24,
                    stiffness: 240,
                    bounce: 0.4,
                  }}
                >
                  <div className="pt-1 pr-8 md:pr-12">
                    <p className="text-md text-tertiary">{faq.answer}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 rounded-2xl bg-secondary px-6 py-8 text-center md:mt-16 md:gap-8 md:pt-8 md:pb-10">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-solid">
            <span className="text-white font-bold text-2xl">?</span>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-primary">Still have questions?</h4>
            <p className="mt-2 text-md text-tertiary md:text-lg">
              Can't find the answer you're looking for? Please reach out to our friendly team.
            </p>
          </div>
          <Button size="xl" href="mailto:support@injuryright.com">Get in touch</Button>
        </div>
      </div>
    </section>
  );
}
