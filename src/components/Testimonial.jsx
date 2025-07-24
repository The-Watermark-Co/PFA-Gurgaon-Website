import React, { useState, useEffect } from "react";

const testimonials = [
  {
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
    author: "Syed",
  },
  {
    text: "Lorem Ipsum is the industry standard dummy text, used by designers and developers across the world for decades.",
    author: "Priya",
  },
  {
    text: "Using Lorem Ipsum ensures a more natural distribution of letters and words, improving the readability of mockups.",
    author: "John",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Optional Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-white text-center">
      <p className="text-green-600 uppercase text-xs font-semibold tracking-widest mb-3">
        Testimonials
      </p>
      <h2 className="text-2xl md:text-3xl font-bold mb-10">
        Whats people says about us
      </h2>

      {/* Testimonial Card */}
      <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-md shadow-sm">
        <div className="text-6xl text-gray-300 mb-6">&ldquo;</div>
        <p className="text-gray-700 mb-4 leading-relaxed">
          {testimonials[currentIndex].text}
        </p>
        <p className="font-semibold text-gray-900">
          {testimonials[currentIndex].author}
        </p>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
