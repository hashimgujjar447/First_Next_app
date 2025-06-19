import React from "react";

export default function LoginUpForm() {
  return (
    <div className="min-h-screen relative bg-[#0b0b0f] w-full flex  flex-col items-center   text-white px-4">
      <div className="absolute top-0 left-1 w-[300px] h-[300px] bg-[url('/images/topLeftGlow.png')] bg-no-repeat bg-cover z-0 pointer-events-none">
        <div className=" w-[300px] h-[300px] bg-[radial-gradient(ellipse_at_top_left,_#18FF9E_0%,_#17FFE3_100%)] blur-[200px] opacity-40 z-0 pointer-events-none" />
      </div>

      <div className="flex items-center gap-3 mt-12 mb-14">
        <img src="/images/leftLogo.png" className="w-[45px] h-[32px]" alt="" />
        <img
          src="/images/logo.png"
          className="w-[160px] h-[32px]"
          alt="left top image"
        />
      </div>
      <div className="  p-8 sm:w-[400px]">
        <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
        <p className="text-gray-400 text-base mb-6">
          Sign in to your dashboard & start tracking your analytics.
        </p>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-white/50  mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@email.com"
              className="w-full px-4 py-2 rounded-md bg-[#19161C] text-white/25 border border-[#343B4F] focus:outline-none "
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm text-white/50 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="At least 8 characters"
              className="w-full px-4 py-2 rounded-md bg-[#19161C] text-white/25 border border-[#343B4F]  focus:outline-none "
            />
          </div>

          <div className="flex items-center justify-end">
            <p className="text-sm text-white/50">forget password?</p>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 text-white font-medium rounded-xl bg-gradient-to-tr from-[#933FFE] to-[#18C8FF] shadow-md hover:opacity-90 transition duration-300"
          >
            Sign in
          </button>
        </form>
      </div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[url('/images/rightBottomGlow.png')] bg-no-repeat bg-cover z-0 pointer-events-none">
        <div className="w-[300px] h-[300px] bg-[radial-gradient(ellipse_at_center,_#00C2FF_0%,_#FF29C3_100%)] blur-[200px] opacity-50 z-0 pointer-events-none" />
      </div>
    </div>
  );
}
