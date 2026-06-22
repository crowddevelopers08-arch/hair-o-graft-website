import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

import AcneScarHeroSection from "@/components/sections/AcneScarHeroSection";

export const metadata: Metadata = {
  title: "Acne & Scar Removal Treatment in Chennai | Hair O Graft",
  description:
    "Advanced acne and scar removal treatment at Hair O Graft, Avadi Chennai. Achieve clearer, smoother skin with expert care. Book your consultation today.",
  keywords: [
    "acne treatment Chennai",
    "scar removal Chennai",
    "acne scar treatment Avadi",
    "skin treatment Chennai",
    "Hair O Graft",
  ],
  openGraph: {
    title: "Acne & Scar Removal Treatment in Chennai | Hair O Graft",
    description:
      "Achieve clearer, smoother skin with professional acne and scar removal treatment at Hair O Graft, Avadi, Chennai.",
    type: "website",
  },
};

export default function AcneScarRemovalPage() {
  return (
    <>
      <Navbar />
      <main className="mt-[76px]">
        <ScrollReveal>
          <AcneScarHeroSection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
