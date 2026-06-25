import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Hair O Graft",
  description:
    "Get in touch with Hair O Graft in Avadi, Chennai for skin, hair, and dental consultations.",
};

const contact = {
  email: "hairograft@gmail.com",
  phone: "7448866675",
  address: "25, Nehru Bazaar, Thirumalai Rajapuram, Kondithope, Avadi, Tamil Nadu 600054",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="mt-[76px] min-h-screen bg-[linear-gradient(180deg,#f6f8ff_0%,#ffffff_45%,#f8fbff_100%)]">
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-[#354C9C]/15 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#354C9C] shadow-[0_10px_30px_rgba(53,76,156,0.08)]">
              Contact Us
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#0d1440] sm:text-5xl">
              Book your consultation with Hair O Graft
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Reach out for skin, hair, or dental treatment enquiries. We&apos;ll help you choose the right next step.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <a
              href={`tel:+91${contact.phone}`}
              className="rounded-[28px] border border-[#354C9C]/10 bg-white p-7 shadow-[0_24px_70px_rgba(13,20,64,0.08)] transition-transform duration-200 hover:-translate-y-1"
            >
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#354C9C]">Call Us</p>
              <p className="mt-4 text-2xl font-extrabold text-[#0d1440]">+91 {contact.phone}</p>
              <p className="mt-3 text-sm leading-6 text-slate-500">Speak with the clinic directly for appointments and treatment guidance.</p>
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="rounded-[28px] border border-[#354C9C]/10 bg-white p-7 shadow-[0_24px_70px_rgba(13,20,64,0.08)] transition-transform duration-200 hover:-translate-y-1"
            >
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#354C9C]">Email Us</p>
              <p className="mt-4 text-2xl font-extrabold text-[#0d1440] break-words">{contact.email}</p>
              <p className="mt-3 text-sm leading-6 text-slate-500">Send us your questions and our team can get back to you with details.</p>
            </a>

            <div className="rounded-[28px] border border-[#354C9C]/10 bg-white p-7 shadow-[0_24px_70px_rgba(13,20,64,0.08)]">
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#354C9C]">Visit Us</p>
              <p className="mt-4 text-2xl font-extrabold text-[#0d1440]">Avadi, Chennai</p>
              <p className="mt-3 text-sm leading-7 text-slate-500">{contact.address}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
