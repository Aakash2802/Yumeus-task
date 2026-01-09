"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const mobileTestimonialRef = useRef(null); // ✅ MOBILE ONLY
  const desktopTestimonialRef = useRef(null); // ✅ DESKTOP ONLY
  const logoRef = useRef(null);

  const testimonials = [
    {
      image: "/client 1.png",
      name: "Sarah, Shoreditch",
      role: "CLIENT, USA",
      review: "Was here in under 15 minutes to fix my leak at midnight!",
    },
    {
      image: "/Client 2.png",
      name: "Arnold Wilson",
      role: "CLIENT, USA",
      review:
        "I booked online and my boiler was repaired in an hour. Impressive response time!",
    },
  ];

  const logos = [
    { name: "CHAS", image: "/image 4.png" },
    { name: "Safe", image: "/image3.png" },
    { name: "NICEIC", image: "/image 1.png" },
    { name: "Safe2", image: "/image 2.png" },
    { name: "Safe3", image: "/image3.png" },
  ];

  const scroll = (ref, dir) => {
    if (!ref.current) return;
    ref.current.scrollBy({
      left: dir === "left" ? -300 : 300, // ✅ enough to move next card
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">

        {/* ================= HEADING ================= */}
        <motion.div
          className="flex items-center justify-between mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <span className="hidden sm:inline-block mb-3 px-3 py-1 text-xs border rounded-full">
              TESTIMONIALS
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              What Our Customers Say
            </h2>
          </div>

          {/* DESKTOP ARROWS */}
          <motion.div
            className="hidden sm:flex bg-[#0F172A] rounded-full p-1"
            whileHover={{ scale: 1.05 }}
          >
            <button
              onClick={() => scroll(desktopTestimonialRef, "left")}
              className="w-10 h-10 text-white flex items-center justify-center"
            >
              ‹
            </button>
            <button
              onClick={() => scroll(desktopTestimonialRef, "right")}
              className="w-10 h-10 text-white flex items-center justify-center"
            >
              ›
            </button>
          </motion.div>
        </motion.div>

        {/* ================= MOBILE TESTIMONIAL CAROUSEL ================= */}
        <div className="sm:hidden relative">
          {/* MOBILE ARROWS */}
          <button
            onClick={() => scroll(mobileTestimonialRef, "left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                       w-9 h-9 rounded-full bg-[#0F172A] text-white
                       flex items-center justify-center"
          >
            ‹
          </button>

          <button
            onClick={() => scroll(mobileTestimonialRef, "right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                       w-9 h-9 rounded-full bg-[#0F172A] text-white
                       flex items-center justify-center"
          >
            ›
          </button>

          <div
            ref={mobileTestimonialRef}
            className="flex gap-4 overflow-x-auto scroll-smooth
                       snap-x snap-mandatory pb-6 no-scrollbar"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="min-w-[90%] snap-center bg-[#EEF2F6] p-6 rounded-xl shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.2, ease: "easeOut" }}
              >
                <div className="text-4xl text-[#0EA5E9] mb-3">&ldquo;</div>
                <p className="text-gray-700 mb-5 text-sm">{t.review}</p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>

                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= DESKTOP GRID ================= */}
        <div
          ref={desktopTestimonialRef}
          className="hidden sm:grid grid-cols-2 gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-[#EEF2F6] p-8 rounded-xl shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.2, ease: "easeOut" }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="text-5xl text-[#0EA5E9] mb-4">&ldquo;</div>
              <p className="text-gray-700 mb-6">{t.review}</p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>

                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= MOBILE LOGOS ================= */}
        <motion.div
          className="mt-12 sm:hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div
            ref={logoRef}
            className="flex gap-10 overflow-x-auto scroll-smooth
                       snap-x snap-mandatory no-scrollbar"
          >
            {logos.map((logo, i) => (
              <motion.div
                key={i}
                className="min-w-[100px] h-12 snap-center relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
              >
                <Image src={logo.image} alt={logo.name} fill className="object-contain" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= DESKTOP LOGOS ================= */}
        <motion.div
          className="hidden sm:flex justify-between items-center mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              className="relative h-12 w-24"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              <Image src={logo.image} alt={logo.name} fill className="object-contain" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
