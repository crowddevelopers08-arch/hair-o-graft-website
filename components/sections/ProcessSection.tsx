/* ── Step icons ── */
function ConsultIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      <path d="M18 3l1 1-1 1M20 2l-1 3" strokeOpacity="0.6" />
    </svg>
  );
}
function PlanIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <line x1="8" y1="8"  x2="16" y2="8" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <line x1="8" y1="16" x2="12" y2="16" />
      <circle cx="18" cy="18" r="3" fill="white" stroke="currentColor" />
      <polyline points="17 18 18 19 20 17" strokeWidth="1.2" />
    </svg>
  );
}
function CleanseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" />
      <path d="M8 13q1-1.5 4-1.5t4 1.5" />
      <path d="M9.5 9.5q.5 1 2.5 1t2.5-1" strokeOpacity="0.5" />
      <path d="M5 5l2 2M19 5l-2 2" strokeOpacity="0.4" />
    </svg>
  );
}
function ExtractIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="3" />
      <path d="M12 10v5" />
      <path d="M9 13l3 4 3-4" />
      <path d="M5 20h14" strokeOpacity="0.5" />
      <path d="M8 6.5C8 5 10 4 12 4s4 1 4 2.5" strokeOpacity="0.4" />
    </svg>
  );
}
function HydrateIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3C9.5 6.5 7 10 7 13a5 5 0 0010 0C17 10 14.5 6.5 12 3z" />
      <path d="M10 11C9.5 12.5 9.5 13.5 10 14.5" strokeOpacity="0.4" />
      <path d="M9 20h6M7 22h10" strokeOpacity="0.5" />
    </svg>
  );
}
function GuideIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
      <path d="M15 5l3 3" strokeOpacity="0.5" />
    </svg>
  );
}

/* ── Step data ── */
const steps = [
  {
    num: "01", Icon: ConsultIcon,
    title: "Consultation & Skin Analysis",
    desc: "We take into account your skin type, your concerns, your lifestyle factors, and your treatment goals.",
  },
  {
    num: "02", Icon: PlanIcon,
    title: "Personalised Treatment Planning",
    desc: "The procedure is customised according to your skin condition and desired outcomes.",
  },
  {
    num: "03", Icon: CleanseIcon,
    title: "Deep Cleansing & Exfoliation",
    desc: "Dead skin cells, impurities, and excess oil are gently removed from the skin surface.",
  },
  {
    num: "04", Icon: ExtractIcon,
    title: "Extraction",
    desc: "Advanced suction technology helps clear congested pores and remove debris.",
  },
  {
    num: "05", Icon: HydrateIcon,
    title: "Hydration & Nourishment",
    desc: "Specialised serums containing antioxidants, peptides, and hydrating ingredients are infused into the skin.",
  },
  {
    num: "06", Icon: GuideIcon,
    title: "Post-Treatment Guidance",
    desc: "We offer tailored aftercare advice to help sustain and extend your results.",
  },
];

/*
  Desktop horizontal timeline maths
  Total height : 420 px
  Card height  : 170 px  (above)  /  170 px  (below)
  Connector    :  20 px
  Circle       :  40 px
  Spacer       : 190 px  (420 - 170 - 20 - 40)
  Spine y      : 170 + 20 + 20 = 210 px from top
*/
const TOTAL_H  = 620;
const CARD_H   = 225;
const LINE_H   = 26;
const CIRCLE_D = 64;
const SPACER_H = TOTAL_H - CARD_H - LINE_H - CIRCLE_D; // 305

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="overflow-hidden"
      style={{ background: "linear-gradient(170deg,#F7F8FC 0%,#FEFEFE 55%,#ffffff 100%)" }}
    >
      <div className="max-w-[1400px] mx-auto
                      px-4 sm:px-6 md:px-8 lg:px-10
                      py-10 sm:py-12 md:py-14 lg:py-16">

        {/* ── Heading ── */}
        <div className="text-center max-w-[680px] mx-auto mb-10 sm:mb-12 lg:mb-14">
          <h2
            className="
              font-extrabold leading-[1.1] tracking-tight text-[#363435]
              text-[24px] sm:text-[28px] md:text-[33px] lg:text-[40px] xl:text-[48px]
            "
          >
            Our{" "}
            <span className="text-[#354C9C]">HydraFacial</span>{" "}
            Treatment Approach
          </h2>
          <p
            className="
              mt-4 text-gray-500 leading-[1.8]
              text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px]
            "
          >
            Every HydraFacial session at Hair O Graft begins with understanding
            your skin&apos;s unique requirements.
          </p>
        </div>

        {/* ════════════════════════════════════════════════════════
            DESKTOP — horizontal alternating timeline (lg+)
        ════════════════════════════════════════════════════════ */}
        <div className="hidden lg:block relative" style={{ height: `${TOTAL_H}px` }}>

          {/* Spine */}
          <div
            className="absolute left-0 right-0 bg-[#D8DDE8]"
            style={{ top: `${CARD_H + LINE_H + CIRCLE_D / 2}px`, height: "2px" }}
          />

          {/* Columns */}
          <div className="grid grid-cols-6 h-full">
            {steps.map((step, i) => {
              const above = i % 2 === 0;
              return (
                <div key={i} className="flex flex-col items-center px-1">

                  {above ? (
                    <>
                      {/* ── Card above spine ── */}
                      <div
                        className="
                          w-full bg-white rounded-2xl border border-[#D8DDE8]
                          shadow-[0_2px_14px_rgba(53,76,156,0.07)]
                          p-4 flex flex-col overflow-hidden
                        "
                        style={{ height: `${CARD_H}px` }}
                      >
                        <div className="flex items-center gap-2.5 mb-3">
                          <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#F7F8FC] flex items-center justify-center">
                            <step.Icon className="text-[#354C9C] w-5 h-5" />
                          </div>
                          <span className="text-[#354C9C] font-black text-[11px] tracking-widest uppercase">
                            Step {step.num}
                          </span>
                        </div>
                        <h4 className="font-extrabold text-[#363435] text-[14px] lg:text-[15px] leading-snug mb-2">
                          {step.title}
                        </h4>
                        <p className="text-gray-500 text-[13px] lg:text-[14px] leading-relaxed flex-1 overflow-hidden">
                          {step.desc}
                        </p>
                      </div>

                      {/* Connector */}
                      <div className="w-[2px] bg-[#D8DDE8]" style={{ height: `${LINE_H}px` }} />

                      {/* Circle node */}
                      <div
                        className="
                          flex-shrink-0 rounded-full bg-[#354C9C]
                          flex items-center justify-center
                          shadow-[0_4px_16px_rgba(53,76,156,0.40)]
                          relative z-10
                        "
                        style={{ width: `${CIRCLE_D}px`, height: `${CIRCLE_D}px` }}
                      >
                        <step.Icon className="text-white w-7 h-7" />
                      </div>

                      {/* Spacer below */}
                      <div style={{ height: `${SPACER_H}px` }} />
                    </>
                  ) : (
                    <>
                      {/* Spacer above */}
                      <div style={{ height: `${SPACER_H}px` }} />

                      {/* Circle node */}
                      <div
                        className="
                          flex-shrink-0 rounded-full bg-[#354C9C]
                          flex items-center justify-center
                          shadow-[0_4px_16px_rgba(53,76,156,0.40)]
                          relative z-10
                        "
                        style={{ width: `${CIRCLE_D}px`, height: `${CIRCLE_D}px` }}
                      >
                        <step.Icon className="text-white w-7 h-7" />
                      </div>

                      {/* Connector */}
                      <div className="w-[2px] bg-[#D8DDE8]" style={{ height: `${LINE_H}px` }} />

                      {/* ── Card below spine ── */}
                      <div
                        className="
                          w-full bg-white rounded-2xl border border-[#D8DDE8]
                          shadow-[0_2px_14px_rgba(53,76,156,0.07)]
                          p-4 flex flex-col overflow-hidden
                        "
                        style={{ height: `${CARD_H}px` }}
                      >
                        <div className="flex items-center gap-2.5 mb-3">
                          <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#F7F8FC] flex items-center justify-center">
                            <step.Icon className="text-[#354C9C] w-5 h-5" />
                          </div>
                          <span className="text-[#354C9C] font-black text-[11px] tracking-widest uppercase">
                            Step {step.num}
                          </span>
                        </div>
                        <h4 className="font-extrabold text-[#363435] text-[14px] lg:text-[15px] leading-snug mb-2">
                          {step.title}
                        </h4>
                        <p className="text-gray-500 text-[13px] lg:text-[14px] leading-relaxed flex-1 overflow-hidden">
                          {step.desc}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════
            MOBILE / TABLET — vertical timeline (< lg)
        ════════════════════════════════════════════════════════ */}
        <div className="lg:hidden relative">

          {/* Vertical spine */}
          <div className="absolute left-6 sm:left-7 top-5 bottom-5 w-[2px] bg-[#D8DDE8]" />

          <div className="space-y-4 sm:space-y-5">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-3 sm:gap-4 relative">

                {/* Circle node */}
                <div
                  className="
                    flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#354C9C]
                    flex items-center justify-center
                    shadow-[0_4px_16px_rgba(53,76,156,0.35)]
                    relative z-10
                  "
                >
                  <step.Icon className="text-white w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                {/* Card */}
                <div
                  className="
                    flex-1 bg-white rounded-2xl border border-[#D8DDE8]
                    shadow-[0_2px_14px_rgba(53,76,156,0.07)]
                    p-4 sm:p-5 min-w-0
                  "
                >
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F7F8FC] flex items-center justify-center flex-shrink-0">
                      <step.Icon className="text-[#354C9C] w-5 h-5" />
                    </div>
                    <span className="text-[#354C9C] font-black text-[11px] sm:text-[12px] tracking-widest uppercase">
                      Step {step.num}
                    </span>
                  </div>
                  <h4 className="font-extrabold text-[#363435] text-[16px] sm:text-[18px] md:text-[20px] leading-snug mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-500 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
