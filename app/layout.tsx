import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hair O Graft | Premium Hair & Skin Treatments in Chennai",
  description:
    "Hair O Graft offers expert hair transplant, HydraFacial and skincare treatments in Avadi, Chennai. Book your consultation today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
