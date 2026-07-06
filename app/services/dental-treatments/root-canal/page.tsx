import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import RootCanalHeroSection from "@/components/sections/RootCanalHeroSection";
import RootCanalIntroSection from "@/components/sections/RootCanalIntroSection";
import RootCanalWhyChooseUsSection from "@/components/sections/RootCanalWhyChooseUsSection";
import RootCanalUnderstandingSection from "@/components/sections/RootCanalUnderstandingSection";
import RootCanalBenefitsSection from "@/components/sections/RootCanalBenefitsSection";
import RootCanalIdealCandidateSection from "@/components/sections/RootCanalIdealCandidateSection";
import RootCanalProcessSection from "@/components/sections/RootCanalProcessSection";
import RootCanalTreatmentDurationSection from "@/components/sections/RootCanalTreatmentDurationSection";
import RootCanalRecoverySection from "@/components/sections/RootCanalRecoverySection";
import RootCanalBeforeAfterSection from "@/components/sections/RootCanalBeforeAfterSection";
import RootCanalFAQSection from "@/components/sections/RootCanalFAQSection";
import RootCanalFinalCTASection from "@/components/sections/RootCanalFinalCTASection";

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
          <RootCanalHeroSection />
          <RootCanalIntroSection />
          <RootCanalWhyChooseUsSection />
          <RootCanalUnderstandingSection />
          <RootCanalBenefitsSection />
          <RootCanalIdealCandidateSection />
          <RootCanalProcessSection />
          <RootCanalTreatmentDurationSection />
          <RootCanalRecoverySection />
          <RootCanalBeforeAfterSection />
          <RootCanalFAQSection />
          <RootCanalFinalCTASection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
