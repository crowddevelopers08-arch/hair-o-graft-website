import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import MicroneedlingHeroSection from "@/components/sections/MicroneedlingHeroSection";
import MicroneedlingIntroSection from "@/components/sections/MicroneedlingIntroSection";
import MicroneedlingWhyChooseUsSection from "@/components/sections/MicroneedlingWhyChooseUsSection";
import MicroneedlingUnderstandingSection from "@/components/sections/MicroneedlingUnderstandingSection";
import MicroneedlingBenefitsSection from "@/components/sections/MicroneedlingBenefitsSection";
import MicroneedlingIdealCandidateSection from "@/components/sections/MicroneedlingIdealCandidateSection";
import MicroneedlingProcessSection from "@/components/sections/MicroneedlingProcessSection";
import MicroneedlingTreatmentDurationSection from "@/components/sections/MicroneedlingTreatmentDurationSection";
import MicroneedlingRecoverySection from "@/components/sections/MicroneedlingRecoverySection";
import MicroneedlingBeforeAfterSection from "@/components/sections/MicroneedlingBeforeAfterSection";
import MicroneedlingFAQSection from "@/components/sections/MicroneedlingFAQSection";
import MicroneedlingFinalCTASection from "@/components/sections/MicroneedlingFinalCTASection";

export const metadata: Metadata = {
  title: "PRP Hair Treatment in Chennai | Hair O Graft",
  description:
    "PRP (Platelet-Rich Plasma) hair treatment at Hair O Graft, Avadi Chennai. A non-surgical, autologous treatment for hair thinning and hair loss. Book a consultation today.",
  keywords: [
    "PRP hair treatment Chennai",
    "platelet rich plasma hair treatment Chennai",
    "PRP treatment Avadi",
    "hair loss treatment Chennai",
    "non-surgical hair restoration Chennai",
    "hair thinning treatment Avadi",
    "PRP hair treatment Hair O Graft",
    "autologous hair treatment Chennai",
  ],
  openGraph: {
    title: "PRP Hair Treatment in Chennai | Hair O Graft",
    description:
      "PRP (Platelet-Rich Plasma) hair treatment at Hair O Graft, Avadi Chennai. A personalised, non-surgical approach for hair thinning and hair loss.",
    url: "https://hairograft.com/services/prp",
    siteName: "Hair O Graft",
    locale: "en_IN",
    type: "website",
  },
};

export default function PRPPage() {
  return (
    <>
      <Navbar />
      <main className="mt-[76px]">
        <ScrollReveal>
          <MicroneedlingHeroSection />
          <MicroneedlingIntroSection />
          <MicroneedlingWhyChooseUsSection />
          <MicroneedlingUnderstandingSection />
          <MicroneedlingBenefitsSection />
          <MicroneedlingIdealCandidateSection />
          <MicroneedlingProcessSection />
          <MicroneedlingTreatmentDurationSection />
          <MicroneedlingRecoverySection />
          <MicroneedlingBeforeAfterSection />
          <MicroneedlingFAQSection />
          <MicroneedlingFinalCTASection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
