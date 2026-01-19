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
import { ArrowRight, SearchLg, MessageChatCircle, BookOpen01, Bookmark } from "@untitledui/icons";

const TOP_STATES = ["All States", "California", "Texas", "Florida", "New York", "Illinois", "Pennsylvania", "Ohio", "Georgia", "North Carolina", "Michigan"];

interface QuestionItem {
  id: string;
  question: string;
  excerpt: string;
  location: string;
  date: string;
  answers: number;
  category: "question" | "guide";
}

const questionsData: QuestionItem[] = [
  { id: "1", question: "Can I sue if I was partially at fault for my car accident?", excerpt: "I was in a car accident last month where the other driver ran a red light, but I was going slightly over the speed limit...", location: "Los Angeles, CA", date: "Jan 15, 2026", answers: 3, category: "question" },
  { id: "2", question: "How long do I have to file a personal injury lawsuit in Texas?", excerpt: "I slipped and fell at a grocery store about 18 months ago and I'm still dealing with back problems...", location: "Houston, TX", date: "Jan 14, 2026", answers: 2, category: "question" },
  { id: "3", question: "What should I do if the insurance company offers a quick settlement?", excerpt: "I was rear-ended last week and the other driver's insurance already called offering me $5,000 to settle...", location: "Miami, FL", date: "Jan 13, 2026", answers: 4, category: "question" },
  { id: "4", question: "Can I get compensation for a dog bite at a friend's house?", excerpt: "My neighbor's dog bit me while I was visiting their home. I needed stitches and had to get rabies shots...", location: "Chicago, IL", date: "Jan 12, 2026", answers: 2, category: "question" },
  { id: "5", question: "Is it worth hiring a lawyer for a minor fender bender?", excerpt: "I was in a small accident with minor damage to my car. I have some neck pain but nothing serious...", location: "Phoenix, AZ", date: "Jan 11, 2026", answers: 5, category: "question" },
  { id: "6", question: "What damages can I recover in a wrongful death lawsuit?", excerpt: "My father was killed in a construction accident. The company is offering a settlement but I don't know if it's fair...", location: "New York, NY", date: "Jan 10, 2026", answers: 3, category: "question" },
];

const legalGuides: QuestionItem[] = [
  { id: "g1", question: "Complete Guide to Car Accident Claims in California", excerpt: "Everything you need to know about filing a car accident claim in California.", location: "California", date: "Jan 2026", answers: 0, category: "guide" },
  { id: "g2", question: "Understanding Comparative Negligence", excerpt: "Learn how being partially at fault affects your ability to recover compensation.", location: "All States", date: "Jan 2026", answers: 0, category: "guide" },
  { id: "g3", question: "What to Do After a Slip and Fall Accident", excerpt: "Step-by-step guide on protecting your rights after a slip and fall.", location: "All States", date: "Jan 2026", answers: 0, category: "guide" },
  { id: "g4", question: "Medical Malpractice Claims: What You Need to Prove", excerpt: "Understanding the elements required to prove a medical malpractice case.", location: "All States", date: "Jan 2026", answers: 0, category: "guide" },
];

function HeroSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section ref={ref} className="relative pt-32 pb-8 sm:pt-40 sm:pb-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? "visible" : "hidden"} className="text-center">
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 uppercase tracking-wider">Legal Resources</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Get Answers. Make Informed Legal Decisions.</motion.h1>
        </motion.div>
      </div>
    </section>
  );
}

function SearchSection({ searchTerm, setSearchTerm, selectedState, setSelectedState }: { searchTerm: string; setSearchTerm: (v: string) => void; selectedState: string; setSelectedState: (v: string) => void }) {
  return (
    <section className="py-6 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <SearchLg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input type="text" placeholder="Search for keywords of your issue" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)} className="px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-48">
            {TOP_STATES.map((state) => (<option key={state} value={state}>{state}</option>))}
          </select>
          <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">Search</button>
        </div>
      </div>
    </section>
  );
}

function TabsSection({ activeTab, setActiveTab, questionsCount, guidesCount }: { activeTab: "questions" | "guides"; setActiveTab: (t: "questions" | "guides") => void; questionsCount: number; guidesCount: number }) {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex gap-8">
        <button onClick={() => setActiveTab("questions")} className={cx("flex items-center gap-2 py-4 border-b-2 font-medium text-sm", activeTab === "questions" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700")}>
          <MessageChatCircle className="w-4 h-4" />Questions & Answers<span className="px-2 py-0.5 rounded-full bg-gray-100 text-xs text-gray-600">{questionsCount}</span>
        </button>
        <button onClick={() => setActiveTab("guides")} className={cx("flex items-center gap-2 py-4 border-b-2 font-medium text-sm", activeTab === "guides" ? "border-blue-600 text-blue-600" : "border-transparent text-gray-500 hover:text-gray-700")}>
          <BookOpen01 className="w-4 h-4" />Legal Guides<span className="px-2 py-0.5 rounded-full bg-gray-100 text-xs text-gray-600">{guidesCount}</span>
        </button>
      </div>
    </section>
  );
}

function QuestionCard({ item }: { item: QuestionItem }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <span className={cx("inline-block px-2.5 py-1 rounded text-xs font-medium mb-3", item.category === "question" ? "bg-orange-100 text-orange-700" : "bg-blue-100 text-blue-700")}>{item.category === "question" ? "Question" : "Guide"}</span>
          <Link href="/" className="block group"><h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">{item.question}</h3></Link>
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">{item.excerpt}</p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-gray-500">
            <span>Asked in {item.location}</span><span>{item.date}</span>
            {item.answers > 0 && <Link href="/" className="text-blue-600 hover:underline">{item.answers} answers</Link>}
          </div>
        </div>
        <button className="hidden sm:flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600"><Bookmark className="w-4 h-4" />Save</button>
      </div>
    </div>
  );
}

function QuestionsListSection({ items, activeTab }: { items: QuestionItem[]; activeTab: "questions" | "guides" }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section ref={ref} className="py-8 bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? "visible" : "hidden"} className="space-y-4">
          {items.length > 0 ? items.map((item) => (<motion.div key={item.id} variants={fadeInUp}><QuestionCard item={item} /></motion.div>)) : <div className="text-center py-12 text-gray-500">No {activeTab === "questions" ? "questions" : "guides"} found.</div>}
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? "visible" : "hidden"} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12 text-center">
          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl font-bold text-white mb-4">Have a specific question about your case?</motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-300 mb-6 max-w-xl mx-auto">Get personalized guidance from verified legal experts.</motion.p>
          <motion.div variants={fadeInUp}><Button color="primary" size="xl" href="/survey" iconTrailing={ArrowRight}>Check My Case Now</Button></motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function LegalTopicsPageContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("All States");
  const [activeTab, setActiveTab] = useState<"questions" | "guides">("questions");

  const filteredQuestions = questionsData.filter((q) => {
    const matchesSearch = searchTerm === "" || q.question.toLowerCase().includes(searchTerm.toLowerCase()) || q.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState === "All States" || q.location.includes(selectedState.split(" ")[0]);
    return matchesSearch && matchesState;
  });

  const filteredGuides = legalGuides.filter((g) => {
    const matchesSearch = searchTerm === "" || g.question.toLowerCase().includes(searchTerm.toLowerCase()) || g.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState === "All States" || g.location === "All States" || g.location.includes(selectedState.split(" ")[0]);
    return matchesSearch && matchesState;
  });

  const currentItems = activeTab === "questions" ? filteredQuestions : filteredGuides;

  return (
    <main className="min-h-screen bg-gray-50">
      <InjuryRightHeader />
      <article>
        <HeroSection />
        <SearchSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} selectedState={selectedState} setSelectedState={setSelectedState} />
        <TabsSection activeTab={activeTab} setActiveTab={setActiveTab} questionsCount={filteredQuestions.length} guidesCount={filteredGuides.length} />
        <QuestionsListSection items={currentItems} activeTab={activeTab} />
        <CTASection />
      </article>
      <Footer />
    </main>
  );
}
