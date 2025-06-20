import ServicesSection from "./components/ServiceSection";
import TestimonialSection from "./components/TestimonialSection";
import MultiStepOnboarding from "./components/MultiTaskingOnBoarding";
import Footer from "./components/Footer";
import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import DiagonalStrips from "./components/DiagonalStrips";
import GoalsSection from "./components/GoalsSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] text-white">
      {/* Navigation */}
      <header className="px-6 py-4 lg:px-12">
        <HeaderSection />
      </header>

      {/* Hero Section */}
      <section className="px-6 lg:px-12">
        <HeroSection />
      </section>
      {/* Diagonal Stripes */}

      <section className="relative overflow-hidden min-h-[200px] -top-16 px-6 ">
        <DiagonalStrips />
      </section>

      {/* Goals Section */}
      <section className="container mx-auto px-6 py-10 lg:py-10">
        <GoalsSection />
      </section>
      {/* About section */}
      <section className=" py-10 px-6 ">
        <AboutSection />
      </section>
      <section className=" py-10 px-6">
        <ServicesSection />
      </section>
      <section className="py-10 px-6">
        <TestimonialSection />
      </section>
      <section className="py-10 px-6 bg-[#272727]">
        <MultiStepOnboarding />
      </section>
      {/* Footer Section */}
      <Footer />
    </main>
  );
}
