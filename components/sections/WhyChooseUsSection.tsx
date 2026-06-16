import Image from "next/image";

const rows = [
  {
    img: "/pone.png",
    alt: "Personalised skin consultation",
    text: "HydraFacial is a non-invasive skin rejuvenation treatment that combines cleansing, exfoliation, extraction, hydration, and antioxidant protection in one procedure.",
  },
  {
    img: "/ptwo.png",
    alt: "Advanced aesthetic technology",
    text: "Using specialised vortex technology, the treatment removes dead skin cells, excess oil, and impurities while simultaneously delivering nourishing serums deep into the skin. This multi-step process helps improve hydration, refine skin texture, and restore a healthy glow without discomfort or downtime.",
  },
  {
    img: "/pthree.png",
    alt: "Safety and hygiene",
    text: "Unlike traditional facials, HydraFacial is designed to provide consistent and visible results while being suitable for most skin types.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage:    "url('/whyy.png')",
        backgroundSize:     "cover",
        backgroundPosition: "right center",
        backgroundRepeat:   "no-repeat",
        backgroundColor:    "#F7F8FC",
      }}
    >
      {/* Mobile overlay */}
      <div
        className="absolute inset-0 pointer-events-none lg:hidden"
        style={{ background: "rgba(247,248,252,0.92)" }}
      />
      {/* Desktop overlay — solid on left, fades right */}
      <div
        className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{
          background:
            "linear-gradient(to right,rgba(247,248,252,1) 0%,rgba(247,248,252,1) 42%,rgba(247,248,252,0.45) 62%,rgba(247,248,252,0) 100%)",
        }}
      />

      {/* Content */}
      <div
        className="
          relative z-10 flex flex-col justify-center
          min-h-[auto] lg:min-h-[640px] xl:min-h-[700px]
          px-5 sm:px-8 md:px-12 lg:px-14 xl:px-16 2xl:px-20
          py-20 sm:py-24 lg:py-0
        "
      >
        <div className="w-full lg:max-w-[54%] xl:max-w-[50%]">

          {/* Heading */}
          <h2
            className="
              font-extrabold leading-[1.05] tracking-tight text-[#363435]
              text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[48px]
            "
          >
            Understanding
            <br />
            <span className="text-[#354C9C]">HydraFacial</span>
          </h2>
          
          {/* Rows */}
          <div className="mt-6 sm:mt-7 lg:mt-8 space-y-4 sm:space-y-5">
            {rows.map((row, i) => (
              <div key={i} className="flex flex-col items-start gap-3 rounded-[28px] sm:rounded-none sm:flex-row sm:items-center sm:gap-4">

                {/* Image circle */}
                <div
                  className="
                    flex-shrink-0 rounded-full overflow-hidden
                    border-2 border-[#D8DDE8]
                    shadow-[0_2px_12px_rgba(53,76,156,0.10)]
                    w-[64px] h-[64px]
                    sm:w-[72px] sm:h-[72px]
                    lg:w-[80px] lg:h-[80px]
                  "
                >
                  <Image
                    src={row.img}
                    alt={row.alt}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bullet dot */}
                <div className="hidden sm:block flex-shrink-0 w-2 h-2 rounded-full bg-[#354C9C] opacity-60" />

                {/* Text card */}
                <div
                  className="
                    w-full flex-1 bg-white rounded-2xl
                    border border-[#D8DDE8]
                    shadow-[0_2px_16px_rgba(53,76,156,0.07)]
                    px-4 sm:px-5 py-3 sm:py-4
                  "
                >
                  <p
                    className="
                      text-[#555555] leading-[1.72]
                      text-[12px] sm:text-[12px] md:text-[13px] lg:text-[13px] xl:text-[14px]
                    "
                  >
                    {row.text}
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
