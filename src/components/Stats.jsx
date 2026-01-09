"use client";

import { motion } from "framer-motion";
import Counter from "./Counter";

export default function Stats() {
  const stats = [
    { number: 5000, suffix: "+", label: "Happy Customers" },
    { number: 24, suffix: "/7", label: "Available" },
    { number: 15, suffix: " Min", label: "Avg Response Time" },
    { number: 98, suffix: "%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="w-full bg-gradient-to-r from-[#0EA5E9] to-[#0284c7] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                <Counter end={stat.number} duration={2} suffix={stat.suffix} />
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-white/90">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
