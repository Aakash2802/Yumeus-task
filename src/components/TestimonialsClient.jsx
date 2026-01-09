"use client";

import dynamic from "next/dynamic";

// Disable SSR ONLY here (client component)
const Testimonials = dynamic(
  () => import("./Testimonials"),
  { ssr: false }
);

export default function TestimonialsClient() {
  return <Testimonials />;
}
