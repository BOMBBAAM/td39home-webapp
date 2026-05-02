import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import Pricing from "@/components/Pricing";
import WhyUs from "@/components/WhyUs";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Portfolio />
      <Reviews />
      <Pricing />
      <WhyUs />
      <CtaSection />
      <Footer />
    </>
  );
}
