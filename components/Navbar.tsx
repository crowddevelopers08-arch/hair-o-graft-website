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
    color: "#7EB3FF",
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
    color: "#4ECFAD",
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
    color: "#FBBF24",
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
            ? "py-1 shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
            : "py-2"
        }`}
        style={{
          background: scrolled
            ? "linear-gradient(135deg, rgba(6,10,38,0.97) 0%, rgba(13,27,82,0.97) 50%, rgba(6,10,38,0.97) 100%)"
            : "linear-gradient(135deg, rgba(6,10,38,0.82) 0%, rgba(13,27,82,0.82) 50%, rgba(6,10,38,0.82) 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* subtle gradient line at top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#7EB3FF]/40 to-transparent pointer-events-none" />

        <div className="max-w-[1340px] mx-auto px-3 sm:px-6 xl:px-8 flex items-center justify-between gap-3 h-[60px] sm:h-[64px]">

          {/* ── Logo ── */}
          <a href="/" className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink group">
            <div className="relative w-12 h-12 sm:w-[52px] sm:h-[52px] rounded-full overflow-hidden ring-2 ring-white/20 group-hover:ring-[#7EB3FF]/60 transition-all duration-300 shadow-[0_0_16px_rgba(126,179,255,0.2)] group-hover:shadow-[0_0_24px_rgba(126,179,255,0.4)] group-hover:scale-105 transform-gpu will-change-transform flex-shrink-0">
              <Image
                src="/image.png"
                alt="Hair O Graft Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="leading-tight min-w-0">
              <span className="block text-[14px] sm:text-[17px] font-extrabold tracking-tight text-white truncate drop-shadow-[0_0_8px_rgba(126,179,255,0.3)]">Hair O Graft</span>
              <span className="block text-[9px] font-semibold text-[#7EB3FF]/70 tracking-[0.18em] uppercase">Hair · Skin · Dental</span>
            </div>
          </a>

          {/* ── Desktop nav ── */}
          <div className="hidden lg:flex items-center">
            {navItems.map((nav) => {
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
                        ? "text-white bg-white/12"
                        : "text-white/70 hover:text-white hover:bg-white/8"
                    }`}
                  >
                    <span>{nav.label}</span>
                    <ChevronDown open={openMenu === nav.label} />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-[calc(100%+14px)] left-0 w-[200px] transition-all duration-[180ms] ease-out origin-top-left ${
                      openMenu === nav.label
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 scale-[0.97] -translate-y-1 pointer-events-none"
                    }`}
                  >
                    {/* caret */}
                    <div
                      className="absolute -top-[5px] left-5 w-2.5 h-2.5 rotate-45 z-10"
                      style={{
                        background: "#0d1440",
                        borderLeft: "1px solid rgba(255,255,255,0.12)",
                        borderTop: "1px solid rgba(255,255,255,0.12)",
                      }}
                    />

                    <div
                      className="relative rounded-2xl overflow-hidden"
                      style={{
                        background: "linear-gradient(160deg,#0d1440 0%,#091030 100%)",
                        border: "1px solid rgba(255,255,255,0.09)",
                        boxShadow: "0 32px 64px rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.4)",
                      }}
                    >
                      {/* left accent bar */}
                      <div
                        className="absolute top-0 left-0 w-[3px] h-full rounded-l-2xl"
                        style={{ background: `linear-gradient(180deg, ${nav.color}, ${nav.color}30)` }}
                      />

                      {/* label */}
                      <div className="pl-6 pr-4 pt-4 pb-2">
                        <p
                          className="text-[9.5px] font-bold tracking-[0.2em] uppercase"
                          style={{ color: nav.color }}
                        >
                          {nav.label}
                        </p>
                      </div>

                      {/* items */}
                      <ul className="pl-6 pr-4 pb-4 space-y-0.5">
                        {nav.items.map((item) => (
                          <li key={item}>
                            <a
                              href="#"
                              className="block py-[7px] text-[12.5px] font-light text-white/45 leading-snug transition-all duration-200"
                              onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLAnchorElement;
                                el.style.color = "#ffffff";
                                el.style.paddingLeft = "6px";
                                el.style.letterSpacing = "0.01em";
                              }}
                              onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLAnchorElement;
                                el.style.color = "";
                                el.style.paddingLeft = "";
                                el.style.letterSpacing = "";
                              }}
                              onClick={() => setOpenMenu(null)}
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
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
                    ? "text-white bg-white/12"
                    : "text-white/70 hover:text-white hover:bg-white/8"
                }`}
              >
                Contact
                <ChevronDown open={openMenu === "Contact"} />
              </button>

              <div
                className={`absolute top-[calc(100%+14px)] right-0 w-[260px] transition-all duration-[180ms] ease-out origin-top-right ${
                  openMenu === "Contact"
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-[0.97] -translate-y-1 pointer-events-none"
                }`}
              >
                {/* caret */}
                <div
                  className="absolute -top-[5px] right-6 w-2.5 h-2.5 rotate-45 z-10"
                  style={{
                    background: "#0d1440",
                    borderLeft: "1px solid rgba(255,255,255,0.12)",
                    borderTop: "1px solid rgba(255,255,255,0.12)",
                  }}
                />

                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    background: "linear-gradient(160deg,#0d1440 0%,#091030 100%)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    boxShadow: "0 32px 64px rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.4)",
                  }}
                >
                  {/* left accent bar */}
                  <div
                    className="absolute top-0 left-0 w-[3px] h-full rounded-l-2xl"
                    style={{ background: "linear-gradient(180deg,#7EB3FF,#7EB3FF30)" }}
                  />

                  {/* label */}
                  <div className="pl-6 pr-4 pt-4 pb-3">
                    <p className="text-[9.5px] font-bold tracking-[0.2em] uppercase text-[#7EB3FF]">
                      Get In Touch
                    </p>
                  </div>

                  {/* contact entries */}
                  <div className="pl-6 pr-4 pb-4 space-y-3">
                    <a
                      href={`mailto:${contact.email}`}
                      className="block group/c"
                      style={{ transition: "opacity 150ms" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = ""; }}
                    >
                      <p className="text-[9px] font-bold tracking-[0.18em] uppercase text-white/25 mb-0.5">Email</p>
                      <p className="text-[12.5px] font-light text-white/55 group-hover/c:text-white transition-colors duration-150 truncate">{contact.email}</p>
                    </a>

                    <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

                    <a
                      href={`tel:+91${contact.phone}`}
                      className="block group/c"
                    >
                      <p className="text-[9px] font-bold tracking-[0.18em] uppercase text-white/25 mb-0.5">Phone</p>
                      <p className="text-[12.5px] font-light text-white/55 group-hover/c:text-white transition-colors duration-150">+91 {contact.phone}</p>
                    </a>

                    <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

                    <div>
                      <p className="text-[9px] font-bold tracking-[0.18em] uppercase text-white/25 mb-0.5">Address</p>
                      <p className="text-[11.5px] font-light text-white/40 leading-relaxed">{contact.address}</p>
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
              className="flex items-center gap-1.5 text-[13px] font-bold text-white/80 hover:text-white transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              +91 {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`}>
              <button
                className="text-white px-5 py-2.5 rounded-full text-[13px] font-bold transition-all duration-200 whitespace-nowrap hover:scale-[1.04] active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #ED3136, #C41D22)",
                  boxShadow: "0 4px 20px rgba(237,49,54,0.45), 0 0 0 1px rgba(237,49,54,0.2) inset",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 28px rgba(237,49,54,0.6), 0 0 0 1px rgba(237,49,54,0.3) inset";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 20px rgba(237,49,54,0.45), 0 0 0 1px rgba(237,49,54,0.2) inset";
                }}
              >
                Book Your Consultation
              </button>
            </a>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 flex flex-col justify-center items-center gap-[5px] rounded-xl transition-all duration-200 flex-shrink-0"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />

        <div
          className={`absolute top-0 right-0 h-full w-full max-w-[320px] flex flex-col shadow-2xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            background: "linear-gradient(160deg, #060A26 0%, #0D1B52 50%, #060A26 100%)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* drawer header */}
          <div
            className="flex items-center justify-between px-5 py-4 flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, rgba(126,179,255,0.12), rgba(126,179,255,0.04))",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/20 shadow-[0_0_16px_rgba(126,179,255,0.3)]">
                <Image src="/image.png" alt="Hair O Graft Logo" fill className="object-cover" />
              </div>
              <div>
                <p className="text-white font-extrabold text-[15px] drop-shadow-[0_0_8px_rgba(126,179,255,0.4)]">Hair O Graft</p>
                <p className="text-[#7EB3FF]/60 text-[9px] tracking-[0.18em] uppercase font-medium">Hair · Skin · Dental</p>
              </div>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white/70 hover:text-white transition-colors"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.12)" }}
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
                <div key={nav.label} style={{ borderBottom: i < navItems.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                  <button
                    onClick={() => setMobileExpanded((v) => (v === nav.label ? null : nav.label))}
                    className="w-full flex items-center justify-between px-5 py-4 text-[13.5px] font-semibold text-white/80 hover:text-white transition-colors hover:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${nav.color}22` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: nav.color } as React.CSSProperties} />
                      </div>
                      {nav.label}
                    </div>
                    <span className="text-white/40">
                      <ChevronDown open={mobileExpanded === nav.label} />
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileExpanded === nav.label ? "max-h-[400px]" : "max-h-0"
                    }`}
                  >
                    <div className="px-5 pb-3 pt-1 space-y-0.5" style={{ background: "rgba(0,0,0,0.2)" }}>
                      {nav.items.map((item) => (
                        <a
                          key={item}
                          href="#"
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-3 py-2.5 text-[13px] text-white/50 hover:text-white transition-colors group/m"
                        >
                          <div
                            className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${nav.color}20` }}
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
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <button
                onClick={() => setMobileExpanded((v) => (v === "Contact" ? null : "Contact"))}
                className="w-full flex items-center justify-between px-5 py-4 text-[13.5px] font-semibold text-white/80 hover:text-white transition-colors hover:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(126,179,255,0.15)" }}>
                    <LocationPinIcon className="w-4 h-4 text-[#7EB3FF]" />
                  </div>
                  Contact
                </div>
                <span className="text-white/40">
                  <ChevronDown open={mobileExpanded === "Contact"} />
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileExpanded === "Contact" ? "max-h-72" : "max-h-0"
                }`}
              >
                <div className="px-5 pb-4 pt-2 space-y-3" style={{ background: "rgba(0,0,0,0.2)" }}>
                  <a href={`mailto:${contact.email}`} className="flex items-center gap-2.5 text-[13px] text-white/50 hover:text-[#7EB3FF] transition-colors">
                    <MailIcon className="w-4 h-4 text-[#7EB3FF] flex-shrink-0" />
                    {contact.email}
                  </a>
                  <a href={`tel:+91${contact.phone}`} className="flex items-center gap-2.5 text-[13px] text-white/50 hover:text-[#7EB3FF] transition-colors">
                    <PhoneIcon className="w-4 h-4 text-[#7EB3FF] flex-shrink-0" />
                    +91 {contact.phone}
                  </a>
                  <div className="flex items-start gap-2.5 text-[12px] text-white/40">
                    <MapPinIcon className="w-4 h-4 text-[#7EB3FF] flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{contact.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* footer CTA */}
          <div
            className="px-5 py-5 space-y-2.5 flex-shrink-0"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "rgba(0,0,0,0.3)" }}
          >
            <a
              href={`tel:+91${contact.phone}`}
              className="flex items-center justify-center gap-2 text-[#7EB3FF] font-bold text-[13px] py-2.5 rounded-xl transition-colors hover:bg-white/8"
              style={{ border: "1px solid rgba(126,179,255,0.25)" }}
            >
              <PhoneIcon className="w-4 h-4" />
              +91 {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="block">
              <button
                className="w-full text-white py-3 rounded-xl font-bold text-[13px] transition-all"
                style={{
                  background: "linear-gradient(135deg, #ED3136, #C41D22)",
                  boxShadow: "0 4px 20px rgba(237,49,54,0.4)",
                }}
              >
                Book Free Consultation
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
