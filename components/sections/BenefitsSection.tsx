/* ── Check icon for benefit rows ── */
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 10 8 14 16 6" />
    </svg>
  );
}

const offers = [
  "Simultaneous cleansing and hydration",
  "Advanced extraction without manual squeezing",
  "Targeted serum infusion",
  "Consistent treatment outcomes",
  "Minimal irritation",
  "No significant downtime",
];

export default function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(160deg,#F7F8FC 0%,#ffffff 50%,#FEFEFE 100%)" }}
    >
      {/* ── Large decorative arc — top-right corner ── */}
      {/* <div
        className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full pointer-events-none opacity-[0.07]"
        style={{ border: "40px solid #354C9C" }}
      />
      <div
        className="absolute -top-10 -right-10 w-[260px] h-[260px] rounded-full pointer-events-none opacity-[0.05]"
        style={{ border: "24px solid #354C9C" }}
      /> */}

      <div className="relative z-10 max-w-[1100px] mx-auto
                      px-4 sm:px-6 md:px-8 lg:px-10
                      py-10 sm:py-12 md:py-14 lg:py-16">

        {/* ── Heading ─────────────────────────────────────────────── */}
        <div className="text-center max-w-[720px] mx-auto">
          <h2
            className="
              font-extrabold leading-[1.1] tracking-tight text-[#363435]
              text-[24px] sm:text-[28px] md:text-[33px] lg:text-[40px] xl:text-[48px]
            "
          >
            Why Choose{" "}
            <span className="text-[#354C9C]">HydraFacial</span>
            <br className="hidden sm:block" />
            {" "}Over Regular Facials?
          </h2>
          <p
            className="
              mt-4 sm:mt-5 text-gray-500 leading-[1.8]
              text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]
            "
          >
            While traditional facials primarily focus on cleansing and relaxation,
            HydraFacial uses advanced technology to deliver deeper cleansing and hydration.
          </p>
        </div>

        {/* ── "HydraFacial offers:" divider ───────────────────────── */}
        {/* <div className="mt-8 sm:mt-10 flex items-center gap-3 sm:gap-4">
          <div className="flex-1 h-px bg-[#D8DDE8]" />
          <div
            className="
              flex-shrink-0 bg-[#354C9C] text-white font-semibold rounded-lg
              px-5 sm:px-7 py-2 sm:py-2.5
              text-[11px] sm:text-[12px] md:text-[13px]
            "
          >
            HydraFacial offers:
          </div>
          <div className="flex-1 h-px bg-[#D8DDE8]" />
        </div> */}
          <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          {/* Left: dot → line */}
          <div className="hidden sm:flex items-center gap-1.5 flex-1 min-w-0">
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#354C9C]" />
            <div className="flex-1 h-px bg-[#D8DDE8]" />
          </div>

          {/* Pill */}
          <div
            className="
              flex-shrink-0 bg-[#354C9C] text-white font-semibold rounded-lg
              px-4 sm:px-5 md:px-7 py-2 sm:py-2.5
              text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px]
              text-center mx-auto sm:mx-0
            "
          >
            HydraFacial offers:
          </div>

          {/* Right: line → dot */}
          <div className="hidden sm:flex items-center gap-1.5 flex-1 min-w-0">
            <div className="flex-1 h-px bg-[#D8DDE8]" />
            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#354C9C]" />
          </div>
        </div>

        {/* ── Benefit rows ────────────────────────────────────────── */}
        <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0">
          {offers.map((item, i) => (
            <div
              key={i}
              className="
                group flex items-center gap-4
                py-4 sm:py-5
                border-b border-[#D8DDE8]
                hover:bg-[#F7F8FC] hover:px-3 hover:rounded-xl
                transition-all duration-200
                sm:[&:nth-last-child(2)]:border-b-0
                last:border-b-0
              "
            >
              {/* Large background number — decorative */}
              <span
                className="
                  flex-shrink-0 font-black text-[#354C9C] select-none
                  text-[22px] sm:text-[26px] opacity-[0.12] w-8 text-right leading-none
                "
              >
                {i + 1}
              </span>

              {/* Check badge */}
              <div
                className="
                  flex-shrink-0 flex items-center justify-center rounded-full
                  bg-[#354C9C] group-hover:bg-[#2B3E80]
                  transition-colors duration-200
                  w-7 h-7 sm:w-8 sm:h-8
                "
              >
                <CheckIcon className="text-white w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>

              {/* Text */}
              <p
                className="
                  font-semibold text-[#363435] leading-snug
                  text-[14px] sm:text-[15px] md:text-[16px]
                "
              >
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* ── Bottom note ─────────────────────────────────────────── */}
        <div
          className="
            mt-8 sm:mt-10 relative overflow-hidden
            rounded-2xl
            px-6 sm:px-8 md:px-10 py-5 sm:py-6
          "
          style={{ background: "linear-gradient(135deg,#354C9C 0%,#1a3080 60%,#363435 100%)" }}
        >
          {/* Decorative circle */}
          <div
            className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full opacity-10 pointer-events-none"
            style={{ border: "20px solid #fff" }}
          />
          <div
            className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full opacity-10 pointer-events-none"
            style={{ border: "12px solid #fff" }}
          />

          <p
            className="
              relative z-10 text-center text-white/90 leading-[1.75]
              text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]
              max-w-[680px] mx-auto
            "
          >
            This makes HydraFacial an excellent option for individuals seeking{" "}
            <span className="font-bold text-white">visible skin improvement</span>{" "}
            with convenience and comfort.
          </p>
        </div>

      </div>
    </section>
  );
}
