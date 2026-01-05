import Image from "next/image";

export default function CoreServices() {
  const services = [
    {
      image: "/Plumbing.png",
      iconSvg: "/Plumbing1.svg",
      icon: "🔧",
      title: "Plumbing",
      description: "Fixing everything from dripping taps to major pipe bursts and blocked toilets—fast and reliable.",
    },
    {
      image: "/Drainage.png",
      iconSvg: "/Drainage2.svg",
      icon: "💡",
      title: "Drainage",
      description: "We clear blocked drains, overflowing systems, and bad smells with expert care and modern tools.",
    },
    {
      image: "/Heating.png",
      iconSvg: "/Heating3.svg",
      icon: "🔥",
      title: "Heating",
      description: "Expert repairs and installations for radiators, boilers, and central heating systems to keep your home warm.",
    },
  ];

  return (
    <section className="w-full bg-[#EEF2F6] py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">

        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Core Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <div className="relative w-70 h-42 ml-5 mt-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                {/* Icon at bottom left */}
                <div className="absolute bottom-0 left--1 w-12 h-12">
                  <Image
                    src={service.iconSvg}
                    alt={service.title}
                    fill
                    className="object-contain drop-shadow-lg"
                  />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="text-2xl">{service.icon}</span>
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base mb-3 leading-relaxed">
                  {service.description}
                </p>
                <button className="text-[#0EA5E9] font-semibold text-sm hover:underline">
                  LEARN MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
