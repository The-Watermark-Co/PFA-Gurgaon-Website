import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Meenika Gandhi",
    quote:
      "With the huddles that motherhood can attract, I plan to be the rainbow on a rainy day. This is a purposefully driven entity that is set to support what motherliness encompasses.",
    image: "src/assets/menika.png",
  },
  {
    id: 2,
    name: "Manta",
    quote:
      "Every day is a chance to bring more care and love into the world. Together, we build bridges of compassion.",
    image: "src/assets/manta.png",
  },
  {
    id: 3,
    name: "Nitin",
    quote:
      "My goal is to ensure every individual feels valued and supported, no matter the circumstances.",
    image: "src/assets/nitin.png",
  
  },
];

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? teamMembers.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === teamMembers.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full max-w mx-auto flex flex-col md:flex-row items-center justify-between gap-10 p-8 bg-[#F4F4F4]">
      <div className="flex flex-col items-center gap-5">
      <h2 className="text-green-600 font-semibold mb-2 tracking-wide uppercase text-sm">
            Meet The Team
          </h2>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Great Care Taker
          </h3>
      </div>
      <div className="w-full md:w-1/2 flex flex-row justify-between">
      {/* Left - Big Image with Animation */}
      <div className="w-full md:w-1/2 flex  justify-center relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={teamMembers[currentIndex].id}
            src={teamMembers[currentIndex].image}
            alt={teamMembers[currentIndex].name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-[400px] h-[450px] object-cover rounded-2xl shadow-2xl"
          />
        </AnimatePresence>
      </div>

      {/* Right - Text & Thumbnails */}
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        {/* Text */}
        <div className="mb-8">

          <p className="text-gray-600 italic text-lg leading-relaxed mb-3">
            "{teamMembers[currentIndex].quote}"
          </p>
          <p className="font-semibold text-lg text-gray-800">
            - {teamMembers[currentIndex].name}
          </p>
        </div>

        {/* Thumbnails Carousel */}
        <div className="flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            <FaChevronLeft />
          </button>

          <div className="flex gap-4 overflow-hidden">
            {teamMembers.map((member, index) => (
              <img
                key={member.id}
                src={member.image}
                alt={member.name}
                onClick={() => setCurrentIndex(index)}
                className={`w-20 h-20 object-cover rounded-xl cursor-pointer transition-transform duration-300 ${
                  currentIndex === index
                    ? "ring-4 ring-green-500 scale-110"
                    : "opacity-70 hover:opacity-100"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TeamCarousel;
