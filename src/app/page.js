import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/navbar";
import WhyChoose from "@/components/WhyChoose";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import CoreServices from "@/components/CoreServices";
import InstantHelp from "@/components/InstantHelp";
import ScheduleOnSite from "@/components/ScheduleOnSite";
import WhyCustomersLove from "@/components/WhyCustomersLove";
import TestimonialsClient from "@/components/TestimonialsClient"; // ✅
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChoose />
      <HowItWorks />
      <Stats />
      <CoreServices />
      <InstantHelp />
      <ScheduleOnSite />
      <WhyCustomersLove />
      <TestimonialsClient /> {/* ✅ FIXED */}
      <FAQ />
      <Blog />
      <Footer />
    </>
  );
}
