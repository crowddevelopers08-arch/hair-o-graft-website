/* ──────────────────────────────────────────────────────────────────
   IntroSection — "Why Patients Choose Hair O Graft for HydraFacial"
   ─ Centered heading + body + pill
   ─ CSS connector (xl only, matches 7-column grid)
   ─ 7 feature cards (icon + title)
   ─ Fully responsive: 2 cols → 3 cols → 4 cols → 7 cols
────────────────────────────────────────────────────────────────── */

const features = [
  { number: "01", title: "Personalised skin consultations",    icon: "/one.png" },
  { number: "02", title: "Advanced aesthetic technology",      icon: "/two.png"   },
  { number: "03", title: "Focus on safety and hygiene",        icon: "/three.png"       },
  { number: "04", title: "Experienced skincare professionals", icon: "/four.png"       },
  { number: "05", title: "Comfortable clinical environment",   icon: "/five.png"        },
  { number: "06", title: "Patient-centric treatment approach", icon: "/six.png"      },
  { number: "07", title: "Tailored skincare recommendations",  icon: "/seven.png"     },
];

/*
  7-column grid column centres  (% of container width):
  column n centre  =  (2n − 1) × (100 / 14)
  → [7.14, 21.43, 35.71, 50, 64.29, 78.57, 92.86]
*/
const COL_CENTERS = [7.14, 21.43, 35.71, 50, 64.29, 78.57, 92.86];

export default function IntroSection() {
  return (
    <section className="bg-gradient-to-b from-[#F7F8FC] via-[#FEFEFE] to-white overflow-hidden">
      <div
        className="
          max-w-[1280px] mx-auto
          px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12
          py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14
        "
      >

        {/* ── Heading ──────────────────────────────────────────────────
            Font ramp (px):  26 → 32 → 40 → 48 → 56
            Centred at every breakpoint.
        ────────────────────────────────────────────────────────────── */}
        <h2
          className="
            text-center font-extrabold text-[#363435]
            leading-[1.15] tracking-tight
            text-[20px]
            sm:text-[25px]
            md:text-[30px]
            lg:text-[36px]
            xl:text-[42px]
          "
        >
          Why Patients Choose
          <br className="hidden sm:block" />
          {" "}<span className="text-[#354C9C]">Hair O Graft</span>{" "}for HydraFacial
        </h2>

        {/* ── Body paragraph ───────────────────────────────────────────
            Font ramp: 13 → 15 → 16 → 17 px
        ────────────────────────────────────────────────────────────── */}
        <p
          className="
            mx-auto text-center text-gray-600 leading-[1.8]
            max-w-[680px] xl:max-w-[760px]
            mt-4 sm:mt-5 md:mt-6 lg:mt-7
            text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]
          "
        >
          At Hair O Graft, healthy skin begins with understanding your unique
          skin needs. Our team conducts a detailed skin assessment to identify
          concerns, evaluate skin health, and create a personalised treatment plan.
        </p>

        {/* ── "Patients trust us for:" pill ───────────────────────────
            Scales padding / font so it never looks cramped on mobile.
        ────────────────────────────────────────────────────────────── */}
        <div className="flex justify-center mt-6 sm:mt-6 md:mt-6 lg:mt-6 xl:mt-6">
          <div
            className="
              bg-[#354C9C] text-white font-semibold rounded-2xl
              shadow-[0_8px_24px_rgba(53,76,156,0.35)]
              px-5 sm:px-7 md:px-8 lg:px-9
              py-2.5 sm:py-3
              text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]
            "
          >
            Patients trust us for:
          </div>
        </div>

        {/* ── Connector (xl only — aligns with 7-column grid) ─────────
            Structure (top → bottom, 58 px tall):
              ① Short vertical drop: 0 → 18 px, centred
              ② Horizontal line at y = 18 px, from col-1 to col-7 centre
              ③ Left rounded cap  (border-top + border-left + radius)
              ④ Right rounded cap (mirror)
              ⑤ 5 inner vertical drops at col 2–6 centres
              ⑥ Filled dot at each of the 7 column centres (y = 48 px)
        ────────────────────────────────────────────────────────────── */}
        <div className="relative hidden xl:block" style={{ height: "58px" }}>

          {/* ① Vertical drop from pill */}
          <div
            className="absolute w-[3px] bg-[#D8DDE8]"
            style={{ left: "50%", top: 0, height: "18px", transform: "translateX(-50%)" }}
          />

          {/* ② Horizontal rail */}
          <div
            className="absolute bg-[#D8DDE8]"
            style={{ top: "18px", left: "8.14%", right: "8.14%", height: "3px" }}
          />

          {/* ③ Left outer rounded cap */}
          <div
            className="absolute"
            style={{
              top: "18px", left: "7.14%",
              width: "16px", height: "30px",
              borderTop: "3px solid #D8DDE8",
              borderLeft: "3px solid #D8DDE8",
              borderTopLeftRadius: "10px",
            }}
          />

          {/* ④ Right outer rounded cap */}
          <div
            className="absolute"
            style={{
              top: "18px", right: "7.14%",
              width: "16px", height: "30px",
              borderTop: "3px solid #D8DDE8",
              borderRight: "3px solid #D8DDE8",
              borderTopRightRadius: "10px",
            }}
          />

          {/* ⑤ 5 inner vertical drops (columns 2–6) */}
          {COL_CENTERS.slice(1, 6).map((pct) => (
            <div
              key={pct}
              className="absolute w-[3px] bg-[#D8DDE8]"
              style={{ left: `${pct}%`, top: "18px", height: "30px", transform: "translateX(-50%)" }}
            />
          ))}

          {/* ⑥ Dot at every column centre */}
          {COL_CENTERS.map((pct) => (
            <div
              key={pct}
              className="absolute rounded-full bg-[#354C9C] border-2 border-white shadow-sm"
              style={{
                left: `${pct}%`, top: "48px",
                width: "10px", height: "10px",
                transform: "translate(-50%, 0)",
              }}
            />
          ))}
        </div>

        {/* Simple connector for < xl (just a single tick below the pill) */}
        <div className="xl:hidden flex flex-col items-center mt-3">
          <div className="w-[3px] h-5 sm:h-6 bg-[#D8DDE8]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#354C9C] border-2 border-white shadow-sm" />
        </div>

        {/* ── Feature-card grid ────────────────────────────────────────
            Breakpoints:  2 cols (xs) → 3 cols (sm) → 4 cols (md/lg) → 7 cols (xl)
            Card anatomy: lavender icon circle + bold title (no description / badge)
        ────────────────────────────────────────────────────────────── */}
        <div
          className="
            mt-0
            grid gap-3 sm:gap-4
            grid-cols-1
            min-[380px]:grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            xl:grid-cols-7
          "
        >
          {features.map((item) => (
            <div
              key={item.number}
              className="
                group flex flex-col items-center text-center
                bg-white rounded-2xl border border-[#D8DDE8]
                shadow-[0_4px_20px_rgba(53,76,156,0.06)]
                hover:shadow-[0_8px_32px_rgba(53,76,156,0.14)]
                hover:-translate-y-1 transition-all duration-300
                px-3 pt-4 pb-4
                sm:px-3 sm:pt-5 sm:pb-5
                md:px-4 md:pt-6 md:pb-6
                min-h-[132px] sm:min-h-[148px]
              "
            >
              {/* Icon circle — scales: 56 → 64 → 72 px */}
              <div
                className="
                  flex items-center justify-center rounded-full
                  bg-[#F7F8FC] group-hover:bg-[#E2EBFF]
                  transition-colors duration-300 flex-shrink-0
                  w-14 h-14
                  sm:w-16 sm:h-16
                  md:w-[72px] md:h-[72px]
                "
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  loading="lazy"
                  className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 select-none"
                />
              </div>

              {/* Title — font ramp: 11 → 12 → 13 → 13 px */}
              <h3
                className="
                  font-bold text-[#363435] leading-snug
                  mt-2 sm:mt-2.5 md:mt-3
                  text-[11px] sm:text-[11px] md:text-[12px]
                "
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
