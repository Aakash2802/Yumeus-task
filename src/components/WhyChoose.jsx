import Image from "next/image";

export default function WhyChoose() {
  const features = [
    {
      icon: "/Min. 5 Years  Experience.svg",
      title: (
        <>
          Min. 5 Years <br />
          Experience
        </>
      ),
    },
    {
      icon: "/Vetted & Verified.svg",
      title: (
        <>
          Vetted & <br />
          Verified
        </>
      ),
    },
    {
      icon: "/Fully  Insured.svg",
      title: (
        <>
          Fully <br />
          Insured
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-white overflow-hidden">

      {/* MOBILE/TABLET VERSION */}
      <div className="lg:hidden py-6 sm:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6 sm:mb-8">
            Why Choose<br className="sm:hidden" /> InstaPlumbers?
          </h2>

          {/* Blue Features Bar */}
          <div className="bg-[#0EA5E9] py-6 sm:py-8 px-4 sm:px-6">
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center text-center text-white gap-2 sm:gap-3"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 relative">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      fill
                      className="object-contain filter brightness-0 invert"
                    />
                  </div>
                  <h3 className="text-[10px] sm:text-sm font-semibold leading-tight">
                    {feature.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Learn More Button */}
          <div className="text-center mt-6 sm:mt-8">
            <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#0EA5E9] text-white rounded-md hover:bg-[#0284c7] transition text-sm sm:text-base font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* DESKTOP VERSION */}
      <div className="hidden lg:grid lg:grid-cols-[40%_60%]">

        {/* LEFT - Dark Blue Section */}
        <div className="bg-[#0F172A] flex flex-col items-center justify-center py-5 px-5">
          <h2 className="text-4xl xl:text-4xl font-bold text-white text-center mb-8">
            Why Choose<br />
            <span className="ml-14">InstaPlumbers?</span>
          </h2>
          <button className="px-4 py-3 bg-[#0EA5E9] -mt-5 -ml-24 text-white rounded-md hover:text-[#0EA5E9]bg-white text-[#0EA5E9]  transition text-base ">
            Learn More
          </button>
        </div>

        {/* RIGHT - Light Blue Section */}
        <div className="bg-[#0EA5E9] flex items-center justify-center py-5 px-8">
          <div className="grid grid-cols-3 gap-35 -mt-10 max-w-3xl">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center text-white gap-3"
              >
                <div className="w-16 h-16 relative">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-base font-semibold leading-tight">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
