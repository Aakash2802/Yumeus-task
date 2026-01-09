"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      icon: "/1.svg",
      title: "Select Your Issue",
      description: "Choose the plumbing problem you're facing—leaks, clogs, heating, or anything else.",
    },
    {
      icon: "/2.svg",
      title: "View Upfront Pricing",
      description: "Get instant, transparent pricing with no hidden charges.",
    },
    {
      icon: "/3.svg",
      title: "Book Instantly",
      description: "Confirm your booking and get matched with a nearby trusted plumber.",
    },
    {
      icon: "/4.svg",
      title: "Track in Real-Time",
      description: "Watch your plumber's live location as they head to your doorstep.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="hidden lg:inline-block px-3 py-1 border-2 border-gray-900 rounded-full text-xs mb-4">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            We&apos;re like Uber — but for plumbers. <br className="hidden lg:block" />
            <span className="hidden lg:inline">Simple, fast, and reliable.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="text-sm text-gray-400 font-bold mb-3">{step.number}</div>
              <motion.div
                className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 max-w-[200px] mx-auto leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
