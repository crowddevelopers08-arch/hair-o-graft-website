import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ClearAlignersHeroSection from "@/components/sections/ClearAlignersHeroSection";
import ClearAlignersIntroSection from "@/components/sections/ClearAlignersIntroSection";
import ClearAlignersWhyChooseUsSection from "@/components/sections/ClearAlignersWhyChooseUsSection";
import ClearAlignersUnderstandingSection from "@/components/sections/ClearAlignersUnderstandingSection";
import ClearAlignersBenefitsSection from "@/components/sections/ClearAlignersBenefitsSection";
import ClearAlignersIdealCandidateSection from "@/components/sections/ClearAlignersIdealCandidateSection";
import ClearAlignersProcessSection from "@/components/sections/ClearAlignersProcessSection";
import ClearAlignersTreatmentDurationSection from "@/components/sections/ClearAlignersTreatmentDurationSection";
import ClearAlignersRecoverySection from "@/components/sections/ClearAlignersRecoverySection";
import ClearAlignersBeforeAfterSection from "@/components/sections/ClearAlignersBeforeAfterSection";
import ClearAlignersFAQSection from "@/components/sections/ClearAlignersFAQSection";
import ClearAlignersFinalCTASection from "@/components/sections/ClearAlignersFinalCTASection";

export const metadata: Metadata = {
  title: "GFC Hair Treatment in Chennai | Hair O Graft",
  description:
    "GFC (Growth Factor Concentrate) hair treatment at Hair O Graft, Avadi Chennai. A non-surgical, autologous treatment for hair thinning and hair loss. Book a consultation today.",
  keywords: [
    "GFC hair treatment Chennai",
    "growth factor concentrate Chennai",
    "GFC treatment Avadi",
    "hair loss treatment Chennai",
    "non-surgical hair restoration Chennai",
    "hair thinning treatment Avadi",
    "GFC hair treatment Hair O Graft",
    "autologous hair treatment Chennai",
  ],
  openGraph: {
    title: "GFC Hair Treatment in Chennai | Hair O Graft",
    description:
      "GFC (Growth Factor Concentrate) hair treatment at Hair O Graft, Avadi Chennai. A personalised, non-surgical approach for hair thinning and hair loss.",
    url: "https://hairograft.com/services/gfc",
    siteName: "Hair O Graft",
    locale: "en_IN",
    type: "website",
  },
};

export default function GFCPage() {
  return (
    <>
      <Navbar />
      <main className="mt-[76px]">
        <ScrollReveal>
          <ClearAlignersHeroSection />
          <ClearAlignersIntroSection />
          <ClearAlignersWhyChooseUsSection />
          <ClearAlignersUnderstandingSection />
          <ClearAlignersBenefitsSection />
          <ClearAlignersIdealCandidateSection />
          <ClearAlignersProcessSection />
          <ClearAlignersTreatmentDurationSection />
          <ClearAlignersRecoverySection />
          <ClearAlignersBeforeAfterSection />
          <ClearAlignersFAQSection />
          <ClearAlignersFinalCTASection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
