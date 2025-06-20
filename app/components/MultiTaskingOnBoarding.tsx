"use client";

import { useState } from "react";
import { Briefcase, Code, Palette, Heart } from "lucide-react";

interface FormData {
  fullName: string;
  lastName: string;
  email: string;
  interest: string;
  workoutType: string;
  bodyType: string;
}

export default function MultiStepOnboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    lastName: "",
    email: "",
    interest: "",
    workoutType: "",
    bodyType: "",
  });

  const totalSteps = 5;
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    console.log("Form submitted:", formData);
    alert("Onboarding completed!");
    setFormData({
      fullName: "",
      lastName: "",
      email: "",
      interest: "",
      workoutType: "",
      bodyType: "",
    });
    setCurrentStep(1);
  };

  const isStep1Valid = formData.fullName && formData.lastName && formData.email;
  const isStep2Valid = formData.interest !== "";
  const isStep3Valid = formData.workoutType !== "";
  const isStep4Valid = formData.bodyType !== "";

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full p-8 bg-[url('/landingPage/Rectangle10.png')] bg-[length:100%_100%]  bg-center  ">
        {/* Step 1 */}
        {currentStep === 1 && (
          <div className="space-y-8">
            <div className="flex justify-between items-center border-b border-white/25 py-6">
              <h2 className="text-[36px] font-semibold text-white">
                If you’re ready to start, get in touch with us!👇
              </h2>
              <p className="text-white text-[24px]">01/04</p>
            </div>

            <div className="space-y-4 mt-4 pt-8 border-b border-white/25 pb-20">
              <p className="text-white text-[20px] font-semibold mb-6">
                Hi, 👋 what’s your name & Email?
              </p>

              <div className="grid grid-cols-3 gap-3">
                <input
                  placeholder="First Name"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                  className="bg-transparent border border-white text-white placeholder-gray-400 rounded-md px-3 py-2"
                />
                <input
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  className="bg-transparent border border-white text-white placeholder-gray-400 rounded-md px-3 py-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-transparent border border-white text-white placeholder-gray-400 rounded-md px-3 py-2"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                disabled={!isStep1Valid}
                className="bg-[#F15C36] cursor-pointer hover:bg-orange-600 w-[120px] h-[50px] text-white rounded-full disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-white/25 py-6">
              <h2 className="text-[36px] font-semibold text-white">
                Help us get to know you 😊
              </h2>
              <p className="text-gray-400 text-sm">02/04</p>
            </div>

            <p className="text-white text-[20px] font-semibold mb-6">
              Hi {formData.fullName},👋 what’s your main fitness goal?
            </p>
            <div className="flex justify-center gap-8 border-b border-white/25 pb-4 mb-4">
              {[
                {
                  id: "weight_loss",
                  icon: "🏋️",
                  label: "Weight Loss",
                  color: "text-yellow-400",
                },
                {
                  id: "muscle_gain",
                  icon: "💪",
                  label: "Muscle Gain",
                  color: "text-green-400",
                },
                {
                  id: "strength",
                  icon: "🤸‍♂️",
                  label: "Strength",
                  color: "text-blue-400",
                },
                {
                  id: "general_health",
                  icon: "❤️‍🩹",
                  label: "General Health",
                  color: "text-red-400",
                },
              ].map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleInputChange("interest", option.id)}
                  className={`w-[180px] h-[180px] aspect-square rounded-full  bg-[#191919] transition-all ${
                    formData.interest === option.id ? " bg-orange-500" : ""
                  }`}
                >
                  <p className="mb-1">
                    <span className={`text-4xl ${option.color}`}>
                      {option.icon}
                    </span>
                  </p>
                  <p className="text-white text-sm text-center">
                    {option.label}
                  </p>
                </button>
              ))}
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="border border-gray-600 cursor-pointer text-white hover:bg-gray-700 w-[120px] h-[50px] rounded-md"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={!isStep2Valid}
                className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white w-[120px] h-[50px] rounded-md disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {currentStep === 3 && (
          <div className="space-y-8">
            <div className="flex justify-between items-center border-b border-white/25 py-6">
              <h2 className="text-[36px] font-semibold text-white">
                Help us get to know you 😊
              </h2>
              <p className="text-white text-[24px]">03/04</p>
            </div>

            <p className="text-white font-semibold text-[20px] mb-8 ">
              What type of workouts interest you the most? 🤔
            </p>
            <div className="flex justify-center gap-6 mb-8 border-b border-white/25 pb-4 ">
              {[
                {
                  id: "cardio",
                  label: "Cardio & Endurance",

                  bg:
                    formData.workoutType === "cardio"
                      ? "bg-orange-500"
                      : "bg-[#191919]",
                },
                {
                  id: "functional",
                  label: "Functional Fitness",

                  bg:
                    formData.workoutType === "functional"
                      ? "bg-orange-500"
                      : "bg-[#191919]",
                },
                {
                  id: "yoga",
                  label: "Yoga & Flexibility",

                  bg:
                    formData.workoutType === "yoga"
                      ? "bg-orange-500"
                      : "bg-[#191919]",
                },
              ].map((opt) => (
                <div key={opt.id} className="mr-4">
                  <button
                    type="button"
                    onClick={() => handleInputChange("workoutType", opt.id)}
                    className={`h-[180px] hover:cursor-pointer ${opt.bg} w-[180px]  rounded-full hover:bg-orange-500/25 transition-all mb-3`}
                  >
                    {" "}
                    <p className="text-white text-[16px]">{opt.label}</p>
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-between gap-3">
              <button
                type="button"
                onClick={handleBack}
                className=" border border-gray-600 cursor-pointer text-white hover:bg-gray-700 w-[120px] h-[50px] rounded-lg"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={!isStep3Valid}
                className=" bg-orange-500 cursor-pointer hover:bg-orange-600 text-white w-[120px] h-[50px] rounded-lg disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 4 */}
        {currentStep === 4 && (
          <div className="space-y-8">
            <div className="flex justify-between items-center border-b border-white/25 py-6">
              <h2 className="text-[36px] font-semibold text-white">
                About your body
              </h2>
              <p className="text-white text-[24px]">04/04</p>
            </div>

            <p className="text-white text-[20px] mb-8 ">
              Which one best describes your body type?
            </p>
            <div className="flex justify-center gap-6 mb-8 border-b border-white/25 pb-4 ">
              {[
                {
                  id: "slim",
                  label: "Slim",

                  bg:
                    formData.bodyType === "slim"
                      ? "bg-orange-500"
                      : "bg-[#191919]",
                },
                {
                  id: "athletic",
                  label: "Athletic",

                  bg:
                    formData.bodyType === "athletic"
                      ? "bg-orange-500"
                      : "bg-[#191919]",
                },
                {
                  id: "curvy",
                  label: "Curvy",

                  bg:
                    formData.bodyType === "curvy"
                      ? "bg-orange-500"
                      : "bg-[#191919]",
                },
              ].map((opt) => (
                <div key={opt.id} className="mr-4">
                  <button
                    type="button"
                    onClick={() => handleInputChange("bodyType", opt.id)}
                    className={`h-[180px] w-[180px] ${opt.bg} rounded-full hover:bg-orange-500/25 transition-all mb-3`}
                  >
                    {" "}
                    <p className="text-white text-xs">{opt.label}</p>
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-between gap-3">
              <button
                type="button"
                onClick={handleBack}
                className=" border-2 border-[#F15C36] text-white cursor-pointer hover:bg-gray-700 w-[120px] h-[50px] rounded-full"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={!isStep4Valid}
                className=" bg-[#F15C36]  hover:bg-orange-600 cursor-pointer text-white w-[120px] h-[50px] rounded-full disabled:opacity-50"
              >
                Done
              </button>
            </div>
          </div>
        )}
        {/* Step 5 - Completion */}
        {currentStep === 5 && (
          <div className=" flex items-center justify-center p-4">
            <div
              className="
        w-full              /* full width */
     
    
        rounded-lg          /* optional rounding */
        p-8
        "
            >
              <div className="text-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-2xl font-semibold text-white">
                    Thank you for submitting! 🎉
                  </h1>
                  <p className="text-gray-300">
                    We will reach out to you soon. 😊
                  </p>
                </div>

                <div className="flex justify-between items-center pt-8">
                  <button
                    type="button"
                    className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-2 rounded"
                    onClick={() => {
                      /* handle back if needed */
                      handleBack();
                    }}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded"
                    onClick={() => {
                      handleComplete();
                    }}
                  >
                    Start Over
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
