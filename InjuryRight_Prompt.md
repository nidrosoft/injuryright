# InjuryRight.com - Complete Website Development System Prompt

## 🎯 Project Overview

Build **InjuryRight.com**, a modern, conversion-optimized personal injury lawyer matching platform. This is a legal-tech SaaS landing page that helps accident victims connect with trusted personal injury lawyers. The design should be clean, trustworthy, empathetic, and professional—similar to how Ethos.com revolutionized life insurance or ZocDoc transformed healthcare appointments.

### Mission Statement
"The legal system should work for accident victims. InjuryRight gives power back to people injured in accidents by providing clear, transparent access to legal guidance and verified experts."

### Target Audience
- U.S. citizens and residents injured in accidents within the past 12 months
- People seeking legal representation for personal injury cases
- Law firms looking to acquire qualified leads

---

## 🎨 Design System

### Brand Identity
- **Tone**: Trustworthy, empathetic, professional, modern, accessible
- **Feel**: Clean, approachable, reassuring (not aggressive like typical injury lawyer ads)
- **Aesthetic**: Modern fintech/health-tech inspired (reference: Ethos.com, ZocDoc.com)

### Primary Color Palette

```css
:root {
  /* Primary Brand Colors - Deep Teal/Green */
  --primary-500: #03695D;        /* Main brand color - use for CTAs, headers */
  --primary-600: #055148;        /* Darker shade - gradient top-left */
  --primary-400: #047B6D;        /* Lighter shade - gradient bottom-right */
  --primary-700: #034840;        /* Extra dark - hover states */
  --primary-300: #0A9688;        /* Light accent */
  --primary-100: #E6F5F3;        /* Very light background tint */
  
  /* Gradient */
  --gradient-primary: linear-gradient(135deg, #055148 0%, #047B6D 100%);
  --gradient-hero: linear-gradient(145deg, #055148 0%, #03695D 50%, #047B6D 100%);
  
  /* Neutrals */
  --white: #FFFFFF;
  --gray-50: #F9FAFB;
  --gray-100: #F3F4F6;
  --gray-200: #E5E7EB;
  --gray-300: #D1D5DB;
  --gray-400: #9CA3AF;
  --gray-500: #6B7280;
  --gray-600: #4B5563;
  --gray-700: #374151;
  --gray-800: #1F2937;
  --gray-900: #111827;
  
  /* Semantic Colors */
  --success: #10B981;
  --success-light: #D1FAE5;
  --warning: #F59E0B;
  --warning-light: #FEF3C7;
  --error: #EF4444;
  --error-light: #FEE2E2;
  --info: #3B82F6;
  --info-light: #DBEAFE;
  
  /* Trust Indicators */
  --trustpilot-green: #00B67A;
  --star-gold: #FFB800;
}
```

### Typography

```css
/* Use Google Fonts - Import these */
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');

:root {
  /* Font Families */
  --font-display: 'DM Sans', sans-serif;      /* Headlines, hero text */
  --font-body: 'Inter', sans-serif;            /* Body text, paragraphs */
  
  /* Font Sizes - Mobile First */
  --text-xs: 0.75rem;      /* 12px */
  --text-sm: 0.875rem;     /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg: 1.125rem;     /* 18px */
  --text-xl: 1.25rem;      /* 20px */
  --text-2xl: 1.5rem;      /* 24px */
  --text-3xl: 1.875rem;    /* 30px */
  --text-4xl: 2.25rem;     /* 36px */
  --text-5xl: 3rem;        /* 48px */
  --text-6xl: 3.75rem;     /* 60px */
  --text-7xl: 4.5rem;      /* 72px */
  
  /* Line Heights */
  --leading-tight: 1.1;
  --leading-snug: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  
  /* Font Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
}
```

### Spacing System

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
  
  /* Section Spacing */
  --section-padding-mobile: var(--space-16);
  --section-padding-desktop: var(--space-24);
  
  /* Container */
  --container-max: 1280px;
  --container-padding: var(--space-4);
}
```

### Border Radius

```css
:root {
  --radius-sm: 0.375rem;   /* 6px */
  --radius-md: 0.5rem;     /* 8px */
  --radius-lg: 0.75rem;    /* 12px */
  --radius-xl: 1rem;       /* 16px */
  --radius-2xl: 1.5rem;    /* 24px */
  --radius-full: 9999px;   /* Pill shape */
}
```

### Shadows

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  
  /* Colored shadows for cards */
  --shadow-primary: 0 10px 40px -10px rgba(3, 105, 93, 0.3);
  --shadow-card: 0 4px 20px rgba(0, 0, 0, 0.08);
  --shadow-card-hover: 0 8px 30px rgba(0, 0, 0, 0.12);
}
```

---

## 🛠 Technical Stack

### Required Dependencies

```json
{
  "dependencies": {
    "next": "^14.x",
    "react": "^18.x",
    "react-dom": "^18.x",
    "framer-motion": "^11.x",
    "tailwindcss": "^3.x",
    "@headlessui/react": "^2.x",
    "@heroicons/react": "^2.x",
    "react-hook-form": "^7.x",
    "zod": "^3.x",
    "@hookform/resolvers": "^3.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x",
    "embla-carousel-react": "^8.x",
    "react-intersection-observer": "^9.x",
    "next-seo": "^6.x"
  },
  "devDependencies": {
    "@types/node": "^20.x",
    "@types/react": "^18.x",
    "typescript": "^5.x",
    "autoprefixer": "^10.x",
    "postcss": "^8.x"
  }
}
```

### Project Structure

```
injuryright/
├── app/
│   ├── layout.tsx                 # Root layout with fonts, metadata
│   ├── page.tsx                   # Homepage
│   ├── about/
│   │   └── page.tsx               # About Us page
│   ├── verified-reviews/
│   │   └── page.tsx               # Verified Reviews page
│   ├── contact/
│   │   └── page.tsx               # Contact Us page
│   ├── for-law-firms/
│   │   └── page.tsx               # B2B Law Firms page
│   ├── data-privacy/
│   │   └── page.tsx               # Data & Privacy page
│   ├── survey/
│   │   └── page.tsx               # Qualification Survey (multi-step form)
│   ├── injury-types/
│   │   ├── page.tsx               # Injury Types overview
│   │   ├── car-accident/
│   │   │   └── page.tsx
│   │   ├── truck-accident/
│   │   │   └── page.tsx
│   │   ├── motorcycle-accident/
│   │   │   └── page.tsx
│   │   ├── slip-and-fall/
│   │   │   └── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx           # Dynamic injury type pages
│   ├── legal-topics/
│   │   └── page.tsx               # Legal Topics & Q&A
│   ├── blog/
│   │   ├── page.tsx               # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx           # Blog post
│   ├── insurance-carriers/
│   │   └── page.tsx               # Insurance carriers page
│   └── specialties/
│       └── page.tsx               # Specialties page
├── components/
│   ├── ui/                        # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Accordion.tsx
│   │   ├── Badge.tsx
│   │   ├── Modal.tsx
│   │   └── Container.tsx
│   ├── layout/
│   │   ├── Header.tsx             # Main navigation
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   └── Navigation.tsx
│   ├── sections/                  # Page sections
│   │   ├── Hero.tsx
│   │   ├── ValueProposition.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Comparison.tsx
│   │   ├── FAQ.tsx
│   │   ├── LawyerDirectory.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTA.tsx
│   ├── survey/                    # Survey components
│   │   ├── SurveyWrapper.tsx
│   │   ├── SurveyStep.tsx
│   │   ├── ProgressBar.tsx
│   │   └── SurveyComplete.tsx
│   └── shared/
│       ├── TrustBadges.tsx
│       ├── StatsCounter.tsx
│       └── AnimatedSection.tsx
├── lib/
│   ├── utils.ts                   # Utility functions (cn, etc.)
│   ├── constants.ts               # Site-wide constants
│   └── validations.ts             # Zod schemas
├── hooks/
│   ├── useScrollAnimation.ts
│   ├── useMediaQuery.ts
│   └── useSurvey.ts
├── styles/
│   └── globals.css
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
└── content/
    ├── injury-types.ts            # Injury type content data
    ├── faq.ts                     # FAQ content
    └── navigation.ts              # Navigation structure
```

---

## ⚡ Animation Guidelines

### Framer Motion Variants

```typescript
// lib/animations.ts

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

// For number counting animations
export const countUp = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

// Page transitions
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 }
};
```

### Animation Best Practices

1. **Hero Section**: Staggered fade-in for headline, subheadline, CTAs
2. **Stats/Numbers**: Count-up animation when in viewport
3. **Cards**: Slight scale + shadow on hover
4. **Scroll Animations**: Elements fade-in-up when entering viewport
5. **Survey Steps**: Slide transitions between steps
6. **Mobile Menu**: Slide-in from right with backdrop fade
7. **Accordion/FAQ**: Smooth height animation with rotate icon
8. **Buttons**: Subtle scale (1.02) on hover, press state (0.98)
9. **Page Load**: Skeleton loaders for async content

---

## 📄 Page Content & Structure

### Homepage (`/`)

#### Section 1: Hero
```
HEADLINE: "Injured? Get clarity on your legal options."

SUBHEADLINE: "Understand what to do next after an accident and connect with trusted personal injury professionals in minutes at no cost to you."

KEY VALUE POINTS (horizontal badges):
• Free case review
• No obligation  
• Simple, guided process
• Trusted legal professionals

TRUST INDICATOR: "⭐ 4.8 on Trustpilot • Trusted by 3,000+ people nationwide"

CTA BUTTON: "Check My Case" → links to /survey
```

#### Section 2: Value Proposition
```
HEADLINE: "The #1 place to find out what your accident is worth"

FEATURES (icon + text grid):
• Check your eligibility in minutes
• Connect with trusted experts
• Free unless you win
• Over $800M recovered for Americans nationwide

CTA: "Check My Case"
```

#### Section 3: How It Works
```
HEADLINE: "We evaluate your accident in real time, so you can see your options in minutes."

STEPS (sliding/carousel animation):
Step 1/3: "Answer online questions" 
  - Icon: Clipboard/form icon
  - Brief description

Step 2/3: "See your potential compensation instantly"
  - Icon: Calculator/dollar icon
  - Brief description

Step 3/3: "Connect with trusted experts"
  - Icon: Handshake/people icon
  - Brief description

CTA: "Check My Case"
```

#### Section 4: Comparison Table
```
HEADLINE: "Get paid what you deserve"
SUBHEADLINE: "Join thousands of Americans who recovered millions in settlements"

TWO COLUMN COMPARISON:
InjuryRight (left column - checkmarks):
✅ Verified Reviews
✅ AI Matchmaking
✅ Unbiased Guidance
✅ Simple Step-by-Step Guides
✅ Free Unless You Win (highlighted)

Traditional Law Firms (right column - X marks):
❌ Mixed quality reviews
❌ Random matching
❌ May push their own interests
❌ Complex processes
❌ Unclear fee structures

CTA: "Check My Case"
```

#### Section 5: Free Unless You Win
```
HEADLINE: "Free Unless You Win"

BODY: "We've simplified the personal injury process so you can understand your options and get matched with trusted experts from your phone or computer. Your case review and guidance are completely free."

VISUAL: Illustration or animation showing the process
```

#### Section 6: FAQ Accordion
```
HEADLINE: "Frequently Asked Questions"

Q1: "What is InjuryRight and how does it work?"
A: "InjuryRight helps you understand your accident options and connect with trusted experts who can guide you. You provide a few details about your accident, and we match you with professionals based on your situation and location."

Q2: "Who can use InjuryRight?"
A: "U.S. citizens and residents who have been injured in an accident within the past 12 months can apply. We help people across a wide range of accidents, including vehicle, slip & fall, workplace incidents, and more."

Q3: "How much compensation could I get?"
A: "The amount varies based on your accident type, severity, and losses. InjuryRight helps estimate what you could be owed and connects you with experts who will fight to maximize your recovery."

Q4: "Do I need to pay anything upfront?"
A: "No. You never pay InjuryRight. Any fees are only paid to your lawyer if your case is successful, and there are no hidden costs."

Q5: "How do you match me with experts?"
A: "We use AI-powered matchmaking algorithm to connect you with verified personal injury professionals who are best suited for your specific accident type and location."

Q6: "Are the reviews and professionals trustworthy?"
A: "Yes. All reviews are verified, and we only work with pre-vetted, highly-rated experts. Our goal is to provide transparent and unbiased guidance."

Q7: "How quickly can I see my options?"
A: "You can check your eligibility and see your potential compensation in minutes. Once matched, experts will guide you through the next steps efficiently."

Q8: "What if I'm not sure about the details of my accident?"
A: "That's fine! Just provide as much information as you can. Our experts can help clarify details and guide you through what matters most for your case."

Q9: "Can I cancel or stop using InjuryRight?"
A: "Yes. You're never obligated to move forward. If you decide not to pursue your case, you can stop at any time — there are no fees or penalties."

Q10: "How do I get in touch if I have questions?"
A: "Our team is here to help. You can reach us by email at support@injuryright.com or by calling our support line. We'll assist you anytime."
```

#### Section 7: Lawyer Directory by Location
```
HEADLINE: "Connect with lawyers and injury professionals near you"

DESIGN: Dropdown selector with cities, each city expands to show practice areas

EXAMPLE - New York City (expandable):
• New York City Car Accident Lawyers
• New York City Truck Accident Lawyers
• New York City Motorcycle Accident Lawyers
• New York City Pedestrian Accident Lawyers
• New York City Bicycle Accident Lawyers
• New York City Rideshare Accident Lawyers (Uber/Lyft)
• New York City Slip & Fall / Premises Injury Lawyers
• New York City Workplace Injury Lawyers
• New York City Dog Bite / Animal Attack Lawyers
• New York City Medical Negligence Lawyers
• New York City Catastrophic Injury Lawyers
• New York City Wrongful Death Lawyers
• New York City Other Personal Injury Lawyers

NOTE: All links redirect to survey for now
```

---

### About Us Page (`/about`)

```
SECTION 1 - The Problem:
HEADLINE: "The legal system should work for accident victims"

BODY: "But it doesn't. After an accident, people are left navigating confusing legal options. They call around for recommendations. They wait for responses. They try to figure out if a lawyer is right for them, or if they'll be charged upfront. Meanwhile, injuries, bills, and stress keep piling up.

In any other industry, companies delivering such a poor experience would fail. But in personal injury, accident victims often lack guidance and market power."

---

SECTION 2 - Our Solution:
HEADLINE: "We give power to accident victims"

BODY: "By giving people clear, transparent access to legal guidance and verified experts, we put control back in their hands. Victims can see which lawyers are best suited for their case, compare options, and choose who to work with. This makes the process fairer, faster, and more predictable — helping victims get the compensation they deserve."

---

SECTION 3 - What We Do:
HEADLINE: "We believe accident victims deserve better"

BODY: "InjuryRight helps thousands of people every month connect with personal injury lawyers who are right for them. Whether it's car accidents, slip & fall, workplace injuries, or other types of claims, we help people find professionals who are:"

BULLET POINTS:
• Verified and trusted
• Specialized in their accident type
• Located nearby or available virtually
• Able to guide them clearly through every step

---

SECTION 4 - For Lawyers:
HEADLINE: "And we help lawyers focus on what matters"

BODY: "Lawyers didn't study for years to spend their time sorting through unqualified leads. InjuryRight helps attorneys reach the right clients efficiently — matching them to people who truly need their expertise. This means lawyers can focus on winning cases, and victims can focus on recovery."

---

SECTION 5 - Our Vision:
HEADLINE: "We're building a home for accident victims"

BODY: "A place where anyone injured in an accident can find the support and guidance they need. A place where people can explore their options, understand potential compensation, and connect with trusted experts — all without upfront costs. A place where victims have transparency, clarity, and control over the process.

We won't stop until every accident victim has the legal support experience they expect and deserve.

And that's what we work on, every day."
```

---

### Verified Reviews Page (`/verified-reviews`)

```
HEADLINE: "How reviews work on InjuryRight.com"
SUBHEADLINE: "Reviews on InjuryRight are different. Here's why"

INTRO: "Legal reviews are a crucial part of your accident recovery process, which is why we take them seriously. We're committed to showing you feedback from verified clients that is both honest and helpful. But what makes InjuryRight reviews better than other sites? And how can you write meaningful reviews that guide other accident victims? Read on to find out!"

VALUE PROPS (3 cards):

Card 1:
✅ Verified and Trustworthy
"Every review comes from a real client who worked with the lawyer. No fake ratings, no bias. Just honest experiences you can trust."

Card 2:
✅ Informative and Helpful
"Reviews include insights about communication, responsiveness, and results, helping you understand how each lawyer handles cases like yours."

Card 3:
✅ Guidance for Writing Reviews
"Sharing your experience can help others find the right legal support. We make it easy to leave reviews that are concise, clear, and meaningful."

---

FAQ SECTION (11 questions - use accordion):

Q1: "How are InjuryRight reviews different?"
A: "All reviews on InjuryRight come from verified clients who worked with the lawyer on an actual case. We display two types of feedback: InjuryRight Client Reviews and Partner Reviews. Our goal is to provide reviews that are accurate, trustworthy, and representative.

Two things set InjuryRight reviews apart from others:

1. Our reviews come from real clients
On many platforms, reviews can be written by anyone — even people who never worked with the lawyer, or sometimes the lawyers themselves. On InjuryRight, every review is submitted by a verified client who actually interacted with the attorney about their case.

2. We show a representative sample of feedback
We ask clients for feedback after every case, which ensures we capture a wide range of experiences — not just the extremely positive or negative ones. This gives a balanced, accurate picture of how each lawyer handles cases like yours."

Q2: "What is an InjuryRight Client Review?"
A: "After your case has begun, we ask clients for feedback about their experience with their lawyer. Following our moderation process, these reviews are published to help other accident victims find the legal help they need. InjuryRight Client Reviews are shown alongside Partner Reviews, which are collected by independent survey providers specializing in legal client feedback."

Q3: "What is a Partner Review?"
A: "To provide even more representative feedback, we include Partner Reviews for some lawyers. These are collected by independent third-party survey providers who ensure reviews come only from real clients. Partner Reviews are clearly marked and are moderated according to InjuryRight's review guidelines."

Q4: "How do I leave a review for my lawyer?"
A: "After your case begins, you'll receive an email asking for feedback. Follow the link to leave your review. You can also sign into your InjuryRight account at any time and click 'Leave Feedback' for any lawyer you worked with. Reviews can be submitted up to 120 days after your case starts."

Q5: "Does InjuryRight only post positive reviews?"
A: "Absolutely not. We publish positive, negative, and neutral reviews to give a balanced, trustworthy view of a lawyer's work. You can post reviews anonymously. Lawyers are prohibited from influencing reviews or retaliating against clients who post critical feedback. If you encounter any issues, please contact us."

Q6: "Does InjuryRight moderate reviews?"
A: "Yes. Every review is examined by our moderation team to ensure compliance with our guidelines and community standards. This applies to both InjuryRight Client Reviews and Partner Reviews."

Q7: "Are there instances when a review may not be posted?"
A: "We aim to publish any review that meets our guidelines. To give your review the best chance of being posted, avoid:
• Profanity: Offensive or vulgar language will not be published.
• Personal information: Don't include phone numbers, emails, or other identifying details.
• Pricing specifics: You may share your opinion on fairness of fees, but avoid details about insurance or settlement amounts unless it's general.
• Claims about legal accuracy: Focus on your experience, not whether the lawyer's strategy was 'right' or 'wrong.'
• Promotional content: Reviews should relate only to the client's experience with the lawyer."

Q8: "Does InjuryRight ever remove published reviews?"
A: "If you believe a review violates our guidelines, you can report it with evidence. We may remove reviews that clearly violate our standards. However, differing opinions or negative experiences that comply with our guidelines are not removed, as we aim to maintain a balanced, representative review system."

Q9: "Why does InjuryRight moderate reviews so carefully?"
A: "We want every accident victim to have access to trustworthy and reliable information. Careful moderation ensures reviews reflect real client experiences, helping you make informed decisions while maintaining fairness for lawyers."

Q10: "I submitted a review. Why hasn't it been posted yet?"
A: "Each review is reviewed by a real moderator, so it can take a few days. Some lawyers also choose not to display their reviews publicly. Don't let this stop you from leaving feedback — we read every review and value your experience."

Q11: "How can I leave a great review?"
A: "• Keep it relevant: Focus on information future clients would find helpful.
• Answer key questions: Would you hire this lawyer again? This helps others gauge overall satisfaction.
• Be concise: A paragraph or two is enough. Make it easy to read.
• Be specific: Explain why you feel the lawyer handled your case well or poorly.
• Include useful details: Location, responsiveness, communication, or accessibility can help others.
• Be authentic: Write your own review — don't rely on AI or let lawyers dictate your words.

Your review helps create a better experience for accident victims nationwide. Thank you for sharing your insight!"
```

---

### For Law Firms Page (`/for-law-firms`)

```
HERO:
HEADLINE: "Case growth you can count on"
SUBHEADLINE: "Reach more qualified injury clients, streamline intake, and gain clear visibility into your firm's performance — all with one AI-powered legal directory."
CTA: "Get Started"

---

TRUST BAR:
"Trusted by leading personal injury law firms to consistently deliver case volume"

---

SECTION: Powering Law Firms
HEADLINE: "Powering law firms of all sizes"
BODY: "From solo PI attorneys to multi-office firms and national practices, successful personal injury law firms grow with InjuryRight."

---

FEATURES (2 main feature blocks):

Feature 1:
TITLE: "InjuryRight Client Reach Network"
BODY: "Receive direct case inquiries from search, legal content hubs, referral partners, and AI-driven discovery."

Feature 2:
TITLE: "AI Client Intake & Case Qualification"
BODY: "Never miss a case. Our AI intake assistant answers inquiries, qualifies injury claims, and books consultations automatically."

---

FEATURE LIST:
HEADLINE: "Essential features for high-converting law firm experiences"
• Client intake & pre-screening
• Consultation scheduling
• Case qualification
• Verified client reviews
• Performance reporting

CTA: "Get Started"
```

---

### Qualification Survey (`/survey`)

Multi-step form with progress indicator. Each question is its own step.

```
STEP 1:
HEADLINE: "Let's get started! What type of injury or accident were you involved in?"
OPTIONS (cards with emoji icons):
🚗 Car Accident
🚛 Truck Accident
🏍️ Motorcycle Accident
🚶 Pedestrian Accident
🚲 Bicycle Accident
🚕 Rideshare Accident (Uber / Lyft)
🧱 Slip & Fall / Premises Injury
🐕 Dog Bite or Animal Attack
🏥 Medical Negligence
⚠️ Catastrophic Injury (Brain, Spinal, Amputation)
🕊️ Wrongful Death
🩹 Other Personal Injury

---

STEP 2:
HEADLINE: "When did the accident or injury occur?"
OPTIONS (radio buttons):
• Less than 1 month ago
• 1–3 months ago
• 3–6 months ago
• 6–12 months ago
• Over 12 months ago

---

STEP 3:
HEADLINE: "Did you receive medical treatment for your injuries?"
OPTIONS:
• Yes – Emergency room or hospital
• Yes – Doctor or urgent care
• Not yet, but I plan to
• No medical treatment

---

STEP 4:
HEADLINE: "Have you spoken with an insurance company or lawyer yet?"
OPTIONS:
• Yes – Insurance only
• Yes – A lawyer
• No – Not yet
• I was contacted but didn't move forward

---

STEP 5:
HEADLINE: "Where did the accident happen?"
INPUTS:
• State (dropdown - all US states)
• City (optional text input)

---

STEP 6:
HEADLINE: "Do you believe you were at fault for the accident?"
OPTIONS:
• No, I was not at fault
• I may have been partially at fault
• Yes, I was at fault
• I'm not sure

---

STEP 7:
HEADLINE: "What would you like help with right now?"
OPTIONS:
• Understanding my legal options
• Finding the right lawyer
• Knowing what my case may be worth
• Help dealing with insurance
• Not sure – I need guidance

---

STEP 8:
HEADLINE: "Please briefly describe what happened."
HELPER TEXT: "Include where it happened, what caused the injury, and any vehicles or people involved."
INPUT: Multi-line textarea

---

FINAL STEP - Contact Information:
HEADLINE: "Where can we send your results and next steps?"
INPUTS:
• First name
• Last name
• Email address
• Phone number

CONSENT TEXT: "By submitting, you agree to be contacted regarding your request. This does not create an attorney-client relationship."

SUBMIT BUTTON: "See My Options"

---

COMPLETION SCREEN:
HEADLINE: "What happens next"
BODY: "We'll review your information and show you your available options. If appropriate, you may be connected with a trusted legal professional. There is no cost or obligation."
```

---

### Data & Privacy Page (`/data-privacy`)

Use accordion/dropdown for each section.

```
HEADLINE: "Data & Privacy"

INTRO (General):
"At InjuryRight.com, keeping your information secure is a top priority for us, and we are committed to the security and privacy of our users. This means we're always working hard to safeguard your data and continually earn your trust. If you have questions regarding security, we are happy to answer them. Please write to Privacy@injuryright.com and we will respond as quickly as we can."

SECTIONS (accordion items):

1. Keeping Data Confidential
"We place strict controls over our employees' access to user data, and have technical controls and audit policies in place to ensure the confidentiality, integrity, and availability of user data. Our employees and contracted personnel working with any user data are bound to our policies, and we treat these issues as matters of the highest importance."

2. Privacy and Security Training
"Everyone at InjuryRight.com receives regular training to ensure that we remain focused on privacy and security. This includes privacy training that covers the protection of sensitive client information, including any health-related data provided by clients in personal injury cases, and compliance with applicable state and federal privacy laws. We also ensure that our employees receive annual data security training, regardless of their role in the company."

3. Data Encryption
"We employ industry-standard technology to safeguard data. Our platform uses full volume encryption on all data stored at rest, with secure backups and robust backup policies. We also use Transport Layer Security (TLS) connections to transmit data over HTTPS."

4. Network Protection
"In addition to sophisticated system monitoring and logging, we utilize robust administrative identity, authorization, accountability, and authentication controls (including multi-factor authentication), as well as intrusion prevention and detection controls to protect our platform."

5. Vulnerability Management
"We have a vulnerability management policy that covers internal and external testing, including annual third-party penetration testing, to find and remediate vulnerabilities that may present a risk to our platform or data."

6. Logging and Monitoring
"InjuryRight operates an extensive security information and events management system. InjuryRight maintains a centralized logging environment, which contains events pertaining to security, monitoring, availability, access, and other metrics about the platform. We review our logging and monitoring systems regularly and respond promptly to automatic alerts."

7. Incident Management & Response
"InjuryRight has incident management policies and procedures in place in the event of a security breach. This includes notifying users of any unauthorized access to their data in the event of a breach as defined under relevant state laws."

8. Product Security Practices
"New features, functionality, and design changes go through a security review process facilitated by the InjuryRight development team. We utilize automated static analysis software, and our teams manually peer-review code prior to being deployed to production. The Information Security team works closely with development teams to resolve any security concerns that may arise during development."

9. Vendor Management
"InjuryRight operates a vendor management program, which requires our Legal and Information Security Teams to evaluate all third-party vendors, service providers, and partners. We review each potential service provider to ensure that our vendors continue to meet InjuryRight's strict security and legal standards."

10. Disaster Recovery
"We maintain a disaster recovery plan that supports a robust business continuity strategy. This plan has been developed to meet industry-standard methodologies and principles of high-availability engineering."

FOOTER:
"Still have questions or comments? Please reach out to Privacy@injuryright.com"
```

---

### Injury Types Pages

Create individual pages for each injury type with detailed content. Use the Car Accident template as the primary reference.

#### Car Accident Injuries (`/injury-types/car-accident`)

```
HERO:
HEADLINE: "Car Accident Injuries"
INTRO: "Car accidents can cause life-altering injuries and unexpected financial, emotional, and legal challenges. Understanding how claims work, what compensation may be available, and how to navigate the legal process can make recovery smoother. Here's a complete guide to the basics, types of injuries, compensation, and steps that matter most."

---

KEY TAKEAWAYS (highlight box):
• Car accidents can result in serious injuries, property damage, and financial loss.
• Understanding your legal options can help you secure the compensation you deserve.
• Compensation may cover medical bills, lost wages, pain and suffering, and property damage.
• The severity of injuries, insurance coverage, and fault can impact your claim.
• Consulting a personal injury lawyer early can help protect your rights.

---

SECTION: What Is a Car Accident Claim?
"A car accident claim is the process of seeking financial compensation after an accident caused by someone else's negligence. When you are injured in a collision, you may be entitled to compensation for medical bills, lost income, property damage, and other losses. Filing a claim helps ensure you can recover physically, financially, and emotionally while the responsible party is held accountable."

---

SECTION: How Car Accident Claims Provide Financial Protection
"After a car accident, life doesn't pause. Medical treatments, bills, and daily responsibilities continue, even while you recover. Compensation from a car accident claim can help cover:"
• Medical expenses and rehabilitation costs
• Lost wages or reduced earning capacity
• Property damage (repairs or replacement of your vehicle)
• Pain and suffering, emotional distress, and loss of quality of life
• Long-term care for permanent injuries

---

SECTION: Who Needs Legal Help After a Car Accident
"Anyone injured in a collision caused by another driver's negligence may benefit from legal assistance. Even minor accidents can lead to unexpected costs or long-term injuries. Legal support is particularly important if:"
• Your injuries are severe or life-altering
• Multiple parties or insurance companies are involved
• The other party disputes fault
• You're unsure what compensation you may be entitled to

---

SECTION: Key Terms You Should Know
• Liability: Determines who is legally responsible for causing the accident.
• Damages: Financial compensation for losses suffered due to the accident.
• Medical Bills / Economic Damages: Covers treatment, therapy, and medical costs.
• Non-Economic Damages: Compensation for pain, suffering, or emotional distress.
• Settlement: An agreement reached with the insurance company or responsible party.
• Statute of Limitations: The legal deadline for filing a claim.

---

SECTION: How Car Accident Claims Work (In Simple Terms)
"After a collision, your claim may involve:"
1. Documenting the accident and injuries
2. Filing a claim with the insurance company
3. Negotiating a settlement or pursuing a lawsuit if necessary
4. Receiving compensation for eligible losses

"A personal injury lawyer can guide you through each step to protect your rights and maximize your recovery."

---

SECTION: Common Injuries From Car Accidents
• Whiplash and neck injuries
• Back injuries and spinal cord damage
• Traumatic brain injuries (TBI)
• Broken bones and fractures
• Soft tissue injuries
• Internal injuries
• Burns or lacerations
• Emotional trauma, anxiety, or PTSD

---

SECTION: What Car Accident Claims Typically Cover
• Medical bills, hospital stays, and rehabilitation
• Lost wages and reduced earning capacity
• Pain and suffering or emotional distress
• Property damage (repairs or replacement of your vehicle)
• Long-term care for permanent injuries
• Funeral expenses in wrongful death cases

---

SECTION: Common Challenges and Exclusions
"Not every claim automatically pays out. Challenges can arise if:"
• Fault is disputed
• Insurance coverage is insufficient
• Pre-existing conditions complicate your case
• Claims are filed late, after the statute of limitations

"A lawyer can help navigate these obstacles and ensure your claim is strong."

---

SECTION: Types of Car Accident Cases
• Rear-end Collisions: Often involve whiplash and neck injuries.
• Side-impact / T-bone Accidents: Can cause serious fractures or internal injuries.
• Head-on Collisions: Typically result in catastrophic injuries.
• Single-vehicle Accidents: May involve road hazards or driver negligence.
• Multi-vehicle Pileups: Complex cases with multiple parties.
• Hit-and-Run Accidents: Require special legal strategies to locate liable parties.

---

SECTION: No-Fault and Insurance Considerations
• Liability Insurance: Pays for damages if another driver is at fault.
• Personal Injury Protection (PIP): Covers your medical expenses regardless of fault (varies by state).
• Uninsured / Underinsured Motorist Coverage: Protects you if the at-fault driver lacks sufficient insurance.
• Medical Payments Coverage (MedPay): Covers medical costs for anyone injured in your vehicle.

---

SECTION: Why a Lawyer Can Help
"Personal injury lawyers ensure you:"
• Understand your legal rights
• Receive full compensation for injuries and damages
• Navigate insurance claims and legal paperwork
• Avoid pitfalls that can reduce settlements
• Gain peace of mind while focusing on recovery

---

SECTION: Typical Compensation Timelines
"Claims can vary depending on:"
• Severity of injuries
• Complexity of the accident
• Cooperation of insurance companies and parties involved

"Some cases settle quickly, while others may take months or years. Early legal guidance increases the likelihood of a fair outcome."

CTA: "Check My Case" → /survey
```

#### Additional Injury Type Pages

Create similar detailed pages for:
- Truck Accident Injuries (`/injury-types/truck-accident`)
- Motorcycle Accident Injuries (`/injury-types/motorcycle-accident`)
- Slip and Fall Injuries (`/injury-types/slip-and-fall`)
- Pedestrian Accident Injuries (`/injury-types/pedestrian-accident`)
- Rideshare Accident Injuries (`/injury-types/rideshare-accident`)
- Bicycle Accident Injuries (`/injury-types/bicycle-accident`)
- Catastrophic Injuries (`/injury-types/catastrophic`)
- Wrongful Death (`/injury-types/wrongful-death`)
- Dog Bite Injuries (`/injury-types/dog-bite`)

*Use the content provided in the document for each injury type*

---

## 🧭 Navigation Structure

### Main Header Navigation
```
Logo (left)

Main Links (center):
- About Us → /about
- Lawyers by Practice Area (dropdown) → redirects to /survey
- Lawyers by Location (dropdown) → redirects to /survey  
- Injury Types → /injury-types
- Legal Topics and Q&A → /legal-topics

CTA Button (right):
"Check My Case" → /survey
```

### Lawyers by Practice Area Dropdown
```
- Car Accident Lawyers
- Truck Accident Lawyers
- Motorcycle Accident Lawyers
- Pedestrian Accident Lawyers
- Bicycle Accident Lawyers
- Rideshare Accident Lawyers (Uber / Lyft)
- Slip & Fall / Premises Injury Lawyers
- Workplace Injury Lawyers
- Dog Bite / Animal Attack Lawyers
- Medical Negligence Lawyers
- Catastrophic Injury Lawyers
- Wrongful Death Lawyers
- Workers' Compensation Lawyers
```

### Lawyers by Location Dropdown
```
Major Cities:
- New York City
- Los Angeles
- Chicago
- Houston
- Phoenix
- Philadelphia
- San Antonio
- San Diego
- Dallas
- San Jose
- Austin
- Jacksonville
- Fort Worth
- Columbus
- Charlotte
- San Francisco
- Indianapolis
- Seattle
- Denver
- Washington DC
- Boston
- Nashville
- Las Vegas
- Miami
- Atlanta
```

### Footer Navigation
```
COLUMN 1 - Company:
- About Us
- Verified Reviews
- Contact Us
- For Law Firms

COLUMN 2 - Resources:
- Life After Impact Blog
- Legal Topics & Q&A
- Insurance Carriers
- Specialties

COLUMN 3 - Legal:
- Data & Privacy
- Terms of Service
- Cookie Policy

COLUMN 4 - Contact:
- support@injuryright.com
- Phone number (TBD)
- Social links

BOTTOM BAR:
© 2024 InjuryRight.com. All rights reserved.
"4.8 ⭐ on Trustpilot"
```

---

## 🔍 SEO Requirements

### Meta Tags Template
```typescript
// For each page, implement:
const metadata = {
  title: "Page Title | InjuryRight - Find Trusted Personal Injury Lawyers",
  description: "Max 160 chars describing page content with keywords",
  keywords: ["personal injury", "lawyer", "accident", "compensation"],
  openGraph: {
    title: "Page Title | InjuryRight",
    description: "Description for social sharing",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Title | InjuryRight",
    description: "Description for Twitter",
  }
};
```

### Schema.org Structured Data
```json
// Homepage - Organization
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "InjuryRight",
  "url": "https://injuryright.com",
  "description": "Connect with trusted personal injury lawyers",
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "support@injuryright.com"
  }
}

// Injury Type Pages - Article/Guide
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Car Accident Injuries - Complete Guide",
  "description": "...",
  "author": {
    "@type": "Organization",
    "name": "InjuryRight"
  }
}

// FAQ Pages
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [...]
}
```

### Performance Requirements
- Lighthouse score: 90+ for all metrics
- Core Web Vitals: Pass all
- Image optimization: WebP format, lazy loading
- Font loading: `font-display: swap`
- Code splitting: Per-route
- Compression: Gzip/Brotli

---

## ♿ Accessibility Requirements

- WCAG 2.1 AA compliance
- Keyboard navigation for all interactive elements
- ARIA labels for icons and buttons
- Focus indicators visible
- Color contrast ratio: 4.5:1 minimum
- Screen reader friendly headings hierarchy
- Skip to content link
- Form labels properly associated
- Error messages descriptive and helpful

---

## 📱 Responsive Breakpoints

```css
/* Mobile first approach */
/* Default: Mobile (< 640px) */

/* Small (sm): >= 640px */
@media (min-width: 640px) {}

/* Medium (md): >= 768px */
@media (min-width: 768px) {}

/* Large (lg): >= 1024px */
@media (min-width: 1024px) {}

/* Extra Large (xl): >= 1280px */
@media (min-width: 1280px) {}

/* 2XL: >= 1536px */
@media (min-width: 1536px) {}
```

---

## 🎯 Component Specifications

### Primary Button
```tsx
// Variants: primary, secondary, outline, ghost
// Sizes: sm, md, lg

<Button variant="primary" size="lg">
  Check My Case
</Button>

// Primary button styles:
// - Background: gradient (--gradient-primary)
// - Text: white
// - Padding: 16px 32px (lg)
// - Border radius: --radius-lg
// - Font: semibold
// - Hover: slight brightness increase + scale(1.02)
// - Active: scale(0.98)
// - Transition: all 200ms ease
```

### Card Component
```tsx
// For feature cards, comparison items, etc.

// Base styles:
// - Background: white
// - Border: 1px solid --gray-200
// - Border radius: --radius-xl
// - Padding: --space-6
// - Shadow: --shadow-card
// - Hover: --shadow-card-hover + translateY(-2px)
```

### Accordion/FAQ
```tsx
// Use Headless UI Disclosure
// Animation: smooth height transition
// Icon: Chevron rotates 180deg on open
// Border: bottom border between items
```

### Survey Step Card
```tsx
// Card with icon, title, optional description
// Selected state: border-primary + background-primary-100
// Hover: border-primary-300
// Transition: all 150ms ease
```

---

## 📦 Insurance Carriers Data

```typescript
// content/insurance-carriers.ts

export const insuranceCarriers = {
  auto: [
    "Allstate", "GEICO", "State Farm", "Progressive", 
    "Farmers Insurance", "Nationwide", "Liberty Mutual", "USAA",
    "Travelers", "American Family Insurance", "The Hartford",
    "Amica Mutual", "Erie Insurance", "Auto-Owners Insurance",
    "MetLife Auto & Home", "Safeco Insurance", "Chubb",
    "AAA Insurance", "MAPFRE Insurance", "Mercury Insurance",
    "Infinity Insurance", "Pekin Insurance", "Sentry Insurance",
    "Hanover Insurance", "Zurich North America", "Grange Insurance",
    "Selective Insurance"
  ],
  workersComp: [
    "State Workers' Compensation Funds",
    "Travelers Workers' Compensation",
    "Liberty Mutual Workers' Comp",
    "The Hartford Workers' Compensation",
    "CNA Insurance Workers' Comp",
    "Zurich Workers' Compensation",
    "AmTrust North America",
    "FM Global",
    "Nationwide Workers' Comp"
  ],
  health: [
    "Aetna", "Aetna Better Health", "Anthem Blue Cross / Blue Shield",
    "Blue Cross Blue Shield", "Cigna", "Humana", "Kaiser Permanente",
    "UnitedHealthcare", "Molina Healthcare", "Centene",
    "WellCare Health Plans", "Health Net", "CareSource",
    "Medicaid", "Medicare", "CHAMPVA", "Tricare"
  ],
  liability: [
    "Chubb", "Travelers", "The Hartford", "Liberty Mutual",
    "Nationwide", "Zurich North America", "Allstate", "State Farm"
  ]
};
```

---

## 📦 Specialties Data

```typescript
// content/specialties.ts

export const specialties = [
  "Personal Injury Lawyer",
  "Auto Accident Lawyer",
  "Motorcycle Accident Lawyer",
  "Truck Accident Lawyer",
  "Pedestrian Accident Lawyer",
  "Bicycle Accident Lawyer",
  "Workplace Injury Lawyer",
  "Construction Accident Lawyer",
  "Slip and Fall Lawyer",
  "Medical Malpractice Lawyer",
  "Wrongful Death Lawyer",
  "Product Liability Lawyer",
  "Premises Liability Lawyer",
  "Dog Bite Lawyer",
  "Defective Drug Lawyer",
  "Nursing Home Abuse Lawyer",
  "Catastrophic Injury Lawyer",
  "Brain Injury Lawyer",
  "Spinal Cord Injury Lawyer",
  "Burn Injury Lawyer",
  "Wrongful Termination Lawyer",
  "Workers' Compensation Lawyer"
];
```

---

## ✅ Development Checklist

### Phase 1: Foundation
- [ ] Next.js project setup with TypeScript
- [ ] Tailwind CSS configuration with design tokens
- [ ] Framer Motion setup
- [ ] Component library foundation (Button, Card, Input, etc.)
- [ ] Layout components (Header, Footer, Container)
- [ ] Responsive navigation with mobile menu

### Phase 2: Core Pages
- [ ] Homepage with all sections
- [ ] About Us page
- [ ] Contact Us page
- [ ] Data & Privacy page
- [ ] Verified Reviews page

### Phase 3: Survey Flow
- [ ] Multi-step survey form
- [ ] Progress indicator
- [ ] Form validation with Zod
- [ ] Step animations
- [ ] Completion screen

### Phase 4: Content Pages
- [ ] Injury Types overview page
- [ ] Individual injury type pages (Car, Truck, etc.)
- [ ] Legal Topics & Q&A page
- [ ] For Law Firms page

### Phase 5: Additional Pages
- [ ] Insurance Carriers page
- [ ] Specialties page
- [ ] Blog structure (listing + individual posts)

### Phase 6: Polish
- [ ] SEO meta tags for all pages
- [ ] Schema.org structured data
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Cross-browser testing
- [ ] Mobile responsiveness QA

---

## 🚀 Build Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type check
npm run type-check
```

---

## 📝 Notes for Cursor

1. **Start with the design system**: Set up all CSS variables, Tailwind config, and base styles first.

2. **Component-first approach**: Build reusable components before assembling pages.

3. **Mobile-first**: Always start with mobile styles and enhance for larger screens.

4. **Animations**: Use Framer Motion for all animations. Keep them subtle and purposeful.

5. **Accessibility**: Test with keyboard navigation and screen readers as you build.

6. **Performance**: Lazy load images, use Next.js Image component, implement code splitting.

7. **SEO**: Every page needs proper meta tags and semantic HTML.

8. **Forms**: Use react-hook-form with Zod validation for the survey.

9. **State Management**: Use React Context for survey state across steps.

10. **Testing**: Write meaningful tests for form validation and critical user flows.

---

## 🎨 Visual Reference Inspiration

- **Ethos.com**: Clean hero, trust indicators, step-by-step process visualization
- **ZocDoc.com**: Professional medical/legal directory feel, clear CTAs, verified reviews system
- **Lemonade.com**: Modern insurance company aesthetic, friendly animations
- **Oscar Health**: Healthcare tech, clean gradients, approachable design

---

**End of System Prompt**

Build this website with attention to detail, focusing on creating a trustworthy, professional platform that helps accident victims find the legal support they need. The design should feel modern, approachable, and conversion-optimized while maintaining a high level of polish and accessibility.
