"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { InjuryRightHeader } from "@/components/layout/InjuryRightHeader";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/base/buttons/button";
import { cx } from "@/utils/cx";
import {
  CheckCircle,
  Clock,
  CurrencyDollar,
  ShieldTick,
  ArrowRight,
  AlertCircle,
  File06,
  Zap,
  Users01,
  Building07,
} from "@untitledui/icons";

interface FundingFormData {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  email: string;
  phone: string;
  dob: string;
  agreeToConsent: boolean;
  signature: string;
}

const usStates = [
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

const howItWorksSteps = [
  {
    icon: File06,
    title: "Apply",
    description: "Apply free online or by phone. No credit risk. No obligation. No Upfront Fees.",
  },
  {
    icon: Clock,
    title: "Approval Process",
    description: "We will quickly and efficiently evaluate your case and make a decision on how much we can fund.",
  },
  {
    icon: Zap,
    title: "Get Funded",
    description: "Get funded within 24-48 hrs of request. Fast. Easy. Let us do all the work.",
  },
];

const benefits = [
  {
    icon: CurrencyDollar,
    title: "You Pay Nothing",
    description: "Payments come from the award at the settlement of your case.",
  },
  {
    icon: ShieldTick,
    title: "No Repayments",
    description: "If you lose your case you do not have to repay your advance.",
  },
  {
    icon: CheckCircle,
    title: "Our Fee",
    description: "Determined by a number of factors but not paid until your settlement funds become available.",
  },
];

function HeroSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-44 lg:pb-24 bg-gradient-to-br from-[#055148] via-[#03695D] to-[#047B6D] overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/20 text-white">
              <CurrencyDollar className="w-4 h-4 mr-1.5" />
              Settlement Funding Solutions
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
          >
            Receive money from your future settlement,{" "}
            <span className="text-[#7DD3C8]">now.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Tired of waiting for your case to finally settle? Learn how InjuryRight Funding 
            can help you gain immediate financial security.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              color="secondary"
              size="xl"
              href="#apply-now"
              iconTrailing={ArrowRight}
              className="shadow-lg bg-white text-brand-primary hover:bg-gray-50"
            >
              Get Money Now
            </Button>
            <span className="text-sm text-white/60">Free application • No obligation</span>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 text-white/90">
              <CheckCircle className="w-5 h-5 text-[#7DD3C8]" />
              <span className="text-sm font-medium">No monthly payments</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white/90">
              <CheckCircle className="w-5 h-5 text-[#7DD3C8]" />
              <span className="text-sm font-medium">No repayment if you lose</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white/90">
              <CheckCircle className="w-5 h-5 text-[#7DD3C8]" />
              <span className="text-sm font-medium">Fast & free application</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function IntroSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary leading-tight">
              InjuryRight Funding can help you secure your personal finances
            </h2>
            <p className="mt-6 text-lg text-tertiary leading-relaxed">
              Injured in an accident? Need financial support now? InjuryRight Funding 
              can help you secure your personal finances while you wait for your case to settle.
            </p>
            <p className="mt-4 text-lg text-tertiary leading-relaxed">
              If you've been injured in an accident due to someone else's negligence, 
              InjuryRight Funding can help you through the financial shortfalls that 
              litigation may cause. InjuryRight will provide the funding you need, so 
              your attorney has time to get the result you deserve.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="bg-brand-50 rounded-3xl p-8 border border-brand-100">
              <h3 className="text-xl font-bold text-primary mb-6">
                InjuryRight Funding serves clients nationwide
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary">Get money now — you do not have to pay us back if you do not win your case</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary">No monthly interest payments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary">Applying is fast and free</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span className="text-secondary">Available in all 50 states</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-secondary">
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
            How it works
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-tertiary"
          >
            Getting the funding you need is simple and straightforward.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {howItWorksSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                className="relative bg-primary rounded-2xl p-8 border border-secondary shadow-sm"
              >
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-brand-50 mb-6">
                  <Icon className="w-7 h-7 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-tertiary leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function NonRecourseSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-primary">
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
            How Does A Non-Recourse Cash Advance Work?
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                className="text-center p-8 bg-secondary rounded-2xl border border-secondary"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-50 mx-auto mb-6">
                  <Icon className="w-8 h-8 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                <p className="text-tertiary leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function LiensSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-3 mb-4">
              <Building07 className="w-8 h-8 text-[#7DD3C8]" />
              <span className="text-sm font-medium text-[#7DD3C8] uppercase tracking-wider">For Attorneys</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Liens and LOPs
            </h2>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              InjuryRight can advance top dollar against your medical lien/LOP portfolio.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Contact us today to discuss various programs specifically tailored for 
              advancing you the liquidity you need, while also protecting your clients' interests.
            </p>
            <Button
              color="secondary"
              size="lg"
              href="/contact"
              className="mt-8"
              iconTrailing={ArrowRight}
            >
              Contact Us Today
            </Button>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <Users01 className="w-12 h-12 text-[#7DD3C8] mb-6" />
              <h3 className="text-xl font-bold mb-4">Partner Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#7DD3C8] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Top dollar advances against your portfolio</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#7DD3C8] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Tailored programs for your practice</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#7DD3C8] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Protect your clients' interests</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#7DD3C8] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Quick and efficient process</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ApplicationFormSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FundingFormData>();

  const agreeToConsent = watch("agreeToConsent");

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    setIsDrawing(true);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = "touches" in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = "touches" in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;
    
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#000";
    ctx.lineTo(x, y);
    ctx.stroke();
    setHasSignature(true);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
  };

  const onSubmit = async (data: FundingFormData) => {
    if (!hasSignature) {
      alert("Please provide your signature");
      return;
    }
    
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    clearSignature();
  };

  return (
    <section ref={ref} id="apply-now" className="py-16 sm:py-20 bg-secondary scroll-mt-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary"
          >
            Apply for Funding
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-lg text-tertiary"
          >
            Complete the form below to start your application. It's fast, free, and there's no obligation.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="bg-primary rounded-3xl p-6 sm:p-8 lg:p-10 border border-secondary shadow-lg">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-success-100 mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-success-600" />
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  Application Submitted!
                </h3>
                <p className="mt-3 text-tertiary max-w-sm mx-auto">
                  Thank you for your application. Our team will review your case and 
                  contact you within 24-48 hours.
                </p>
                <Button
                  color="secondary"
                  size="lg"
                  className="mt-8"
                  onClick={() => setIsSubmitted(false)}
                >
                  Submit Another Application
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-secondary mb-1.5">
                      First Name <span className="text-error-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      {...register("firstName", { required: "First name is required" })}
                      className={cx(
                        "w-full px-4 py-3 rounded-xl border bg-primary text-primary placeholder:text-quaternary focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all",
                        errors.firstName ? "border-error-500" : "border-secondary"
                      )}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="mt-1.5 text-sm text-error-500 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-secondary mb-1.5">
                      Last Name <span className="text-error-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      {...register("lastName", { required: "Last name is required" })}
                      className={cx(
                        "w-full px-4 py-3 rounded-xl border bg-primary text-primary placeholder:text-quaternary focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all",
                        errors.lastName ? "border-error-500" : "border-secondary"
                      )}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="mt-1.5 text-sm text-error-500 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-secondary mb-1.5">
                    Address <span className="text-error-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    {...register("address", { required: "Address is required" })}
                    className={cx(
                      "w-full px-4 py-3 rounded-xl border bg-primary text-primary placeholder:text-quaternary focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all",
                      errors.address ? "border-error-500" : "border-secondary"
                    )}
                    placeholder="123 Main Street"
                  />
                  {errors.address && (
                    <p className="mt-1.5 text-sm text-error-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.address.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="city" className="block text-sm font-medium text-secondary mb-1.5">
                      City <span className="text-error-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      {...register("city", { required: "City is required" })}
                      className={cx(
                        "w-full px-4 py-3 rounded-xl border bg-primary text-primary placeholder:text-quaternary focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all",
                        errors.city ? "border-error-500" : "border-secondary"
                      )}
                      placeholder="New York"
                    />
                    {errors.city && (
                      <p className="mt-1.5 text-sm text-error-500 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.city.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-secondary mb-1.5">
                      State <span className="text-error-500">*</span>
                    </label>
                    <select
                      id="state"
                      {...register("state", { required: "State is required" })}
                      className={cx(
                        "w-full px-4 py-3 rounded-xl border bg-primary text-primary focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all appearance-none cursor-pointer",
                        errors.state ? "border-error-500" : "border-secondary"
                      )}
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: "right 0.5rem center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "1.5em 1.5em",
                      }}
                    >
                      <option value="">Select...</option>
                      {usStates.map((state) => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                    {errors.state && (
                      <p className="mt-1.5 text-sm text-error-500 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.state.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-secondary mb-1.5">
                      Zip Code <span className="text-error-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      {...register("zipCode", { required: "Zip code is required" })}
                      className={cx(
                        "w-full px-4 py-3 rounded-xl border bg-primary text-primary placeholder:text-quaternary focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all",
                        errors.zipCode ? "border-error-500" : "border-secondary"
                      )}
                      placeholder="10001"
                    />
                    {errors.zipCode && (
                      <p className="mt-1.5 text-sm text-error-500 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.zipCode.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1.5">
                      Email <span className="text-error-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className={cx(
                        "w-full px-4 py-3 rounded-xl border bg-primary text-primary placeholder:text-quaternary focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all",
                        errors.email ? "border-error-500" : "border-secondary"
                      )}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-sm text-error-500 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-1.5">
                      Phone Number <span className="text-error-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register("phone", { required: "Phone number is required" })}
                      className={cx(
                        "w-full px-4 py-3 rounded-xl border bg-primary text-primary placeholder:text-quaternary focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all",
                        errors.phone ? "border-error-500" : "border-secondary"
                      )}
                      placeholder="(555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-sm text-error-500 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="dob" className="block text-sm font-medium text-secondary mb-1.5">
                    Date of Birth <span className="text-error-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="dob"
                    {...register("dob", { required: "Date of birth is required" })}
                    className={cx(
                      "w-full px-4 py-3 rounded-xl border bg-primary text-primary focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all",
                      errors.dob ? "border-error-500" : "border-secondary"
                    )}
                  />
                  {errors.dob && (
                    <p className="mt-1.5 text-sm text-error-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.dob.message}
                    </p>
                  )}
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h4 className="font-semibold text-primary mb-4">Consent Form</h4>
                  <p className="text-sm text-tertiary leading-relaxed mb-4">
                    I hereby authorize Injury Right Funding, its agents and/or contractors 
                    ("InjuryRight") to contact my Qualified Settlement Fund Administrator 
                    and/or my attorney to confirm the amount, status, or details of any 
                    settlement, award, or claim I may be entitled to under the terms of 
                    the settlement of my lawsuit.
                  </p>
                  <p className="text-sm text-tertiary leading-relaxed mb-4">
                    I understand and acknowledge that this consent allows the release of 
                    information related to my claims and the settlement of my lawsuit and 
                    that any such released information may be disclosed by Injury Right to 
                    third parties including InjuryRight's affiliates and financing partners 
                    and I hereby consent to such disclosure. I understand that I have the 
                    right to revoke this consent, in writing, at any time, by contacting 
                    Injury Right at info@injuryright.com.
                  </p>
                  <p className="text-sm text-tertiary leading-relaxed mb-6">
                    A photocopy or facsimile of this consent shall be valid and given the 
                    same force and effect as the original.
                  </p>

                  <div className="flex items-start gap-3 mb-6">
                    <input
                      type="checkbox"
                      id="agreeToConsent"
                      {...register("agreeToConsent", { required: "You must agree to the consent form" })}
                      className="mt-1 w-5 h-5 rounded border-gray-300 text-brand-600 focus:ring-brand-500"
                    />
                    <label htmlFor="agreeToConsent" className="text-sm text-secondary">
                      I agree to the consent form. <span className="text-error-500">*</span>
                    </label>
                  </div>
                  {errors.agreeToConsent && (
                    <p className="mb-4 text-sm text-error-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.agreeToConsent.message}
                    </p>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Signature <span className="text-error-500">*</span>
                    </label>
                    <div className="relative">
                      <canvas
                        ref={canvasRef}
                        width={400}
                        height={150}
                        className="w-full border-2 border-dashed border-gray-300 rounded-xl bg-white cursor-crosshair touch-none"
                        onMouseDown={startDrawing}
                        onMouseMove={draw}
                        onMouseUp={stopDrawing}
                        onMouseLeave={stopDrawing}
                        onTouchStart={startDrawing}
                        onTouchMove={draw}
                        onTouchEnd={stopDrawing}
                      />
                      {!hasSignature && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <span className="text-gray-400 text-sm">Sign here</span>
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={clearSignature}
                      className="mt-2 text-sm text-brand-600 hover:text-brand-700 font-medium"
                    >
                      Clear Signature
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  color="primary"
                  size="xl"
                  className="w-full justify-center"
                  disabled={isSubmitting || !agreeToConsent}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <ArrowRight className="w-5 h-5" />
                      Submit Application
                    </span>
                  )}
                </Button>

                <p className="text-xs text-quaternary text-center">
                  By submitting this form, you agree to our{" "}
                  <a href="/data-privacy" className="text-brand-primary hover:underline">
                    Privacy Policy
                  </a>
                  . We'll never share your information without your consent.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function SettlementFundingContent() {
  return (
    <main className="min-h-screen">
      <InjuryRightHeader />
      <article>
        <HeroSection />
        <IntroSection />
        <HowItWorksSection />
        <NonRecourseSection />
        <LiensSection />
        <ApplicationFormSection />
      </article>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialProduct",
            name: "InjuryRight Settlement Funding",
            description:
              "Non-recourse cash advance for personal injury plaintiffs. Get money from your future settlement now.",
            provider: {
              "@type": "Organization",
              name: "InjuryRight",
              url: "https://injuryright.com",
            },
            url: "https://injuryright.com/settlement-funding",
          }),
        }}
      />
    </main>
  );
}
