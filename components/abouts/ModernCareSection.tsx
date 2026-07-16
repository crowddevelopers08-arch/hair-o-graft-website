import Image from "next/image";

function TechnologyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden>
      <rect x="5" y="5" width="14" height="14" rx="3" />
      <path d="M9 9h6v6H9zM9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    </svg>
  );
}

function CareIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden>
      <path d="M20.8 4.7a5.5 5.5 0 00-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 00-7.8 7.8l1.1 1.1L12 21l7.8-7.4 1.1-1.1a5.5 5.5 0 00-.1-7.8z" />
      <path d="M8.5 12h2l1.2-2.3 1.7 4.6 1.1-2.3h1.5" />
    </svg>
  );
}

const carePrinciples = [
  {
    title: "Diagnosis first.",
    text: "We find the cause before we suggest a fix.",
  },
  {
    title: "Personalised plans.",
    text: "Your plan is built around your concern.",
  },
  {
    title: "Hygiene & safety.",
    text: "Instruments are cleaned and sterilised between patients, and single use items are used where required.",
  },
  {
    title: "Aftercare that lasts.",
    text: "We guide your recovery and follow up on your progress, so your results are looked after well beyond the treatment chair.",
  },
];

export default function ModernCareSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#0D1B52] bg-cover bg-center bg-fixed px-4 py-10 sm:px-6 sm:py-20 lg:px-10 lg:py-10"
      style={{ backgroundImage: "url('/contact-use.png')" }}
    >
      <div className="absolute inset-0 -z-10 bg-[#0D1B52]/90" aria-hidden />
      <div className="relative mx-auto max-w-[1280px]">
        <header className="mx-auto max-sm:mt-2 max-w-[850px] text-center">
          <span className="inline-flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.18em] text-[#ED3136]">
            <span aria-hidden className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rotate-45 bg-white" />
              <span className="h-px w-6 bg-white/40" />
            </span>
            Our Approach
            <span aria-hidden className="flex items-center gap-1.5">
              <span className="h-px w-6 bg-white/40" />
              <span className="h-1.5 w-1.5 rotate-45 bg-white" />
            </span>
          </span>

          <h2 className="mx-auto mt-2 max-w-[780px] text-[27px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[36px] lg:text-[44px]">
            Modern treatments, delivered with{" "}
            <span className="relative inline-block text-[#ED3136]">
              genuine care .  
              <svg className="absolute -bottom-1.5 left-0 w-full sm:-bottom-2" height="8" viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden>
                <path d="M2 6 C 50 2, 150 2, 198 6" stroke="#ED3136" strokeWidth="4" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h2>

          <p className="mx-auto mt-4 max-sm:mt-3 max-w-[760px] text-[15px] leading-7 text-white/70 sm:text-[17px] sm:leading-8">
            Good outcomes come from two things working together, the right equipment, and the
            right hands and judgement using it. We invest in both.
          </p>
        </header>

        <div className="mt-10 max-sm:mt-5 grid gap-10 max-sm:gap-5 lg:mt-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <div className="group relative aspect-[16/12] overflow-hidden rounded-[28px] shadow-[0_24px_70px_rgba(0,0,0,0.16)] lg:aspect-[4/5]">
            <Image
              src="/modern.png"
              alt="Modern treatment technology at Hair O Graft"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1023px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B52]/70 via-[#0D1B52]/10 to-transparent" />
            <span className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ED3136] text-white shadow-[0_10px_25px_rgba(237,49,54,0.3)]">
              <TechnologyIcon />
            </span>
          </div>

          <div>
            <h3 className="text-[22px] font-bold text-white sm:text-[25px]">The technology</h3>
            <p className="mt-1 text-[14px] leading-7 text-white/70 sm:text-[15px]">
              Our skin, hair and dental treatments are carried out using German Trichology
              Technology, well-maintained equipment and up-to-date clinical methods. Before
              any treatment, we use proper assessment and diagnosis, because choosing the
              right treatment matters far more than simply having a machine.
            </p>

            <div className="my-4 flex items-center gap-3" aria-hidden>
              <span className="h-1.5 w-1.5 rotate-45 bg-[#ED3136]" />
              <span className="h-px flex-1 bg-white/10" />
            </div>
            <h3 className="mt-2 text-[22px] font-bold text-white sm:text-[25px]">The care</h3>
            <p className="mt-1 text-[15px] leading-7 text-white/70">
              Technology is only half of it. The rest is how you&rsquo;re treated from the moment
              you walk in.
            </p>

            <div className="mt-3 grid gap-3 sm:grid-cols-2 sm:gap-4">
              {carePrinciples.map((item, index) => {
                const accent = index % 2 === 0 ? "#354C9C" : "#ED3136";
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.08] sm:p-5"
                  >
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full text-[12px] font-bold text-white"
                      style={{ backgroundColor: accent }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-3 text-[14px] leading-6 text-white/70">
                      <strong className="font-bold text-white">{item.title}</strong>{" "}
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
