import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const GoalsSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-6">
      <div className="lg:w-1/2 relative">
        <div className="h-[630px] w-[470px] overflow-hidden relative mx-auto">
          {/* Background Circle Glow */}
          <div className="absolute top-[170px] -left-0.5 w-[460px] h-[460px] bg-[#333946] rounded-full opacity-50 z-0" />

          {/* Foreground Image */}
          <div className="relative overflow-hidden h-[590px] w-[470px] ml-10">
            <Image
              src="/landingPage/home_image_2.png"
              alt="Athletic woman with boxing gloves in fighting stance"
              width={360}
              height={400}
              className="relative h-[600px] z-10 object-cover object-top"
            />
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -top-3 right-40 z-20">
          <img src="/landingPage/aroowRightUp.png" alt="" className="w-5 h-5" />
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Reach your
          <br />
          body <span className="text-[#FF5733]">Goals</span>
        </h2>
        <p className="text-gray-300 mb-8 max-w-lg">
          Personalized Training & Nutrition Plans Designed to Perfectly Align
          With Your Lifestyle, Fitness Goals, and Daily Routine for Sustainable
          Results.
        </p>
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 ">
              <div className="relative">
                <img src="/landingPage/circle.png" alt="Circle" />
                <img
                  src="/landingPage/tick (1).png"
                  alt="Tick"
                  className="absolute -top-2 left-2"
                />
              </div>
            </div>
            <span>Certified Personal Trainer</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 ">
              <div className="relative">
                <img src="/landingPage/circle.png" alt="Circle" />
                <img
                  src="/landingPage/tick (1).png"
                  alt="Tick"
                  className="absolute  -top-2 left-2"
                />
              </div>
            </div>
            <span>Customized Workout & Diet Plans</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 ">
              <div className="relative">
                <img src="/landingPage/circle.png" alt="Circle" />
                <img
                  src="/landingPage/tick (1).png"
                  alt="Tick"
                  className="absolute -top-2 left-2"
                />
              </div>
            </div>
            <span>100+ Client Transformations</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 ">
              <div className="relative">
                <img src="/landingPage/circle.png" alt="Circle" />
                <img
                  src="/landingPage/tick (1).png"
                  alt="Tick"
                  className="absolute -top-2 left-2"
                />
              </div>
            </div>
            <span>Train Anytime, Anywhere</span>
          </div>
        </div>
        <Link
          href="/consultation"
          className="inline-flex items-center gap-2 bg-transparent hover:bg-[#FF5733]/10 text-white border border-white rounded-full px-6 py-3 transition-all"
        >
          BOOK A FREE CONSULTATION
          <img src="/landingPage/topRightCornerArrow.png" alt="" />
        </Link>
        <div className="relative right-4 mt-1">
          <img
            src="/landingPage/aroowRightDown (1).png"
            alt="right corner arrow"
            className="w-5 h-5"
          />
        </div>
      </div>
    </div>
  );
};

export default GoalsSection;
