"use client"
import React, { useState, useEffect } from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Farm management system',
          path: '/1.png',
        },
        {
          title: 'Farm management system',
          path: '/2.png',
        },
        {
          title: 'Farm management system',
          path: '/3.png',
        },
        {
          title: 'Farm management system',
          path: '/4.png',
        },
      ],
    },
    {
      images: [
        {
          title: 'Photographer Portfolio',
          path: '/5.png',
        },
        {
          title: 'Photographer Portfolio',
          path: '/6.png',
        },
        {
          title: 'Photographer Portfolio',
          path: '/7.png',
        },
        {
          title: 'Photographer Portfolio',
          path: '/8.png',
        },
      ],
    },
    {
      images: [
        {
          title: 'Smart Waste Management System',
          path: '/9.png',
        },
        {
          title: 'Smart Waste Management System',
          path: '/10.png',
        },
        {
          title: 'Smart Waste Management System',
          path: '/11.png',
        },
        {
          title: 'Smart Waste Management System',
          path: '/12.png',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlideIndex((prevIndex) => (prevIndex === 0 ? workSlider.slides.length - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlideIndex((prevIndex) => (prevIndex === workSlider.slides.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentSlideIndex]);

  return (
    <div className="relative h-[280px] sm:h-[480px] overflow-hidden">
      {/* Main Slider Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlideIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="h-full"
        >
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
            {workSlider.slides[currentSlideIndex].images.map((image, index) => (
              <div 
                className="relative rounded-lg overflow-hidden flex items-center justify-center group shadow-lg"
                key={index}
              >
                <div className="flex items-center justify-center relative w-full h-full overflow-hidden">
                  <Image
                    src={image.path}
                    fill
                    style={{ objectFit: 'cover' }}
                    alt="project image"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 p-4">
                    <span className="text-[#9d0c2e] text-lg font-bold text-center mb-2">{image.title}</span>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20">
        <button 
          onClick={handlePrevSlide} 
          className="bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300"
          disabled={isAnimating}
        >
          <BsArrowLeft />
        </button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20">
        <button 
          onClick={handleNextSlide} 
          className="bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300"
          disabled={isAnimating}
        >
          <BsArrowRight />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {workSlider.slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlideIndex(index);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlideIndex === index ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkSlider;