"use client";

import { ArrowDown } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Custom Fitness & Meal Plans",
      icon: "/landingPage/custom meal plan icon 1.png", // Placeholder - you can replace with actual icons
      side: "left",
    },
    {
      id: 2,
      title: "Home-Based Exercises",
      icon: "/landingPage/home based exercise icon 1.png", // Placeholder - you can replace with actual icons
      side: "right",
    },
    {
      id: 3,
      title: "Personalized Progress Tracking",
      icon: "/landingPage/progress tracking icon 1.png", // Placeholder - you can replace with actual icons
      side: "left",
    },
    {
      id: 4,
      title: "Meal Plans For Weight Loss, Muscle Gain",
      icon: "/landingPage/meal plans for weight loss icons 1.png", // Placeholder - you can replace with actual icons
      side: "right",
    },
    {
      id: 5,
      title: "Weekly Workout Plans",
      icon: "/landingPage/weekly workout plans icon.png", // Placeholder - you can replace with actual icons
      side: "left",
    },
    {
      id: 6,
      title: "Easy-To-Follow Healthy Eating Habits",
      icon: "/landingPage/healthy eating.png", // Placeholder - you can replace with actual icons
      side: "right",
    },
  ];

  const leftServices = services.filter((service) => service.side === "left");
  const rightServices = services.filter((service) => service.side === "right");

  return (
    <div className=" text-white p-8 relative overflow-hidden">
      {/* Header with decorative line */}
      <div className="max-w-6xl mx-auto">
        <div className="relative mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            My <span className="text-orange-500">Services</span>
          </h1>

          {/* Decorative curved line */}
          <div className="absolute top-0 right-52 w-96 h-32 hidden lg:block">
            <img
              src={"/landingPage/arrowLeftDown.png"}
              alt="Decorative Arrow"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-[1fr_80px_1fr] gap-8 px-16 items-start">
          {/* Left Column */}
          <div className="space-y-8 ">
            {leftServices.map((service, index) => (
              <div key={service.id} className="flex items-center gap-6 group">
                <div className="w-20 h-20   bg-gray-800 rounded-full flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-gray-700 transition-colors">
                  <img
                    src={service.icon}
                    alt="icon"
                    className="w-20 h-20 relative bottom-4"
                  />
                </div>
                <div>
                  <h3 className="text-2xl leading-tight">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column - Arrows */}
          <div className="hidden border-x-1 border-white/25 lg:flex flex-col items-center justify-center space-y-22 py-12">
            {[1, 2, 3].map((_, index) => (
              <div key={index}>
                <img
                  src="/landingPage/serviceArrowDown.png"
                  alt="service arrow down"
                />
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8 ">
            {rightServices.map((service, index) => (
              <div key={service.id} className="flex items-center gap-6 group">
                <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-gray-700 transition-colors">
                  <img
                    src={service.icon}
                    alt="icon"
                    className="w-20 h-20 relative bottom-4"
                  />
                </div>
                <div>
                  <h3 className="leading-tight text-2xl ">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learn More Button */}
        <div className="flex justify-center mt-16">
          <button className="border-2 border-dashed cursor-pointer border-orange-500 text-white bg-transparent hover:bg-orange-500 hover:text-white px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
