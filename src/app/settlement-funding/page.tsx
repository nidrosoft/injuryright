import type { Metadata } from "next";
import { SettlementFundingContent } from "./settlement-funding-content";

export const metadata: Metadata = {
  title: "Settlement Funding Solutions | InjuryRight - Get Money Now",
  description:
    "Receive money from your future settlement now. No monthly interest payments. You don't pay us back if you don't win your case. Fast, free application.",
  keywords: [
    "settlement funding",
    "lawsuit funding",
    "pre-settlement funding",
    "legal funding",
    "cash advance settlement",
    "non-recourse funding",
    "InjuryRight funding",
  ],
  openGraph: {
    title: "Settlement Funding Solutions | InjuryRight",
    description:
      "Tired of waiting for your case to settle? Get immediate financial security with InjuryRight Funding.",
    type: "website",
    url: "https://injuryright.com/settlement-funding",
  },
  twitter: {
    card: "summary_large_image",
    title: "Settlement Funding Solutions | InjuryRight",
    description:
      "Get money now from your future settlement. No repayment if you lose your case.",
  },
  alternates: {
    canonical: "https://injuryright.com/settlement-funding",
  },
};

export default function SettlementFundingPage() {
  return <SettlementFundingContent />;
}
