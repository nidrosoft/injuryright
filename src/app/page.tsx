import { InjuryRightHeader } from "@/components/layout/InjuryRightHeader";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Comparison } from "@/components/sections/Comparison";
import { FreeUnlessYouWin } from "@/components/sections/FreeUnlessYouWin";
import { FAQ } from "@/components/sections/FAQ";
import { LawyerDirectory } from "@/components/sections/LawyerDirectory";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
    return (
        <main className="min-h-screen">
            <InjuryRightHeader />
            <Hero />
            <ValueProposition />
            <HowItWorks />
            <Comparison />
            <FreeUnlessYouWin />
            <FAQ />
            <LawyerDirectory />
            <CTA />
            <Footer />
        </main>
    );
}
