"use client";

import Image from "next/image";
import { useState } from "react";

export default function InstantHelp() {
  const [postcode, setPostcode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Postcode:", postcode);
  };

  return (
    <section className="w-full bg-white py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-center">

          {/* Map Image */}
          <div className="relative w-full lg:w-115 h-[200px] sm:h-[250px] rounded-lg lg:ml-22 object-cover overflow-hidden shadow-md">
            <Image
              src="/map1.png"
              alt="Service area map"
              fill
              className="object-cover"
            />
          </div>

          {/* Form Section */}
          <div className="bg-[#0EA5E9] text-white p-6 sm:p-8 w-full lg:w-134 min-h-[200px] sm:min-h-[250px] lg:-ml-16 rounded-lg shadow-md flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Call an InstaPlumber <br />
              Now
            </h2>
            <p className="text-white/90 mb-4 sm:mb-6 text-xs sm:text-sm">
              We have local plumbers near you—ready to assist 24/7, day or night.
            </p>

            <button className="w-full sm:w-55 max-w-xs bg-white text-[#0F172A] px-4 sm:px-6 py-2.5 sm:py-3 rounded-full  transition text-xs sm:text-sm">
              CALL A PLUMBER NOW
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
