import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
