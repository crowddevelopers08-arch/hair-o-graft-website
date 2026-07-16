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

          <h2 className="mx-auto mt-4 max-w-[780px] text-[30px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[40px] lg:text-[50px]">
            Modern treatments, delivered with{" "}
            <span className="relative inline-block text-[#ED3136]">
              genuine care .  
              <svg className="absolute -bottom-1.5 left-0 w-full sm:-bottom-2" height="8" viewBox="0 0 200 10" preserveAspectRatio="none" aria-hidden>
                <path d="M2 6 C 50 2, 150 2, 198 6" stroke="#ED3136" strokeWidth="4" strokeLinecap="round" fill="none" />
              </svg>
            </span>
          </h2>

          <p className="mx-auto mt-6 max-sm:mt-3 max-w-[760px] text-[15px] leading-7 text-white/70 sm:text-[17px] sm:leading-8">
            Good outcomes come from two things working together, the right equipment, and the
            right hands and judgement using it. We invest in both.
          </p>
        </header>

        <div className="mt-10 max-sm:mt-5 grid gap-6 lg:mt-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] shadow-[0_24px_70px_rgba(0,0,0,0.16)] transition-transform duration-300 hover:-translate-y-1">
            <div className="relative aspect-[16/11] overflow-hidden">
              <Image
                src="/modern.png"
                alt="Modern treatment technology at Hair O Graft"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1023px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B52] via-[#0D1B52]/45 to-transparent" />
              <span className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ED3136] text-white shadow-[0_10px_25px_rgba(237,49,54,0.3)]">
                <TechnologyIcon />
              </span>
              <h3 className="absolute inset-x-6 bottom-6 text-[22px] font-bold text-white sm:text-[25px]">The technology</h3>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-[14px] leading-7 text-white/70 sm:text-[15px]">
                Our skin, hair and dental treatments are carried out using German Trichology
                Technology, well-maintained equipment and up-to-date clinical methods. Before
                any treatment, we use proper assessment and diagnosis, because choosing the
                right treatment matters far more than simply having a machine.
              </p>
            </div>
          </article>

          <article className="rounded-[28px] bg-white p-6 shadow-[0_24px_70px_rgba(0,0,0,0.16)] sm:p-8 lg:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#354C9C]/10 text-[#354C9C]">
              <CareIcon />
            </div>
            <h3 className="mt-5 text-[22px] font-bold text-[#111836] sm:text-[25px]">The care</h3>
            <p className="mt-3 text-[15px] leading-7 text-[#5D6275]">
              Technology is only half of it. The rest is how you&rsquo;re treated from the moment
              you walk in.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 sm:gap-4">
              {carePrinciples.map((item, index) => {
                const accent = index % 2 === 0 ? "#354C9C" : "#ED3136";
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#E4E7EF] bg-[#F8F9FC] p-4 transition-colors duration-200 hover:border-transparent hover:bg-white hover:shadow-[0_10px_25px_rgba(13,27,82,0.08)] sm:p-5"
                  >
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full text-[12px] font-bold text-white"
                      style={{ backgroundColor: accent }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-4 text-[14px] leading-6 text-[#606579]">
                      <strong className="font-bold text-[#111836]">{item.title}</strong>{" "}
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
