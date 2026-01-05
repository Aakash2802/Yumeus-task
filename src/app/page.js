import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/navbar";
import WhyChoose from "@/components/WhyChoose";
import HowItWorks from "@/components/HowItWorks";
import CoreServices from "@/components/CoreServices";
import InstantHelp from "@/components/InstantHelp";
import ScheduleOnSite from "@/components/ScheduleOnSite";
import WhyCustomersLove from "@/components/WhyCustomersLove";
import Testimonials from "@/components/Testimonials";
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
      <CoreServices />
      <InstantHelp />
      <ScheduleOnSite />
      <WhyCustomersLove />
      <Testimonials />
      <FAQ />
      <Blog />
      <Footer />
    </>
  );
}
