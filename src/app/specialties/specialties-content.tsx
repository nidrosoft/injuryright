"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { InjuryRightHeader } from "@/components/layout/InjuryRightHeader";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  SearchLg,
  Scale01,
  ShieldTick,
  Briefcase02,
  Heart,
  AlertTriangle,
  Users01,
  Home02,
  Zap,
  Activity,
  Target04,
} from "@untitledui/icons";

interface Specialty {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  practiceAreas?: string[];
  insurances: string[];
  caseTypes: string[];
}

const specialties: Specialty[] = [
  {
    id: "personal-injury",
    name: "Personal Injury Lawyer",
    icon: Scale01,
    description: "General personal injury attorneys handling a wide range of accident and negligence cases.",
    practiceAreas: [
      "Auto Accidents",
      "Slip and Fall",
      "Medical Malpractice",
      "Product Liability",
      "Premises Liability",
      "Wrongful Death",
    ],
    insurances: ["All major auto insurers", "Health insurance providers", "Liability carriers"],
    caseTypes: ["Negligence claims", "Insurance disputes", "Settlement negotiations", "Trial litigation"],
  },
  {
    id: "auto-accident",
    name: "Auto Accident Lawyer",
    icon: ShieldTick,
    description: "Specialized attorneys for car, SUV, and passenger vehicle collision claims.",
    insurances: ["Allstate", "GEICO", "State Farm", "Progressive", "Farmers", "Nationwide", "Liberty Mutual"],
    caseTypes: ["Rear-end collisions", "T-bone accidents", "Head-on crashes", "Hit-and-run", "Uninsured motorist claims"],
  },
  {
    id: "motorcycle-accident",
    name: "Motorcycle Accident Lawyer",
    icon: Zap,
    description: "Attorneys experienced in motorcycle crash claims and rider rights.",
    insurances: ["Progressive", "GEICO", "Allstate", "Dairyland", "Harley-Davidson Insurance"],
    caseTypes: ["Lane splitting accidents", "Left-turn collisions", "Road hazard crashes", "Helmet law disputes"],
  },
  {
    id: "truck-accident",
    name: "Truck Accident Lawyer",
    icon: ShieldTick,
    description: "Lawyers handling commercial truck, 18-wheeler, and semi-truck accident cases.",
    insurances: ["Travelers", "Liberty Mutual", "Great West", "Zurich", "Old Republic"],
    caseTypes: ["Jackknife accidents", "Underride collisions", "Cargo spills", "Driver fatigue cases", "FMCSA violations"],
  },
  {
    id: "pedestrian-accident",
    name: "Pedestrian Accident Lawyer",
    icon: Users01,
    description: "Attorneys representing pedestrians injured by vehicles.",
    insurances: ["Auto liability insurers", "Uninsured motorist coverage", "Personal injury protection"],
    caseTypes: ["Crosswalk accidents", "Parking lot injuries", "Hit-and-run pedestrian cases", "School zone accidents"],
  },
  {
    id: "bicycle-accident",
    name: "Bicycle Accident Lawyer",
    icon: Activity,
    description: "Legal experts for cyclists injured in traffic accidents.",
    insurances: ["Auto insurers", "Homeowner's insurance", "Umbrella policies"],
    caseTypes: ["Dooring accidents", "Bike lane collisions", "Intersection crashes", "Road defect injuries"],
  },
  {
    id: "workplace-injury",
    name: "Workplace Injury Lawyer",
    icon: Briefcase02,
    description: "Attorneys for on-the-job injuries and occupational illness claims.",
    insurances: ["State workers' comp funds", "Travelers", "Liberty Mutual", "The Hartford", "AmTrust"],
    caseTypes: ["Repetitive stress injuries", "Equipment accidents", "Toxic exposure", "Occupational diseases"],
  },
  {
    id: "construction-accident",
    name: "Construction Accident Lawyer",
    icon: Briefcase02,
    description: "Specialized attorneys for construction site injuries and OSHA violations.",
    insurances: ["Workers' compensation", "General liability", "Contractor insurance"],
    caseTypes: ["Falls from heights", "Scaffold collapses", "Electrocution", "Struck-by accidents", "Trench collapses"],
  },
  {
    id: "slip-and-fall",
    name: "Slip and Fall Lawyer",
    icon: Home02,
    description: "Premises liability attorneys for slip, trip, and fall injuries.",
    insurances: ["Commercial liability", "Homeowner's insurance", "Business insurance"],
    caseTypes: ["Wet floor accidents", "Stairway falls", "Parking lot injuries", "Ice and snow falls", "Uneven surfaces"],
  },
  {
    id: "medical-malpractice",
    name: "Medical Malpractice Lawyer",
    icon: Heart,
    description: "Attorneys handling healthcare negligence and medical error cases.",
    insurances: ["Medical malpractice insurers", "Hospital liability", "Professional liability"],
    caseTypes: ["Surgical errors", "Misdiagnosis", "Medication errors", "Birth injuries", "Anesthesia mistakes"],
  },
  {
    id: "wrongful-death",
    name: "Wrongful Death Lawyer",
    icon: Heart,
    description: "Compassionate attorneys helping families after fatal accidents.",
    insurances: ["Life insurance", "Liability insurers", "Auto insurance death benefits"],
    caseTypes: ["Fatal car accidents", "Workplace fatalities", "Medical negligence deaths", "Product defect deaths"],
  },
  {
    id: "product-liability",
    name: "Product Liability Lawyer",
    icon: AlertTriangle,
    description: "Attorneys for injuries caused by defective or dangerous products.",
    insurances: ["Product liability insurers", "Manufacturer insurance", "Retailer liability"],
    caseTypes: ["Defective auto parts", "Dangerous drugs", "Faulty medical devices", "Toxic products", "Recalled items"],
  },
  {
    id: "premises-liability",
    name: "Premises Liability Lawyer",
    icon: Home02,
    description: "Attorneys for injuries occurring on someone else's property.",
    insurances: ["Commercial property insurance", "Homeowner's insurance", "Landlord liability"],
    caseTypes: ["Inadequate security", "Swimming pool accidents", "Elevator injuries", "Parking garage incidents"],
  },
  {
    id: "dog-bite",
    name: "Dog Bite Lawyer",
    icon: ShieldTick,
    description: "Attorneys specializing in animal attack and dog bite injury claims.",
    insurances: ["Homeowner's insurance", "Renter's insurance", "Umbrella policies"],
    caseTypes: ["Severe bite injuries", "Child attacks", "Multiple dog attacks", "Landlord liability cases"],
  },
  {
    id: "defective-drug",
    name: "Defective Drug Lawyer",
    icon: AlertTriangle,
    description: "Attorneys handling pharmaceutical injury and dangerous drug cases.",
    insurances: ["Pharmaceutical liability", "Product liability insurers"],
    caseTypes: ["Side effect injuries", "Drug recalls", "Off-label use injuries", "Class action lawsuits"],
  },
  {
    id: "nursing-home-abuse",
    name: "Nursing Home Abuse Lawyer",
    icon: Heart,
    description: "Attorneys protecting elderly victims of nursing home neglect and abuse.",
    insurances: ["Facility liability insurance", "Professional liability", "Medicare/Medicaid"],
    caseTypes: ["Physical abuse", "Neglect", "Bedsores", "Falls", "Medication errors", "Financial exploitation"],
  },
  {
    id: "catastrophic-injury",
    name: "Catastrophic Injury Lawyer",
    icon: AlertTriangle,
    description: "Attorneys for life-altering injuries requiring long-term care.",
    insurances: ["All liability insurers", "Health insurance", "Disability insurance"],
    caseTypes: ["Paralysis", "Amputations", "Severe burns", "Multiple trauma", "Permanent disability"],
  },
  {
    id: "brain-injury",
    name: "Brain Injury Lawyer",
    icon: Activity,
    description: "Specialized attorneys for traumatic brain injury (TBI) cases.",
    insurances: ["Auto insurers", "Health insurance", "Workers' compensation"],
    caseTypes: ["Concussions", "Traumatic brain injuries", "Cognitive impairment", "Long-term care needs"],
  },
  {
    id: "spinal-cord-injury",
    name: "Spinal Cord Injury Lawyer",
    icon: Activity,
    description: "Attorneys handling paralysis and spinal cord damage claims.",
    insurances: ["All major liability carriers", "Health insurers", "Disability providers"],
    caseTypes: ["Paraplegia", "Quadriplegia", "Herniated discs", "Spinal fractures", "Nerve damage"],
  },
  {
    id: "burn-injury",
    name: "Burn Injury Lawyer",
    icon: AlertTriangle,
    description: "Attorneys for severe burn injuries from accidents or negligence.",
    insurances: ["Property insurers", "Product liability", "Workers' compensation"],
    caseTypes: ["Chemical burns", "Electrical burns", "Fire injuries", "Explosion injuries", "Scalding"],
  },
  {
    id: "wrongful-termination",
    name: "Wrongful Termination Lawyer",
    icon: Briefcase02,
    description: "Employment attorneys for wrongful termination and workplace retaliation.",
    insurances: ["Employment practices liability", "Professional liability"],
    caseTypes: ["Discrimination", "Retaliation", "Whistleblower cases", "Contract violations", "FMLA violations"],
  },
  {
    id: "workers-compensation",
    name: "Workers' Compensation Lawyer",
    icon: Briefcase02,
    description: "Attorneys specializing in workers' comp claims and appeals.",
    insurances: ["State workers' comp funds", "Travelers", "Liberty Mutual", "The Hartford", "Zurich"],
    caseTypes: ["Denied claims", "Permanent disability", "Vocational rehabilitation", "Third-party claims"],
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
              <Scale01 className="w-4 h-4 mr-1.5" />
              Legal Specialties
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight"
          >
            Find Lawyers by{" "}
            <span className="text-brand-primary">Specialty</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg sm:text-xl text-tertiary max-w-2xl mx-auto leading-relaxed"
          >
            Browse 20+ personal injury lawyer specialties. Find attorneys with specific 
            expertise in your type of case for the best possible outcome.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              color="primary"
              size="xl"
              href="/survey"
              iconTrailing={ArrowRight}
              className="shadow-lg"
            >
              Check My Case
            </Button>
            <span className="text-sm text-tertiary">Free • No obligation • 2 minutes</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SearchSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSpecialties = searchTerm
    ? specialties.filter(
        (s) =>
          s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          s.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <section ref={ref} className="py-12 sm:py-16 bg-secondary border-b border-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="relative">
            <SearchLg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-quaternary" />
            <input
              type="text"
              placeholder="Search for a legal specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-secondary bg-primary text-primary placeholder:text-quaternary focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-lg"
            />
          </motion.div>

          {searchTerm && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 bg-primary rounded-xl border border-secondary shadow-lg max-h-64 overflow-y-auto"
            >
              {filteredSpecialties.length > 0 ? (
                <ul className="divide-y divide-secondary">
                  {filteredSpecialties.map((specialty) => (
                    <li key={specialty.id}>
                      <Link
                        href="/"
                        className="block p-4 hover:bg-secondary transition-colors"
                      >
                        <div className="font-medium text-primary">{specialty.name}</div>
                        <div className="text-sm text-tertiary mt-1">{specialty.description}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-4 text-center text-tertiary">
                  No specialties found matching "{searchTerm}"
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function SpecialtyCard({ specialty }: { specialty: Specialty }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = specialty.icon;

  return (
    <div className="bg-primary rounded-2xl border border-secondary hover:border-brand-300 hover:shadow-lg transition-all duration-300 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left cursor-pointer"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-brand-50">
              <Icon className="w-6 h-6 text-brand-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary">{specialty.name}</h3>
              <p className="text-sm text-tertiary mt-1 leading-relaxed">
                {specialty.description}
              </p>
            </div>
          </div>
          <ChevronDown
            className={cx(
              "w-5 h-5 text-tertiary flex-shrink-0 transition-transform duration-200",
              isExpanded && "rotate-180"
            )}
          />
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 pt-2 border-t border-secondary">
          {/* Practice Areas */}
          {specialty.practiceAreas && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-secondary mb-2">Practice Areas</h4>
              <div className="flex flex-wrap gap-2">
                {specialty.practiceAreas.map((area) => (
                  <Link
                    key={area}
                    href="/"
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-50 text-brand-700 hover:bg-brand-100 transition-colors"
                  >
                    {area}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Insurances */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-secondary mb-2">
              {specialty.name} Insurances
            </h4>
            <div className="flex flex-wrap gap-2">
              {specialty.insurances.map((insurance) => (
                <Link
                  key={insurance}
                  href="/"
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary hover:bg-tertiary transition-colors"
                >
                  {insurance}
                </Link>
              ))}
            </div>
          </div>

          {/* Case Types */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-secondary mb-2">
              {specialty.name} Case Types
            </h4>
            <div className="flex flex-wrap gap-2">
              {specialty.caseTypes.map((caseType) => (
                <Link
                  key={caseType}
                  href="/"
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary hover:bg-tertiary transition-colors"
                >
                  {caseType}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-4 pt-4 border-t border-secondary">
            <Button
              color="primary"
              size="md"
              href="/survey"
              iconTrailing={ArrowRight}
              className="w-full justify-center"
            >
              Find a {specialty.name}
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function SpecialtiesGrid() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Group specialties by category
  const vehicleAccidents = specialties.filter((s) =>
    ["auto-accident", "motorcycle-accident", "truck-accident", "pedestrian-accident", "bicycle-accident"].includes(s.id)
  );
  const workplaceInjuries = specialties.filter((s) =>
    ["workplace-injury", "construction-accident", "workers-compensation", "wrongful-termination"].includes(s.id)
  );
  const premisesLiability = specialties.filter((s) =>
    ["slip-and-fall", "premises-liability", "dog-bite", "nursing-home-abuse"].includes(s.id)
  );
  const medicalCases = specialties.filter((s) =>
    ["medical-malpractice", "defective-drug", "product-liability"].includes(s.id)
  );
  const catastrophicInjuries = specialties.filter((s) =>
    ["catastrophic-injury", "brain-injury", "spinal-cord-injury", "burn-injury", "wrongful-death"].includes(s.id)
  );
  const generalPI = specialties.filter((s) => s.id === "personal-injury");

  const categories = [
    { title: "General Personal Injury", specialties: generalPI },
    { title: "Vehicle Accidents", specialties: vehicleAccidents },
    { title: "Workplace & Employment", specialties: workplaceInjuries },
    { title: "Premises & Property Liability", specialties: premisesLiability },
    { title: "Medical & Product Cases", specialties: medicalCases },
    { title: "Catastrophic & Fatal Injuries", specialties: catastrophicInjuries },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {categories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={catIndex > 0 ? "mt-12 lg:mt-16" : ""}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-xl sm:text-2xl font-bold text-primary mb-6"
            >
              {category.title}
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
            >
              {category.specialties.map((specialty) => (
                <motion.div key={specialty.id} variants={fadeInUp}>
                  <SpecialtyCard specialty={specialty} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function StatsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    { value: "22", label: "Legal specialties" },
    { value: "$800M+", label: "Recovered for clients" },
    { value: "3,000+", label: "Clients helped" },
    { value: "100%", label: "Free unless you win" },
  ];

  return (
    <section ref={ref} className="py-12 sm:py-16 bg-brand-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-white">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-brand-100">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function WhySpecializationMatters() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const reasons = [
    {
      title: "Deep Case Knowledge",
      description: "Specialized lawyers understand the nuances of your specific case type, from evidence gathering to settlement strategies.",
    },
    {
      title: "Industry Connections",
      description: "They have relationships with expert witnesses, medical professionals, and investigators in their specialty area.",
    },
    {
      title: "Proven Track Record",
      description: "Specialists have handled hundreds of cases like yours and know what it takes to maximize your compensation.",
    },
    {
      title: "Insurance Expertise",
      description: "They know the tactics used by specific insurance companies and how to counter them effectively.",
    },
  ];

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary"
          >
            Why specialization matters
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-tertiary"
          >
            Not all personal injury lawyers are the same. Finding one who specializes in your 
            type of case can significantly impact your outcome.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={fadeInUp}
              className="flex gap-4 p-6 bg-secondary rounded-2xl border border-secondary"
            >
              <CheckCircle className="w-6 h-6 text-brand-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-primary">{reason.title}</h3>
                <p className="mt-2 text-tertiary leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl px-6 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-20 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
            >
              Not sure which specialty you need?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg text-gray-300 leading-relaxed"
            >
              Take our quick assessment and we'll match you with lawyers who specialize 
              in cases exactly like yours.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
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
              <span className="text-gray-400 text-sm">Free • No obligation • 2 min</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function SpecialtiesPageContent() {
  return (
    <main className="min-h-screen">
      <InjuryRightHeader />
      <article>
        <HeroSection />
        <SearchSection />
        <StatsSection />
        <SpecialtiesGrid />
        <WhySpecializationMatters />
        <CTASection />
      </article>
      <Footer />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Personal Injury Lawyer Specialties",
            description:
              "Browse 20+ personal injury lawyer specialties. Find attorneys with specific expertise in auto accidents, medical malpractice, workplace injuries, and more.",
            url: "https://injuryright.com/specialties",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: specialties.map((specialty, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: specialty.name,
                description: specialty.description,
                url: `https://injuryright.com/specialties/${specialty.id}`,
              })),
            },
            publisher: {
              "@type": "Organization",
              name: "InjuryRight",
              url: "https://injuryright.com",
            },
          }),
        }}
      />
    </main>
  );
}
