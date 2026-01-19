"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cx } from "@/utils/cx";
import { Button } from "@/components/base/buttons/button";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  ShieldTick,
  AlertTriangle,
  Heart,
  Home02,
  Users01,
  Activity,
  Zap,
  Briefcase02,
  Clock,
  Phone,
  Mail01,
  User01,
  MarkerPin01,
  File06,
  HelpCircle,
  Scale01,
  MessageChatCircle,
  Truck02,
} from "@untitledui/icons";

// US States for dropdown
const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming", "District of Columbia"
];

// Form schema for contact info
const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Survey data types
interface SurveyData {
  injuryType: string;
  accidentTiming: string;
  medicalTreatment: string;
  priorContact: string;
  state: string;
  city: string;
  faultStatus: string;
  helpNeeded: string;
  description: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

// Question option type
interface QuestionOption {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

// Question configuration
interface QuestionConfig {
  id: string;
  title: string;
  subtitle?: string;
  type: "single" | "grid" | "dropdown" | "textarea" | "contact";
  options?: QuestionOption[];
}

const questions: QuestionConfig[] = [
  {
    id: "injuryType",
    title: "Let's get started! What type of injury or accident were you involved in?",
    subtitle: "Select the option that best describes your situation.",
    type: "grid",
    options: [
      { id: "car-accident", label: "Car Accident", icon: ShieldTick },
      { id: "truck-accident", label: "Truck Accident", icon: Truck02 },
      { id: "motorcycle-accident", label: "Motorcycle Accident", icon: Zap },
      { id: "pedestrian-accident", label: "Pedestrian Accident", icon: Users01 },
      { id: "bicycle-accident", label: "Bicycle Accident", icon: Activity },
      { id: "rideshare-accident", label: "Rideshare Accident", icon: ShieldTick },
      { id: "slip-and-fall", label: "Slip & Fall / Premises", icon: Home02 },
      { id: "dog-bite", label: "Dog Bite / Animal Attack", icon: AlertTriangle },
      { id: "medical-negligence", label: "Medical Negligence", icon: Heart },
      { id: "catastrophic-injury", label: "Catastrophic Injury", icon: AlertTriangle },
      { id: "wrongful-death", label: "Wrongful Death", icon: Heart },
      { id: "other", label: "Other Personal Injury", icon: HelpCircle },
    ],
  },
  {
    id: "accidentTiming",
    title: "When did the accident or injury occur?",
    subtitle: "This helps us understand your timeline.",
    type: "single",
    options: [
      { id: "less-than-1-month", label: "Less than 1 month ago", icon: Clock },
      { id: "1-3-months", label: "1–3 months ago", icon: Clock },
      { id: "3-6-months", label: "3–6 months ago", icon: Clock },
      { id: "6-12-months", label: "6–12 months ago", icon: Clock },
      { id: "over-12-months", label: "Over 12 months ago", icon: Clock },
    ],
  },
  {
    id: "medicalTreatment",
    title: "Did you receive medical treatment for your injuries?",
    subtitle: "Medical documentation can strengthen your case.",
    type: "single",
    options: [
      { id: "emergency-room", label: "Yes – Emergency room or hospital", icon: Heart },
      { id: "doctor-urgent-care", label: "Yes – Doctor or urgent care", icon: Heart },
      { id: "plan-to", label: "Not yet, but I plan to", icon: Clock },
      { id: "no-treatment", label: "No medical treatment", icon: HelpCircle },
    ],
  },
  {
    id: "priorContact",
    title: "Have you spoken with an insurance company or lawyer yet?",
    subtitle: "It's okay if you have – we can still help.",
    type: "single",
    options: [
      { id: "insurance-only", label: "Yes – Insurance only", icon: ShieldTick },
      { id: "lawyer", label: "Yes – A lawyer", icon: Scale01 },
      { id: "not-yet", label: "No – Not yet", icon: HelpCircle },
      { id: "contacted-declined", label: "I was contacted but didn't move forward", icon: MessageChatCircle },
    ],
  },
  {
    id: "location",
    title: "Where did the accident happen?",
    subtitle: "This helps us connect you with lawyers in your area.",
    type: "dropdown",
  },
  {
    id: "faultStatus",
    title: "Do you believe you were at fault for the accident?",
    subtitle: "Be honest – partial fault doesn't always prevent recovery.",
    type: "single",
    options: [
      { id: "not-at-fault", label: "No, I was not at fault", icon: CheckCircle },
      { id: "partially-at-fault", label: "I may have been partially at fault", icon: HelpCircle },
      { id: "at-fault", label: "Yes, I was at fault", icon: AlertTriangle },
      { id: "not-sure", label: "I'm not sure", icon: HelpCircle },
    ],
  },
  {
    id: "helpNeeded",
    title: "What would you like help with right now?",
    subtitle: "Select the option that best matches your needs.",
    type: "single",
    options: [
      { id: "legal-options", label: "Understanding my legal options", icon: Scale01 },
      { id: "find-lawyer", label: "Finding the right lawyer", icon: Users01 },
      { id: "case-worth", label: "Knowing what my case may be worth", icon: Briefcase02 },
      { id: "insurance-help", label: "Help dealing with insurance", icon: ShieldTick },
      { id: "guidance", label: "Not sure – I need guidance", icon: HelpCircle },
    ],
  },
  {
    id: "description",
    title: "Please briefly describe what happened.",
    subtitle: "Include where it happened, what caused the injury, and any vehicles or people involved.",
    type: "textarea",
  },
  {
    id: "contact",
    title: "Where can we send your results and next steps?",
    subtitle: "We'll review your information and connect you with the right resources.",
    type: "contact",
  },
];

const TOTAL_STEPS = questions.length;

function ProgressBar({ currentStep }: { currentStep: number }) {
  const progress = ((currentStep + 1) / TOTAL_STEPS) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-brand-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
      <div className="mt-2 text-center text-sm text-tertiary">
        Step {currentStep + 1} of {TOTAL_STEPS}
      </div>
    </div>
  );
}

function GridOptions({
  options,
  selected,
  onSelect,
}: {
  options: QuestionOption[];
  selected: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {options.map((option) => {
        const Icon = option.icon;
        const isSelected = selected === option.id;

        return (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={cx(
              "relative flex flex-col items-center justify-center p-5 sm:p-6 rounded-xl border-2 transition-all duration-200 cursor-pointer group min-h-[120px]",
              isSelected
                ? "border-brand-600 bg-brand-50"
                : "border-gray-200 bg-white hover:border-brand-300 hover:bg-gray-50"
            )}
          >
            <div
              className={cx(
                "absolute top-3 right-3 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                isSelected
                  ? "border-brand-600 bg-brand-600"
                  : "border-gray-300 bg-white"
              )}
            >
              {isSelected && <CheckCircle className="w-3 h-3 text-white" />}
            </div>
            <div
              className={cx(
                "flex items-center justify-center w-12 h-12 rounded-lg mb-3 transition-colors",
                isSelected ? "bg-brand-100" : "bg-gray-100 group-hover:bg-brand-50"
              )}
            >
              <Icon
                className={cx(
                  "w-6 h-6 transition-colors",
                  isSelected ? "text-brand-600" : "text-gray-500 group-hover:text-brand-500"
                )}
              />
            </div>
            <span
              className={cx(
                "text-sm font-medium text-center transition-colors",
                isSelected ? "text-brand-700" : "text-gray-700"
              )}
            >
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function SingleOptions({
  options,
  selected,
  onSelect,
}: {
  options: QuestionOption[];
  selected: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="space-y-3">
      {options.map((option) => {
        const isSelected = selected === option.id;

        return (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={cx(
              "w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer group text-left",
              isSelected
                ? "border-brand-600 bg-brand-50"
                : "border-gray-200 bg-white hover:border-brand-300 hover:bg-gray-50"
            )}
          >
            <span
              className={cx(
                "font-medium transition-colors",
                isSelected ? "text-brand-700" : "text-gray-700"
              )}
            >
              {option.label}
            </span>
            <div
              className={cx(
                "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0",
                isSelected
                  ? "border-brand-600 bg-brand-600"
                  : "border-gray-300 bg-white"
              )}
            >
              {isSelected && <CheckCircle className="w-3 h-3 text-white" />}
            </div>
          </button>
        );
      })}
    </div>
  );
}

function LocationStep({
  state,
  city,
  onStateChange,
  onCityChange,
}: {
  state: string;
  city: string;
  onStateChange: (value: string) => void;
  onCityChange: (value: string) => void;
}) {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1.5">
          State <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <MarkerPin01 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            id="state"
            value={state}
            onChange={(e) => onStateChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent appearance-none cursor-pointer"
          >
            <option value="">Select your state</option>
            {US_STATES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1.5">
          City <span className="text-gray-400">(optional)</span>
        </label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => onCityChange(e.target.value)}
          placeholder="Enter your city"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
        />
      </div>
    </div>
  );
}

function DescriptionStep({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <div className="relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Describe what happened..."
          rows={6}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
        />
      </div>
      <p className="mt-2 text-sm text-gray-500">
        This is optional but helps us better understand your situation.
      </p>
    </div>
  );
}

function ContactStep({
  register,
  errors,
}: {
  register: ReturnType<typeof useForm<ContactFormData>>["register"];
  errors: ReturnType<typeof useForm<ContactFormData>>["formState"]["errors"];
}) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5">
            First Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User01 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              id="firstName"
              {...register("firstName")}
              placeholder="First name"
              className={cx(
                "w-full pl-10 pr-4 py-3 rounded-xl border bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent",
                errors.firstName ? "border-red-500" : "border-gray-300"
              )}
            />
          </div>
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName")}
            placeholder="Last name"
            className={cx(
              "w-full px-4 py-3 rounded-xl border bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent",
              errors.lastName ? "border-red-500" : "border-gray-300"
            )}
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
          Email Address <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <Mail01 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="you@example.com"
            className={cx(
              "w-full pl-10 pr-4 py-3 rounded-xl border bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent",
              errors.email ? "border-red-500" : "border-gray-300"
            )}
          />
        </div>
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="tel"
            id="phone"
            {...register("phone")}
            placeholder="(555) 123-4567"
            className={cx(
              "w-full pl-10 pr-4 py-3 rounded-xl border bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent",
              errors.phone ? "border-red-500" : "border-gray-300"
            )}
          />
        </div>
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <p className="text-xs text-gray-500 mt-4">
        By submitting, you agree to be contacted regarding your request. This does not create 
        an attorney-client relationship.
      </p>
    </div>
  );
}

function SuccessScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-8"
    >
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-brand-100 mx-auto mb-6">
        <CheckCircle className="w-10 h-10 text-brand-600" />
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
        Thank you for your submission!
      </h2>

      <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
        We'll review your information and show you your available options. If appropriate, 
        you may be connected with a trusted legal professional.
      </p>

      <div className="bg-brand-50 rounded-2xl p-6 max-w-md mx-auto mb-8">
        <h3 className="font-semibold text-brand-800 mb-4">What happens next</h3>
        <div className="space-y-3 text-left">
          {[
            "We review your case details",
            "Match you with qualified attorneys in your area",
            "A legal professional may reach out within 24 hours",
          ].map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-600 text-white text-sm font-medium flex-shrink-0">
                {index + 1}
              </span>
              <span className="text-brand-700">{step}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 text-white font-medium hover:bg-brand-700 transition-colors"
        >
          Return to Home
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        There is no cost or obligation.
      </p>
    </motion.div>
  );
}

export function SurveyPageContent() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Survey answers state
  const [answers, setAnswers] = useState<Partial<SurveyData>>({});

  // Contact form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const currentQuestion = questions[currentStep];

  const updateAnswer = useCallback((key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }, []);

  const canProceed = useCallback(() => {
    const question = questions[currentStep];

    switch (question.type) {
      case "grid":
      case "single":
        return !!answers[question.id as keyof SurveyData];
      case "dropdown":
        return !!answers.state;
      case "textarea":
        return true; // Optional
      case "contact":
        return true; // Validated separately
      default:
        return false;
    }
  }, [currentStep, answers]);

  const handleNext = useCallback(() => {
    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  }, [currentStep]);

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  const triggerConfetti = () => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#0D9488", "#14B8A6", "#2DD4BF", "#5EEAD4", "#99F6E4"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  const onSubmit = async (contactData: ContactFormData) => {
    setIsSubmitting(true);

    const fullData: SurveyData = {
      ...answers,
      ...contactData,
    } as SurveyData;

    // Simulate API call
    try {
      // In production, this would send to your backend
      console.log("Survey submission:", fullData);

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSubmitted(true);
      triggerConfetti();
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactSubmit = handleSubmit(onSubmit);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-600">
              <Scale01 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">InjuryRight</span>
          </Link>

          {!isSubmitted && (
            <span className="text-sm text-gray-500">Free Case Evaluation</span>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
        {isSubmitted ? (
          <SuccessScreen />
        ) : (
          <>
            <ProgressBar currentStep={currentStep} />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {/* Back Button */}
                {currentStep > 0 && (
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-1 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm font-medium">Back</span>
                  </button>
                )}

                {/* Question */}
                <div className="mb-8">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {currentQuestion.title}
                  </h1>
                  {currentQuestion.subtitle && (
                    <p className="text-gray-600">{currentQuestion.subtitle}</p>
                  )}
                </div>

                {/* Answer Options */}
                <div className="mb-8">
                  {currentQuestion.type === "grid" && currentQuestion.options && (
                    <GridOptions
                      options={currentQuestion.options}
                      selected={answers[currentQuestion.id as keyof SurveyData] || ""}
                      onSelect={(id) => updateAnswer(currentQuestion.id, id)}
                    />
                  )}

                  {currentQuestion.type === "single" && currentQuestion.options && (
                    <SingleOptions
                      options={currentQuestion.options}
                      selected={answers[currentQuestion.id as keyof SurveyData] || ""}
                      onSelect={(id) => updateAnswer(currentQuestion.id, id)}
                    />
                  )}

                  {currentQuestion.type === "dropdown" && (
                    <LocationStep
                      state={answers.state || ""}
                      city={answers.city || ""}
                      onStateChange={(value) => updateAnswer("state", value)}
                      onCityChange={(value) => updateAnswer("city", value)}
                    />
                  )}

                  {currentQuestion.type === "textarea" && (
                    <DescriptionStep
                      value={answers.description || ""}
                      onChange={(value) => updateAnswer("description", value)}
                    />
                  )}

                  {currentQuestion.type === "contact" && (
                    <ContactStep register={register} errors={errors} />
                  )}
                </div>

                {/* Next/Submit Button */}
                {currentQuestion.type === "contact" ? (
                  <button
                    onClick={handleContactSubmit}
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-600 text-white font-semibold text-lg hover:bg-brand-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit My Case</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                ) : (
                  <button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-600 text-white font-semibold text-lg hover:bg-brand-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}

                {/* Trust indicators */}
                <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <ShieldTick className="w-4 h-4 text-brand-600" />
                    100% Free
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-brand-600" />
                    No Obligation
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </>
        )}
      </div>
    </main>
  );
}
