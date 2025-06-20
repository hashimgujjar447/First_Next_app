import React from "react";

const DiagonalStrips = () => {
  return (
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
                  <span className="text-[#F15C36] w-6 h-6">.</span> DEDICATION
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagonalStrips;
