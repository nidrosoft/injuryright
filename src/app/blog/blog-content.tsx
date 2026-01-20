"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { InjuryRightHeader } from "@/components/layout/InjuryRightHeader";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/base/buttons/button";
import {
  ArrowRight,
  BookOpen01,
  Clock,
  User01,
} from "@untitledui/icons";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "what-to-do-after-car-accident",
    title: "What to Do Immediately After a Car Accident: A Step-by-Step Guide",
    excerpt: "The moments after a car accident can be overwhelming. Learn the critical steps to protect yourself, document the scene, and preserve your legal rights.",
    category: "Car Accidents",
    author: "InjuryRight Team",
    date: "January 15, 2026",
    readTime: "8 min read",
    image: "/images/blog/car-accident.jpg",
  },
  {
    id: "understanding-personal-injury-settlements",
    title: "Understanding Personal Injury Settlements: What to Expect",
    excerpt: "Curious about how personal injury settlements work? We break down the process, timeline, and factors that affect your potential compensation.",
    category: "Legal Guide",
    author: "InjuryRight Team",
    date: "January 12, 2026",
    readTime: "10 min read",
    image: "/images/blog/settlement.jpg",
  },
  {
    id: "dealing-with-insurance-adjusters",
    title: "How to Deal with Insurance Adjusters After an Injury",
    excerpt: "Insurance adjusters aren't on your side. Learn what to say, what to avoid, and how to protect your claim when speaking with insurance companies.",
    category: "Insurance",
    author: "InjuryRight Team",
    date: "January 10, 2026",
    readTime: "7 min read",
    image: "/images/blog/insurance.jpg",
  },
  {
    id: "medical-treatment-after-accident",
    title: "Why Medical Treatment Matters for Your Personal Injury Case",
    excerpt: "Delaying or skipping medical treatment can hurt your case. Understand why documentation and consistent care are crucial for your claim.",
    category: "Medical",
    author: "InjuryRight Team",
    date: "January 8, 2026",
    readTime: "6 min read",
    image: "/images/blog/medical.jpg",
  },
  {
    id: "slip-and-fall-liability",
    title: "Slip and Fall Accidents: Who Is Liable?",
    excerpt: "Property owners have a duty to maintain safe premises. Learn about premises liability and when you may have a valid slip and fall claim.",
    category: "Premises Liability",
    author: "InjuryRight Team",
    date: "January 5, 2026",
    readTime: "7 min read",
    image: "/images/blog/slip-fall.jpg",
  },
  {
    id: "choosing-personal-injury-lawyer",
    title: "How to Choose the Right Personal Injury Lawyer for Your Case",
    excerpt: "Not all lawyers are created equal. Discover what to look for, questions to ask, and red flags to avoid when selecting legal representation.",
    category: "Legal Guide",
    author: "InjuryRight Team",
    date: "January 3, 2026",
    readTime: "9 min read",
    image: "/images/blog/lawyer.jpg",
  },
];

const categories = ["All", "Car Accidents", "Legal Guide", "Insurance", "Medical", "Premises Liability"];

function HeroSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 lg:pt-44 lg:pb-20 bg-gradient-to-br from-primary via-primary to-brand-primary_alt/10 overflow-hidden"
    >
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
              <BookOpen01 className="w-4 h-4 mr-1.5" />
              Life After Impact
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight"
          >
            Resources for{" "}
            <span className="text-brand-primary">Recovery</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-lg sm:text-xl text-tertiary max-w-2xl mx-auto leading-relaxed"
          >
            Stories, tips, and resources to help accident victims navigate recovery, 
            understand their rights, and rebuild their lives.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.id}`} className="group block">
      <article className="bg-primary rounded-2xl border border-secondary overflow-hidden hover:shadow-lg hover:border-brand-300 transition-all duration-300">
        <div className="aspect-[16/9] bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center">
          <BookOpen01 className="w-12 h-12 text-brand-400" />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-brand-50 text-brand-700">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-quaternary">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
          <h3 className="text-lg font-bold text-primary group-hover:text-brand-primary transition-colors line-clamp-2 mb-2">
            {post.title}
          </h3>
          <p className="text-sm text-tertiary line-clamp-2 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-2 text-xs text-quaternary">
            <User01 className="w-3.5 h-3.5" />
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

function BlogGrid() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Category Filter */}
          <motion.div variants={fadeInUp} className="mb-10 flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-brand-600 text-white"
                    : "bg-primary text-secondary hover:bg-tertiary"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Blog Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {blogPosts.map((post) => (
              <motion.div key={post.id} variants={fadeInUp}>
                <BlogCard post={post} />
              </motion.div>
            ))}
          </motion.div>

          {/* Load More */}
          <motion.div variants={fadeInUp} className="mt-12 text-center">
            <p className="text-tertiary mb-4">More articles coming soon!</p>
            <Button color="secondary" size="lg" href="/survey">
              Check My Case Instead
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl px-6 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-20 overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-primary/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white"
            >
              Ready to take the next step?
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg text-gray-300 leading-relaxed"
            >
              Get a free case evaluation and connect with trusted legal experts who can help.
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

export function BlogPageContent() {
  return (
    <main className="min-h-screen">
      <InjuryRightHeader />
      <article>
        <HeroSection />
        <BlogGrid />
        <CTASection />
      </article>
      <Footer />
    </main>
  );
}
