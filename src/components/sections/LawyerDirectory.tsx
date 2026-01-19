"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { NAV_LINKS } from "@/lib/constants";
import { ChevronDownIcon, MapPinIcon } from "@heroicons/react/24/outline";

const practiceAreas = [
  "Car Accident Lawyers",
  "Truck Accident Lawyers",
  "Motorcycle Accident Lawyers",
  "Pedestrian Accident Lawyers",
  "Bicycle Accident Lawyers",
  "Rideshare Accident Lawyers (Uber/Lyft)",
  "Slip & Fall / Premises Injury Lawyers",
  "Workplace Injury Lawyers",
  "Dog Bite / Animal Attack Lawyers",
  "Medical Negligence Lawyers",
  "Catastrophic Injury Lawyers",
  "Wrongful Death Lawyers",
  "Other Personal Injury Lawyers",
];

export function LawyerDirectory() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
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
              Find Lawyers
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="mt-4 font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary"
          >
            Connect with lawyers near{" "}
            <span className="text-[#03695D]">you</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-tertiary max-w-2xl mx-auto"
          >
            Select your city to find personal injury professionals in your area
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 max-w-4xl mx-auto"
        >
          {/* City Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3"
          >
            {NAV_LINKS.locations.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(selectedCity === city ? null : city)}
                className={`flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 min-h-[44px] ${
                  selectedCity === city
                    ? "bg-brand-600 text-white shadow-lg shadow-brand-600/20"
                    : "bg-secondary text-secondary hover:bg-brand-50 hover:text-brand-600"
                }`}
              >
                <MapPinIcon className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{city}</span>
              </button>
            ))}
          </motion.div>

          {/* Practice Areas Dropdown */}
          <AnimatePresence>
            {selectedCity && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-8 overflow-hidden"
              >
                <div className="bg-secondary rounded-2xl p-6 border border-secondary">
                  <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                    <MapPinIcon className="w-5 h-5 text-[#03695D]" />
                    {selectedCity} Personal Injury Lawyers
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                    {practiceAreas.map((area) => (
                      <Link
                        key={area}
                        href="/survey"
                        className="flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-primary rounded-xl text-xs sm:text-sm text-secondary hover:bg-brand-50 hover:text-brand-600 border border-secondary hover:border-brand-300 transition-all duration-200 min-h-[44px]"
                      >
                        <ChevronDownIcon className="w-4 h-4 -rotate-90 flex-shrink-0" />
                        <span className="line-clamp-2">{selectedCity} {area}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
