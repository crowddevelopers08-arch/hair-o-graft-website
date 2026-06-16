export default function HeroSection() {
  return (
    <section id="overview" className="relative w-full overflow-hidden">

      {/* ── Mobile image (hidden on lg+) ── */}
      <div
        className="block lg:hidden w-full"
        style={{
          backgroundImage:    "url('/7b94b15d-2be9-4436-9439-f037beb443f8.png')",
          backgroundSize:     "cover",
          backgroundPosition: "center top",
          backgroundRepeat:   "no-repeat",
          minHeight:          "150vw",
        }}
      />

      {/* ── Desktop image (hidden below lg) ── */}
      <div
        className="hidden lg:block w-full"
        style={{
          backgroundImage:    "url('/b437e76c-e09c-4270-9b9e-74ac00533fce.png')",
          backgroundSize:     "cover",
          backgroundPosition: "center center",
          backgroundRepeat:   "no-repeat",
          minHeight:          "420px",
          maxHeight:          "660px",
          height:             "45vw",
        }}
      />

    </section>
  );
}
