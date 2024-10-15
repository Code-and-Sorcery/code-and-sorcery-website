import { About } from "@/components/About";
import { Apps } from "@/components/Apps";
import { Cta } from "@/components/Cta";
// import { FAQ } from "@/components/FAQ";
// import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
// import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
// import { Newsletter } from "@/components/Newsletter";
// import { Pricing } from "@/components/Pricing";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Services } from "@/components/Services";
// import { Sponsors } from "@/components/Sponsors";
import { Team } from "@/components/Team";
// import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Sponsors /> */}
      <About />
      <TechStack />
      <Apps />
      {/* <HowItWorks /> */}
      {/* <Features /> */}
      <Cta />
      <Services />
      <Team />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <Newsletter /> */}
      {/* <FAQ /> */}
      <Footer />
      <ScrollToTop />
    </>
  );
}
