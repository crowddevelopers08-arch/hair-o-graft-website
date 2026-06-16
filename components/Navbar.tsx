"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/* ── Category SVG Icons ── */
type IconProps = { className?: string; style?: React.CSSProperties };

function SkinIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="10" r="5.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 4.5V3M12 17v-1.5M4.5 10H3M21 10h-1.5M6.4 6.4l-1-1M18.6 18.6l-1-1M17.6 6.4l1-1M5.4 18.6l1-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="10" r="2.5" fill="currentColor" opacity="0.25" />
      <path d="M9 13.5c0 1.657 1.343 3 3 3s3-1.343 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function HairIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8.5" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.5 8.5C7.5 6 9 3 12 3c3 0 4.5 3 4.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 21c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9 12.5c-.5 1-1 2-1 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M15 12.5c.5 1 1 2 1 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function ToothIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.5 3C6.5 3 4.5 4.5 4.5 7c0 1.5.4 2.8.8 3.8.6 1.6.7 2.5.7 3.2 0 1 .3 2.5.8 3.8C7.3 19.1 8 21 9 21c1 0 1.2-1.5 1.5-3 .2-.8.5-1.5 1.5-1.5s1.3.7 1.5 1.5C13.8 19.5 14 21 15 21c1 0 1.7-1.9 2.2-3.2.5-1.3.8-2.8.8-3.8 0-.7.1-1.6.7-3.2.4-1 .8-2.3.8-3.8C19.5 4.5 17.5 3 15.5 3c-1 0-2 .4-3.5.4S9.5 3 8.5 3z"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="M9 8.5c.5-.3 1-.5 1.5-.5s1 .2 1.5.5 1 .5 1.5.5 1-.2 1.5-.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function CameraIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.5 4l1.5 2H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h3l1.5-2h5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" opacity="0.35" />
    </svg>
  );
}

function LocationPinIcon({ className, style }: IconProps) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 14 6 14s6-8.75 6-14c0-3.314-2.686-6-6-6z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/* ── Nav data ── */
const navItems = [
  {
    label: "Skin Treatments",
    color: "#e95b8a",
    Icon: SkinIcon,
    items: [
      "Hydrafacial",
      "Acne and Scar Removal",
      "Tattoo Removal",
      "Wart Removal",
      "Skin Peel",
      "Glutathione IV",
      "Botox & Fillers",
      "Laser Hair Removal",
      "Carbon Peel",
    ],
  },
  {
    label: "Hair Treatments",
    color: "#354C9C",
    Icon: HairIcon,
    items: [
      "Dandruff Treatment",
      "PRP Pro+",
      "Scalp Micropigmentation",
      "PRP",
      "Micro Blading",
      "Cosmetic Hair System",
      "UV Light",
      "GFC",
    ],
  },
  {
    label: "Dental Treatments",
    color: "#16a07c",
    Icon: ToothIcon,
    items: [
      "Aligners",
      "INvisalign",
      "Kids Dentistry",
      "Root Canal",
      "Implant",
      "Dental Crown",
    ],
  },
  {
    label: "Media",
    color: "#f59e0b",
    Icon: CameraIcon,
    items: ["Clinic Images", "Clinic Exterior", "Clinic Montages"],
  },
];

const contact = {
  email: "hairograft@gmail.com",
  phone: "7448866675",
  address: "25, Nehru Bazaar, Thirumalai Rajapuram, Kondithope, Avadi, Tamil Nadu 600054",
};

/* ── Utility Icons ── */
function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.4 1.13 2 2 0 012.4.95h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0120.07 16z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const enter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white shadow-[0_4px_32px_rgba(53,76,156,0.14)] py-2"
            : "bg-white/98 backdrop-blur-md shadow-[0_2px_16px_rgba(53,76,156,0.08)] py-2"
        }`}
      >
        <div className="max-w-[1340px] mx-auto px-3 sm:px-6 xl:px-8 flex items-center justify-between gap-3 h-[60px] sm:h-[64px]">

          {/* ── Logo ── */}
          <a href="/" className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink group">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden ring-2 ring-[#354C9C]/20 group-hover:ring-[#354C9C]/50 transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:scale-105 transform-gpu will-change-transform flex-shrink-0">
              <Image
                src="/image.png"
                alt="Hair O Graft Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="leading-tight min-w-0">
              <span className="block text-[14px] sm:text-[17px] font-extrabold tracking-tight text-[#354C9C] truncate">Hair O Graft</span>
              <span className="block text-[9px] font-semibold text-gray-400 tracking-[0.18em] uppercase">Hair · Skin · Dental</span>
            </div>
          </a>

          {/* ── Desktop nav ── */}
          <div className="hidden lg:flex items-center">
            {navItems.map((nav) => {
              const { Icon } = nav;
              return (
                <div
                  key={nav.label}
                  className="relative"
                  onMouseEnter={() => enter(nav.label)}
                  onMouseLeave={leave}
                >
                  <button
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[13px] font-semibold transition-all duration-200 ${
                      openMenu === nav.label
                        ? "text-[#354C9C] bg-blue-50/80"
                        : "text-gray-600 hover:text-[#354C9C] hover:bg-blue-50/60"
                    }`}
                  >
                    <span>{nav.label}</span>
                    <ChevronDown open={openMenu === nav.label} />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-[calc(100%+8px)] left-0 w-56 transition-all duration-200 origin-top-left ${
                      openMenu === nav.label
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    {/* arrow tip */}
                    <div className="absolute -top-1.5 left-6 w-3 h-3 bg-white rotate-45 shadow-[-2px_-2px_4px_rgba(0,0,0,0.05)] border-l border-t border-gray-100 z-10" />

                    <div className="relative bg-white rounded-2xl shadow-[0_16px_60px_rgba(53,76,156,0.18)] border border-gray-100 overflow-hidden">
                      {/* coloured header */}
                      <div
                        className="px-4 py-3 flex items-center gap-2.5"
                        style={{
                          background: `linear-gradient(135deg, ${nav.color}18, ${nav.color}08)`,
                          borderBottom: `2px solid ${nav.color}25`,
                        }}
                      >
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${nav.color}20` }}
                        >
                          <Icon className="w-4 h-4" style={{ color: nav.color } as React.CSSProperties} />
                        </div>
                        <span className="text-[12px] font-bold tracking-wide" style={{ color: nav.color }}>
                          {nav.label}
                        </span>
                      </div>

                      {/* items */}
                      <div className="p-1.5">
                        {nav.items.map((item) => (
                          <a
                            key={item}
                            href="#"
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] text-gray-600 hover:text-gray-900 transition-all duration-150 group/item hover:bg-gray-50"
                            onClick={() => setOpenMenu(null)}
                          >
                            <div
                              className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover/item:scale-110"
                              style={{ backgroundColor: `${nav.color}18` }}
                            >
                              <Icon className="w-3 h-3" style={{ color: nav.color } as React.CSSProperties} />
                            </div>
                            <span className="group-hover/item:translate-x-0.5 transition-transform duration-150">{item}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Contact dropdown */}
            <div
              className="relative"
              onMouseEnter={() => enter("Contact")}
              onMouseLeave={leave}
            >
              <button
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[13px] font-semibold transition-all duration-200 ${
                  openMenu === "Contact"
                    ? "text-[#354C9C] bg-blue-50/80"
                    : "text-gray-600 hover:text-[#354C9C] hover:bg-blue-50/60"
                }`}
              >
                Contact
                <ChevronDown open={openMenu === "Contact"} />
              </button>

              <div
                className={`absolute top-[calc(100%+8px)] right-0 w-[300px] transition-all duration-200 origin-top-right ${
                  openMenu === "Contact"
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="absolute -top-1.5 right-8 w-3 h-3 bg-white rotate-45 shadow-[-2px_-2px_4px_rgba(0,0,0,0.05)] border-l border-t border-gray-100 z-10" />

                <div className="relative bg-white rounded-2xl shadow-[0_16px_60px_rgba(53,76,156,0.18)] border border-gray-100 overflow-hidden">
                  {/* header */}
                  <div className="px-4 py-3 flex items-center gap-2.5 bg-gradient-to-r from-[#354C9C]/10 to-[#354C9C]/5 border-b border-[#354C9C]/15">
                    <div className="w-7 h-7 rounded-lg bg-[#354C9C]/15 flex items-center justify-center flex-shrink-0">
                      <LocationPinIcon className="w-4 h-4 text-[#354C9C]" />
                    </div>
                    <span className="text-[12px] font-bold text-[#354C9C] tracking-wide">Get In Touch</span>
                  </div>

                  <div className="p-3 space-y-1">
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-blue-50/70 transition-colors group/c"
                    >
                      <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 group-hover/c:bg-[#354C9C] group-hover/c:border-[#354C9C] transition-all duration-200">
                        <MailIcon className="w-4 h-4 text-[#354C9C] group-hover/c:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Email</p>
                        <p className="text-[13px] text-gray-700 font-medium group-hover/c:text-[#354C9C] transition-colors">{contact.email}</p>
                      </div>
                    </a>

                    <a
                      href={`tel:+91${contact.phone}`}
                      className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-blue-50/70 transition-colors group/c"
                    >
                      <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 group-hover/c:bg-[#354C9C] group-hover/c:border-[#354C9C] transition-all duration-200">
                        <PhoneIcon className="w-4 h-4 text-[#354C9C] group-hover/c:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Phone</p>
                        <p className="text-[13px] text-gray-700 font-medium group-hover/c:text-[#354C9C] transition-colors">+91 {contact.phone}</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-3 px-3 py-3 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPinIcon className="w-4 h-4 text-[#354C9C]" />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">Address</p>
                        <p className="text-[12px] text-gray-500 leading-relaxed">{contact.address}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Desktop CTA ── */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href={`tel:+91${contact.phone}`}
              className="flex items-center gap-1.5 text-[13px] font-bold text-[#354C9C] hover:text-[#2B3E80] transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              +91 {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`}>
              <button className="bg-gradient-to-r from-[#ED3136] to-[#ED3136] text-white px-5 py-2.5 rounded-full text-[13px] font-bold shadow-[0_4px_16px_rgba(237,49,54,0.35)] hover:shadow-[0_6px_24px_rgba(237,49,54,0.45)] hover:scale-[1.04] active:scale-95 transition-all duration-200 whitespace-nowrap">
                Book Your Consultation
              </button>
            </a>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 flex flex-col justify-center items-center gap-[5px] rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors flex-shrink-0"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[2px] bg-[#354C9C] rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-[2px] bg-[#354C9C] rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-[2px] bg-[#354C9C] rounded-full transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />

        <div
          className={`absolute top-0 right-0 h-full w-full max-w-[320px] bg-white flex flex-col shadow-2xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* drawer header */}
          <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-[#354C9C] to-[#354C9C] flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/30 shadow-md">
                <Image src="/image.png" alt="Hair O Graft Logo" fill className="object-cover" />
              </div>
              <div>
                <p className="text-white font-extrabold text-[15px]">Hair O Graft</p>
                <p className="text-blue-200 text-[9px] tracking-[0.18em] uppercase font-medium">Hair · Skin · Dental</p>
              </div>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center text-white hover:bg-white/25 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* nav list */}
          <div className="flex-1 overflow-y-auto">
            {navItems.map((nav, i) => {
              const { Icon } = nav;
              return (
                <div key={nav.label} className={i < navItems.length - 1 ? "border-b border-gray-100" : ""}>
                  <button
                    onClick={() => setMobileExpanded((v) => (v === nav.label ? null : nav.label))}
                    className="w-full flex items-center justify-between px-5 py-4 text-[13.5px] font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${nav.color}18` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: nav.color } as React.CSSProperties} />
                      </div>
                      {nav.label}
                    </div>
                    <ChevronDown open={mobileExpanded === nav.label} />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileExpanded === nav.label ? "max-h-[400px]" : "max-h-0"
                    }`}
                  >
                    <div className="px-5 pb-3 pt-1 space-y-0.5 bg-gray-50/60">
                      {nav.items.map((item) => (
                        <a
                          key={item}
                          href="#"
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 py-2.5 text-[13px] text-gray-600 hover:text-gray-900 transition-colors group/m"
                        >
                          <div
                            className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${nav.color}18` }}
                          >
                            <Icon className="w-3 h-3" style={{ color: nav.color } as React.CSSProperties} />
                          </div>
                          <span className="group-hover/m:translate-x-0.5 transition-transform duration-150">{item}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Contact accordion */}
            <div className="border-t border-gray-100">
              <button
                onClick={() => setMobileExpanded((v) => (v === "Contact" ? null : "Contact"))}
                className="w-full flex items-center justify-between px-5 py-4 text-[13.5px] font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#354C9C]/10 flex items-center justify-center flex-shrink-0">
                    <LocationPinIcon className="w-4 h-4 text-[#354C9C]" />
                  </div>
                  Contact
                </div>
                <ChevronDown open={mobileExpanded === "Contact"} />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileExpanded === "Contact" ? "max-h-72" : "max-h-0"
                }`}
              >
                <div className="px-5 pb-4 pt-2 space-y-3 bg-gray-50/60">
                  <a href={`mailto:${contact.email}`} className="flex items-center gap-2.5 text-[13px] text-gray-600 hover:text-[#354C9C] transition-colors">
                    <MailIcon className="w-4 h-4 text-[#354C9C] flex-shrink-0" />
                    {contact.email}
                  </a>
                  <a href={`tel:+91${contact.phone}`} className="flex items-center gap-2.5 text-[13px] text-gray-600 hover:text-[#354C9C] transition-colors">
                    <PhoneIcon className="w-4 h-4 text-[#354C9C] flex-shrink-0" />
                    +91 {contact.phone}
                  </a>
                  <div className="flex items-start gap-2.5 text-[12px] text-gray-500">
                    <MapPinIcon className="w-4 h-4 text-[#354C9C] flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{contact.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* footer CTA */}
          <div className="px-5 py-5 border-t border-gray-100 space-y-2.5 flex-shrink-0 bg-white">
            <a
              href={`tel:+91${contact.phone}`}
              className="flex items-center justify-center gap-2 text-[#354C9C] font-bold text-[13px] py-2.5 rounded-xl border-2 border-blue-100 hover:bg-blue-50 transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              +91 {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="block">
              <button className="w-full bg-gradient-to-r from-[#ED3136] to-[#ED3136] text-white py-3 rounded-xl font-bold shadow-[0_4px_16px_rgba(237,49,54,0.3)] text-[13px] hover:shadow-[0_6px_24px_rgba(237,49,54,0.4)] transition-all">
                Book Free Consultation
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
