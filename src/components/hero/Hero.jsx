"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full bg-white overflow-hidden relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:min-h-[600px]">

        {/* LEFT CONTENT */}
        <div className="px-4 sm:px-6 pt-4 sm:pt-8 pb-6 sm:pb-8 lg:pt-20 lg:pb-24 lg:pl-20 xl:pl-28 text-center lg:text-left z-10 bg-white">

          <motion.div
            className="flex items-center justify-center lg:justify-start gap-2 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-3xl lg:text-4xl">🚿</span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1E293B] leading-tight">
              Plumbing Emergency?
            </h1>
          </motion.div>

          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0EA5E9] leading-tight mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Get Help in Minutes.
          </motion.h2>

          <motion.p
            className="mt-5 text-gray-600 text-sm lg:text-base leading-relaxed max-w-[500px] mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            Book a trusted, local plumber near you—available 24/7 with instant
            response and up-front pricing. No delays. No surprises.
          </motion.p>

          <motion.div
            className="mt-5 sm:mt-7 flex flex-row gap-2 sm:gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <motion.button
              className="px-3 sm:px-6 py-2 sm:py-3 border-2 border-[#0EA5E9] text-[#0EA5E9] rounded-md font-semibold hover:bg-[#0EA5E9] hover:text-white transition text-[10px] sm:text-sm lg:text-base whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(14, 165, 233, 0)",
                  "0 0 0 8px rgba(14, 165, 233, 0.2)",
                  "0 0 0 0 rgba(14, 165, 233, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Get Instant Help
            </motion.button>
            <motion.button
              className="px-3 sm:px-6 py-2 sm:py-3 bg-[#0EA5E9] text-white rounded-md font-semibold hover:bg-[#0284c7] transition text-[10px] sm:text-sm lg:text-base whitespace-nowrap relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(14, 165, 233, 0.5)",
                  "0 0 30px rgba(14, 165, 233, 0.8)",
                  "0 0 20px rgba(14, 165, 233, 0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Book a Plumber Now
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative w-full h-[400px] lg:h-[700px] hidden lg:block"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <Image
            src="/hero.png"
            alt="Plumber at work"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

      </div>

      {/* Wave/Diagonal Background - Desktop Only */}
      <div className="absolute bottom-0 left-0 w-full h-16 lg:h-20 hidden lg:flex z-0">
        <div className="w-1/2 lg:w-[40%] bg-[#0F172A]"></div>
        <div className="w-1/2 lg:w-[60%] bg-[#0EA5E9]"></div>
      </div>
    </section>
  );
}
