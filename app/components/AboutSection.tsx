import React from "react";

const AboutSection = () => {
  return (
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
              <span className="font-semibold">10 years of experience</span>, I
              specialize in helping clients achieve their goals through
              personalized fitness plans.
            </p>
          </div>
          <ul className="text-[17.59px] text-white  space-y-4">
            <li className="flex items-center gap-2">
              <div className="w-10 h-10 ">
                <div className="relative">
                  <img src="/landingPage/circle.png" alt="Circle" />
                  <img
                    src="/landingPage/vector 9.png"
                    alt="Tick"
                    className="absolute -top-1 left-3"
                  />
                </div>
              </div>
              European Certified Personal Trainer / REPs UAE
            </li>
            <li className="flex items-center gap-2">
              <div className="w-10 h-10 ">
                <div className="relative">
                  <img src="/landingPage/circle.png" alt="Circle" />
                  <img
                    src="/landingPage/vector 9.png"
                    alt="Tick"
                    className="absolute -top-1 left-3"
                  />
                </div>
              </div>
              Powerlifter️ - 52kg IPF
            </li>
            <li className="flex items-center gap-2">
              <div className="w-10 h-10 ">
                <div className="relative">
                  <img src="/landingPage/circle.png" alt="Circle" />
                  <img
                    src="/landingPage/vector 9.png"
                    alt="Tick"
                    className="absolute -top-1 left-3"
                  />
                </div>
              </div>
              Strength Coach
            </li>
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
  );
};

export default AboutSection;
