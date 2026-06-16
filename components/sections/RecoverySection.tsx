import Image from "next/image";

/* ── Inline SVG icon ── */
function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

const tips = [
  "Daily Sunscreen Application",
  "Maintain Internal Hydration",
  "Avoid harsh chemical exfoliants for 48 hours",
];

export default function RecoverySection() {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-[#F7F8FC]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-16 grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">

        {/* Text */}
        <div className="space-y-6 sm:space-y-8 order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-200">
            <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
            <span className="text-amber-700 text-xs font-bold tracking-widest uppercase">Post-Treatment Care</span>
          </div>
          <h2 className="text-[24px] sm:text-[30px] md:text-[32px] font-bold leading-[1.3] text-[#354C9C]">
            Zero Downtime. Instant Results.
          </h2>
          <p className="text-[14px] sm:text-base md:text-lg leading-relaxed text-gray-500">
            The session typically lasts 30–60 minutes, allowing you to return to your daily
            activities immediately. To maintain results, follow our expert tips:
          </p>
          <ul className="space-y-4 sm:space-y-5">
            {tips.map((tip) => (
              <li key={tip} className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#ED3136]/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircleIcon className="w-5 h-5 sm:w-5 sm:h-5 text-[#ED3136]" />
                </div>
                <span className="font-medium text-[#354C9C] text-sm sm:text-base md:text-lg leading-snug">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image with tilt decoration */}
        <div className="relative group order-1 md:order-2">
          <div className="absolute inset-0 bg-[#354C9C]/10 rounded-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500 pointer-events-none" />
          <div className="relative z-10 w-full aspect-[4/3]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiblTPCnq0GSgLQqEzfTZ27eXZcDCZukqhhgFNhplP8Osw1mlDsWGbG7-V4gufK-YDuKeBn4uKihOQl3XrAzZaddltN1rJR2JJNQPKYXeIzrjeXfKtZzNhYfdm8ZLhpl6UYpkmsENY8g3zr4yFiR8G5rPxNx_4Zc9eKE1rAR12jBfkn3LAt65Kly8XArLU47TJAAv7bYIpL5ckCn_SOhPWLuDsNX9fVgL5lcmqcE9wZaxbyOUy-dZIRA"
              alt="Aftercare Consultation"
              fill
              className="rounded-2xl shadow-2xl object-cover border-4 border-white"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
