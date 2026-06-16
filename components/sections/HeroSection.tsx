export default function HeroSection() {
  return (
    <section id="overview" className="relative w-full overflow-hidden">

      {/* ── Mobile image (hidden on lg+) ── */}
      <div
        className="block lg:hidden w-full"
        style={{
          backgroundImage:    "url('/hhs.png')",
          backgroundSize:     "cover",
          backgroundPosition: "center top",
          backgroundRepeat:   "no-repeat",
          minHeight:          "60vw",
        }}
      />

      {/* ── Desktop image (hidden below lg) ── */}
      <div
        className="hidden lg:block w-full"
        style={{
          backgroundImage:    "url('/hhs.png')",
          backgroundSize:     "cover",
          backgroundPosition: "center center",
          backgroundRepeat:   "no-repeat",
          minHeight:          "520px",
          maxHeight:          "720px",
          height:             "52vw",
        }}
      />

    </section>
  );
}
