"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How can I verify that InstaPlumbers are reliable?",
      answer: "All our plumbers are vetted, reviewed, and rated by real customers. We only work with trusted, experienced professionals.",
    },
    {
      question: "Are your plumbers registered with Gas Safe (CORGI)?",
      answer: "Yes, all our gas engineers are Gas Safe registered and carry valid certification.",
    },
    {
      question: "Do your plumbers have insurance?",
      answer: "Absolutely. All our plumbers carry comprehensive public liability insurance for your peace of mind.",
    },
    {
      question: "How much do your plumbers cost?",
      answer: "We provide transparent, upfront pricing before any work begins. Costs vary depending on the job, but you'll always know the price in advance.",
    },
    {
      question: "Do you charge a call-out fee?",
      answer: "Call-out fees vary by plumber and are clearly communicated when you book. No hidden surprises.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-8 sm:mb-12">
          <span className="hidden sm:inline-block px-3 sm:px-4 py-1 border-2 border-gray-900 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base">
            We've answered the most common questions to help you book with confidence.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-2 sm:py-3 text-left hover:bg-gray-50 transition rounded-lg px-2"
              >
                <h3 className="font-semibold text-gray-900 pr-3 sm:pr-4 text-sm sm:text-base">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
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
              {openIndex === index && faq.answer && (
                <div className="pt-3 pb-2">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
