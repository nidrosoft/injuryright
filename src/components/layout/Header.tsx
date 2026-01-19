"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { 
  ChevronDown, 
  Menu01, 
  XClose,
  Bus,
  Truck01,
  Target01,
  Users01,
  Building07,
  AlertCircle,
  Heart,
  Scale01,
  MarkerPin01,
} from "@untitledui/icons";
import { NavMenuItemLink } from "@/components/marketing/header-navigation/base-components/nav-menu-item";

const practiceAreaItems = [
  { title: "Car Accident Lawyers", href: "/survey", Icon: Bus },
  { title: "Truck Accident Lawyers", href: "/survey", Icon: Truck01 },
  { title: "Motorcycle Accident Lawyers", href: "/survey", Icon: Target01 },
  { title: "Pedestrian Accident Lawyers", href: "/survey", Icon: Users01 },
  { title: "Slip & Fall Lawyers", href: "/survey", Icon: Building07 },
  { title: "Workplace Injury Lawyers", href: "/survey", Icon: AlertCircle },
  { title: "Medical Negligence Lawyers", href: "/survey", Icon: Heart },
  { title: "Wrongful Death Lawyers", href: "/survey", Icon: Scale01 },
];

const topLocations = [
  "New York City",
  "Los Angeles", 
  "Chicago",
  "Houston",
  "Phoenix",
  "Miami",
  "Dallas",
  "Atlanta",
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [practiceAreaOpen, setPracticeAreaOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#055148] to-[#047B6D]">
              <span className="text-white font-bold text-lg">IR</span>
            </div>
            <span className="font-display text-xl font-bold text-gray-900">
              Injury<span className="text-[#03695D]">Right</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            <Link
              href="/about"
              className="text-sm font-semibold text-secondary hover:text-primary transition-colors"
            >
              About Us
            </Link>

            {/* Practice Area Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPracticeAreaOpen(true)}
              onMouseLeave={() => setPracticeAreaOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-semibold text-secondary hover:text-primary transition-colors">
                Practice Areas
                <ChevronDown className={`w-4 h-4 stroke-[2.5px] transition-transform duration-200 ${practiceAreaOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {practiceAreaOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 z-50"
                  >
                    <div className="md:max-w-84 md:p-0">
                      <nav className="overflow-hidden rounded-2xl bg-primary py-2 shadow-lg ring-1 ring-secondary_alt md:p-2">
                        <ul className="flex flex-col gap-0.5">
                          {practiceAreaItems.map(({ title, href, Icon }) => (
                            <li key={title}>
                              <NavMenuItemLink 
                                icon={Icon} 
                                title={title} 
                                href={href}
                                iconClassName="text-fg-brand-primary"
                              />
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Location Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setLocationOpen(true)}
              onMouseLeave={() => setLocationOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-semibold text-secondary hover:text-primary transition-colors">
                Locations
                <ChevronDown className={`w-4 h-4 stroke-[2.5px] transition-transform duration-200 ${locationOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {locationOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 z-50"
                  >
                    <div className="md:max-w-72 md:p-0">
                      <nav className="overflow-hidden rounded-2xl bg-primary py-2 shadow-lg ring-1 ring-secondary_alt md:p-2">
                        <ul className="flex flex-col gap-0.5">
                          {topLocations.map((city) => (
                            <li key={city}>
                              <NavMenuItemLink 
                                icon={MarkerPin01} 
                                title={city} 
                                href="/survey"
                                iconClassName="text-fg-brand-primary"
                              />
                            </li>
                          ))}
                          <li className="border-t border-secondary mt-1 pt-1">
                            <NavMenuItemLink 
                              title="View All Locations" 
                              href="/locations"
                              className="text-brand-primary"
                            />
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/injury-types"
              className="text-sm font-semibold text-secondary hover:text-primary transition-colors"
            >
              Injury Types
            </Link>

            <Link
              href="/legal-topics"
              className="text-sm font-semibold text-secondary hover:text-primary transition-colors"
            >
              Legal Topics
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/survey"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#055148] to-[#047B6D] rounded-xl hover:shadow-lg hover:shadow-[#03695D]/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Check My Case
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <XClose className="w-6 h-6 text-fg-secondary stroke-[2px]" />
            ) : (
              <Menu01 className="w-6 h-6 text-fg-secondary stroke-[2px]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              <Link
                href="/about"
                className="block px-4 py-3 text-md font-semibold text-secondary hover:bg-primary_hover rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/injury-types"
                className="block px-4 py-3 text-md font-semibold text-secondary hover:bg-primary_hover rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Injury Types
              </Link>
              <Link
                href="/legal-topics"
                className="block px-4 py-3 text-md font-semibold text-secondary hover:bg-primary_hover rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Legal Topics & Q&A
              </Link>
              <div className="pt-4">
                <Link
                  href="/survey"
                  className="block w-full text-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#055148] to-[#047B6D] rounded-xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Check My Case
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
