"use client";

import Image from "next/image";
import { useState } from "react";

export default function ScheduleOnSite() {
  const [expandedSection, setExpandedSection] = useState("Central & North London");

  const expandableAreas = {
    "Central & North London": [
      { name: "Camden", checked: true },
      { name: "Islington", checked: true },
      { name: "Westminster", checked: true },
      { name: "Haringey", checked: true },
      { name: "Barnet", checked: true },
      { name: "Enfield", checked: true },
      { name: "Hackney", checked: true },
      { name: "Hammersmith", checked: true },
    ],
  };

  const staticAreas = ["East London", "South London", "West London"];

  return (
    <section className="w-full bg-[#EEF2F6] py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">

          {/* Map Image */}
        <div className="relative w-full h-[280px] sm:h-[350px] mx-auto lg:w-130 lg:ml-22 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/map2.png"
              alt="Location map"
              fill
              className="object-cover"
            />
          </div>

          {/* Areas List */}
          <div className="lg:ml-6">
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
              <b>Expanding Across London <br />
              & Essex</b>
            </h2>
            <p className="text-gray-600 mb-1 text-xs sm:text-sm leading-relaxed">
              We're growing fast—now serving all major boroughs across London and Essex with trusted, on-call plumbers ready to help 24/7.
            </p>

            {/* Expandable sections with checkboxes */}
            {Object.keys(expandableAreas).map((section) => (
              <div key={section}>
                <button
                  onClick={() => setExpandedSection(expandedSection === section ? null : section)}
                  className="w-full flex items-center justify-between py-3 sm:py-4 text-left text-sm sm:text-base font-semibold text-gray-900 hover:text-[#0EA5E9] transition"
                >
                  {section}
                  <svg
                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${
                      expandedSection === section ? "rotate-180" : ""
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {expandedSection === section && (
                  <div className="pb-3 sm:pb-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                    {expandableAreas[section].map((area) => (
                      <label key={area.name} className="flex items-center gap-1 text-xs sm:text-sm text-gray-700">
                        <input
                          type="checkbox"
                          defaultChecked={area.checked}
                          className="w-3 h-3 sm:w-4 sm:h-4 text-[#0EA5E9] border-gray-300 rounded focus:ring-[#0EA5E9]"
                        />
                        {area.name}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Static sections without arrows */}
            {staticAreas.map((section) => (
              <div key={section}>
                <div className="py-2 text-sm sm:text-base font-semibold text-gray-900">
                  {section}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
