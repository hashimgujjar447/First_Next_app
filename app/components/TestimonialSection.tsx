"use client";
import React from "react";
import { MoveRight, MoveLeft } from "lucide-react";

interface Person {
  image: string;
  logo: string;
  title: string;
  role: string;
  description: string;
}

const TestimonialSection = () => {
  const [currPeople, setCurrentPeople] = React.useState<number>(0);
  const people: Person[] = [
    {
      image: "/landingPage/home_image_4.png",
      logo: "/landingPage/Logo.png",
      title: "Wanda",
      role: "School Teacher",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.”",
    },
    {
      image: "/landingPage/home_image_3.png",
      logo: "/landingPage/Logo.png",
      title: "Samina",
      role: "School Teacher",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.”",
    },
    {
      image: "/landingPage/home_image_4.png",
      logo: "/landingPage/Logo.png",
      title: "Jasmine",
      role: "School Teacher",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.”",
    },
    {
      image: "/landingPage/home_image_4.png",
      logo: "/landingPage/Logo.png",
      title: "Bell",
      role: "School Teacher",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.”",
    },
    {
      image: "/landingPage/home_image_4.png",
      logo: "/landingPage/Logo.png",
      title: "Wanda",
      role: "School Teacher",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.”",
    },
  ];

  const handleClickNext = (): void => {
    setCurrentPeople((prev: number) => (prev + 1) % people.length);
  };
  const handleClickRight = (): void => {
    setCurrentPeople((prev: number) =>
      prev === 0 ? people.length - 1 : prev - 1,
    );
  };

  return (
    <div>
      {people.map(
        (person, index) =>
          currPeople === index && (
            <div
              key={index}
              className="flex gap-10  relative  justify-between items-start py-4  px-8 bg-[#191919] rounded-lg shadow-lg mb-8"
            >
              <img
                src={person.image}
                alt={person.title}
                className="rounded-md w-[400px] h-[500px] "
              />

              <div className="flex flex-col justify-start mt-5 items-start text-white">
                <img
                  src={person.logo}
                  alt={`${person.title} logo`}
                  className="mb-8 w-[210px] h-[40px]"
                />
                <p className="text-gray-300 text-xl border-b-1 border-white/25 leading-relaxed pb-8 mb-4">
                  {person.description}
                </p>
                <h3 className="text-xl font-semibold mb-1 mt-2">
                  {person.title}
                </h3>
                <p className="text-gray-400 mb-2">{person.role}</p>
              </div>
              <div className="flex gap-4 mt-4 absolute bottom-8 left-1/2 transform -translate-x-1/2">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div
                    key={index}
                    className={`relative w-3 h-3 rounded-full mx-1 ${
                      currPeople === index
                        ? "bg-[#F15C36] after:content-[''] after:absolute after:inset-0 after:m-auto after:w-5 after:h-5 after:rounded-full after:-left-1 after:bg-[#F15C36]/50"
                        : "bg-white/25"
                    }`}
                  />
                ))}
              </div>
              <div className="flex justify-center gap-4 mt-6 absolute bottom-8 right-8">
                {/* Left Arrow */}
                <button
                  onClick={handleClickRight}
                  aria-label="Previous Testimonial"
                  className="rounded-full border-2 border-white bg-transparent text-white w-20 h-10 flex items-center justify-center"
                >
                  <MoveLeft className="w-4 h-4" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={handleClickNext}
                  aria-label="Next Testimonial"
                  className="rounded-full border-2 border-white bg-transparent text-white w-20 h-10 flex items-center justify-center"
                >
                  <MoveRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ),
      )}
    </div>
  );
};

export default TestimonialSection;
