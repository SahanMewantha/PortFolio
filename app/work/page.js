"use client"
import React from 'react'
import Circle from '../components/Circle'
import { motion } from "framer-motion";
import WorkSlider from '../components/WorkSlider';


const fadeIn = (direction = "up", delay = 0.4) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};


const page = () => {
  return (
    <div className='h-full bg-secondary/30 py-16 sm:py-24 md:py-36 flex items-center '>
      <Circle/>

      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>

          <div className='text-center  flex xl:w-[30vw] flex-col lg-text-left  xl:mb-4 mt-6'>
            <motion.h2
            variants={fadeIn('down',0.3)}
            initial='hidden'
            animate='show'
            className='xl:mt-8 h2'>My Work <span className='text-[#9d0c2e]'>.</span>
            </motion.h2>

            <motion.p
            variants={fadeIn('down',0.3)}
            initial='hidden'
            animate='show'
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>Here’s where creativity meets functionality. Explore my journey through projects like a comprehensive Farm Management System, a visually stunning Photographer Portfolio, and an innovative Smart Waste Management System. 
            Each project reflects my passion for solving problems and crafting meaningful digital experiences.
            </motion.p>
          </div>

          <motion.div
          variants={fadeIn('down',0.3)}
          initial='hidden'
          animate='show'
          className='w-full xl:max-w-[65%]'
          >
          <WorkSlider/>
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default page