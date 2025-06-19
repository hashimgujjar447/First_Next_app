"use client";

import { useState } from "react";
import {
  Briefcase,
  Code,
  Palette,
  Heart,
  Zap,
  Target,
  Clock,
} from "lucide-react";

interface FormData {
  fullName: string;
  lastName: string;
  email: string;
  interest: string;
  workoutType: string;
}

export default function MultiStepOnboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    lastName: "",
    email: "",
    interest: "",
    workoutType: "",
  });

  const totalSteps = 3;

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

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const isStep1Valid = formData.fullName && formData.lastName && formData.email;
  const isStep2Valid = formData.interest;
  const isStep3Valid = formData.workoutType;

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-8">
        {/* Step 1 */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-white mb-2">
                If you're ready to start, get in touch with us! ⭐
              </h2>
              <p className="text-gray-400 text-sm">01/03</p>
            </div>

            <div className="space-y-4">
              <p className="text-white text-sm">
                Hi, 👋 What's Your Name & Email?
              </p>

              <div className="grid grid-cols-2 gap-3">
                <input
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                  className="bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-md px-3 py-2"
                />
                <input
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  className="bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-md px-3 py-2"
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="bg-gray-700 border border-gray-600 text-white placeholder-gray-400 rounded-md px-3 py-2 w-full"
              />
            </div>

            <button
              onClick={handleNext}
              disabled={!isStep1Valid}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md"
            >
              Next
            </button>
          </div>
        )}

        {/* Step 2 */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-white mb-2">
                Help us get to know you 😊
              </h2>
              <p className="text-gray-400 text-sm">02/03</p>
            </div>

            <div>
              <p className="text-white text-sm mb-4">
                Hey {formData.fullName}! 👋 What's Your Main Interest/Goal?
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    id: "business",
                    icon: Briefcase,
                    label: "Business",
                    color: "text-yellow-400",
                  },
                  {
                    id: "development",
                    icon: Code,
                    label: "Development",
                    color: "text-green-400",
                  },
                  {
                    id: "design",
                    icon: Palette,
                    label: "Design",
                    color: "text-blue-400",
                  },
                  {
                    id: "health",
                    icon: Heart,
                    label: "Health & Fitness",
                    color: "text-red-400",
                  },
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleInputChange("interest", option.id)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formData.interest === option.id
                        ? "border-orange-500 bg-orange-500/10"
                        : "border-gray-600 hover:border-gray-500"
                    }`}
                  >
                    <option.icon
                      className={`w-8 h-8 mx-auto mb-2 ${option.color}`}
                    />
                    <p className="text-white text-sm text-center">
                      {option.label}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleBack}
                className="flex-1 border border-gray-600 text-white hover:bg-gray-700 py-2 rounded-md"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                disabled={!isStep2Valid}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-white mb-2">
                Help us get to know you 😊
              </h2>
              <p className="text-gray-400 text-sm">03/03</p>
            </div>

            <div>
              <p className="text-white text-sm mb-4">
                What type of workouts interest you the most? 🏋️
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    id: "cardio",
                    icon: Heart,
                    label: "Cardio & Endurance",
                    color: "text-red-400",
                  },
                  {
                    id: "strength",
                    icon: Zap,
                    label: "Strength Training",
                    color: "text-yellow-400",
                  },
                  {
                    id: "flexibility",
                    icon: Target,
                    label: "Flexibility & Yoga",
                    color: "text-green-400",
                  },
                  {
                    id: "hiit",
                    icon: Clock,
                    label: "HIIT & Intensity",
                    color: "text-orange-400",
                  },
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleInputChange("workoutType", option.id)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      formData.workoutType === option.id
                        ? "border-orange-500 bg-orange-500/10"
                        : "border-gray-600 hover:border-gray-500"
                    }`}
                  >
                    <option.icon
                      className={`w-8 h-8 mx-auto mb-2 ${option.color}`}
                    />
                    <p className="text-white text-sm text-center">
                      {option.label}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleBack}
                className="flex-1 border border-gray-600 text-white hover:bg-gray-700 py-2 rounded-md"
              >
                Back
              </button>
              <button
                onClick={() => {
                  console.log("Form submitted:", formData);
                  setFormData({
                    fullName: "",
                    lastName: "",
                    email: "",
                    interest: "",
                    workoutType: "",
                  });
                  setCurrentStep(1);
                  alert("Onboarding completed!");
                }}
                disabled={!isStep3Valid}
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md"
              >
                Complete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
