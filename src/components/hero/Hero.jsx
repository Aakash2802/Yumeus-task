import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full bg-white overflow-hidden relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:min-h-[600px]">

        {/* LEFT CONTENT */}
        <div className="px-4 sm:px-6 pt-4 sm:pt-8 pb-6 sm:pb-8 lg:pt-20 lg:pb-24 lg:pl-20 xl:pl-28 text-center lg:text-left z-10 bg-white">

          <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
            <span className="text-3xl lg:text-4xl">🚿</span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1E293B] leading-tight">
              Plumbing Emergency?
            </h1>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0EA5E9] leading-tight mb-5">
            Get Help in Minutes.
          </h2>

          <p className="mt-5 text-gray-600 text-sm lg:text-base leading-relaxed max-w-[500px] mx-auto lg:mx-0">
            Book a trusted, local plumber near you—available 24/7 with instant
            response and up-front pricing. No delays. No surprises.
          </p>

          <div className="mt-5 sm:mt-7 flex flex-row gap-2 sm:gap-4 justify-center lg:justify-start">
            <button className="px-3 sm:px-6 py-2 sm:py-3 border-2 border-[#0EA5E9] text-[#0EA5E9] rounded-md font-semibold hover:bg-[#0EA5E9] hover:text-white transition text-[10px] sm:text-sm lg:text-base whitespace-nowrap">
              Get Instant Help
            </button>
            <button className="px-3 sm:px-6 py-2 sm:py-3 bg-[#0EA5E9] text-white rounded-md font-semibold hover:bg-[#0284c7] transition text-[10px] sm:text-sm lg:text-base whitespace-nowrap">
              Book a Plumber Now
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[400px] lg:h-[700px] hidden lg:block">
          <Image
            src="/hero.png"
            alt="Plumber at work"
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>

      {/* Wave/Diagonal Background - Desktop Only */}
      <div className="absolute bottom-0 left-0 w-full h-16 lg:h-20 hidden lg:flex z-0">
        <div className="w-1/2 lg:w-[40%] bg-[#0F172A]"></div>
        <div className="w-1/2 lg:w-[60%] bg-[#0EA5E9]"></div>
      </div>
    </section>
  );
}
