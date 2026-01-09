"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Blog() {
  const posts = [
    {
      image: "/Top 5 Signs You Need a Plumber –  Before It’s Too Late.png",
      title: "Top 5 Signs You Need a Plumber – Before It's Too Late",
      category: "PLUMBER",
      author: "ANAIS EMMERICH",
      date: "16 OCT 2024",
    },
    {
      image: "/Boiler Not Working_ Try These  Quick Fixes First.png",
      title: "Boiler Not Working? Try These Quick Fixes First",
      category: "SPECIAL REPAIRS",
      author: "ANAIS EMMERICH",
      date: "16 OCT 2024",
    },
    {
      image: "/How to Unblock a Drain – Safely and  Effectively.png",
      title: "How to Unblock a Drain – Safely and Effectively",
      category: "HANDYMAN",
      author: "MARC BATRE",
      date: "16 OCT 2024",
    },
  ];

  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 lg:ml-40 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <span className="hidden sm:inline-block px-2 sm:px-3 py-1 border-2 border-gray-900 rounded-full text-xs mb-3 sm:mb-4">
  RECENT BLOG
</span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              From the InstaPlumbers Blog
            </h2>
          </div>
          <motion.button
            className="hidden md:block px-3 py-2 sm:mt-10 border-2 border-gray-900 rounded-full text-xs hover:bg-gray-900 hover:text-white transition whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW ALL POST
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-9 w-full lg:w-270 lg:ml-40">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative w-full h-40 sm:h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                {/* Date Badge */}
                <motion.div
                  className="absolute bottom-0 right-3 sm:right-4 bg-white rounded-t-lg px-2 sm:px-3 py-1.5 sm:py-2 shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.3, ease: "easeOut" }}
                >
                  <div className="text-xs font-bold text-[#0EA5E9]">{post.date}</div>
                </motion.div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                  <span className="font-semibold">{post.category}</span>
                  <span>/</span>
                  <span>{post.author}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-6 sm:mt-8 text-center hidden sm:block md:hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.button
            className="px-5 sm:px-6 py-2 border-2 border-gray-900 rounded-full text-xs sm:text-sm font-semibold hover:bg-gray-900 hover:text-white transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW ALL POST
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
