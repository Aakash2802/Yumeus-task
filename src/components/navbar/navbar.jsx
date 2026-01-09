"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const menuItems = [
  "Home",
  "How It Works",
  "Services",
  "FAQs",
  "Contact",
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.95)"]
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(10px)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="w-full z-50 sticky top-0 shadow-[0_6px_30px_rgba(0,0,0,0.12)]"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">

        {/* Top Row */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/logo1.svg"
              alt="InstaPlumbers Logo"
              width={120}
              height={32}
              className="sm:w-[150px] sm:h-[40px]"
              priority
            />
          </motion.div>

          {/* Desktop Menu */}
          <motion.nav
            className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-sm xl:text-base"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            {menuItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => setActive(item)}
                className={`transition whitespace-nowrap ${
                  active === item
                    ? "text-[#0EA5E9] font-bold"
                    : "text-gray-600 hover:text-[#0EA5E9]"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.button>
            ))}
          </motion.nav>

          {/* Desktop Button */}
          <motion.button
            className="hidden lg:block border-2 border-[#0EA5E9] text-[#0EA5E9] px-4 xl:px-5 py-2 rounded-lg font-semibold hover:bg-[#0EA5E9] hover:text-white transition text-sm xl:text-base whitespace-nowrap"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-3 pb-4 border-t border-gray-100 pt-4">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActive(item);
                  setOpen(false);
                }}
                className={`text-left py-2 px-3 rounded-lg transition ${
                  active === item
                    ? "text-[#0EA5E9] bg-blue-50 font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item}
              </button>
            ))}

            <button className="mt-2 border-2 border-[#0EA5E9] text-[#0EA5E9] px-5 py-2.5 rounded-lg font-semibold hover:bg-[#0EA5E9] hover:text-white transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
