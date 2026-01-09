"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Why Choose<br className="sm:hidden" /> InstaPlumbers?
          </motion.h2>

          {/* Blue Features Bar */}
          <motion.div
            className="bg-[#0EA5E9] py-6 sm:py-8 px-4 sm:px-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center text-center text-white gap-2 sm:gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: "easeOut" }}
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
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learn More Button */}
          <motion.div
            className="text-center mt-6 sm:mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <motion.button
              className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#0EA5E9] text-white rounded-md hover:bg-[#0284c7] transition text-sm sm:text-base font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 15px rgba(14, 165, 233, 0.4)",
                  "0 0 25px rgba(14, 165, 233, 0.6)",
                  "0 0 15px rgba(14, 165, 233, 0.4)",
                ],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* DESKTOP VERSION */}
      <div className="hidden lg:grid lg:grid-cols-[40%_60%]">

        {/* LEFT - Dark Blue Section */}
        <motion.div
          className="bg-[#0F172A] flex flex-col items-center justify-center py-5 px-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl xl:text-4xl font-bold text-white text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            Why Choose<br />
            <span className="ml-14">InstaPlumbers?</span>
          </motion.h2>
          <motion.button
            className="px-4 py-3 bg-[#0EA5E9] -mt-5 -ml-24 text-white rounded-md hover:text-[#0EA5E9]bg-white text-[#0EA5E9]  transition text-base "
            initial={{ opacity: 0, y: 20, boxShadow: "0 0 15px rgba(14, 165, 233, 0.4)" }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 15px rgba(14, 165, 233, 0.4)",
                "0 0 25px rgba(14, 165, 233, 0.6)",
                "0 0 15px rgba(14, 165, 233, 0.4)",
              ],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }
            }}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* RIGHT - Light Blue Section */}
        <motion.div
          className="bg-[#0EA5E9] flex items-center justify-center py-5 px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="grid grid-cols-3 gap-35 -mt-10 max-w-3xl">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center text-center text-white gap-3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15, ease: "easeOut" }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <motion.div
                  className="w-16 h-16 relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain filter brightness-0 invert"
                  />
                </motion.div>
                <h3 className="text-base font-semibold leading-tight">
                  {feature.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

    </section>
  );
}
