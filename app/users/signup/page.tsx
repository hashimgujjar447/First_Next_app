"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  email: string;
  password: string;
  code: string;
}

export default function SignUpForm() {
  const [step, setStep] = useState<"signup" | "verify">("signup");
  const [form, setForm] = useState<FormData>({
    email: "",
    password: "",
    code: "",
  });
  const [error, setError] = useState<String>("");
  const [message, setMessage] = useState<String>("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.email, password: form.password }),
    });
    const data = await res.json();
    console.log(data);
    if (data.message === "User already exists") {
      setStep("verify");
      return;
    }
    if (res.ok) {
      setMessage("Signup successful! Check email for code.");

      setStep("verify");
    } else {
      setError(data.message || "Signup failed!");
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setMessage("");
    const res = await fetch("/api/auth/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.email, code: form.code }),
    });
    const data = await res.json();
    if (res.ok) {
      setMessage("Email verified! You can now login.");

      // Optionally redirect or show login form
      router.push("/users/login");
    } else {
      setError(data.message || "Invalid code!");
    }
  };

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
      <div className="  p-8 sm:w-[400px]  ">
        <h1 className="text-3xl font-bold mb-2">Create an Account</h1>
        <p className="text-gray-400 text-base mb-6">Create a new account</p>

        <form className="space-y-4" onSubmit={handleSignup}>
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
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
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
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="At least 8 characters"
              className="w-full px-4 py-2 rounded-md bg-[#19161C] text-white/25 border border-[#343B4F]  focus:outline-none "
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 text-white font-medium rounded-xl bg-gradient-to-tr from-[#933FFE] to-[#18C8FF] shadow-md hover:opacity-90 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
      {step === "verify" && (
        <div className="p-8 sm:w-[400px]">
          <form className="space-y-4" onSubmit={handleVerify}>
            <div>
              <label
                htmlFor="code"
                className="block text-sm text-white/50 mb-1"
              >
                Verification Code
              </label>
              <input
                type="text"
                id="code"
                value={form.code}
                onChange={(e) => setForm({ ...form, code: e.target.value })}
                placeholder="Enter your code"
                className="w-full px-4 py-2 rounded-md bg-[#19161C] text-white/25 border border-[#343B4F] focus:outline-none "
              />
            </div>
            <div className="flex w-full items-center justify-between">
              <button
                type="submit"
                className=" py-3 ml-30 px-3 text-white font-medium rounded-xl bg-gradient-to-tr from-[#933FFE] to-[#18C8FF] shadow-md hover:opacity-90 transition duration-300"
              >
                Verify Email
              </button>
            </div>
          </form>
        </div>
      )}
      <div className="absolute bottom-0 right-1 w-[300px] h-[300px] bg-[url('/images/rightBottomGlow.png')] bg-no-repeat bg-cover z-0 pointer-events-none">
        <div className="w-[300px] h-[300px] bg-[radial-gradient(ellipse_at_center,_#00C2FF_0%,_#FF29C3_100%)] blur-[200px] opacity-50 z-0 pointer-events-none" />
      </div>
    </div>
  );
}
