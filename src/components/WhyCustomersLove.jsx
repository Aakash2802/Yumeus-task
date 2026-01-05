import Image from "next/image";

export default function WhyCustomersLove() {
  const features = [
    {
      icon: "/Available 247.svg",
      title: "Available 24/7",
      description: "Plumbing emergencies don't wait, and neither do we.",
    },
    {
      icon: "/Up-Front, Transparent Pricing.svg",
      title: "Up-Front, Transparent Pricing",
      description: "No guesswork. No hidden fees",
    },
    {
      icon: "/Immediate Response.svg",
      title: "Immediate Response",
      description:
        "We respond instantly. Book in seconds, get matched with a nearby plumber.",
    },
  ];

  return (
    <section className="w-full bg-white py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ===== MOBILE / TABLET (NO IMAGE, NO BADGE) ===== */}
        <div className="lg:hidden text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Why Customers Love InstaPlumbers
          </h2>
          <p className="text-gray-600 text-sm">
            We're built around speed, transparency, and trust—here's why
            thousands of Londoners choose us:
          </p>
        </div>

        {/* ===== DESKTOP HEADER (UNCHANGED) ===== */}
        <div className="hidden lg:block mb-8 lg:ml-165 mt-5">
          <span className="inline-block px-3 py-1 border-2 border-gray-900 rounded-full text-xs mb-3">
            OUR EXPERIENCE
          </span>
          <h2 className="text-5xl font-bold text-gray-900 mb-3">
            Why Customers Love InstaPlumbers
          </h2>
          <p className="text-gray-600 max-w-2xl">
            We're built around speed, transparency, and trust—here's why
            thousands of Londoners choose us:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* ===== DESKTOP IMAGE ONLY ===== */}
          <div className="hidden lg:block relative w-[480px] h-[450px] rounded-lg overflow-hidden lg:-mt-56 lg:ml-22">
            <Image
              src="/Our experience.png"
              alt="Happy plumber"
              fill
              className="object-cover"
            />
          </div>

          {/* ===== FEATURES ===== */}
          <div className="space-y-5">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={44}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

            {/* BUTTON – CENTER ONLY IN RESPONSIVE */}
<div className="flex justify-center lg:justify-start">
  <button className="px-5 py-2.5 bg-[#0F172A] text-sm text-white rounded-full hover:bg-gray-800 transition">
    Book Your Plumber Now
  </button>
</div>

          </div>

        </div>
      </div>
    </section>
  );
}
