
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import UVLightHeroSection from "@/components/sections/UVLightHeroSection";
import UVLightIntroSection from "@/components/sections/UVLightIntroSection";
import UVLightWhyChooseUsSection from "@/components/sections/UVLightWhyChooseUsSection";
import UVLightUnderstandingSection from "@/components/sections/UVLightUnderstandingSection";
import UVLightBenefitsSection from "@/components/sections/UVLightBenefitsSection";
import UVLightIdealCandidateSection from "@/components/sections/UVLightIdealCandidateSection";
import UVLightProcessSection from "@/components/sections/UVLightProcessSection";
import UVLightTreatmentDurationSection from "@/components/sections/UVLightTreatmentDurationSection";
import UVLightRecoverySection from "@/components/sections/UVLightRecoverySection";
import UVLightBeforeAfterSection from "@/components/sections/UVLightBeforeAfterSection";
import UVLightFAQSection from "@/components/sections/UVLightFAQSection";
import UVLightFinalCTASection from "@/components/sections/UVLightFinalCTASection";

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
          <UVLightHeroSection />
          <UVLightIntroSection />
          <UVLightWhyChooseUsSection />
          <UVLightUnderstandingSection />
          <UVLightBenefitsSection />
          <UVLightIdealCandidateSection />
          <UVLightProcessSection />
          <UVLightTreatmentDurationSection />
          <UVLightRecoverySection />
          <UVLightBeforeAfterSection />
          <UVLightFAQSection />
          <UVLightFinalCTASection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
