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
  Clock,
  User01,
  Calendar,
} from "@untitledui/icons";

const blogPosts: Record<string, {
  title: string;
  content: string[];
  category: string;
  author: string;
  date: string;
  readTime: string;
}> = {
  "what-to-do-after-car-accident": {
    title: "What to Do Immediately After a Car Accident: A Step-by-Step Guide",
    content: [
      "The moments after a car accident can be overwhelming and disorienting. Your heart is racing, adrenaline is pumping, and you may be in shock. However, the actions you take in these critical first moments can significantly impact your health, safety, and any future legal claims.",
      "First and foremost, check yourself and others for injuries. If anyone is seriously hurt, call 911 immediately. Even if injuries seem minor, it's important to get medical attention as some injuries, like whiplash or internal bleeding, may not be immediately apparent.",
      "Move to safety if possible. If your vehicle is drivable and you're in a dangerous location (like the middle of a highway), move to the shoulder or a safe area. Turn on your hazard lights to alert other drivers.",
      "Call the police. Even for minor accidents, having an official police report can be invaluable for insurance claims and potential legal proceedings. The responding officer will document the scene and gather statements from all parties involved.",
      "Exchange information with the other driver(s). Get their name, phone number, insurance company, policy number, driver's license number, and license plate number. Also note the make, model, and color of their vehicle.",
      "Document everything. Use your smartphone to take photos of the accident scene, vehicle damage, road conditions, traffic signs, and any visible injuries. These photos can serve as crucial evidence later.",
      "Get witness information. If there are any witnesses to the accident, ask for their names and contact information. Their testimony could be important if there's a dispute about what happened.",
      "Seek medical attention. Even if you feel fine, see a doctor within 24-48 hours. Some injuries take time to manifest, and having medical documentation from right after the accident strengthens any future claim.",
      "Contact your insurance company. Report the accident to your insurer as soon as possible. Be factual about what happened, but avoid admitting fault or speculating about causes.",
      "Consider consulting with a personal injury attorney. If you've been injured, an experienced lawyer can help protect your rights and ensure you receive fair compensation for your injuries and damages.",
    ],
    category: "Car Accidents",
    author: "InjuryRight Team",
    date: "January 15, 2026",
    readTime: "8 min read",
  },
  "understanding-personal-injury-settlements": {
    title: "Understanding Personal Injury Settlements: What to Expect",
    content: [
      "If you've been injured due to someone else's negligence, you may be entitled to compensation through a personal injury settlement. Understanding how this process works can help you make informed decisions about your case.",
      "A personal injury settlement is an agreement between the injured party (plaintiff) and the at-fault party or their insurance company (defendant) to resolve a claim without going to trial. Most personal injury cases settle out of court.",
      "The settlement process typically begins after you've reached maximum medical improvement (MMI), meaning your condition has stabilized and doctors can assess the full extent of your injuries and future medical needs.",
      "Your attorney will calculate your damages, which may include medical expenses (past and future), lost wages, loss of earning capacity, pain and suffering, emotional distress, and loss of enjoyment of life.",
      "Once damages are calculated, your attorney will send a demand letter to the insurance company outlining your injuries, treatment, and the compensation you're seeking. This begins the negotiation process.",
      "Insurance companies often make low initial offers. Don't be discouraged—this is normal. Your attorney will negotiate on your behalf, using evidence and legal arguments to justify a higher settlement.",
      "The negotiation process can take weeks or months. Factors affecting timeline include the complexity of your case, the severity of your injuries, and how willing the insurance company is to negotiate in good faith.",
      "If negotiations stall, your attorney may file a lawsuit. This doesn't mean you'll go to trial—many cases settle during the litigation process, sometimes even on the courthouse steps.",
      "When you accept a settlement, you'll sign a release waiving your right to pursue further legal action related to the incident. Make sure you understand the full extent of your injuries before accepting.",
      "Settlement funds are typically distributed within a few weeks of signing the release. Your attorney will deduct their fees and any case expenses, and you'll receive the remaining amount.",
    ],
    category: "Legal Guide",
    author: "InjuryRight Team",
    date: "January 12, 2026",
    readTime: "10 min read",
  },
  "dealing-with-insurance-adjusters": {
    title: "How to Deal with Insurance Adjusters After an Injury",
    content: [
      "After an accident, you'll likely receive a call from an insurance adjuster. While they may seem friendly and helpful, it's important to remember that their job is to minimize the amount their company pays out on claims.",
      "Insurance adjusters are trained negotiators who handle claims every day. They know the tactics that work to reduce settlements, and they'll use them on you if you're not prepared.",
      "One common tactic is calling you soon after the accident, before you've had time to understand the full extent of your injuries. They may offer a quick settlement that seems generous but is actually far less than your claim is worth.",
      "Be polite but cautious in all communications. You're required to report the accident to your own insurance company, but you're not obligated to give a recorded statement to the other driver's insurer.",
      "Never admit fault or apologize for the accident, even casually. Statements like 'I'm sorry this happened' can be twisted and used against you later.",
      "Don't discuss your injuries in detail. Simply state that you're receiving medical treatment and that the full extent of your injuries is still being determined.",
      "Be wary of signing any documents without having an attorney review them first. Adjusters may present releases or authorizations that could limit your ability to recover full compensation.",
      "Keep detailed records of all communications with insurance companies, including dates, times, and what was discussed. This documentation can be valuable if disputes arise later.",
      "Consider having an attorney handle all communications with insurance companies. This takes the pressure off you and ensures that nothing you say can be used to undermine your claim.",
      "Remember, you have the right to take your time. Don't let an adjuster pressure you into making quick decisions about your claim.",
    ],
    category: "Insurance",
    author: "InjuryRight Team",
    date: "January 10, 2026",
    readTime: "7 min read",
  },
  "medical-treatment-after-accident": {
    title: "Why Medical Treatment Matters for Your Personal Injury Case",
    content: [
      "Seeking prompt and consistent medical treatment after an accident isn't just important for your health—it's crucial for your personal injury case. Here's why medical documentation matters so much.",
      "Medical records serve as evidence of your injuries. They document what injuries you sustained, when they were diagnosed, and how they've affected your life. Without this documentation, it's your word against the insurance company's.",
      "Delays in treatment can hurt your case. Insurance companies often argue that if you were really injured, you would have sought immediate medical attention. A gap between the accident and your first doctor's visit can be used to question the severity of your injuries.",
      "Follow your doctor's treatment plan. Missing appointments or failing to follow prescribed treatments gives insurance companies ammunition to argue that your injuries aren't as serious as you claim.",
      "Be honest with your healthcare providers. Tell them about all your symptoms, even ones that seem minor. Some injuries worsen over time, and having early documentation of symptoms can be important.",
      "Keep all medical records and bills organized. You'll need to provide these to your attorney and potentially to the court. This includes hospital records, doctor's notes, prescription receipts, and therapy records.",
      "Don't downplay your symptoms. Many people try to be stoic about their pain, but this can backfire in a legal case. If you're hurting, say so—your medical records should accurately reflect your condition.",
      "Consider seeing specialists if recommended. If your primary care doctor refers you to a specialist, follow through. Specialist opinions carry weight in personal injury cases.",
      "Mental health treatment counts too. Accidents can cause anxiety, depression, and PTSD. Treatment for these conditions is just as valid as treatment for physical injuries.",
      "Your medical treatment creates a paper trail that tells the story of your injury and recovery. The more complete and consistent this documentation, the stronger your case will be.",
    ],
    category: "Medical",
    author: "InjuryRight Team",
    date: "January 8, 2026",
    readTime: "6 min read",
  },
  "slip-and-fall-liability": {
    title: "Slip and Fall Accidents: Who Is Liable?",
    content: [
      "Slip and fall accidents are among the most common types of personal injury cases. But determining who's responsible isn't always straightforward. Here's what you need to know about premises liability.",
      "Property owners and occupiers have a legal duty to maintain their premises in a reasonably safe condition. This includes regularly inspecting for hazards and either fixing them or warning visitors about them.",
      "The level of care owed depends on your status as a visitor. Invitees (like customers in a store) are owed the highest duty of care. Licensees (like social guests) are owed a moderate duty. Trespassers are generally owed the least protection.",
      "To prove a slip and fall case, you typically need to show that the property owner knew or should have known about the dangerous condition and failed to address it in a reasonable time.",
      "Common hazards that lead to slip and fall accidents include wet floors, uneven surfaces, poor lighting, loose rugs or mats, cluttered walkways, broken stairs or handrails, and icy sidewalks.",
      "Documentation is crucial. If you fall, try to photograph the hazard that caused your fall, get contact information from witnesses, and report the incident to the property owner or manager.",
      "Comparative negligence may apply. If you were partially at fault for your fall (for example, if you were texting while walking), your compensation may be reduced proportionally.",
      "Business owners often have security cameras. Your attorney can request footage that may show the hazardous condition and how long it existed before your fall.",
      "Time limits apply. Each state has a statute of limitations for filing personal injury claims. In most states, you have two to three years from the date of the accident.",
      "An experienced premises liability attorney can investigate your case, gather evidence, and fight for the compensation you deserve for your injuries.",
    ],
    category: "Premises Liability",
    author: "InjuryRight Team",
    date: "January 5, 2026",
    readTime: "7 min read",
  },
  "choosing-personal-injury-lawyer": {
    title: "How to Choose the Right Personal Injury Lawyer for Your Case",
    content: [
      "Choosing the right personal injury lawyer can make a significant difference in the outcome of your case. Here's what to look for when selecting legal representation.",
      "Look for experience in personal injury law. You want an attorney who focuses on personal injury cases, not a general practitioner who handles everything from divorces to criminal defense.",
      "Consider their track record. Ask about their success rate and the types of settlements and verdicts they've obtained. While past results don't guarantee future outcomes, they indicate competence.",
      "Check their reputation. Look for online reviews, ask for references, and check with your state bar association to ensure they're in good standing with no disciplinary actions.",
      "Evaluate their resources. Personal injury cases can be expensive to litigate. Make sure the firm has the resources to hire expert witnesses, conduct investigations, and take your case to trial if necessary.",
      "Assess their communication style. You want a lawyer who will keep you informed, return your calls promptly, and explain things in terms you can understand.",
      "Understand their fee structure. Most personal injury lawyers work on contingency, meaning they only get paid if you win. Make sure you understand what percentage they'll take and what expenses you might be responsible for.",
      "Meet with them in person. A consultation gives you a chance to assess whether you're comfortable with the attorney and whether they seem genuinely interested in your case.",
      "Ask about their trial experience. While most cases settle, you want a lawyer who's willing and able to go to trial if the insurance company won't offer fair compensation.",
      "Trust your instincts. If something feels off during your consultation, it's okay to keep looking. You need to feel confident in your legal representation.",
    ],
    category: "Legal Guide",
    author: "InjuryRight Team",
    date: "January 3, 2026",
    readTime: "9 min read",
  },
};

function ArticleContent() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts[slug];
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  if (!post) {
    return (
      <main className="min-h-screen">
        <InjuryRightHeader />
        <div className="pt-32 pb-16 px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Button color="primary" href="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
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
                href="/blog" 
                className="inline-flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-6">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-brand-50 text-brand-700">
                {post.category}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
            >
              {post.title}
            </motion.h1>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200"
            >
              <span className="flex items-center gap-1.5">
                <User01 className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </motion.div>

            <motion.div variants={fadeInUp} className="prose prose-lg max-w-none">
              {post.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-12 p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl text-center"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                Need help with your case?
              </h3>
              <p className="text-gray-300 mb-6">
                Get a free case evaluation from verified legal experts.
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

export function BlogPostContent() {
  return <ArticleContent />;
}
