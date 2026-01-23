"use client";

import type { ReactNode } from "react";
import { useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "@untitledui/icons";
import { 
  Button as AriaButton, 
  Dialog as AriaDialog, 
  DialogTrigger as AriaDialogTrigger, 
  Popover as AriaPopover 
} from "react-aria-components";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";
import { 
  Bus,
  Truck01,
  Target01,
  Users01,
  Building07,
  AlertCircle,
  Heart,
  Scale01,
  MarkerPin01,
  CurrencyDollar,
  BookOpen01,
  Star01,
  Mail01,
} from "@untitledui/icons";

const practiceAreaItems = [
  { title: "Car Accident Lawyers", subtitle: "Get help after a vehicle collision", href: "/survey", Icon: Bus },
  { title: "Truck Accident Lawyers", subtitle: "Commercial truck injury claims", href: "/survey", Icon: Truck01 },
  { title: "Motorcycle Accident Lawyers", subtitle: "Motorcycle crash representation", href: "/survey", Icon: Target01 },
  { title: "Pedestrian Accident Lawyers", subtitle: "Hit by a vehicle while walking", href: "/survey", Icon: Users01 },
  { title: "Slip & Fall Lawyers", subtitle: "Premises liability cases", href: "/survey", Icon: Building07 },
  { title: "Workplace Injury Lawyers", subtitle: "On-the-job accident claims", href: "/survey", Icon: AlertCircle },
  { title: "Medical Negligence Lawyers", subtitle: "Healthcare malpractice cases", href: "/survey", Icon: Heart },
  { title: "Wrongful Death Lawyers", subtitle: "Loss of a loved one claims", href: "/survey", Icon: Scale01 },
];

const locationItems = [
  "New York City",
  "Los Angeles", 
  "Chicago",
  "Houston",
  "Phoenix",
  "Miami",
  "Dallas",
  "Atlanta",
  "San Francisco",
  "Seattle",
  "Boston",
  "Denver",
];

const PracticeAreaDropdown = () => (
  <div className="w-full max-w-2xl p-2">
    <nav className="overflow-hidden rounded-2xl bg-primary shadow-lg ring-1 ring-secondary_alt">
      <div className="p-3 sm:p-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-tertiary mb-3">Practice Areas</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
          {practiceAreaItems.map(({ title, subtitle, href, Icon }) => (
            <li key={title}>
              <Link
                href={href}
                className="flex items-start gap-3 rounded-xl p-3 transition duration-100 ease-linear hover:bg-primary_hover"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <Icon className="size-5 stroke-[2px] text-fg-brand-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-primary">{title}</span>
                  <span className="text-xs text-tertiary line-clamp-1">{subtitle}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-secondary px-4 py-3">
        <Link 
          href="/injury-types" 
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-secondary hover:text-brand-secondary_hover transition-colors"
        >
          View all practice areas
          <ArrowRight className="size-4 stroke-[2.5px]" />
        </Link>
      </div>
    </nav>
  </div>
);

const popularCities = [
  "Atlanta, GA",
  "Boston, MA",
  "Chicago, IL",
  "Dallas, TX",
  "Houston, TX",
  "Los Angeles, CA",
  "Miami, FL",
  "New York, NY",
  "Philadelphia, PA",
  "Phoenix, AZ",
  "San Antonio, TX",
  "San Jose, CA",
  "Seattle, WA",
];

const statesList = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
  "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma",
  "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming",
];

const desktopStatesLimit = 24;

const resourceItems = [
  { title: "Settlement Funding Solutions", subtitle: "Financial help while you wait", href: "/settlement-funding", Icon: CurrencyDollar },
  { title: "Life After Impact Blog", subtitle: "Stories and recovery resources", href: "/blog", Icon: BookOpen01 },
  { title: "Verified Reviews", subtitle: "Real client testimonials", href: "/verified-reviews", Icon: Star01 },
  { title: "Contact Us", subtitle: "Get in touch with our team", href: "/contact", Icon: Mail01 },
];

const ResourcesDropdown = () => (
  <div className="w-full max-w-sm p-2">
    <nav className="overflow-hidden rounded-2xl bg-primary shadow-lg ring-1 ring-secondary_alt">
      <div className="p-3 sm:p-4">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-tertiary mb-3">Resources</h3>
        <ul className="space-y-1">
          {resourceItems.map(({ title, subtitle, href, Icon }) => (
            <li key={title}>
              <Link
                href={href}
                className="flex items-start gap-3 rounded-xl p-3 transition duration-100 ease-linear hover:bg-primary_hover"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <Icon className="size-5 stroke-[2px] text-fg-brand-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-primary">{title}</span>
                  <span className="text-xs text-tertiary line-clamp-1">{subtitle}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  </div>
);

const LocationDropdown = () => (
  <div className="w-full min-w-[700px] max-w-3xl p-2">
    <nav className="overflow-hidden rounded-2xl bg-primary shadow-lg ring-1 ring-secondary_alt">
      <div className="p-4 grid grid-cols-2 gap-6">
        {/* Popular Cities Column */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-tertiary mb-3">Browse by Popular Cities</h3>
          <ul className="space-y-0.5">
            {popularCities.map((city) => (
              <li key={city}>
                <Link
                  href="/survey"
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-brand-600 hover:bg-primary_hover transition duration-100"
                >
                  {city}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* States Column */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-tertiary mb-3">Browse by State</h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-0.5">
            {statesList.slice(0, desktopStatesLimit).map((state) => (
              <li key={state}>
                <Link
                  href="/survey"
                  className="block rounded-lg px-2 py-1.5 text-sm text-brand-600 hover:bg-primary_hover transition duration-100"
                >
                  {state}
                </Link>
              </li>
            ))}
          </ul>
          <Link 
            href="/locations" 
            className="inline-flex items-center gap-1.5 mt-3 px-2 text-sm font-semibold text-brand-secondary hover:text-brand-secondary_hover transition-colors"
          >
            View all states
            <ArrowRight className="size-4 stroke-[2.5px]" />
          </Link>
        </div>
      </div>
      <div className="border-t border-secondary px-4 py-3">
        <Link 
          href="/locations" 
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-secondary hover:text-brand-secondary_hover transition-colors"
        >
          View all locations
          <ArrowRight className="size-4 stroke-[2.5px]" />
        </Link>
      </div>
    </nav>
  </div>
);

type HeaderNavItem = {
  label: string;
  href?: string;
  menu?: ReactNode;
};

const headerNavItems: HeaderNavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Practice Areas", menu: <PracticeAreaDropdown /> },
  { label: "Locations", menu: <LocationDropdown /> },
  { label: "Injury Types", href: "/injury-types" },
  { label: "Legal Topics & Q&A", href: "/legal-topics" },
  { label: "Resources", menu: <ResourcesDropdown /> },
];

const MobileNavItem = (props: { className?: string; label: string; href?: string; children?: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (props.href) {
    return (
      <li>
        <Link href={props.href} className="flex items-center justify-between px-5 py-4 text-base font-semibold text-primary hover:bg-brand-50 active:bg-brand-100 transition-colors border-b border-gray-100">
          {props.label}
          <ArrowRight className="w-4 h-4 text-gray-400" />
        </Link>
      </li>
    );
  }

  return (
    <li className="flex flex-col border-b border-gray-100">
      <button
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-5 py-4 text-base font-semibold text-primary hover:bg-brand-50 active:bg-brand-100 transition-colors"
      >
        {props.label}
        <ChevronDown
          className={cx("size-5 stroke-[2px] text-gray-400 transition duration-200 ease-out", isOpen ? "-rotate-180" : "rotate-0")}
        />
      </button>
      {isOpen && (
        <div className="bg-gray-50 px-3 py-3 border-t border-gray-100">
          {props.children}
        </div>
      )}
    </li>
  );
};

const MobilePracticeAreas = () => (
  <div className="space-y-1">
    {practiceAreaItems.slice(0, 6).map(({ title, href }) => (
      <Link
        key={title}
        href={href}
        className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-brand-600 hover:bg-white rounded-lg transition-colors"
      >
        {title}
      </Link>
    ))}
    <Link
      href="/injury-types"
      className="block px-3 py-2.5 text-sm font-semibold text-brand-600 hover:bg-white rounded-lg transition-colors"
    >
      View all practice areas →
    </Link>
  </div>
);

const MobileLocations = () => (
  <div className="space-y-1">
    {popularCities.slice(0, 6).map((city) => (
      <Link
        key={city}
        href="/survey"
        className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-brand-600 hover:bg-white rounded-lg transition-colors"
      >
        {city}
      </Link>
    ))}
    <Link
      href="/locations"
      className="block px-3 py-2.5 text-sm font-semibold text-brand-600 hover:bg-white rounded-lg transition-colors"
    >
      View all locations →
    </Link>
  </div>
);

const MobileResources = () => (
  <div className="space-y-1">
    {resourceItems.map(({ title, href }) => (
      <Link
        key={title}
        href={href}
        className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-brand-600 hover:bg-white rounded-lg transition-colors"
      >
        {title}
      </Link>
    ))}
  </div>
);

const MobileFooter = () => {
  return (
    <div className="flex flex-col gap-3 px-5 py-6 bg-gray-50 border-t border-gray-200">
      <Button color="primary" size="lg" href="/survey" className="w-full justify-center shadow-md">
        Check My Case
      </Button>
      <p className="text-center text-xs text-gray-500">Free • No obligation • 2 minutes</p>
    </div>
  );
};

export const InjuryRightHeader = () => {
  const headerRef = useRef<HTMLElement>(null);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 flex h-18 w-full items-center justify-center bg-primary/95 backdrop-blur-sm border-b border-secondary md:h-20 has-aria-expanded:bg-primary"
    >
      <div className="flex size-full max-w-7xl flex-1 items-center pr-3 pl-4 md:px-8">
        <div className="flex w-full justify-between gap-4">
          <div className="flex flex-1 items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="InjuryRight" className="w-10 h-10" />
              <span className="text-xl font-bold text-primary">
                Injury<span className="text-brand-primary">Right</span>
              </span>
            </Link>

            {/* Desktop navigation */}
            <nav className="max-md:hidden">
              <ul className="flex items-center gap-1">
                {headerNavItems.map((navItem) => (
                  <li key={navItem.label}>
                    {navItem.menu ? (
                      <AriaDialogTrigger>
                        <AriaButton className="flex cursor-pointer items-center gap-0.5 rounded-lg px-3 py-2 text-sm font-semibold text-secondary outline-focus-ring transition duration-100 ease-linear hover:bg-primary_hover hover:text-secondary_hover focus-visible:outline-2 focus-visible:outline-offset-2">
                          <span>{navItem.label}</span>
                          <ChevronDown className="size-4 rotate-0 stroke-[2.5px] text-fg-quaternary transition duration-100 ease-linear in-aria-expanded:-rotate-180" />
                        </AriaButton>

                        <AriaPopover
                          className={({ isEntering, isExiting }) =>
                            cx(
                              "hidden origin-top will-change-transform md:block",
                              isEntering && "duration-200 ease-out animate-in fade-in slide-in-from-top-1 zoom-in-95",
                              isExiting && "duration-150 ease-in animate-out fade-out slide-out-to-top-1 zoom-out-95",
                            )
                          }
                          offset={8}
                          containerPadding={16}
                        >
                          <AriaDialog className="outline-hidden">
                            {navItem.menu}
                          </AriaDialog>
                        </AriaPopover>
                      </AriaDialogTrigger>
                    ) : (
                      <Link
                        href={navItem.href || "#"}
                        className="flex cursor-pointer items-center gap-0.5 rounded-lg px-3 py-2 text-sm font-semibold text-secondary outline-focus-ring transition duration-100 ease-linear hover:bg-primary_hover hover:text-secondary_hover focus:outline-offset-2 focus-visible:outline-2"
                      >
                        <span>{navItem.label}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <Button color="primary" size="md" href="/survey">
              Check My Case
            </Button>
          </div>

          {/* Mobile menu trigger */}
          <AriaDialogTrigger>
            <AriaButton
              aria-label="Toggle navigation menu"
              className={({ isFocusVisible, isHovered }) =>
                cx(
                  "group ml-auto cursor-pointer rounded-lg p-2 md:hidden",
                  isHovered && "bg-primary_hover",
                  isFocusVisible && "outline-2 outline-offset-2 outline-focus-ring",
                )
              }
            >
              <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  className="hidden text-secondary group-aria-expanded:block"
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="text-secondary group-aria-expanded:hidden"
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </AriaButton>
            <AriaPopover
              triggerRef={headerRef}
              className="h-[calc(100vh-72px)] scrollbar-hide w-full overflow-y-auto shadow-lg md:hidden"
              offset={0}
              crossOffset={20}
              containerPadding={0}
              placement="bottom left"
            >
              <AriaDialog className="outline-hidden">
                <nav className="w-full bg-white shadow-lg">
                  <ul className="flex flex-col">
                    <MobileNavItem label="About Us" href="/about" />
                    <MobileNavItem label="Practice Areas">
                      <MobilePracticeAreas />
                    </MobileNavItem>
                    <MobileNavItem label="Locations">
                      <MobileLocations />
                    </MobileNavItem>
                    <MobileNavItem label="Injury Types" href="/injury-types" />
                    <MobileNavItem label="Legal Topics & Q&A" href="/legal-topics" />
                    <MobileNavItem label="Resources">
                      <MobileResources />
                    </MobileNavItem>
                  </ul>
                  <MobileFooter />
                </nav>
              </AriaDialog>
            </AriaPopover>
          </AriaDialogTrigger>
        </div>
      </div>
    </header>
  );
};
