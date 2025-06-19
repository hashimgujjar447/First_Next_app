import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, User, ChevronRight, Check } from "lucide-react";
import ServicesSection from "./components/ServiceSection";
import TestimonialSection from "./components/TestimonialSection";
import MultiStepOnboarding from "./components/MultiTaskingOnBoarding";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 lg:px-12">
        <div className="flex items-center">
          <Link href="/" className="text-[#FF5733] font-bold text-xl">
            <img src="/landingPage/Logo.png" alt="" />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-[#FF5733] transition-colors">
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-[#FF5733] transition-colors"
          >
            About
          </Link>
          <div className="relative group">
            <Link
              href="/services"
              className="hover:text-[#FF5733] transition-colors"
            >
              Services
            </Link>
            <div className="absolute left-0 mt-2 w-36 bg-[#1A1A1A] rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
              <Link
                href="/services/lenka"
                className="block px-4 py-2 hover:bg-[#252525]"
              >
                Lenka
              </Link>
              <Link
                href="/services/classes"
                className="block px-4 py-2 hover:bg-[#252525]"
              >
                Classes
              </Link>
              <Link
                href="/services/sessions"
                className="block px-4 py-2 hover:bg-[#252525]"
              >
                Sessions
              </Link>
            </div>
          </div>
          <Link
            href="/contact"
            className="hover:text-[#FF5733] transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <button aria-label="Shopping cart">
            <ShoppingCart className="h-5 w-5" />
          </button>
          <button aria-label="User account">
            <User className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 lg:px-12">
        <div className="container mx-auto  pt-12 lg:pt-6 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-wider">
              UNLEASH
              <br />
              YOUR
              <br />
              INNER
              <br />
              STRENGTH <span className="text-yellow-400">💪</span>
            </h1>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 relative z-0">
            <div className="relative h-[543px] w-full">
              <Image
                src="/landingPage/home_image_1.png"
                alt="Fitness coach"
                fill
                className="object-contain object-right"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      {/* Diagonal Stripes */}

      <section className="relative overflow-hidden min-h-[200px] -top-16 px-6 ">
        <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden pointer-events-none">
          {/* First Strip */}
          <div className="relative w-full h-[30px] -rotate-[6deg] scale-125 z-15">
            <div className="absolute w-full h-full bg-[#333946] flex items-center">
              <div className="animate-marquee whitespace-nowrap flex items-center">
                {Array(10)
                  .fill(0)
                  .map((_, i) => (
                    <span
                      key={i}
                      className="mx-4 text-xs font-bold tracking-widest opacity-70"
                    >
                      TRAINING
                    </span>
                  ))}
              </div>
            </div>
          </div>

          {/* Second Strip (crossing) */}
          <div className="relative w-full h-[30px] rotate-[6deg] scale-125 -mt-10 z-20">
            <div className="absolute w-full h-full bg-white flex items-center">
              <div className="animate-marquee-reverse whitespace-nowrap flex items-center">
                {Array(10)
                  .fill(0)
                  .map((_, i) => (
                    <span
                      key={i}
                      className="mx-4 text-xs text-black font-bold tracking-widest opacity-70"
                    >
                      <span className="text-[#F15C36]">.</span> DEDICATION
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="container mx-auto px-6 py-10 lg:py-10">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="lg:w-1/2 relative">
            <div className="h-[640px] w-[450px] overflow-hidden relative mx-auto">
              {/* Background Circle Glow */}
              <div className="absolute top-[110px] left-[25px] w-[400px] h-[400px] bg-[#333946] rounded-full opacity-50 z-0" />

              {/* Foreground Image */}
              <Image
                src="/landingPage/home_image_2.png"
                alt="Coach with boxing gloves"
                width={360}
                height={630}
                className="relative z-10 object-cover object-top"
              />
            </div>
          </div>

          <div className="">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Reach your
              <br />
              body <span className="text-[#FF5733]">Goals</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg">
              Personalized Training & Nutrition Plans Designed to Perfectly
              Align With Your Lifestyle, Fitness Goals, and Daily Routine for
              Sustainable Results.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FF5733] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span>Certified Personal Trainer</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FF5733] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span>Customized Workout & Diet Plans</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FF5733] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span>100+ Client Transformations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FF5733] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span>Train Anytime, Anywhere</span>
              </div>
            </div>
            <Link
              href="/consultation"
              className="inline-flex items-center gap-2 bg-transparent hover:bg-[#FF5733]/10 text-white border border-[#FF5733] rounded-full px-6 py-3 transition-all"
            >
              BOOK A FREE CONSULTATION
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      {/* About section */}
      <section className=" py-10 px-6 ">
        <div className="bg-[#F15C36] rounded-lg p-5 overflow-hidden max-h-[600px]">
          <div className="flex z-10 flex-col relative lg:flex-row items-center gap-4 bg-[url('/landingPage/about_border.png')] bg-center bg-[length:100%_100%] bg-no-repeat px-10">
            {/* Text Section */}
            <div className="flex flex-col gap-4 lg:w-1/2 z-10">
              <h1 className="text-[44px] font-extrabold">About Me</h1>
              <div>
                <h3 className="text-[27.48px]">
                  Hi, I’m Lenka. Your Fitness Coach! 👋
                </h3>
                <p className="text-[17.59px] text-white/50">
                  With over{" "}
                  <span className="font-semibold">10 years of experience</span>,
                  I specialize in helping clients achieve their goals through
                  personalized fitness plans.
                </p>
              </div>
              <ul className="text-[17.59px] text-white pl-5 space-y-2">
                <li>European Certified Personal Trainer / REPs UAE</li>
                <li>Powerlifter️ - 52kg IPF</li>
                <li>Strength Coach</li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="relative w-full lg:w-1/2 -ml-30 z-10">
              <img
                src="/landingPage/home_image_3.png"
                alt="about image"
                className="w-full h-full object-cover object-top max-h-[560px]"
              />
            </div>

            <div className="absolute top-1/2 right-[-650px] w-full -rotate-[40deg] pointer-events-none z-50">
              {/* BACK STRIP */}
              <div className="relative w-full h-[30px] -rotate-6 bottom-10  bg-[#333946] flex items-center">
                <div className="animate-marquee whitespace-nowrap flex items-center">
                  {Array(10)
                    .fill(0)
                    .map((_, i) => (
                      <span
                        key={i}
                        className="mx-4 text-xs font-bold tracking-widest text-white opacity-70"
                      >
                        TRAINING
                      </span>
                    ))}
                </div>
              </div>

              {/* FRONT STRIP */}
              <div className="relative w-full h-[30px] rotate-5 bg-white flex items-center -mt-4">
                <div className="animate-marquee-reverse whitespace-nowrap flex items-center">
                  {Array(10)
                    .fill(0)
                    .map((_, i) => (
                      <span
                        key={i}
                        className="mx-4 text-xs text-black font-bold tracking-widest opacity-70"
                      >
                        <span className="text-[#F15C36]">.</span> DEDICATION
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-10 px-6">
        <ServicesSection />
      </section>
      <section className="py-10 px-6">
        <TestimonialSection />
      </section>
      <section className="py-10 px-6">
        <MultiStepOnboarding />
      </section>
      {/* Footer Section */}
      <Footer />
    </main>
  );
}
