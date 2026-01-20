"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { InjuryRightHeader } from "@/components/layout/InjuryRightHeader";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/base/buttons/button";
import {
  ArrowLeft,
  ArrowRight,
  MessageChatCircle,
  User01,
  MarkerPin01,
  Calendar,
} from "@untitledui/icons";

interface Answer {
  author: string;
  role: string;
  date: string;
  content: string;
}

interface TopicData {
  question: string;
  excerpt: string;
  location: string;
  date: string;
  category: "question" | "guide";
  fullContent: string[];
  answers?: Answer[];
}

const topicsData: Record<string, TopicData> = {
  "1": {
    question: "Can I sue if I was partially at fault for my car accident?",
    excerpt: "I was in a car accident last month where the other driver ran a red light, but I was going slightly over the speed limit. The insurance company is saying I'm 20% at fault...",
    location: "Los Angeles, CA",
    date: "Jan 15, 2026",
    category: "question",
    fullContent: [
      "I was in a car accident last month where the other driver ran a red light, but I was going slightly over the speed limit. The insurance company is saying I'm 20% at fault and wants to reduce my settlement by that amount. Is this legal? Can I still sue the other driver even though I was partially at fault?",
      "I have medical bills totaling over $15,000 and I missed two weeks of work. The other driver's insurance initially offered me $8,000 but now they're saying it should be even less because of my speeding.",
    ],
    answers: [
      {
        author: "Attorney Michael Chen",
        role: "Personal Injury Lawyer",
        date: "Jan 15, 2026",
        content: "Yes, you can still recover compensation even if you were partially at fault. California follows a 'pure comparative negligence' rule, which means your compensation is reduced by your percentage of fault, but you can still recover. If you're found 20% at fault and your damages are $50,000, you could still recover $40,000. The insurance company's initial assessment isn't final—an experienced attorney can often negotiate this percentage down.",
      },
      {
        author: "Attorney Sarah Williams",
        role: "Auto Accident Specialist",
        date: "Jan 16, 2026",
        content: "The key question is whether your speeding actually contributed to the accident. If the other driver ran a red light, they had a duty to yield regardless of your speed. An accident reconstruction expert might be able to show that the collision would have occurred even if you were going the speed limit. I'd recommend consulting with an attorney before accepting any settlement.",
      },
      {
        author: "Attorney David Park",
        role: "Insurance Claims Expert",
        date: "Jan 16, 2026",
        content: "Don't accept the insurance company's fault determination without question. They have a financial incentive to assign you as much fault as possible. Request a copy of the police report and any witness statements. If there's traffic camera footage, that could be crucial evidence. Many attorneys offer free consultations and work on contingency, so there's no upfront cost to explore your options.",
      },
    ],
  },
  "2": {
    question: "How long do I have to file a personal injury lawsuit in Texas?",
    excerpt: "I slipped and fell at a grocery store about 18 months ago and I'm still dealing with back problems. Someone told me there's a deadline to file a lawsuit...",
    location: "Houston, TX",
    date: "Jan 14, 2026",
    category: "question",
    fullContent: [
      "I slipped and fell at a grocery store about 18 months ago and I'm still dealing with back problems. Someone told me there's a deadline to file a lawsuit. How long do I have?",
      "I've been going to physical therapy and my doctor says I might need surgery. The store's insurance offered me $5,000 right after the accident but I didn't take it because I didn't know how bad my injuries would be.",
    ],
    answers: [
      {
        author: "Attorney James Rodriguez",
        role: "Premises Liability Lawyer",
        date: "Jan 14, 2026",
        content: "In Texas, the statute of limitations for personal injury cases is generally 2 years from the date of the accident. Since your fall was 18 months ago, you have approximately 6 months left to file a lawsuit. However, I strongly recommend not waiting until the last minute. Building a strong case takes time, and you want to give your attorney adequate time to investigate, gather evidence, and potentially negotiate a settlement before filing.",
      },
      {
        author: "Attorney Maria Santos",
        role: "Personal Injury Attorney",
        date: "Jan 15, 2026",
        content: "Given that you're still receiving treatment and may need surgery, it's important to act soon. You should consult with an attorney immediately. They can help preserve evidence (like surveillance footage, which stores often delete after a certain period), document your ongoing medical treatment, and ensure your claim is filed within the deadline. The fact that you're still treating actually strengthens your case—it shows the severity of your injuries.",
      },
    ],
  },
  "3": {
    question: "What should I do if the insurance company offers a quick settlement?",
    excerpt: "I was rear-ended last week and the other driver's insurance already called offering me $5,000 to settle. My car damage alone is more than that...",
    location: "Miami, FL",
    date: "Jan 13, 2026",
    category: "question",
    fullContent: [
      "I was rear-ended last week and the other driver's insurance already called offering me $5,000 to settle. My car damage alone is more than that, and I've been having neck pain. Should I take the offer?",
      "They're pressuring me to decide quickly and said the offer might not be available later. I haven't seen a doctor yet because I thought the pain would go away.",
    ],
    answers: [
      {
        author: "Attorney Jennifer Lee",
        role: "Auto Accident Attorney",
        date: "Jan 13, 2026",
        content: "Do NOT accept this offer. This is a classic insurance company tactic—they want to settle quickly before you understand the full extent of your injuries. Neck pain after a rear-end collision could indicate whiplash, herniated discs, or other serious injuries that may require extensive treatment. See a doctor immediately and document everything. Once you sign a release, you cannot go back for more money even if your injuries turn out to be severe.",
      },
      {
        author: "Attorney Robert Thompson",
        role: "Insurance Negotiation Specialist",
        date: "Jan 13, 2026",
        content: "The pressure tactics they're using are a red flag. If their offer was fair, they wouldn't need to pressure you. In Florida, you have 4 years to file a personal injury lawsuit, so there's no rush to settle. Get medical treatment, keep all records, and consult with an attorney. A fair settlement should cover all your medical expenses (past and future), lost wages, pain and suffering, and property damage.",
      },
      {
        author: "Attorney Amanda Foster",
        role: "Personal Injury Lawyer",
        date: "Jan 14, 2026",
        content: "I've seen cases where clients accepted quick settlements only to discover months later that they needed surgery or long-term treatment. By then, it's too late. The insurance company knows this—that's why they're offering fast money. Your health and financial security are worth more than a quick payout. Take your time, get proper medical evaluation, and make an informed decision.",
      },
      {
        author: "Attorney Carlos Mendez",
        role: "Trial Attorney",
        date: "Jan 14, 2026",
        content: "To add to what others have said: the fact that they're offering $5,000 when your car damage alone exceeds that tells you they know they're liable. This is actually good news for your case. Document the offer in writing, politely decline, and focus on your medical treatment. When you're ready to negotiate, you'll be in a much stronger position with full documentation of your injuries.",
      },
    ],
  },
  "4": {
    question: "Can I get compensation for a dog bite at a friend's house?",
    excerpt: "My neighbor's dog bit me while I was visiting their home. I needed stitches and had to get rabies shots. I don't want to ruin our friendship but the medical bills are piling up...",
    location: "Chicago, IL",
    date: "Jan 12, 2026",
    category: "question",
    fullContent: [
      "My neighbor's dog bit me while I was visiting their home. I needed stitches and had to get rabies shots. I don't want to ruin our friendship but the medical bills are piling up. Do I have any options?",
      "The dog has never bitten anyone before as far as I know. My neighbor feels terrible about it but hasn't offered to help with the bills. I have about $3,000 in medical expenses so far.",
    ],
    answers: [
      {
        author: "Attorney Patricia O'Brien",
        role: "Dog Bite Attorney",
        date: "Jan 12, 2026",
        content: "Here's something many people don't realize: your neighbor's homeowner's insurance likely covers dog bite injuries. You can file a claim against their policy without suing your neighbor personally. This is exactly what insurance is for. Illinois has strict liability for dog bites, meaning the owner is responsible regardless of whether the dog has bitten before. Your neighbor's insurance company will handle the claim, and your friendship can remain intact.",
      },
      {
        author: "Attorney Kevin Walsh",
        role: "Personal Injury Lawyer",
        date: "Jan 12, 2026",
        content: "I handle many dog bite cases where the victim knows the dog owner. In almost every case, the homeowner's insurance pays the claim and the friendship survives. Your neighbor may even be relieved that insurance is handling it rather than having to pay out of pocket. Have an honest conversation with your neighbor about filing an insurance claim—most people understand this is the practical solution.",
      },
    ],
  },
  "5": {
    question: "Is it worth hiring a lawyer for a minor fender bender?",
    excerpt: "I was in a small accident with minor damage to my car. I have some neck pain but nothing serious. Do I really need a lawyer or can I handle this myself...",
    location: "Phoenix, AZ",
    date: "Jan 11, 2026",
    category: "question",
    fullContent: [
      "I was in a small accident with minor damage to my car. I have some neck pain but nothing serious. Do I really need a lawyer or can I handle this myself?",
      "The other driver's insurance is being cooperative and said they'll cover my car repairs. But I'm not sure about the medical side of things.",
    ],
    answers: [
      {
        author: "Attorney Lisa Martinez",
        role: "Auto Accident Attorney",
        date: "Jan 11, 2026",
        content: "For truly minor accidents with no injuries, you may be able to handle the property damage claim yourself. However, you mentioned neck pain—that changes things. 'Minor' neck pain can sometimes develop into chronic issues. Before settling anything, see a doctor and get a proper diagnosis. If your injuries turn out to be more serious, you'll want legal representation. Most personal injury attorneys offer free consultations, so it costs nothing to get professional advice.",
      },
      {
        author: "Attorney Mark Johnson",
        role: "Insurance Claims Specialist",
        date: "Jan 11, 2026",
        content: "Here's a general rule: if there are any injuries involved, at least consult with an attorney. Studies show that accident victims who hire attorneys typically receive significantly higher settlements, even after attorney fees. The insurance company has experienced adjusters working to minimize your payout—having someone equally experienced on your side levels the playing field.",
      },
      {
        author: "Attorney Rachel Green",
        role: "Personal Injury Lawyer",
        date: "Jan 11, 2026",
        content: "Don't underestimate neck injuries. What feels like minor pain now could be a herniated disc or soft tissue damage that worsens over time. I've seen 'minor' accidents result in years of treatment. Get checked out by a doctor, keep records of your symptoms, and don't sign any releases until you're confident your injuries have fully resolved. If the insurance company is being cooperative now, that's great—but their cooperation often ends when you start asking for fair compensation for injuries.",
      },
      {
        author: "Attorney Thomas Wright",
        role: "Trial Lawyer",
        date: "Jan 12, 2026",
        content: "One more consideration: once you settle and sign a release, you can never go back for more money. If your neck pain turns into something requiring surgery six months from now, you're out of luck. At minimum, wait until you've reached 'maximum medical improvement'—the point where your condition has stabilized—before settling any injury claim.",
      },
      {
        author: "Attorney Diana Chen",
        role: "Auto Accident Specialist",
        date: "Jan 12, 2026",
        content: "To directly answer your question: for property damage only, you can probably handle it yourself. For any injury claim, even seemingly minor ones, I recommend at least a free consultation with an attorney. We can quickly assess whether your case warrants legal representation or if you're fine handling it on your own. There's no downside to getting professional advice.",
      },
    ],
  },
  "6": {
    question: "What damages can I recover in a wrongful death lawsuit?",
    excerpt: "My father was killed in a construction accident. The company is offering a settlement but I don't know if it's fair. What types of compensation are we entitled to...",
    location: "New York, NY",
    date: "Jan 10, 2026",
    category: "question",
    fullContent: [
      "My father was killed in a construction accident. The company is offering a settlement but I don't know if it's fair. What types of compensation are we entitled to?",
      "He was 52 years old and the primary breadwinner for our family. He has a wife and three children, including me. The company offered $500,000 but that seems low given that he would have worked for at least another 15 years.",
    ],
    answers: [
      {
        author: "Attorney William Harris",
        role: "Wrongful Death Attorney",
        date: "Jan 10, 2026",
        content: "I'm very sorry for your loss. In a wrongful death case, you may be entitled to recover: lost wages and benefits your father would have earned, loss of parental guidance and companionship, funeral and burial expenses, medical expenses incurred before death, pain and suffering your father experienced, and loss of inheritance. Given your father's age and earning capacity, $500,000 is likely far below what your family deserves. Please consult with a wrongful death attorney before accepting any offer.",
      },
      {
        author: "Attorney Elizabeth Moore",
        role: "Construction Accident Lawyer",
        date: "Jan 10, 2026",
        content: "Construction accidents often involve multiple liable parties—the general contractor, subcontractors, equipment manufacturers, property owners, and others. A thorough investigation may reveal additional sources of compensation. Also, if OSHA violations contributed to the accident, that strengthens your case significantly. Do not accept the company's offer without having an experienced wrongful death attorney review your case. These cases are complex and the stakes are too high to handle without proper representation.",
      },
      {
        author: "Attorney Richard Kim",
        role: "Wrongful Death Specialist",
        date: "Jan 11, 2026",
        content: "To put the offer in perspective: if your father earned $75,000 per year and would have worked 15 more years, his lost wages alone would be over $1 million—and that's before accounting for raises, benefits, and the other damages mentioned. The company's $500,000 offer suggests they know they're liable and are trying to settle cheaply. An attorney can calculate the true value of your claim and fight for fair compensation.",
      },
    ],
  },
  "g1": {
    question: "Complete Guide to Car Accident Claims in California",
    excerpt: "Everything you need to know about filing a car accident claim in California, including deadlines, fault rules, and what compensation you can recover.",
    location: "California",
    date: "Jan 2026",
    category: "guide",
    fullContent: [
      "California is a 'fault' state for car accidents, meaning the driver who caused the accident is responsible for the resulting damages. This guide covers everything you need to know about pursuing a car accident claim in California.",
      "Statute of Limitations: You have 2 years from the date of the accident to file a personal injury lawsuit, and 3 years for property damage claims. Missing these deadlines typically means losing your right to sue.",
      "Comparative Negligence: California follows 'pure comparative negligence,' meaning you can recover damages even if you were partially at fault. Your compensation is reduced by your percentage of fault. For example, if you're 30% at fault and your damages are $100,000, you can recover $70,000.",
      "Minimum Insurance Requirements: California requires drivers to carry at least $15,000 for injury/death to one person, $30,000 for injury/death to multiple people, and $5,000 for property damage. Many drivers carry only minimum coverage, which may not fully compensate serious injuries.",
      "Types of Compensation: You may recover economic damages (medical bills, lost wages, property damage), non-economic damages (pain and suffering, emotional distress), and in rare cases, punitive damages for egregious conduct.",
      "Steps After an Accident: 1) Ensure safety and call 911, 2) Exchange information with other drivers, 3) Document the scene with photos, 4) Get witness contact information, 5) Seek medical attention, 6) Report to your insurance company, 7) Consult with an attorney.",
      "Dealing with Insurance Companies: Be cautious when speaking with insurance adjusters. Provide basic facts but avoid recorded statements or signing documents without legal review. Insurance companies often try to minimize payouts.",
      "When to Hire an Attorney: Consider legal representation if you have significant injuries, the other driver is uninsured, fault is disputed, or the insurance company is offering an unfair settlement.",
    ],
  },
  "g2": {
    question: "Understanding Comparative Negligence: How Fault Affects Your Claim",
    excerpt: "Learn how being partially at fault for an accident affects your ability to recover compensation in different states.",
    location: "All States",
    date: "Jan 2026",
    category: "guide",
    fullContent: [
      "When you're injured in an accident, one of the first questions is: who was at fault? But what happens when both parties share some blame? The answer depends on your state's negligence laws.",
      "Pure Comparative Negligence (13 states including California, New York, Florida): You can recover damages regardless of your fault percentage. If you're 90% at fault, you can still recover 10% of your damages.",
      "Modified Comparative Negligence - 50% Rule (12 states including Colorado, Georgia, Idaho): You can recover only if you're less than 50% at fault. At 50% or more fault, you recover nothing.",
      "Modified Comparative Negligence - 51% Rule (21 states including Texas, Ohio, Pennsylvania): You can recover only if you're 50% or less at fault. At 51% or more fault, you recover nothing.",
      "Contributory Negligence (4 states + DC: Alabama, Maryland, North Carolina, Virginia): If you're even 1% at fault, you cannot recover any damages. This is the harshest rule for plaintiffs.",
      "How Fault is Determined: Insurance adjusters and courts consider police reports, witness statements, physical evidence, traffic laws, and expert testimony. Fault percentages are negotiable—don't accept the insurance company's initial assessment without question.",
      "Protecting Yourself: Never admit fault at the accident scene. Statements like 'I'm sorry' can be used against you. Let the evidence speak for itself and consult with an attorney before accepting any fault determination.",
    ],
  },
  "g3": {
    question: "What to Do After a Slip and Fall Accident",
    excerpt: "Step-by-step guide on protecting your rights after a slip and fall, including evidence to gather and mistakes to avoid.",
    location: "All States",
    date: "Jan 2026",
    category: "guide",
    fullContent: [
      "Slip and fall accidents can result in serious injuries, from broken bones to traumatic brain injuries. If you've fallen on someone else's property, here's how to protect your rights.",
      "Immediate Steps: 1) Don't rush to get up—assess your injuries first, 2) Report the incident to the property owner or manager, 3) Request a copy of the incident report, 4) Take photos of the hazard that caused your fall, 5) Get contact information from witnesses.",
      "Document Everything: Photograph the exact location, the hazard (wet floor, uneven surface, poor lighting, etc.), your injuries, your clothing and footwear, and any warning signs (or lack thereof).",
      "Seek Medical Attention: Even if you feel okay, see a doctor within 24-48 hours. Some injuries, like internal bleeding or soft tissue damage, may not be immediately apparent. Medical records also serve as crucial evidence.",
      "Preserve Evidence: Keep the shoes and clothing you were wearing. Don't wash or repair them. Save all medical records, bills, and receipts. Keep a journal documenting your pain levels and how the injury affects your daily life.",
      "Common Mistakes to Avoid: Don't give recorded statements to insurance companies without legal advice. Don't post about the accident on social media. Don't accept quick settlement offers. Don't miss medical appointments.",
      "Proving Your Case: To win a slip and fall case, you generally must show: 1) A dangerous condition existed, 2) The property owner knew or should have known about it, 3) They failed to fix it or warn visitors, 4) The condition caused your fall and injuries.",
      "Time Limits: Statutes of limitations vary by state, typically 2-4 years. However, if you fell on government property, you may have as little as 6 months to file a claim. Consult an attorney promptly.",
    ],
  },
  "g4": {
    question: "Medical Malpractice Claims: What You Need to Prove",
    excerpt: "Understanding the elements required to prove a medical malpractice case and the challenges you may face.",
    location: "All States",
    date: "Jan 2026",
    category: "guide",
    fullContent: [
      "Medical malpractice occurs when a healthcare provider's negligence causes injury to a patient. These cases are complex and require proving specific legal elements.",
      "The Four Elements of Medical Malpractice: 1) Duty - A doctor-patient relationship existed, 2) Breach - The provider failed to meet the standard of care, 3) Causation - The breach directly caused your injury, 4) Damages - You suffered actual harm as a result.",
      "Standard of Care: This is what a reasonably competent healthcare provider in the same specialty would have done under similar circumstances. Expert medical witnesses are typically required to establish what the standard was and how it was breached.",
      "Common Types of Medical Malpractice: Misdiagnosis or delayed diagnosis, surgical errors, medication errors, birth injuries, anesthesia errors, failure to obtain informed consent, and hospital-acquired infections.",
      "Challenges in Medical Malpractice Cases: These cases are expensive to pursue (expert witnesses, medical record review), have shorter statutes of limitations in many states, require proving causation to a high degree, and face damage caps in some states.",
      "Before Filing: Most states require a 'certificate of merit' from a medical expert before filing suit. Some require mediation or arbitration first. Consult with a medical malpractice attorney to understand your state's requirements.",
      "Damages You May Recover: Medical expenses (past and future), lost wages and earning capacity, pain and suffering, loss of enjoyment of life, and in some cases, punitive damages for egregious conduct.",
      "Finding the Right Attorney: Medical malpractice cases require specialized knowledge. Look for attorneys who focus on medical malpractice, have access to qualified medical experts, and have a track record of success in these complex cases.",
    ],
  },
};

function TopicDetailContent() {
  const params = useParams();
  const id = params.id as string;
  const topic = topicsData[id];
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  if (!topic) {
    return (
      <main className="min-h-screen">
        <InjuryRightHeader />
        <div className="pt-32 pb-16 px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Topic Not Found</h1>
          <p className="text-gray-600 mb-8">The topic you're looking for doesn't exist.</p>
          <Button color="primary" href="/legal-topics">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Legal Topics
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <InjuryRightHeader />
      
      <article ref={ref} className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div variants={fadeInUp}>
              <Link 
                href="/legal-topics" 
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Legal Topics & Q&A
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                topic.category === "question" 
                  ? "bg-orange-100 text-orange-700" 
                  : "bg-blue-100 text-blue-700"
              }`}>
                {topic.category === "question" ? "Question" : "Legal Guide"}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
            >
              {topic.question}
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8"
            >
              <span className="flex items-center gap-1.5">
                <MarkerPin01 className="w-4 h-4" />
                {topic.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {topic.date}
              </span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-xl border border-gray-200 p-6 mb-8"
            >
              {topic.fullContent.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {topic.answers && topic.answers.length > 0 && (
              <motion.div variants={fadeInUp}>
                <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4">
                  <MessageChatCircle className="w-5 h-5 text-blue-600" />
                  {topic.answers.length} {topic.answers.length === 1 ? "Answer" : "Answers"}
                </h2>

                <div className="space-y-4">
                  {topic.answers.map((answer, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl border border-gray-200 p-6"
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <User01 className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{answer.author}</p>
                          <p className="text-sm text-gray-500">{answer.role} • {answer.date}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{answer.content}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            <motion.div
              variants={fadeInUp}
              className="mt-12 p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl text-center"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                Have a similar question about your case?
              </h3>
              <p className="text-gray-300 mb-6">
                Get personalized guidance from verified legal experts who specialize in your type of case.
              </p>
              <Button
                color="primary"
                size="lg"
                href="/survey"
                iconTrailing={ArrowRight}
              >
                Check My Case Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </main>
  );
}

export function LegalTopicDetailContent() {
  return <TopicDetailContent />;
}
