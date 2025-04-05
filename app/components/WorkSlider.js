"use client";
import React, { useState, useEffect } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const workSlider = {
  slides: [
    {
      images: [
        { title: "Farm management system", path: "/1.png" },
        { title: "Farm management system", path: "/2.png" },
        { title: "Farm management system", path: "/3.png" },
        { title: "Farm management system", path: "/4.png" },
      ],
    },
    {
      images: [
        { title: "Photographer Portfolio", path: "/5.png" },
        { title: "Photographer Portfolio", path: "/6.png" },
        { title: "Photographer Portfolio", path: "/7.png" },
        { title: "Photographer Portfolio", path: "/8.png" },
      ],
    },
    {
      images: [
        { title: "Smart Waste Management System", path: "/9.png" },
        { title: "Smart Waste Management System", path: "/10.png" },
        { title: "Smart Waste Management System", path: "/11.png" },
        { title: "Smart Waste Management System", path: "/12.png" },
      ],
    },
  ],
};

const WorkSlider = () => {
  const [state, setState] = useState({
    currentSlideIndex: 0,
    isAnimating: false,
  });

  const handleSlideChange = (direction) => {
    if (state.isAnimating) return;

    setState((prevState) => ({
      ...prevState,
      isAnimating: true,
      currentSlideIndex:
        direction === "next"
          ? (prevState.currentSlideIndex + 1) % workSlider.slides.length
          : (prevState.currentSlideIndex - 1 + workSlider.slides.length) %
            workSlider.slides.length,
    }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setState((prevState) => ({ ...prevState, isAnimating: false }));
    }, 500);
    return () => clearTimeout(timer);
  }, [state.currentSlideIndex]);

  // Sub-component for individual slide images
  const SlideImage = ({ image }) => (
    <div className="relative rounded-lg overflow-hidden flex items-center justify-center group shadow-lg">
      <div className="flex items-center justify-center relative w-full h-full overflow-hidden">
        <Image
          src={image.path}
          fill
          style={{ objectFit: "cover" }}
          alt={image.title}
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 p-4">
          <span className="text-[#9d0c2e] text-lg font-bold text-center mb-2">{image.title}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative h-[280px] sm:h-[480px] overflow-hidden">
      {/* Main Slider Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={state.currentSlideIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="h-full"
        >
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
            {workSlider.slides[state.currentSlideIndex].images.map((image, index) => (
              <SlideImage key={index} image={image} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
        <button
          onClick={() => handleSlideChange("prev")}
          className="bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300"
          disabled={state.isAnimating}
          aria-label="Previous Slide"
        >
          <BsArrowLeft />
        </button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        <button
          onClick={() => handleSlideChange("next")}
          className="bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300"
          disabled={state.isAnimating}
          aria-label="Next Slide"
        >
          <BsArrowRight />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {workSlider.slides.map((_, index) => (
          <button
            key={index}
            onClick={() =>
              !state.isAnimating &&
              setState({ currentSlideIndex: index, isAnimating: true })
            }
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              state.currentSlideIndex === index ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkSlider;